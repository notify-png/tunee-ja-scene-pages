import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // YouTube BGM page
        yt: {
          primary: "#7c5cfc",
          light: "#a78bfa",
          bg: "#f5f3ff",
        },
        // Work/Lo-fi BGM page
        work: {
          primary: "#c07a50",
          light: "#d4a574",
          bg: "#faf6f0",
          dark: "#2c1e10",
        },
        // Game BGM page
        game: {
          primary: "#00d4ff",
          light: "#66e5ff",
          bg: "#0d1117",
          surface: "#161b22",
          border: "#21262d",
        },
        // Healing BGM page
        heal: {
          primary: "#5a8a6a",
          light: "#7ab87a",
          bg: "#f9f7f4",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-jp)", "system-ui", "sans-serif"],
        dm: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        outfit: ["var(--font-outfit)", "system-ui", "sans-serif"],
        dot: ["var(--font-dot-gothic)", "monospace"],
        cormorant: ["var(--font-cormorant)", "serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "float-reverse": "float 10s ease-in-out infinite reverse",
        "drift": "drift 16s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "wave-bar": "wave-bar 1.5s ease-in-out infinite alternate",
        "eq-bounce": "eq-bounce 0.7s ease-in-out infinite alternate",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "breathe": "breathe 8s ease-in-out infinite",
        "ripple": "ripple 3s ease-out infinite",
        "note-jump": "note-jump 0.5s ease infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(20px, -12px)" },
          "50%": { transform: "translate(-12px, 20px)" },
          "75%": { transform: "translate(10px, 10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.8" },
        },
        "wave-bar": {
          "0%": { height: "4px" },
          "100%": { height: "36px" },
        },
        "eq-bounce": {
          "to": { height: "95%", opacity: "0.85" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.8" },
        },
        breathe: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)" },
          "50%": { transform: "translate(-50%, -50%) scale(1.12)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        "note-jump": {
          "to": { transform: "translateY(-3px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
