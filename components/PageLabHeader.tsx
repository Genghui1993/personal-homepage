"use client";

import { motion } from "framer-motion";

type PageLabHeaderProps = {
  kicker: string;
  title: string;
  description: string;
};

export default function PageLabHeader({ kicker, title, description }: PageLabHeaderProps) {
  return (
    <motion.div
      className="project-lab-header w-fit max-w-full"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <motion.p
        className="project-lab-kicker"
        initial={{ opacity: 0, letterSpacing: "0.14em" }}
        animate={{ opacity: 1, letterSpacing: "0.46em" }}
        transition={{ delay: 0.18, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {kicker}
      </motion.p>

      <motion.h1
        className="project-lab-title font-display"
        initial={{ y: 6 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.32, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            className="inline-block origin-bottom"
            initial={{
              opacity: 0,
              y: 28,
              rotate: index % 2 === 0 ? -10 : 10,
              scale: 0.88,
            }}
            animate={{
              opacity: 1,
              y: [28, -10, 0],
              rotate: [index % 2 === 0 ? -10 : 10, index % 2 === 0 ? -4 : 4, 0],
              scale: [0.88, 1.07, 1],
            }}
            transition={{
              delay: 0.32 + index * 0.045,
              duration: 0.62,
              times: [0, 0.62, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.p
        className="project-lab-desc mt-3 max-w-md text-sm font-semibold leading-relaxed text-white/90"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.88, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {description}
      </motion.p>

      <motion.span
        className="project-lab-scan"
        aria-hidden
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "min(100%, 220px)", opacity: 1 }}
        transition={{ delay: 0.78, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}
