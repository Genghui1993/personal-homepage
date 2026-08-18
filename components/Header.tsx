"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "@/data/nav";
import PixelImg from "@/components/PixelImg";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
      <div className="relative mx-auto max-w-5xl">
        <nav className="glass-nav pointer-events-auto relative z-10 grid grid-cols-[1fr_auto_1fr] items-center gap-2 px-3 py-2 sm:px-5 sm:py-2.5">
          <Brand />

          <div className="flex items-center justify-center gap-0.5 overflow-x-auto text-[13px] font-semibold text-[#5c5c5c] sm:gap-1 sm:text-sm">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex shrink-0 items-center rounded-full px-2.5 py-1.5 transition-colors hover:bg-white/80 hover:text-[#222] sm:px-3 ${
                    isActive ? "bg-white/70 text-[#222]" : ""
                  }`}
                >
                  {item.label}
                  {isActive && <span className="ml-1.5 h-1.5 w-1.5 rounded-full bg-[#3b82f6]" />}
                </Link>
              );
            })}
          </div>

          <span aria-hidden />
        </nav>

        {pathname === "/" && (
          <PixelImg
            src="/game/balloon.png"
            className="sprite-float-balloon absolute right-10 top-14 z-20 hidden h-[220px] w-auto sm:block md:right-14 md:top-16 md:h-[280px] lg:right-16 lg:h-[340px]"
          />
        )}
      </div>
    </header>
  );
}

function Brand() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-2.5 justify-self-start">
      <span className="relative h-9 w-9 overflow-hidden rounded-[10px] bg-white shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)] sm:h-10 sm:w-10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/game/girl.png"
          alt=""
          className="absolute inset-x-0 top-[-6%] h-[220%] w-full object-cover object-top [image-rendering:pixelated]"
        />
      </span>
      <span className="text-[15px] font-extrabold tracking-tight text-[#3d3d3d]">Xiao Geng</span>
    </Link>
  );
}
