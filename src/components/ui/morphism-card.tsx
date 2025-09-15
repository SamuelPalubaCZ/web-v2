"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphismCardProps {
  children: ReactNode;
  className?: string;
  variant?: "raised" | "pressed" | "flat";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

export function MorphismCard({ 
  children, 
  className = "", 
  variant = "raised", 
  size = "md",
  onClick 
}: MorphismCardProps) {
  const baseClasses = "rounded-xl transition-all duration-300";
  
  const variantClasses = {
    raised: "bg-white/80 dark:bg-gray-800/80 shadow-[8px_8px_16px_rgba(0,0,0,0.1),-8px_-8px_16px_rgba(255,255,255,0.8)] dark:shadow-[8px_8px_16px_rgba(0,0,0,0.3),-8px_-8px_16px_rgba(255,255,255,0.1)]",
    pressed: "bg-gray-100/80 dark:bg-gray-700/80 shadow-[inset_8px_8px_16px_rgba(0,0,0,0.1),inset_-8px_-8px_16px_rgba(255,255,255,0.8)] dark:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.3),inset_-8px_-8px_16px_rgba(255,255,255,0.1)]",
    flat: "bg-white/60 dark:bg-gray-800/60 shadow-[4px_4px_8px_rgba(0,0,0,0.1),-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[4px_4px_8px_rgba(0,0,0,0.3),-4px_-4px_8px_rgba(255,255,255,0.1)]"
  };
  
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };

  const hoverClasses = onClick ? "hover:scale-105 cursor-pointer" : "";

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${hoverClasses} ${className}`}
      onClick={onClick}
      whileHover={onClick ? { scale: 1.02 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
}
