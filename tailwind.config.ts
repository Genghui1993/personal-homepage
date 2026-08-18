import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vibe: {
          bg: "#0c0c0c",
          surface: "#161616",
          ink: "#f4f1ea",
          muted: "#a8a39a",
          subtle: "#6e6a64",
          border: "rgba(244,241,234,0.18)",
          cream: "#f4f1ea",
        },
        premium: {
          bg: "#4ec6f2",
          surface: "#ffffff",
          ink: "#3d3d3d",
          muted: "#6b7280",
          subtle: "#8a939e",
          border: "rgba(61,61,61,0.12)",
          accent: "#ff9f43",
          "accent-light": "rgba(255,159,67,0.12)",
          violet: "#ff7eb3",
          rose: "#ff7eb3",
          emerald: "#8fd14f",
          amber: "#f5d56c",
        },
      },
      fontFamily: {
        serif: ["var(--font-display)", "var(--font-cn)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        cn: ["var(--font-cn)", "var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-cn)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
