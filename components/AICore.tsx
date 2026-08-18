"use client";

import { motion } from "framer-motion";

export default function AICore() {
  return (
    <div className="relative flex flex-col items-center justify-center py-4">
      {/* Soft glow behind */}
      <div className="absolute h-60 w-60 rounded-full bg-gradient-to-br from-cute-pink/20 via-cute-purple/15 to-cute-blue/10 blur-3xl" />

      {/* Orbiting hearts */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          animate={{ rotate: 360 }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "linear" }}
          style={{ width: 160 + i * 30, height: 160 + i * 30 }}
        >
          <motion.span
            className="absolute text-lg"
            style={{
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
          >
            {["💖", "✨", "🌟", "💜"][i]}
          </motion.span>
        </motion.div>
      ))}

      {/* Main cute character / core */}
      <motion.div
        className="relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative">
          {/* Outer ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-dashed border-cute-pink/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Main face */}
          <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cute-pink-light via-cute-purple-light to-cute-blue-light shadow-cute sm:h-44 sm:w-44">
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-white/60" />

            {/* Face */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Eyes */}
              <div className="mb-1 flex gap-5">
                <motion.div
                  className="relative"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <div className="h-4 w-4 rounded-full bg-cute-text" />
                  <div className="absolute left-1 top-0.5 h-1.5 w-1.5 rounded-full bg-white" />
                </motion.div>
                <motion.div
                  className="relative"
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <div className="h-4 w-4 rounded-full bg-cute-text" />
                  <div className="absolute left-1 top-0.5 h-1.5 w-1.5 rounded-full bg-white" />
                </motion.div>
              </div>
              {/* Blush */}
              <div className="flex gap-8">
                <div className="h-2 w-4 rounded-full bg-cute-pink/40" />
                <div className="h-2 w-4 rounded-full bg-cute-pink/40" />
              </div>
              {/* Mouth */}
              <motion.div
                className="mt-1 h-2 w-4 rounded-b-full border-b-2 border-cute-text/60"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Cheek sparkles */}
            <motion.span
              className="absolute -right-2 top-4 text-sm"
              animate={{ scale: [0.8, 1.2, 0.8], rotate: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨
            </motion.span>
            <motion.span
              className="absolute -left-2 bottom-4 text-sm"
              animate={{ scale: [1.2, 0.8, 1.2], rotate: [0, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              ✨
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Status text */}
      <motion.div
        className="relative z-10 mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="mb-2 flex items-center justify-center gap-2">
          <motion.span
            className="text-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💗
          </motion.span>
          <span className="text-sm font-medium text-cute-text-light">
            系统状态
          </span>
        </div>
        <h2 className="font-display text-2xl font-bold text-cute-text sm:text-3xl">
          AI 小核心已上线~
        </h2>
        <motion.p
          className="mt-2 text-sm text-cute-text-light"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          正在快乐地学习中 ✨
        </motion.p>
      </motion.div>
    </div>
  );
}
