"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphismButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "danger";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export function MorphismButton({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md",
  className = "",
  disabled = false
}: MorphismButtonProps) {
  const baseClasses = "rounded-lg font-medium transition-all duration-300 border-0 outline-none focus:outline-none";
  
  const variantClasses = {
    primary: "bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 shadow-[4px_4px_8px_rgba(0,0,0,0.2),-4px_-4px_8px_rgba(255,255,255,0.1)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.1)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    secondary: "bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:hover:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    accent: "bg-red-500 dark:bg-red-400 text-white shadow-[4px_4px_8px_rgba(220,38,38,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_4px_rgba(220,38,38,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    danger: "bg-red-600 dark:bg-red-500 text-white shadow-[4px_4px_8px_rgba(220,38,38,0.4),-4px_-4px_8px_rgba(255,255,255,0.1)] hover:shadow-[2px_2px_4px_rgba(220,38,38,0.4),-2px_-2px_4px_rgba(255,255,255,0.1)]"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  );
}
