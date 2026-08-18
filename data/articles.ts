export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  url: string;
  coverImage?: string;
  tag?: string;
}

export const wechatConfig = {
  /** 公众号名称 */
  accountName: "AI 知识手记",
  /** 公众号简介（展示在文章页顶部） */
  accountBio:
    "这里没有难懂的技术黑话。持续分享 AI 工具、Agent 搭建、实用 Prompt，让每一位普通人看得明白，学完就能动手实践。",
  /**
   * 公众号 RSS 订阅地址（WeWe RSS 生成）
   * 填入 .env.local 的 WECHAT_RSS_URL
   */
  rssFeedUrl: process.env.WECHAT_RSS_URL ?? "",
};

/**
 * 手动添加的公众号文章（RSS 未配置时的备用）
 * 已配置 WeWe RSS 后会自动同步，无需手动维护
 */
export const manualArticles: Article[] = [];
