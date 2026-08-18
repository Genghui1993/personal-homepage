import Link from "next/link";

export default function ComingSoon({ title }: { title: string }) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="section-label">{title}</p>
      <h1 className="mt-4 font-serif text-4xl text-premium-ink">开发中</h1>
      <p className="mt-4 max-w-sm text-sm text-premium-muted">
        这个模块将在后续 Sprint 中上线，敬请期待。
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-vibe-cream px-6 py-2.5 text-sm text-vibe-bg transition-transform hover:scale-[1.02]"
      >
        返回首页
        <span aria-hidden>→</span>
      </Link>
    </div>
  );
}
