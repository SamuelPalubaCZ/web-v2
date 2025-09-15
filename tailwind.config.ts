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
        // ThinkPad inspired colors
        thinkpad: {
          black: "#1a1a1a",
          dark: "#2d2d2d", 
          gray: "#4a4a4a",
          light: "#6b6b6b",
          silver: "#a8a8a8",
          red: "#d32f2f",
          blue: "#1976d2",
          green: "#388e3c",
        },
        // Morphism colors
        morphism: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.2)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "morphism-light": "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "morphism-dark": "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "thinkpad": "0 4px 20px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
