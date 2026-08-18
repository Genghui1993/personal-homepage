"use client";

import { motion } from "framer-motion";
import { profile, getXpProgress } from "@/data/profile";

export default function CharacterCard() {
  const xpProgress = getXpProgress(profile.xp, profile.xpToNextLevel);

  return (
    <motion.div
      id="profile"
      className="premium-card p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="section-label">Character</p>
      <h2 className="mt-2 font-serif text-3xl text-premium-ink">角色档案</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <StatItem label="姓名" value={profile.name} />
        <StatItem label="职业" value={profile.role} />
        <StatItem label="等级" value={`Lv.${String(profile.level).padStart(2, "0")}`} accent />
        <StatItem label="称号" value={profile.title} />
      </div>

      {/* Level ring */}
      <div className="mt-8 flex items-center gap-6 rounded-xl bg-white/[0.04] p-6">
        <div className="relative flex h-20 w-20 shrink-0 items-center justify-center">
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(244,241,234,0.15)" strokeWidth="3" />
            <motion.circle
              cx="40" cy="40" r="34"
              fill="none" stroke="url(#xpGrad)" strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={`${xpProgress * 2.136} 213.6`}
              initial={{ strokeDasharray: "0 213.6" }}
              whileInView={{ strokeDasharray: `${xpProgress * 2.136} 213.6` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3 }}
            />
            <defs>
              <linearGradient id="xpGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f4f1ea" />
                <stop offset="100%" stopColor="#c4b5fd" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-serif text-2xl text-premium-ink">
            {String(profile.level).padStart(2, "0")}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-premium-muted">Experience</span>
            <span className="text-sm font-medium text-premium-ink">
              {profile.xp.toLocaleString()} / {profile.xpToNextLevel.toLocaleString()} XP
            </span>
          </div>
          <div className="stat-bar mt-3">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-premium-accent to-premium-violet"
              initial={{ width: 0 }}
              whileInView={{ width: `${xpProgress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            />
          </div>
          <p className="mt-2 text-xs text-premium-subtle">
            距离下一级还需 {(profile.xpToNextLevel - profile.xp).toLocaleString()} XP
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StatItem({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent?: boolean;
}) {
  return (
    <div>
      <p className="text-xs text-premium-subtle">{label}</p>
      <p className={`mt-1 text-lg font-medium ${accent ? "gradient-text" : "text-premium-ink"}`}>
        {value}
      </p>
    </div>
  );
}
