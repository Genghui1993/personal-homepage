"use client";

import { motion } from "framer-motion";
import type { Article } from "@/data/articles";
import { getProxiedImageUrl } from "@/lib/image-proxy";

interface ArticleListProps {
  articles: Article[];
  accountName: string;
  accountBio: string;
  fromRss: boolean;
}

function WechatBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
      <svg viewBox="0 0 24 24" className="h-3 w-3 fill-current" aria-hidden>
        <path d="M8.5 4C4.91 4 2 6.19 2 9c0 1.55.78 2.93 2 3.87L3.5 15l2.3-1.15c.65.18 1.34.28 2.05.28.28 0 .55-.02.82-.05A4.97 4.97 0 0 1 8.5 4zm7 0c-3.59 0-6.5 2.19-6.5 5 0 1.55.78 2.93 2 3.87L10 15l2.3-1.15c.65.18 1.34.28 2.05.28.55 0 1.08-.08 1.58-.23C15.92 11.82 17 10.02 17 8c0-2.21-2.69-4-5.5-4z" />
      </svg>
      微信公众号
    </span>
  );
}

function ArticleCover({ coverImage, title }: { coverImage?: string; title: string }) {
  const src = getProxiedImageUrl(coverImage);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-premium-accent/5 to-premium-violet/5">
      {src ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="font-serif text-3xl text-premium-subtle/40">AI</span>
        </div>
      )}
    </div>
  );
}

export default function ArticleList({
  articles,
  accountName,
  accountBio,
  fromRss,
}: ArticleListProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">WeChat Articles</p>
        <h1 className="mt-2 font-serif text-4xl text-premium-ink sm:text-5xl">摸爬滚打中的观点</h1>
        {/* <p className="mt-4 max-w-lg text-sm leading-relaxed text-premium-muted">
          {accountBio}
        </p> */}
      </motion.div>

      {/* <motion.div
        className="premium-card mt-10 flex items-center gap-4 p-5 sm:p-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-lg">
          📱
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="font-medium text-premium-ink">{accountName}</h2>
            <WechatBadge />
            {fromRss && (
              <span className="text-[11px] text-premium-subtle">· 自动同步</span>
            )}
          </div>
          <p className="mt-0.5 text-xs text-premium-subtle">
            点击文章将在微信中阅读全文
          </p>
        </div>
      </motion.div> */}

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.length === 0 ? (
          <div className="premium-card col-span-full p-8 text-center">
            <p className="text-sm text-premium-muted">暂无文章</p>
            <p className="mt-2 text-xs text-premium-subtle">
              请配置 WECHAT_RSS_URL 或在 data/articles.ts 手动添加
            </p>
          </div>
        ) : (
          articles.map((article, index) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-card group flex flex-col overflow-hidden p-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + index * 0.05 }}
            >
              <ArticleCover coverImage={article.coverImage} title={article.title} />

              <div className="flex flex-1 flex-col p-5">
                <WechatBadge />
                <h2 className="mt-3 line-clamp-2 font-serif text-lg leading-snug text-premium-ink transition-colors group-hover:text-premium-accent">
                  {article.title}
                </h2>
                {article.excerpt && article.excerpt !== article.title && (
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-premium-muted">
                    {article.excerpt}
                  </p>
                )}
                <div className="mt-auto flex items-center justify-between pt-4">
                  <time className="text-xs text-premium-subtle">{article.date}</time>
                  <span className="text-xs text-premium-accent opacity-0 transition-opacity group-hover:opacity-100">
                    阅读 →
                  </span>
                </div>
              </div>
            </motion.a>
          ))
        )}
      </div>
    </div>
  );
}
