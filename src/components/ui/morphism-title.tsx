"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphismTitleProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant?: "primary" | "secondary" | "accent";
  align?: "left" | "center" | "right";
}

export function MorphismTitle({ 
  children, 
  level = 2, 
  className = "",
  variant = "primary",
  align = "left"
}: MorphismTitleProps) {
  const baseClasses = "font-bold transition-all duration-300";
  
  const levelClasses = {
    1: "text-4xl sm:text-5xl lg:text-6xl",
    2: "text-3xl sm:text-4xl lg:text-5xl",
    3: "text-2xl sm:text-3xl lg:text-4xl",
    4: "text-xl sm:text-2xl lg:text-3xl",
    5: "text-lg sm:text-xl lg:text-2xl",
    6: "text-base sm:text-lg lg:text-xl"
  };
  
  const variantClasses = {
    primary: "text-gray-900 dark:text-gray-50",
    secondary: "text-gray-700 dark:text-gray-300",
    accent: "text-gray-800 dark:text-gray-200"
  };
  
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`${alignClasses[align]} ${className}`}
    >
      <Tag className={`${baseClasses} ${levelClasses[level]} ${variantClasses[variant]}`}>
        {children}
      </Tag>
    </motion.div>
  );
}
