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
        // ThinkPad inspired color palette
        thinkpad: {
          black: "#000000",
          "dark-gray": "#1a1a1a",
          "medium-gray": "#2d2d2d",
          "light-gray": "#4a4a4a",
          "silver": "#c0c0c0",
          "red": "#ff0000",
          "dark-red": "#cc0000",
          "blue": "#0066cc",
          "dark-blue": "#004499",
          "green": "#00cc66",
          "orange": "#ff6600",
        },
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626', // ThinkPad red
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#450a0a',
        },
        accent: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ff6b6b', // ThinkPad accent red
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        // Morphism shadows
        "morphism-light": "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "morphism-dark": "20px 20px 60px #0a0a0a, -20px -20px 60px #2a2a2a",
        "morphism-inset-light": "inset 20px 20px 60px #bebebe, inset -20px -20px 60px #ffffff",
        "morphism-inset-dark": "inset 20px 20px 60px #0a0a0a, inset -20px -20px 60px #2a2a2a",
        "glass": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;