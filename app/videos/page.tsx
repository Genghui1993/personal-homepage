"use client";

import { motion } from "framer-motion";
import { videos } from "@/data/videos";

export default function VideosPage() {
  const [featured, ...rest] = videos;

  return (
    <div className="mx-auto flex min-h-[calc(100svh-120px)] max-w-4xl items-center px-6 pt-24 pb-32">
      <motion.div
        className="game-card w-full p-5 sm:p-7"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-[16px] bg-[#58b8f6]">
          <div className="absolute inset-x-0 bottom-0 h-20 rounded-t-[999px] bg-[#7ecf3c]" />
          <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0b3a6a] text-white">
            ▶
          </span>
          <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-black/70 px-4 py-2 text-xs font-bold text-white">
            <span>PLAY</span>
            <span className="opacity-70">{featured?.duration ?? "00:00"}</span>
            <span className="ml-auto opacity-70">{featured?.platform}</span>
          </div>
        </div>
        <h1 className="mt-4 text-xl font-extrabold text-[#222] sm:text-2xl">
          {featured?.title ?? "视频"}
        </h1>

        {rest.length > 0 && (
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {rest.map((video) => (
              <div key={video.id} className="flex gap-3">
                <span className="mt-1 h-10 w-1 shrink-0 rounded-full bg-[#0b3a6a]" />
                <div>
                  <h2 className="font-extrabold text-[#222]">{video.title}</h2>
                  <p className="mt-1 text-xs text-[#888]">
                    {video.duration} · {video.views} 播放
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
