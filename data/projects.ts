export interface Project {
  id: string;
  name: string;
  status: "completed" | "in-progress" | "planned";
  progress: number;
  description: string;
  url?: string;
}

export const projects: Project[] = [
  {
    id: "internet-archive",
    name: "互联网考古馆",
    status: "completed",
    progress: 100,
    description: "收藏那些正在消失的互联网。坐回 2005 年的那台电脑前，体验拨号上网、博客与即时通讯的时代。",
    url: "https://archive.xggo.online",
  },
  {
    id: "brainstorming",
    name: "头脑风暴中",
    status: "in-progress",
    progress: 0,
    description: "一些有趣的想法正在酝酿，敬请期待。",
  },
];
