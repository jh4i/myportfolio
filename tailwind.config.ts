import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        cream: {
          DEFAULT: "rgb(var(--color-cream) / <alpha-value>)",
          muted: "rgb(var(--color-cream-muted) / <alpha-value>)",
        },
        blush: {
          DEFAULT: "rgb(var(--color-blush) / <alpha-value>)",
          deep: "rgb(var(--color-blush-deep) / <alpha-value>)",
        },
        wine: {
          900: "rgb(var(--color-wine-900) / <alpha-value>)",
          800: "rgb(var(--color-wine-800) / <alpha-value>)",
          700: "rgb(var(--color-wine-700) / <alpha-value>)",
          600: "rgb(var(--color-wine-600) / <alpha-value>)",
          500: "rgb(var(--color-wine-500) / <alpha-value>)",
        },
        chocolate: {
          900: "rgb(var(--color-chocolate-900) / <alpha-value>)",
          800: "rgb(var(--color-chocolate-800) / <alpha-value>)",
          700: "rgb(var(--color-chocolate-700) / <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        pill: "999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "spin-slow": "spin 30s linear infinite",
        shimmer: "shimmer 3s linear infinite",
        "fade-up": "fade-up 1s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(2deg)" },
        },
        shimmer: {
          from: { "background-position": "0 0" },
          to: { "background-position": "-200% 0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      letterSpacing: {
        luxe: "0.18em",
        editorial: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
