export default function FogBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/vibe-fog.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[#111111]/40" />
      <div className="absolute -left-24 top-1/4 h-[70vh] w-[42vw] rounded-full bg-white/[0.07] blur-[90px]" />
      <div className="absolute -right-24 top-1/3 h-[70vh] w-[42vw] rounded-full bg-white/[0.06] blur-[90px]" />
      <div className="absolute -bottom-24 left-1/2 h-[40vh] w-[80vw] -translate-x-1/2 rounded-full bg-white/[0.08] blur-[80px]" />
    </div>
  );
}
