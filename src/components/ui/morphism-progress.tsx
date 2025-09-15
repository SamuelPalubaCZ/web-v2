"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MorphismProgressProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "success" | "warning" | "error";
  className?: string;
}

export function MorphismProgress({ 
  value, 
  max = 100, 
  label, 
  showPercentage = true,
  size = "md",
  color = "primary",
  className = ""
}: MorphismProgressProps) {
  const percentage = Math.min((value / max) * 100, 100);
  
  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4"
  };
  
  const colorClasses = {
    primary: "bg-gray-800 dark:bg-gray-200",
    success: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500"
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {label}
          </span>
          {showPercentage && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      
      <div className={`
        w-full rounded-full overflow-hidden
        bg-white/60 dark:bg-gray-800/60
        shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)]
        dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]
        ${sizeClasses[size]}
      `}>
        <motion.div
          className={`
            h-full rounded-full
            ${colorClasses[color]}
            shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.8)]
            dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]
          `}
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
