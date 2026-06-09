import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green:  "#7AB648",
          blue:   "#2D4FA3",
          purple: "#8B5EA4",
          ice:    "#A8CCE0",
        },
        charcoal: "#3D3D3D",
        void:     "#080808",
        deep:     "#0C0C0C",
        dark:     "#111111",
        surface:  "#1A1A1A",
        panel:    "#1E1E1E",
        muted:    "#6A7A8A",
        steel:    "#8A9AAF",
        frost:    "#C8D8E8",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "hero-vignette": "radial-gradient(ellipse at 30% 60%, transparent 40%, rgba(8,8,8,0.9) 100%)",
      },
      boxShadow: {
        "glass":        "0 4px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
        "glow-green":   "0 0 40px rgba(122,182,72,0.2)",
        "glow-blue":    "0 0 40px rgba(45,79,163,0.3)",
        "glow-purple":  "0 0 40px rgba(139,94,164,0.25)",
        "glow-ice":     "0 0 40px rgba(168,204,224,0.2)",
        "card":         "0 8px 48px rgba(0,0,0,0.7)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;

