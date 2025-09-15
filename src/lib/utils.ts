import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Morphism utility functions
export const morphismStyles = {
  light: "bg-white/25 backdrop-blur-md border border-white/20 shadow-morphism-light",
  dark: "bg-black/25 backdrop-blur-md border border-white/10 shadow-morphism-dark",
  glass: "bg-white/10 backdrop-blur-xl border border-white/20 shadow-glass",
  glassDark: "bg-black/10 backdrop-blur-xl border border-white/10 shadow-glass",
  insetLight: "bg-gray-100 shadow-morphism-inset-light",
  insetDark: "bg-gray-800 shadow-morphism-inset-dark",
};

export const thinkpadColors = {
  black: "#000000",
  darkGray: "#1a1a1a",
  mediumGray: "#2d2d2d",
  lightGray: "#4a4a4a",
  silver: "#c0c0c0",
  red: "#ff0000",
  darkRed: "#cc0000",
  blue: "#0066cc",
  darkBlue: "#004499",
  green: "#00cc66",
  orange: "#ff6600",
};

// Animation utilities
export const animations = {
  fadeIn: "animate-fade-in",
  slideUp: "animate-slide-up",
  pulseSlow: "animate-pulse-slow",
};

// Morphism component generator
export function createMorphismClass(
  variant: keyof typeof morphismStyles = "light",
  additionalClasses?: string
) {
  return cn(morphismStyles[variant], additionalClasses);
}