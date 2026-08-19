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
      const reason =
        error instanceof Error
          ? error.cause instanceof Error
            ? error.cause.message
            : error.message
          : String(error);
      // 本地 WeWe RSS 未启动时属预期情况，用 data/articles.ts 保底列表即可
      console.warn(`[articles] RSS unavailable (${reason}) — using snapshot`);
    }
  }

  return mergeArticles(rssArticles, manualArticles);
}

export default async function ArticlesPage() {
  const articles = await getArticles();

  return <ArticleList articles={articles} accountBio={wechatConfig.accountBio} />;
}
