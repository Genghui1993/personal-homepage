"use client";

import { motion } from "framer-motion";
import PageLabHeader from "@/components/PageLabHeader";
import { projects, type Project } from "@/data/projects";

const STATUS_LABEL: Record<Project["status"], string> = {
  completed: "已上线",
  "in-progress": "进行中",
  planned: "规划中",
};

const CARD_THEMES = {
  live: {
    panel: "bg-[#0b3a6a]",
    under: "bg-[#f5d56c]",
    blob: "bg-[#58b6ff]",
    hill: "bg-[#7ecf3c]",
    ink: "text-white",
    mark: "01",
  },
  brainstorm: {
    panel: "bg-[#f5d56c]",
    under: "bg-[#ff8fb8]",
    blob: "bg-white",
    hill: "bg-[#58b6ff]",
    ink: "text-[#0b3a6a]",
    mark: "?",
  },
} as const;

function ProjectCover({
  theme,
  label,
}: {
  theme: (typeof CARD_THEMES)[keyof typeof CARD_THEMES];
  label: string;
}) {
  return (
    <div className="relative w-[104px] shrink-0 self-stretch sm:w-[128px]">
      <div
        className={`absolute inset-y-2 left-2 right-0 rounded-l-[14px] opacity-90 ${theme.under}`}
        aria-hidden
      />
      <div
        className={`relative ml-0 mr-2 flex h-full min-h-[120px] overflow-hidden rounded-l-[18px] shadow-[6px_0_18px_rgba(11,58,106,0.18)] ${theme.panel}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10" />
        <span className={`absolute left-3 top-3 h-5 w-8 rounded-full opacity-95 shadow-sm ${theme.blob}`} />
        <span className={`absolute left-6 top-4 h-4 w-6 rounded-full opacity-80 shadow-sm ${theme.blob}`} />
        <span className={`absolute -bottom-3 -left-2 h-10 w-16 rounded-t-full shadow-[0_-4px_12px_rgba(11,58,106,0.12)] ${theme.hill}`} />
        <span className={`absolute -bottom-2 right-1 h-8 w-12 rounded-t-full opacity-90 ${theme.hill}`} />
        <span
          className={`absolute bottom-3 right-3 font-display text-2xl font-bold leading-none drop-shadow-[2px_2px_0_rgba(11,58,106,0.2)] ${theme.ink}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

const VIEWPORT = { once: true, margin: "-60px" as const };

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isBrainstorming = project.status === "in-progress" && !project.url;
  const theme = isBrainstorming ? CARD_THEMES.brainstorm : CARD_THEMES.live;
  const CardTag = project.url ? "a" : "div";
  const cardProps = project.url
    ? {
        href: project.url,
        target: "_blank" as const,
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="article-row relative"
    >
      <div
        className={`article-row-shadow absolute inset-0 translate-x-[6px] translate-y-[6px] rounded-[20px] ${theme.under}`}
        aria-hidden
      />
      <div>
        <CardTag
          {...cardProps}
          className={`article-row-card group relative flex overflow-hidden rounded-[20px] border-[3px] bg-white no-underline shadow-[0_10px_24px_rgba(11,58,106,0.12)] ${
            isBrainstorming
              ? "border-dashed border-[#0b3a6a]/35"
              : "border-[#0b3a6a]/10"
          } ${project.url ? "transition-transform hover:-translate-y-1" : ""}`}
        >
          <ProjectCover theme={theme} label={theme.mark} />

          <div className="flex min-w-0 flex-1 flex-col justify-center gap-3 px-4 py-5 sm:px-5 sm:py-6">
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold ${
                  project.status === "completed"
                    ? "bg-[#8fd14f] text-[#0b3a6a]"
                    : "bg-[#f5d56c] text-[#0b3a6a]"
                }`}
              >
                {STATUS_LABEL[project.status]}
              </span>
              {project.url && (
                <span className="text-[10px] font-bold tracking-wide text-[#999]">
                  {new URL(project.url).hostname}
                </span>
              )}
            </div>

            <div>
              <h2 className="font-cn text-lg font-black leading-snug text-[#222] sm:text-xl">
                {project.name}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#666]">{project.description}</p>
            </div>

            {project.url ? (
              <span className="inline-flex w-fit items-center gap-1 rounded-full bg-[#0b3a6a] px-3.5 py-1.5 text-xs font-extrabold text-white shadow-[2px_2px_0_#f5d56c] transition-transform group-hover:translate-x-0.5">
                开始考古 →
              </span>
            ) : (
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full border-2 border-dashed border-[#0b3a6a]/25 bg-[#fff9e6] px-3 py-1.5 text-xs font-extrabold text-[#0b3a6a]/70">
                <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#f5d56c]" />
                想法酝酿中
              </span>
            )}
          </div>
        </CardTag>
      </div>
    </motion.div>
  );
}

export default function ProjectList() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-28 pb-32 lg:px-8">
      <PageLabHeader
        kicker="WORKS · PORTFOLIO"
        title="Project Lab"
        description="已经上线的项目，和还在头脑风暴里的新想法。"
      />

      <div className="mt-10 space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
