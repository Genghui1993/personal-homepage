export interface Skill {
  id: string;
  name: string;
  level: number;
  maxLevel: number;
  category: SkillCategory;
  description: string;
  unlocked: boolean;
}

export type SkillCategory = "ai-dev" | "ai-ability" | "business";

export interface SkillCategoryInfo {
  id: SkillCategory;
  name: string;
  icon: string;
  color: string;
}

export const skillCategories: SkillCategoryInfo[] = [
  { id: "ai-dev", name: "AI开发", icon: "◆", color: "#6366f1" },
  { id: "ai-ability", name: "AI能力", icon: "◇", color: "#8b5cf6" },
  { id: "business", name: "商业能力", icon: "○", color: "#f59e0b" },
];

export const skills: Skill[] = [
  {
    id: "react",
    name: "React",
    level: 3,
    maxLevel: 5,
    category: "ai-dev",
    description: "组件化 UI 开发",
    unlocked: true,
  },
  {
    id: "nextjs",
    name: "Next.js",
    level: 2,
    maxLevel: 5,
    category: "ai-dev",
    description: "全栈 Web 框架",
    unlocked: true,
  },
  {
    id: "ai-app",
    name: "AI应用开发",
    level: 2,
    maxLevel: 5,
    category: "ai-dev",
    description: "LLM 集成与应用",
    unlocked: true,
  },
  {
    id: "prompt",
    name: "Prompt",
    level: 4,
    maxLevel: 5,
    category: "ai-ability",
    description: "提示词工程",
    unlocked: true,
  },
  {
    id: "agent",
    name: "Agent",
    level: 2,
    maxLevel: 5,
    category: "ai-ability",
    description: "智能体设计与编排",
    unlocked: true,
  },
  {
    id: "automation",
    name: "自动化",
    level: 1,
    maxLevel: 5,
    category: "ai-ability",
    description: "工作流自动化",
    unlocked: true,
  },
  {
    id: "content",
    name: "内容创作",
    level: 3,
    maxLevel: 5,
    category: "business",
    description: "AI 辅助内容生产",
    unlocked: true,
  },
  {
    id: "product",
    name: "产品设计",
    level: 2,
    maxLevel: 5,
    category: "business",
    description: "产品规划与迭代",
    unlocked: true,
  },
];

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category);
}
