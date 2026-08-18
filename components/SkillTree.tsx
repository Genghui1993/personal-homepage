"use client";

import { motion } from "framer-motion";
import { skills, skillCategories, type Skill } from "@/data/skills";

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const category = skillCategories.find((c) => c.id === skill.category)!;
  const progress = (skill.level / skill.maxLevel) * 100;

  return (
    <motion.div
      className="premium-card group p-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium text-premium-ink">{skill.name}</h4>
          <p className="mt-1 text-xs text-premium-subtle">{skill.description}</p>
        </div>
        <span
          className="rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          style={{
            color: category.color,
            backgroundColor: `${category.color}12`,
          }}
        >
          {category.name}
        </span>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between text-xs text-premium-subtle">
          <span>Lv.{skill.level} / {skill.maxLevel}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="stat-bar mt-2">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full"
            style={{ backgroundColor: category.color }}
            initial={{ width: 0 }}
            whileInView={{ width: `${progress}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillTree() {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="section-label">Skill Tree</p>
          <h2 className="mt-2 font-serif text-3xl text-premium-ink sm:text-4xl">
            我的技能树
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-premium-muted">
            持续解锁与升级中的 AI 相关技能。每一项都是深夜学习与实践的沉淀。
          </p>
        </div>
        <span className="hidden rounded-full border border-premium-border px-4 py-1.5 text-xs text-premium-muted sm:inline-block">
          {skills.filter((s) => s.unlocked).length} / {skills.length} unlocked
        </span>
      </div>

      {skillCategories.map((cat) => {
        const categorySkills = skills.filter((s) => s.category === cat.id);
        return (
          <div key={cat.id} className="mb-12 last:mb-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-lg">{cat.icon}</span>
              <h3 className="font-serif text-xl text-premium-ink">{cat.name}</h3>
              <div className="ml-2 h-px flex-1 bg-premium-border/60" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categorySkills.map((skill, i) => (
                <SkillCard key={skill.id} skill={skill} index={i} />
              ))}
            </div>
          </div>
        );
      })}
    </motion.section>
  );
}
