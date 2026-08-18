"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">About</p>
        <h1 className="mt-2 font-serif text-4xl text-premium-ink sm:text-5xl">
          关于我
        </h1>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          className="premium-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-premium-accent/20 via-premium-violet/15 to-premium-rose/10">
            <span className="font-serif text-3xl text-premium-ink">
              {profile.name.charAt(0)}
            </span>
          </div>
          <h2 className="mt-6 font-serif text-2xl text-premium-ink">
            {profile.name}
          </h2>
          <p className="mt-1 text-sm text-premium-accent">{profile.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-premium-muted">
            AI Builder，正在构建自己的 AI 数字身份。
            <br />
            白天写代码，晚上探索 AI 的可能性。
          </p>
        </motion.div>

        <motion.div
          className="premium-card p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="font-serif text-xl text-premium-ink">基本信息</h3>
          <dl className="mt-6 space-y-4">
            {[
              { label: "称号", value: profile.title },
              { label: "等级", value: `Lv.${String(profile.level).padStart(2, "0")}` },
              { label: "经验", value: `${profile.xp.toLocaleString()} XP` },
              { label: "方向", value: "AI 应用 · Agent · 自动化" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between border-b border-premium-border/40 pb-3">
                <dt className="text-sm text-premium-subtle">{item.label}</dt>
                <dd className="text-sm font-medium text-premium-ink">{item.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}
