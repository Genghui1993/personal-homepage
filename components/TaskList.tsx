"use client";

import { motion } from "framer-motion";
import { profile, type Task } from "@/data/profile";

const statusStyles = {
  completed: {
    dot: "bg-premium-emerald",
    label: "已完成",
    opacity: "opacity-60",
  },
  "in-progress": {
    dot: "bg-premium-accent",
    label: "进行中",
    opacity: "opacity-100",
  },
  future: {
    dot: "bg-premium-border",
    label: "未来",
    opacity: "opacity-40",
  },
};

function TaskItem({ task }: { task: Task }) {
  const style = statusStyles[task.status];

  return (
    <div
      className={`group flex items-center gap-4 rounded-xl border border-white/10 px-5 py-4 transition-colors hover:border-white/25 hover:bg-white/5 ${style.opacity}`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${style.dot}`} />
      <span className="flex-1 text-sm text-premium-ink">{task.title}</span>
      <span className="text-xs text-premium-subtle">{style.label}</span>
    </div>
  );
}

export default function TaskList() {
  const sections = [
    { title: "已完成", tasks: profile.tasks.filter((t) => t.status === "completed") },
    { title: "进行中", tasks: profile.tasks.filter((t) => t.status === "in-progress") },
    { title: "未来", tasks: profile.tasks.filter((t) => t.status === "future") },
  ];

  return (
    <motion.section
      id="quests"
      className="mx-auto max-w-6xl px-6 lg:px-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="section-label">Quest Log</p>
          <h2 className="mt-2 font-serif text-3xl text-premium-ink sm:text-4xl">
            当前任务
          </h2>
        </div>
        <p className="hidden text-sm text-premium-subtle sm:block">
          {profile.tasks.filter((t) => t.status === "completed").length} / {profile.tasks.length} completed
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-wider text-premium-subtle">
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
