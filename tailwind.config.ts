import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        secondary: "#0B0B0B",
        text: "#FFFFFF",
        muted: "#A5A5A5",
        glass: "rgba(255,255,255,0.05)",
        accent: "#3D1A78",
        lavender: "#B7A8FF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        editorial: ["var(--font-editorial)", "Playfair Display", "Georgia", "serif"],
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(120deg, #3D1A78 0%, #B7A8FF 55%, #E8E8EE 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(183,168,255,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        beam: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        beam: "beam 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
