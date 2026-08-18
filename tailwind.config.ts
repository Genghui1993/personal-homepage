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
          bg: "#0c0c0c",
          surface: "#161616",
          ink: "#f4f1ea",
          muted: "#a8a39a",
          subtle: "#6e6a64",
          border: "rgba(244,241,234,0.18)",
          accent: "#f4f1ea",
          "accent-light": "rgba(244,241,234,0.08)",
          violet: "#c4b5fd",
          rose: "#fda4af",
          emerald: "#6ee7b7",
          amber: "#fcd34d",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
