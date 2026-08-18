"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { label: "home", href: "/", dot: "filled" as const },
  { label: "about me", href: "/about", dot: "none" as const },
  { label: "article", href: "/articles", dot: "hollow" as const },
  { label: "video", href: "/videos", dot: "none" as const },
  { label: "product", href: "/products", dot: "hollow" as const },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50 pt-7"
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex flex-wrap items-center justify-center gap-3 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const showFilled = isActive || item.dot === "filled";
          const showHollow = !isActive && item.dot === "hollow";

          return (
            <Link key={item.label} href={item.href} className="nav-pill">
              {showFilled && (
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8dcc8]" />
              )}
              {showHollow && (
                <span className="h-1.5 w-1.5 rounded-full border border-white/80" />
              )}
              {item.label}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
}
