"use client";

import { motion } from "framer-motion";
import { videos } from "@/data/videos";

export default function VideosPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Videos</p>
        <h1 className="mt-2 font-serif text-4xl text-premium-ink sm:text-5xl">视频</h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-premium-muted">
          AI 相关的创作与分享。
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, index) => (
          <motion.div
            key={video.id}
            className="premium-card group overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.08 }}
          >
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-premium-accent/10 via-premium-violet/10 to-premium-rose/5">
              <span className="text-3xl text-premium-subtle">▶</span>
            </div>
            <div className="p-5">
              <h2 className="font-medium text-premium-ink transition-colors group-hover:text-premium-accent">
                {video.title}
              </h2>
              <div className="mt-3 flex items-center gap-3 text-xs text-premium-subtle">
                <span>{video.duration}</span>
                <span>·</span>
                <span>{video.views} 播放</span>
                <span>·</span>
                <span>{video.platform}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
