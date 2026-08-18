"use client";

import { motion } from "framer-motion";

const floatingShapes = [
  { emoji: "☁️", size: "text-6xl", top: "10%", left: "5%", delay: 0, duration: 7 },
  { emoji: "☁️", size: "text-4xl", top: "15%", left: "75%", delay: 1, duration: 8 },
  { emoji: "⭐", size: "text-2xl", top: "20%", left: "40%", delay: 0.5, duration: 5 },
  { emoji: "⭐", size: "text-lg", top: "60%", left: "85%", delay: 1.5, duration: 4 },
  { emoji: "💫", size: "text-xl", top: "70%", left: "10%", delay: 2, duration: 6 },
  { emoji: "✨", size: "text-lg", top: "40%", left: "90%", delay: 0.8, duration: 3 },
  { emoji: "🌸", size: "text-2xl", top: "80%", left: "50%", delay: 1.2, duration: 5 },
];

export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Soft gradient blobs */}
      <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-cute-pink/8 blur-3xl" />
      <div className="absolute -right-20 top-2/3 h-80 w-80 rounded-full bg-cute-purple/8 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-48 w-96 rounded-full bg-cute-blue/6 blur-3xl" />

      {/* Floating decorations */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} opacity-20`}
          style={{ top: shape.top, left: shape.left }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.emoji}
        </motion.div>
      ))}
    </div>
  );
}
