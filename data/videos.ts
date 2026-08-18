export interface Video {
  id: string;
  title: string;
  duration: string;
  views: string;
  platform: string;
  date: string;
}

export const videos: Video[] = [
  {
    id: "1",
    title: "用 AI 搭建个人主页的全过程",
    duration: "08:32",
    views: "1.2k",
    platform: "Bilibili",
    date: "2026-08-01",
  },
  {
    id: "2",
    title: "Next.js + Framer Motion 动效入门",
    duration: "12:15",
    views: "856",
    platform: "Bilibili",
    date: "2026-07-10",
  },
  {
    id: "3",
    title: "AI Agent 实战：从零搭建自动化工作流",
    duration: "15:40",
    views: "2.3k",
    platform: "Bilibili",
    date: "2026-06-20",
  },
];
