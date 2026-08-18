"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Article } from "@/data/articles";
import { getProxiedImageUrl } from "@/lib/image-proxy";

interface ArticleListProps {
  articles: Article[];
  accountBio: string;
}

const TAG_RULES: [RegExp, string][] = [
  [/Skill/i, "成长"],
  [/小程序/, "代码"],
  [/Agent|员工|团队/, "代码"],
  [/赚钱|产品/, "设计"],
  [/自动化|WorkBuddy/i, "代码"],
];

function guessTag(article: Article): string {
  if (article.tag) return article.tag;
  const matched = TAG_RULES.find(([pattern]) => pattern.test(article.title));
  return matched?.[1] ?? "成长";
}

function CoverImage({ coverImage, title }: { coverImage?: string; title: string }) {
  const src = getProxiedImageUrl(coverImage);
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <div className="h-full w-full bg-[#58b8f6]" />;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={title}
      className="h-full w-full object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="game-card block overflow-hidden p-3 no-underline"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.06 * (index % 6), duration: 0.4 }}
    >
      <div className="aspect-[4/3] overflow-hidden rounded-[14px] bg-[#58b8f6]">
        <CoverImage coverImage={article.coverImage} title={article.title} />
      </div>
      <h2 className="mt-3 line-clamp-2 px-1 text-[15px] font-extrabold leading-snug text-[#222]">
        {article.title}
      </h2>
      <div className="mt-3 flex items-center justify-between px-1 text-xs text-[#999]">
        <span>{guessTag(article)}</span>
      </div>
    </motion.a>
  );
}

export default function ArticleList({ articles, accountBio }: ArticleListProps) {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-28 pb-32 lg:px-8">
      <motion.div className="text-center" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">最新文章</h1>
        <p className="mt-3 text-sm text-white/85">Design • Code • Creative Life</p>
        <p className="mx-auto mt-2 hidden max-w-lg text-sm text-white/70 sm:block">{accountBio}</p>
      </motion.div>

      {articles.length === 0 ? (
        <div className="game-card mx-auto mt-12 max-w-md p-10 text-center">
          <p className="text-sm">暂无文章</p>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.id} article={article} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}
