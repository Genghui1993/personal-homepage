"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import PixelImg from "@/components/PixelImg";

function formatBirth(raw: string) {
  if (/^\d{8}$/.test(raw)) {
    return `${raw.slice(0, 4)}.${raw.slice(4, 6)}.${raw.slice(6, 8)}`;
  }
  return raw;
}

export default function IdCard() {
  return (
    <motion.aside
      className="id-pass relative w-full max-w-[280px] shrink-0 sm:max-w-[300px]"
      initial={{ opacity: 0, y: 12, rotate: 1.5 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ y: -3, rotate: 0 }}
      transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.12 }}
    >
      <div className="id-pass-card relative overflow-hidden">
        {/* 顶栏：标题 + 内嵌徽章，不再飘贴纸 */}
        <div className="flex items-center justify-between gap-2 bg-[#5eb4f0] px-3.5 py-2.5">
          <div className="min-w-0">
            <p className="text-sm font-black tracking-[0.14em] text-white">PLAYER</p>
            <p className="mt-0.5 text-[10px] font-bold text-white/85">小耿的通行证</p>
          </div>
          <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-full border-[2.5px] border-[#0b3a6a] bg-[#f5d56c] text-[#0b3a6a] shadow-[2px_2px_0_#0b3a6a]">
            <span className="text-sm leading-none">★</span>
            <span className="text-[8px] font-black leading-none">Lv.01</span>
          </span>
        </div>

        <div className="bg-white p-4">
          <div className="flex gap-3">
            <div className="shrink-0">
              <div className="relative h-[92px] w-[92px] overflow-hidden rounded-[14px] border-[3px] border-[#0b3a6a] bg-[#e8f6ff]">
                <PixelImg
                  src="/game/girl.png?v=2"
                  className="absolute inset-x-[-10%] top-[-4%] h-[130%] w-[120%] object-cover object-top"
                />
              </div>
              <div className="mt-2.5 flex flex-col gap-1.5">
                <span className="inline-flex justify-center rounded-full border-[2.5px] border-[#0b3a6a] bg-[#5eb4f0] px-2 py-0.5 text-[10px] font-black text-white">
                  {formatBirth(profile.birthday)}
                </span>
                <span className="inline-flex justify-center rounded-full border-[2.5px] border-[#0b3a6a] bg-[#ff8fb8] px-2 py-0.5 text-[10px] font-black text-white">
                  山东
                </span>
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2">
              <FieldBox label="NAME" value={profile.name} tone="yellow" />
              <FieldBox label="JOB" value={profile.role} tone="blue" />
              <FieldBox label="LOC" value="北京" tone="lavender" />
            </div>
          </div>

          {/* 底栏：状态条，替代条形码 + 飘贴纸 */}
          <div className="mt-4 flex items-center justify-between gap-2 rounded-[12px] border-[2.5px] border-[#0b3a6a] bg-[#0b3a6a] px-3 py-2.5">
            <div className="min-w-0">
              <p className="text-[9px] font-bold tracking-wide text-white/60">STATUS</p>
              <p className="truncate text-[12px] font-extrabold text-[#f5d56c]">
                ★ {profile.title} · ONLINE
              </p>
            </div>
            <span className="shrink-0 rounded-md bg-[#8fd14f] px-2 py-1 text-[9px] font-black text-[#0b3a6a]">
              OK
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

function FieldBox({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "yellow" | "blue" | "lavender";
}) {
  const bg =
    tone === "yellow" ? "bg-[#f5d56c]" : tone === "blue" ? "bg-[#b8e4ff]" : "bg-[#e0d4ff]";

  return (
    <div className={`rounded-[12px] border-[2.5px] border-[#0b3a6a] px-2.5 py-1.5 ${bg}`}>
      <p className="text-[9px] font-black tracking-wider text-[#0b3a6a]/55">{label}</p>
      <p className="mt-0.5 text-[12px] font-extrabold leading-tight text-[#0b3a6a]">
        {value}
      </p>
    </div>
  );
}
