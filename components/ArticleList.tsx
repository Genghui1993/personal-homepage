"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { Article } from "@/data/articles";

interface ArticleListProps {
  articles: Article[];
  accountBio: string;
}

const PREVIEW_COUNT = 6;

const COVER_THEMES = [
  {
    panel: "bg-[#58b6ff]",
    under: "bg-[#0b3a6a]",
    blob: "bg-[#f5d56c]",
    hill: "bg-[#7ecf3c]",
    ink: "text-white",
  },
  {
    panel: "bg-[#0b3a6a]",
    under: "bg-[#f5d56c]",
    blob: "bg-[#58b6ff]",
    hill: "bg-[#7ecf3c]",
    ink: "text-white",
  },
  {
    panel: "bg-[#f5d56c]",
    under: "bg-[#0b3a6a]",
    blob: "bg-white",
    hill: "bg-[#58b6ff]",
    ink: "text-[#0b3a6a]",
  },
  {
    panel: "bg-[#7ecf3c]",
    under: "bg-[#0b3a6a]",
    blob: "bg-white",
    hill: "bg-[#f5d56c]",
    ink: "text-[#0b3a6a]",
  },
] as const;

function ThemedCover({ index, label }: { index: number; label: string }) {
  const theme = COVER_THEMES[index % COVER_THEMES.length];

  return (
    <div className="relative w-[104px] shrink-0 self-stretch sm:w-[128px]">
      <div
        className={`absolute inset-y-2 left-2 right-0 rounded-l-[14px] opacity-90 ${theme.under}`}
        aria-hidden
      />
      <div
        className={`relative ml-0 mr-2 flex h-full min-h-[100px] overflow-hidden rounded-l-[18px] shadow-[6px_0_18px_rgba(11,58,106,0.18)] ${theme.panel}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/10" />
        <span className={`absolute left-3 top-3 h-5 w-8 rounded-full opacity-95 shadow-sm ${theme.blob}`} />
        <span className={`absolute left-6 top-4 h-4 w-6 rounded-full opacity-80 shadow-sm ${theme.blob}`} />
        <span className={`absolute -bottom-3 -left-2 h-10 w-16 rounded-t-full shadow-[0_-4px_12px_rgba(11,58,106,0.12)] ${theme.hill}`} />
        <span className={`absolute -bottom-2 right-1 h-8 w-12 rounded-t-full opacity-90 ${theme.hill}`} />
        <span
          className={`absolute bottom-3 right-3 font-display text-2xl font-bold leading-none drop-shadow-[2px_2px_0_rgba(11,58,106,0.2)] ${theme.ink}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function ArticleRow({ article, index }: { article: Article; index: number }) {
  const theme = COVER_THEMES[index % COVER_THEMES.length];
  const mark = String(index + 1).padStart(2, "0");

  return (
    <div className="article-row relative">
      <div
        className={`article-row-shadow absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[20px] ${theme.under}`}
        aria-hidden
      />
      <motion.a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="article-row-card group relative flex overflow-hidden rounded-[20px] border-2 border-[#0b3a6a]/10 bg-white no-underline shadow-[0_10px_24px_rgba(11,58,106,0.12)]"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.04 * (index % 10), duration: 0.35 }}
      >
        <ThemedCover index={index} label={mark} />
        <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-4 sm:gap-4 sm:px-5">
          <div className="min-w-0 flex-1">
            <p className="text-xs font-bold tracking-wide text-[#999]">{article.date}</p>
            <h2 className="mt-1 line-clamp-2 text-[15px] font-extrabold leading-snug text-[#222] sm:text-base">
              {article.title}
            </h2>
          </div>
          <span className="hidden shrink-0 rounded-full bg-[#0b3a6a] px-3 py-1.5 text-xs font-extrabold text-white shadow-[2px_2px_0_#f5d56c] transition-transform group-hover:translate-x-0.5 sm:inline-block">
            阅读
          </span>
        </div>
      </motion.a>
    </div>
  );
}

export default function ArticleList({ articles }: ArticleListProps) {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);

  const keyword = query.trim().toLowerCase();
  const filtered = keyword
    ? articles.filter((article) => {
        const haystack = `${article.title} ${article.excerpt} ${article.date}`.toLowerCase();
        return haystack.includes(keyword);
      })
    : articles;

  const hasMore = filtered.length > PREVIEW_COUNT;
  const visibleArticles = expanded ? filtered : filtered.slice(0, PREVIEW_COUNT);

  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-32 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="font-cn text-3xl font-black text-white sm:text-4xl">摸爬滚打的分享</h1>

        <label className="article-search mt-6 flex items-center gap-3 rounded-full border-2 border-white/70 bg-white/85 px-4 py-2.5 shadow-[3px_3px_0_rgba(11,58,106,0.25)] backdrop-blur-sm focus-within:border-[#f5d56c] focus-within:bg-white">
          <span className="text-sm font-extrabold text-[#0b3a6a]" aria-hidden>
            搜
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setExpanded(false);
            }}
            placeholder="搜索标题、内容…"
            className="w-full bg-transparent text-sm font-semibold text-[#222] outline-none placeholder:text-[#999]"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setExpanded(false);
              }}
              className="shrink-0 rounded-full bg-[#0b3a6a] px-2.5 py-1 text-xs font-extrabold text-white"
            >
              清除
            </button>
          )}
        </label>
      </motion.div>

      {articles.length === 0 ? (
        <div className="game-card mx-auto mt-12 max-w-md p-10 text-center">
          <p className="text-sm">暂无文章</p>
        </div>
      ) : filtered.length === 0 ? (
        <div className="game-card mx-auto mt-12 max-w-md p-10 text-center">
          <p className="text-sm">没有找到「{query.trim()}」相关文章</p>
        </div>
      ) : (
        <>
          <div className="mt-10 space-y-5">
            {visibleArticles.map((article, index) => (
              <ArticleRow key={article.id} article={article} index={index} />
            ))}
          </div>

          {hasMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="rounded-full border-2 border-white bg-white/20 px-6 py-2.5 text-sm font-extrabold text-white shadow-[3px_3px_0_#0b3a6a] backdrop-blur-sm transition hover:bg-white hover:text-[#0b3a6a]"
              >
                {expanded ? "收起" : `查看更多（还有 ${filtered.length - PREVIEW_COUNT} 篇）`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
