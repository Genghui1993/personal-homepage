import type { Metadata } from "next";
import { Nunito, Noto_Sans_SC, ZCOOL_XiaoWei } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import GameBackground from "@/components/GameBackground";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const notoSans = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-cn",
  weight: ["500", "700", "900"],
  display: "swap",
});

const xiaoWei = ZCOOL_XiaoWei({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "小耿不是小狄",
  description: "展示个人 AI 能力成长过程的数字空间",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${nunito.variable} ${notoSans.variable} ${xiaoWei.variable}`}>
      <body className="relative min-h-screen bg-[#58b6ff] font-sans text-white">
        <GameBackground />
        <div className="relative z-10 pb-28">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
