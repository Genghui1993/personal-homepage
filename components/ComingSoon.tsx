import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="mx-auto flex min-h-[calc(100svh-120px)] max-w-lg items-center px-6 pt-24 pb-32">
      <div className="game-card w-full p-10 text-center">
        <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#999]">{title}</p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#222]">开发中</h1>
        <p className="mt-3 text-sm text-[#666]">这个模块将在后续 Sprint 中上线，敬请期待。</p>
        <Link href="/" className="navy-btn mt-8">
          返回首页
        </Link>
      </div>
    </div>
  );
}
