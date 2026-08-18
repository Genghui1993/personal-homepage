export interface Ability {
  name: string;
  value: number;
  max: number;
  color: "cyan" | "purple" | "pink" | "amber";
  icon: string;
}

export interface Task {
  id: string;
  title: string;
  status: "completed" | "in-progress" | "future";
}

export interface Profile {
  name: string;
  role: string;
  level: number;
  title: string;
  xp: number;
  xpToNextLevel: number;
  abilities: Ability[];
  tasks: Task[];
}

export const profile: Profile = {
  name: "小耿不是小狄",
  role: "AI Builder",
  level: 1,
  title: "AI探索者",
  xp: 1280,
  xpToNextLevel: 2000,
  abilities: [
    { name: "AI能力", value: 72, max: 100, color: "cyan", icon: "🧠" },
    { name: "开发能力", value: 65, max: 100, color: "purple", icon: "⚡" },
    { name: "创造能力", value: 58, max: 100, color: "pink", icon: "✨" },
    { name: "商业能力", value: 45, max: 100, color: "amber", icon: "💎" },
  ],
  tasks: [
    { id: "1", title: "创建AI个人空间", status: "completed" },
    { id: "2", title: "学习AI Agent", status: "completed" },
    { id: "3", title: "搭建AI大脑", status: "in-progress" },
    { id: "4", title: "AI数字分身", status: "future" },
  ],
};

export function getXpProgress(xp: number, xpToNextLevel: number): number {
  return Math.min((xp / xpToNextLevel) * 100, 100);
}

export function getLevelTitle(level: number): string {
  const titles: Record<number, string> = {
    1: "AI探索者",
    2: "AI学徒",
    3: "AI建造者",
    4: "AI架构师",
    5: "AI大师",
  };
  return titles[level] ?? "AI传奇";
}
