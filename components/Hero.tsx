"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-8">
      <motion.div
        className="relative z-10 max-w-xl text-center lg:text-left"
        {...fadeUp}
        transition={{ duration: 0.7 }}
      >
        <h1 className="font-cn text-4xl font-black leading-[1.25] tracking-tight sm:text-5xl md:text-6xl">
          <span className="hero-kicker">我是</span>
          <span className="hero-mark mt-2 inline-block font-display text-[1.05em] leading-none">
            小耿不是小狄
          </span>
        </h1>
        <p className="hero-tagline">
          Exploring <span>AI</span>, unlocking infinite possibilities
        </p>
        <Link href="/about" className="ghost-btn mt-7">
          开始探索
        </Link>
      </motion.div>

      {/* 原先黑框人物，按需求隐藏，代码保留 */}
      <motion.div
        className="relative z-10 hidden items-end justify-center"
        {...fadeUp}
        transition={{ delay: 0.15, duration: 0.7 }}
      >
        <motion.img
          src="/hero-laptop.png"
          alt=""
          className="hidden h-[130px] w-auto object-contain sm:block md:h-[160px]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/hero-girl.png"
          alt={profile.name}
          className="h-[240px] w-auto object-contain sm:h-[300px] md:h-[340px]"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.img
          src="/hero-robot.png"
          alt=""
          className="hidden h-[130px] w-auto object-contain sm:block md:h-[160px]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>
    </section>
  );
}
