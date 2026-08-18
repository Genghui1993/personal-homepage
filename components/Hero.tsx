"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import StarField from "@/components/StarField";

export default function Hero() {

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center px-6 pb-10 pt-28 text-center"
    >
      <StarField />

      <motion.h1
        className="relative z-10 font-serif text-[1.75rem] font-medium leading-[1.35] tracking-tight text-white sm:text-4xl md:text-[2.75rem]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: '100px' }}
      >
        <span className="relative inline-block" style={{ paddingBottom: '10px' }}>
          我是
          小耿不是小狄
        </span>{" "}
        <br />
        Exploring AI, 
        <br />
        unlocking infinite possibilities
      </motion.h1>

      <motion.div
        className="relative z-10 mt-6 flex w-full max-w-3xl items-center justify-center sm:mt-8"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.img
          src="/hero-laptop.png"
          alt=""
          className="hidden h-[140px] w-auto object-contain sm:block md:h-[180px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,black_58%,transparent_78%)]"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <Link
          href="/about"
          className="group relative z-10 -mx-4 cursor-pointer outline-none"
          aria-label="想了解我？请点击我"
        >
          <span className="pointer-events-none absolute -top-1 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#efe6d6] px-4 py-1.5 text-sm text-[#1a1a1a] shadow-lg sm:top-6">
            想了解我？请点击我
            <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#efe6d6]" />
          </span>
          <motion.img
            src="/hero-girl.png"
            alt={profile.name}
            className="h-[260px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-[320px] md:h-[360px] [mask-image:radial-gradient(ellipse_62%_70%_at_center,black_60%,transparent_80%)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </Link>

        <motion.img
          src="/hero-robot.png"
          alt=""
          className="hidden h-[140px] w-auto object-contain sm:block md:h-[180px] [mask-image:radial-gradient(ellipse_70%_70%_at_center,black_58%,transparent_78%)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
      </motion.div>

      {/* <motion.div
        className="relative z-10 mt-6 flex items-center rounded-full bg-[#1a1a1a]/90 p-1.5 ring-1 ring-white/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
      >
        {roles.map((role, i) => (
          <button
            key={role}
            type="button"
            onClick={() => setActiveRole(i)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors sm:px-5 ${
              i === activeRole
                ? "bg-[#efe6d6] font-medium text-[#1a1a1a]"
                : "text-white/80 hover:text-white"
            }`}
          >
            {role}
          </button>
        ))}
      </motion.div> */}
    </section>
  );
}
