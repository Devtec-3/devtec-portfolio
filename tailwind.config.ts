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
        paper: "#faf7e1",
        paperdark: "#f4efc9",
        ink: "#1c1917",
        espressopan: "#4a2c22",
        espresso: "#3b231a",
        marker: "#e8b93c",
        rust: "#7c2d12",
        olive: "#8a8f5c",
      },
      fontFamily: {
        serif2: ['"Playfair Display"', "Georgia", "serif"],
        hand: ['"Caveat"', "cursive"],
        body: ['"Nunito"', "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        wiggle: "wiggle 4s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
