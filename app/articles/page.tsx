import ArticleList from "@/components/ArticleList";
import { manualArticles, wechatConfig, isPublicRssUrl } from "@/data/articles";
import { fetchWechatArticles, mergeArticles } from "@/lib/wechat-rss";

async function getArticles() {
  let rssArticles: Awaited<ReturnType<typeof fetchWechatArticles>> = [];
  let fromRss = false;
  const rssUrl = wechatConfig.rssFeedUrl;

  const canFetchRemote = Boolean(rssUrl) && (isPublicRssUrl(rssUrl) || process.env.NODE_ENV !== "production");

  if (canFetchRemote && rssUrl) {
    try {
      rssArticles = await fetchWechatArticles(rssUrl);
      fromRss = rssArticles.length > 0;
    } catch (e) {
      console.warn("[articles] RSS fetch failed, using snapshot:", e);
    }
  }

  return {
    articles: mergeArticles(rssArticles, manualArticles),
    fromRss,
  };
}

export default async function ArticlesPage() {
  const { articles, fromRss } = await getArticles();

  return (
    <ArticleList
      articles={articles}
      accountName={wechatConfig.accountName}
      accountBio={wechatConfig.accountBio}
      fromRss={fromRss}
    />
  );
}
