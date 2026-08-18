import ArticleList from "@/components/ArticleList";
import { manualArticles, wechatConfig, isPublicRssUrl } from "@/data/articles";
import { fetchWechatArticles, mergeArticles } from "@/lib/wechat-rss";

async function getArticles() {
  let rssArticles: Awaited<ReturnType<typeof fetchWechatArticles>> = [];
  const rssUrl = wechatConfig.rssFeedUrl;
  const canFetchRemote =
    Boolean(rssUrl) && (isPublicRssUrl(rssUrl) || process.env.NODE_ENV !== "production");

  if (canFetchRemote && rssUrl) {
    try {
      rssArticles = await fetchWechatArticles(rssUrl);
    } catch (error) {
      console.warn("[articles] RSS fetch failed, using snapshot:", error);
    }
  }

  return mergeArticles(rssArticles, manualArticles);
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return <ArticleList articles={articles} accountBio={wechatConfig.accountBio} />;
}
