"use client";

import { motion } from "framer-motion";
import AboutTypewriter from "@/components/AboutTypewriter";
import IdCard from "@/components/IdCard";

export default function AboutPage() {
  return (
    <div className="relative mx-auto flex min-h-[calc(100svh-100px)] w-full max-w-5xl items-center px-5 pt-24 pb-28 sm:px-8 lg:px-10">
      <motion.div
        className="about-shell w-full"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="flex flex-col gap-8 p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-10 lg:p-10">
          <div className="min-w-0 flex-1">
            <p className="about-welcome">Welcome to</p>
            <h1 className="about-world-banner font-cn mt-2">小耿的世界！</h1>
            <AboutTypewriter />
          </div>

          <div className="flex shrink-0 justify-center lg:justify-end">
            <IdCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
