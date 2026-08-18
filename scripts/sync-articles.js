/**
 * 从 WeWe RSS 拉取文章，写入 data/articles.ts 的保底列表
 * 用法：先启动 docker compose -f docker-compose.wewe-rss.yml up -d
 *       再运行 npm run sync:articles
 */
const fs = require("fs");
const path = require("path");

const RSS_URL =
  process.env.WECHAT_RSS_URL ||
  "http://127.0.0.1:4000/feeds/MP_WXS_3564889936.rss";

function extractTag(text, field) {
  const cdata = new RegExp(`<${field}><!\\[CDATA\\[(.*?)\\]\\]></${field}>`).exec(text);
  if (cdata) return cdata[1].trim();
  const plain = new RegExp(`<${field}>([^<]*)</${field}>`).exec(text);
  return plain?.[1]?.trim() ?? "";
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .trim()
    .slice(0, 120);
}

function formatDate(pubDate) {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate.slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function extractCover(description, item) {
  const fromDesc = description.match(/<img[^>]+src=["']([^"']+)["']/);
  if (fromDesc?.[1]) return fromDesc[1];
  const enclosure = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  return enclosure?.[1];
}

async function main() {
  console.log("Fetching", RSS_URL);
  const res = await fetch(RSS_URL, {
    headers: { "User-Agent": "AI-Evolution-Space/1.0" },
  });
  if (!res.ok) {
    throw new Error(`RSS fetch failed: ${res.status}. Is WeWe RSS running on :4000?`);
  }

  const xml = await res.text();
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];
  const articles = items.map((item, index) => {
    const title = extractTag(item, "title");
    const link = extractTag(item, "link") || extractTag(item, "guid");
    const pubDate = extractTag(item, "pubDate");
    const description =
      extractTag(item, "description") || extractTag(item, "content:encoded");
    return {
      id: link || `rss-${index}`,
      title,
      excerpt: stripHtml(description) || title,
      date: formatDate(pubDate),
      url: link,
      coverImage: extractCover(description, item),
    };
  });

  const articlesPath = path.join(__dirname, "..", "data", "articles.ts");
  let source = fs.readFileSync(articlesPath, "utf8");
  const start = source.indexOf("export const manualArticles");
  const end = source.indexOf("export function isPublicRssUrl");
  if (start === -1 || end === -1) {
    throw new Error("Could not find manualArticles block in data/articles.ts");
  }

  const block =
    `export const manualArticles: Article[] = ${JSON.stringify(articles, null, 2)};\n\n`;
  source = source.slice(0, start) + block + source.slice(end);
  fs.writeFileSync(articlesPath, source);
  console.log(`Wrote ${articles.length} articles to data/articles.ts`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
