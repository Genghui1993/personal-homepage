"use client";

const STARS = [
  { x: "8%", y: "18%", size: 7, color: "#f4f1ea", delay: 0 },
  { x: "18%", y: "32%", size: 5, color: "#fde68a", delay: 0.4 },
  { x: "28%", y: "12%", size: 4, color: "#bfdbfe", delay: 0.8 },
  { x: "72%", y: "16%", size: 6, color: "#f4f1ea", delay: 0.2 },
  { x: "82%", y: "28%", size: 5, color: "#fde68a", delay: 1.1 },
  { x: "90%", y: "48%", size: 4, color: "#bfdbfe", delay: 0.6 },
  { x: "12%", y: "58%", size: 5, color: "#f4f1ea", delay: 1.4 },
  { x: "22%", y: "78%", size: 4, color: "#fde68a", delay: 0.3 },
  { x: "78%", y: "72%", size: 6, color: "#bfdbfe", delay: 0.9 },
  { x: "88%", y: "82%", size: 4, color: "#f4f1ea", delay: 1.6 },
  { x: "48%", y: "22%", size: 3, color: "#f4f1ea", delay: 0.5 },
  { x: "62%", y: "86%", size: 5, color: "#fde68a", delay: 1.2 },
];

function FourPointStar({ size, color }: { size: number; color: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M12 0c.4 6.2 5.8 11.6 12 12-6.2.4-11.6 5.8-12 12C11.6 17.8 6.2 12.4 0 12 6.2 11.6 11.6 6.2 12 0z" />
    </svg>
  );
}

export default function StarField() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {STARS.map((star, i) => (
        <span
          key={i}
          className="absolute animate-pulse"
          style={{
            left: star.x,
            top: star.y,
            animationDelay: `${star.delay}s`,
            animationDuration: "3.2s",
          }}
        >
          <FourPointStar size={star.size} color={star.color} />
        </span>
      ))}
    </div>
  );
}
