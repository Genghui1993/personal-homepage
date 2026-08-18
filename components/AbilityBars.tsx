"use client";

import { motion } from "framer-motion";
import { profile, type Ability } from "@/data/profile";

const colorMap: Record<Ability["color"], string> = {
  cyan: "from-blue-400 to-cyan-400",
  purple: "from-indigo-500 to-violet-500",
  pink: "from-violet-500 to-purple-500",
  amber: "from-amber-400 to-orange-400",
};

function AbilityBar({ ability, index }: { ability: Ability; index: number }) {
  const percentage = (ability.value / ability.max) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm text-premium-ink">{ability.name}</span>
        <span className="text-sm font-medium tabular-nums text-premium-muted">
          {ability.value}
        </span>
      </div>
      <div className="stat-bar">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${colorMap[ability.color]}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
}

export default function AbilityBars() {
  return (
    <motion.div
      className="premium-card p-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <p className="section-label">Attributes</p>
      <h2 className="mt-2 font-serif text-3xl text-premium-ink">能力属性</h2>

      <div className="mt-8 space-y-6">
        {profile.abilities.map((ability, index) => (
          <AbilityBar key={ability.name} ability={ability} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
