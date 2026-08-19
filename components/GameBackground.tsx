"use client";

import { usePathname } from "next/navigation";
import PixelImg from "@/components/PixelImg";

const GIRL_SRC = "/game/girl.png?v=2";

const CLOUDS = [
  "absolute left-[5%] top-[8%] h-16 w-auto animate-[cloud-drift_22s_ease-in-out_infinite] sm:h-[88px]",
  "absolute left-[28%] top-[5%] h-12 w-auto animate-[cloud-drift_26s_ease-in-out_infinite] sm:h-16",
  "absolute right-[20%] top-[9%] h-14 w-auto animate-[cloud-drift_24s_ease-in-out_infinite] sm:h-[76px]",
  "absolute right-[6%] top-[22%] h-11 w-auto animate-[cloud-drift_20s_ease-in-out_infinite]",
  "absolute left-[12%] top-[26%] hidden h-10 w-auto sm:block",
] as const;

const TREES = [
  "absolute bottom-[78px] left-[-2%] hidden h-[210px] w-auto sm:block md:h-[260px]",
  "absolute bottom-[78px] left-[8%] hidden h-[300px] w-auto md:block",
  "absolute bottom-[78px] left-[18%] hidden h-[190px] w-auto lg:block",
  "absolute bottom-[78px] right-[-1%] hidden h-[240px] w-auto sm:block md:h-[280px]",
  "absolute bottom-[78px] right-[9%] hidden h-[180px] w-auto md:block",
] as const;

export default function GameBackground() {
  const pathname = usePathname();
  const isAbout = pathname === "/about";

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#58b6ff]">
      {CLOUDS.map((className) => (
        <PixelImg key={className} src="/game/cloud.png" className={className} />
      ))}

      {TREES.map((className) => (
        <PixelImg key={className} src="/game/tree.png" className={className} />
      ))}

      <PixelImg src="/game/turtle.png" className="absolute bottom-[88px] left-[22%] h-10 w-auto sm:h-12" />

      {isAbout ? (
        <>
          <PixelImg
            src="/game/balloon.png"
            className="sprite-float-balloon absolute bottom-[100px] left-[4%] z-[1] h-[88px] w-auto opacity-90 sm:left-[7%] sm:h-[110px]"
          />
          <div className="absolute bottom-[86px] right-[6%] z-[1] flex items-end gap-1 sm:right-[10%]">
            <PixelImg src="/game/bunny.png" className="h-[56px] w-auto sm:h-[68px]" />
            <PixelImg
              src="/game/bunny.png"
              className="mb-0.5 hidden h-[46px] w-auto scale-x-[-1] sm:block"
            />
          </div>
        </>
      ) : (
        <div className="absolute bottom-[86px] right-[10%] z-[1] flex items-end gap-1 sm:right-[14%] md:right-[16%]">
          <PixelImg src={GIRL_SRC} className="sprite-float h-[196px] w-auto sm:h-[232px]" />
          <PixelImg src="/game/bunny.png" className="h-[70px] w-auto sm:h-[84px]" />
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 flex h-[92px] items-end overflow-hidden bg-[#8ed63a]">
        {[0, 1, 2].map((index) => (
          <PixelImg
            key={index}
            src="/game/grass.png"
            className={`h-[110px] w-auto min-w-[45%] shrink-0 ${index > 0 ? "-ml-[8%]" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
