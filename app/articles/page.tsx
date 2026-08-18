import ArticleList from "@/components/ArticleList";
import { manualArticles, wechatConfig } from "@/data/articles";
import { fetchWechatArticles, mergeArticles } from "@/lib/wechat-rss";

async function getArticles() {
  let rssArticles: Awaited<ReturnType<typeof fetchWechatArticles>> = [];
  let fromRss = false;

  if (wechatConfig.rssFeedUrl) {
    try {
      rssArticles = await fetchWechatArticles(wechatConfig.rssFeedUrl);
      fromRss = rssArticles.length > 0;
    } catch (e) {
      console.warn("[articles] RSS fetch failed, using manual list:", e);
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
