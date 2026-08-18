"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const tags = ["AI Builder", "Agent", "自动化", "产品实践"];

export default function AboutPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100svh-120px)] max-w-5xl items-center px-6 pt-24 pb-32 lg:px-8">
      <div className="grid w-full gap-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          className="game-card overflow-hidden p-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative flex min-h-[340px] items-end justify-center overflow-hidden rounded-[16px] bg-[#58b8f6]">
            <div className="absolute inset-x-0 bottom-0 h-24 rounded-t-[999px] bg-[#7ecf3c]" />
            <div className="absolute right-8 top-8 h-10 w-16 rounded-full bg-white/90" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-girl.png"
              alt={profile.name}
              className="relative z-10 h-[300px] w-auto object-contain"
            />
          </div>
        </motion.div>

        <motion.div
          className="game-card relative p-8 sm:p-10"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
        >
          <h1 className="text-3xl font-extrabold text-[#222] sm:text-4xl">关于我</h1>
          <p className="mt-4 text-sm leading-relaxed text-[#666]">
            AI Builder，正在构建自己的 AI 数字身份。
            白天写代码，晚上探索 AI 的可能性。
          </p>
          <p className="mt-3 text-sm text-[#888]">
            {profile.title} · Lv.{String(profile.level).padStart(2, "0")} · {profile.xp.toLocaleString()} XP
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1.5 text-xs font-bold ${
                  i === 0
                    ? "bg-[#0b3a6a] text-white"
                    : "border border-[#d8d8d8] text-[#333]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          <Link href="/articles" className="navy-btn mt-8">
            查看经历
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
