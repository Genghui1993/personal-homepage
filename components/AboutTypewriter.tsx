"use client";

import { useEffect, useRef, useState } from "react";

const PARAGRAPHS = [
  "我是山东人，1999 年出生，现在住在北京。",
  "白天做前端开发，晚上喜欢折腾 AI，写点技术分享，一边踩坑一边把好玩的东西记下来。",
  "性格时而疯癫时而内向（双子座），但线上聊得很开心。对创意和产品都有兴趣，也在慢慢搭自己的小世界。",
] as const;

const FULL_TEXT = PARAGRAPHS.join("\n\n");

function createTypeSound() {
  if (typeof window === "undefined") return null;

  const AudioCtx =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioCtx) return null;

  const ctx = new AudioCtx();

  return {
    play() {
      if (ctx.state === "suspended") void ctx.resume();

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      // 轻键盘敲击感
      osc.type = "triangle";
      osc.frequency.setValueAtTime(1400 + Math.random() * 500, now);
      osc.frequency.exponentialRampToValueAtTime(420 + Math.random() * 120, now + 0.028);

      filter.type = "highpass";
      filter.frequency.setValueAtTime(700, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.028, now + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.04);
    },
    unlock() {
      if (ctx.state === "suspended") void ctx.resume();
    },
    dispose() {
      void ctx.close();
    },
  };
}

function splitTypedText(count: number) {
  let left = count;
  const parts: string[] = [];

  for (let i = 0; i < PARAGRAPHS.length; i += 1) {
    if (left <= 0) break;
    const paragraph = PARAGRAPHS[i];
    const take = Math.min(left, paragraph.length);
    parts.push(paragraph.slice(0, take));
    left -= take;
    if (i < PARAGRAPHS.length - 1 && left > 0) {
      left -= Math.min(left, 2);
    }
  }

  return parts;
}

export default function AboutTypewriter() {
  const [chars, setChars] = useState(0);
  const [done, setDone] = useState(false);
  const soundRef = useRef<ReturnType<typeof createTypeSound>>(null);
  const total = FULL_TEXT.length;

  useEffect(() => {
    soundRef.current = createTypeSound();
    const unlock = () => soundRef.current?.unlock();
    window.addEventListener("pointerdown", unlock);
    window.addEventListener("keydown", unlock);

    return () => {
      window.removeEventListener("pointerdown", unlock);
      window.removeEventListener("keydown", unlock);
      soundRef.current?.dispose();
      soundRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setChars(total);
      setDone(true);
      return;
    }

    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      index += 1;
      setChars(index);

      const ch = FULL_TEXT[index - 1];
      if (ch && ch !== "\n" && ch !== " " && ch !== "　") {
        soundRef.current?.play();
      }

      if (index >= total) {
        setDone(true);
        return;
      }

      const pause =
        ch === "。" || ch === "，" || ch === "）"
          ? 200
          : ch === "\n"
            ? 340
            : 40 + Math.random() * 30;
      timer = setTimeout(tick, pause);
    };

    timer = setTimeout(tick, 650);
    return () => clearTimeout(timer);
  }, [total]);

  const parts = splitTypedText(chars);
  const cursorIndex = done ? -1 : Math.max(parts.length - 1, 0);

  return (
    <div className="about-copy mt-6 space-y-3.5 sm:mt-7 sm:space-y-4" aria-live="polite">
      {parts.map((text, index) => (
        <p key={PARAGRAPHS[index]}>
          {text}
          {cursorIndex === index && (
            <span className="about-type-caret ml-0.5 inline-block h-[1em] w-[2px] align-[-0.1em] bg-[#0b3a6a]" />
          )}
        </p>
      ))}
    </div>
  );
}
