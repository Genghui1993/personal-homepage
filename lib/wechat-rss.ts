import type { Article } from "@/data/articles";

function extractTag(text: string, field: string): string {
  const cdata = new RegExp(`<${field}><!\\[CDATA\\[(.*?)\\]\\]></${field}>`).exec(text);
  if (cdata) return cdata[1].trim();
  const plain = new RegExp(`<${field}>([^<]*)</${field}>`).exec(text);
  return plain?.[1]?.trim() ?? "";
}

function stripHtml(html: string): string {
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

function formatDate(pubDate: string): string {
  if (!pubDate) return "";
  const d = new Date(pubDate);
  if (Number.isNaN(d.getTime())) return pubDate.slice(0, 10);
  return d.toISOString().slice(0, 10);
}

function extractEnclosureUrl(item: string): string | undefined {
  const match = item.match(/<enclosure[^>]+url=["']([^"']+)["']/i);
  return match?.[1];
}

function extractCover(description: string, item?: string): string | undefined {
  const fromDesc = description.match(/<img[^>]+src=["']([^"']+)["']/);
  if (fromDesc?.[1]) return fromDesc[1];
  if (!item) return undefined;
  return extractEnclosureUrl(item);
}

export async function fetchWechatArticles(rssUrl: string): Promise<Article[]> {
  const res = await fetch(rssUrl, {
    next: { revalidate: 3600 },
    headers: { "User-Agent": "AI-Evolution-Space/1.0" },
  });

  if (!res.ok) {
    throw new Error(`RSS fetch failed: ${res.status}`);
  }

  const xml = await res.text();
  const items = xml.match(/<item[\s\S]*?<\/item>/gi) ?? [];

  return items.map((item, index) => {
    const title = extractTag(item, "title");
    const link = extractTag(item, "link") || extractTag(item, "guid");
    const pubDate = extractTag(item, "pubDate");
    const description = extractTag(item, "description") || extractTag(item, "content:encoded");

    return {
      id: link || `rss-${index}`,
      title,
      excerpt: stripHtml(description) || title,
      date: formatDate(pubDate),
      url: link,
      coverImage: extractCover(description, item),
    };
  });
}

export function mergeArticles(rssArticles: Article[], manual: Article[]): Article[] {
  const seen = new Set<string>();
  const merged: Article[] = [];

  for (const article of [...rssArticles, ...manual]) {
    const key = article.url || article.id;
    if (seen.has(key)) continue;
    seen.add(key);
    merged.push(article);
  }

  return merged.sort((a, b) => b.date.localeCompare(a.date));
}
