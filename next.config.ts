import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 关闭 Next.js 开发工具浮层，避免 SegmentViewNode 缓存报错
  devIndicators: false,
};

export default nextConfig;
