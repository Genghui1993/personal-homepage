"use client";

import { motion } from "framer-motion";
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

            <div className="about-copy mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
              <p>我是山东人，1999 年出生，现在住在北京。</p>
              <p>
                白天做前端开发，晚上喜欢折腾 AI，写点技术分享，一边踩坑一边把好玩的东西记下来。
              </p>
              <p>
                性格时而疯癫时而内向（双子座），但线上聊得很开心。对创意和产品都有兴趣，也在慢慢搭自己的小世界。
              </p>
            </div>
          </div>

          <div className="flex shrink-0 justify-center lg:justify-end">
            <IdCard />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
