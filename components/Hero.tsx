"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center justify-start px-6 pb-10 pt-28 sm:pt-32 lg:min-h-[58vh] lg:pt-36">
      <motion.div
        className="relative z-10 max-w-2xl text-center"
        {...fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-cn text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl md:text-6xl">
          <span className="hero-kicker mx-auto">我是</span>
          <span className="hero-mark mt-2 inline-block font-display text-[1.05em] leading-none">
            小耿不是小狄
          </span>
        </h1>

        <p className="hero-tagline mx-auto max-w-md">
          Exploring <span>AI</span>, unlocking infinite possibilities
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link href="/about" className="ghost-btn">
            了解我
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border-2 border-[#0b3a6a] bg-[#f5d56c] px-6 py-2 text-sm font-extrabold tracking-wide text-[#0b3a6a] shadow-[3px_3px_0_#0b3a6a] transition-transform hover:-translate-y-0.5"
          >
            去看文章
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
