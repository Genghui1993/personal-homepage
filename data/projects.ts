export interface Project {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "planned";
  techStack: string[];
  progress: number;
  description: string;
}

export const projects: Project[] = [
  {
    id: "1",
    name: "AI进化空间",
    status: "in-progress",
    techStack: ["Next.js", "TypeScript", "Framer Motion"],
    progress: 35,
    description: "个人 AI 能力成长数字空间",
  },
];
