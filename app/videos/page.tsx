"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageLabHeader from "@/components/PageLabHeader";

const PREP_TEXT = "正在疯狂筹备中";

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-32 lg:px-8">
      <PageLabHeader
        kicker="VIDEO · CHANNEL"
        title="Video"
        description="一期一期录，一期一期剪，很快就会和大家见面。"
      />

      <motion.div
        className="article-row relative mt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
      >
        <div
          className="article-row-shadow absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[20px] bg-[#ff8fb8]"
          aria-hidden
        />
        <div className="article-row-card relative overflow-hidden rounded-[20px] border-[3px] border-dashed border-[#0b3a6a]/35 bg-white shadow-[0_10px_24px_rgba(11,58,106,0.12)]">
          <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#58b8f6]">
            <div className="absolute inset-x-0 bottom-0 h-24 rounded-t-[999px] bg-[#7ecf3c]" />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.08)_0_12px,transparent_12px_24px)]" />

            <motion.span
              className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#ff4d6d] px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-white shadow-[2px_2px_0_#0b3a6a]"
              animate={{ opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              REC
            </motion.span>

            <div className="relative z-10 flex flex-col items-center gap-4 px-6 text-center">
              <motion.span
                className="flex h-16 w-16 items-center justify-center rounded-full border-[3px] border-white/90 bg-[#0b3a6a] text-2xl text-white shadow-[4px_4px_0_#f5d56c]"
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              >
                ▶
              </motion.span>
              <div>
                <p className="font-cn text-xl font-black text-white sm:text-2xl [text-shadow:3px_3px_0_#0b3a6a]">
                  {PREP_TEXT}
                  <span className="about-type-caret inline-block w-[0.45em] text-[#f5d56c]">
                    …
                  </span>
                </p>
                <p className="mt-2 text-xs font-bold tracking-wide text-white/85">
                  剪辑台还在冒烟中
                </p>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-black/70 px-4 py-2.5">
              <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/20">
                <motion.div
                  className="h-full rounded-full bg-[#f5d56c]"
                  initial={{ width: "12%" }}
                  animate={{ width: ["12%", "68%", "34%", "82%", "46%"] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <div className="flex items-center gap-3 text-[10px] font-extrabold tracking-wide text-white">
                <span>PREPARING</span>
                <span className="opacity-70">00:00 / ???</span>
                <span className="ml-auto opacity-70">Bilibili · Soon</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-6">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-dashed border-[#0b3a6a]/25 bg-[#fff9e6] px-3 py-1.5 text-xs font-extrabold text-[#0b3a6a]/70">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5d56c]" />
                内容筹备中
              </span>
              <p className="mt-3 text-sm leading-relaxed text-[#666]">
                教程、实战、踩坑记录都会放在这里。现在还在疯狂写脚本和调画面。
              </p>
            </div>
            <Link
              href="/articles"
              className="inline-flex shrink-0 items-center justify-center rounded-md border-2 border-[#0b3a6a] bg-[#f5d56c] px-5 py-2 text-sm font-extrabold tracking-wide text-[#0b3a6a] shadow-[3px_3px_0_#0b3a6a] transition-transform hover:-translate-y-0.5"
            >
              先看文章 →
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
