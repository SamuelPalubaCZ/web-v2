"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphismBadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MorphismBadge({ 
  children, 
  variant = "default", 
  size = "md",
  className = ""
}: MorphismBadgeProps) {
  const baseClasses = "inline-flex items-center font-medium rounded-full transition-all duration-300";
  
  const variantClasses = {
    default: "bg-white/80 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    success: "bg-green-500 dark:bg-green-400 text-white shadow-[2px_2px_4px_rgba(34,197,94,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    warning: "bg-yellow-500 dark:bg-yellow-400 text-white shadow-[2px_2px_4px_rgba(234,179,8,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    error: "bg-red-500 dark:bg-red-400 text-white shadow-[2px_2px_4px_rgba(239,68,68,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]",
    info: "bg-blue-500 dark:bg-blue-400 text-white shadow-[2px_2px_4px_rgba(59,130,246,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]"
  };
  
  const sizeClasses = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base"
  };

  return (
    <motion.span
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.span>
  );
}
