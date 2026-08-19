import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // 关闭 Next.js 开发工具浮层，避免 SegmentViewNode 缓存报错
  devIndicators: false,
  async headers() {
    return [
      {
        source: "/game/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
