"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface MorphismToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MorphismToggle({ 
  checked, 
  onChange, 
  label,
  disabled = false,
  size = "md",
  className = ""
}: MorphismToggleProps) {
  const sizeClasses = {
    sm: "w-8 h-4",
    md: "w-12 h-6",
    lg: "w-16 h-8"
  };
  
  const thumbSizeClasses = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-7 h-7"
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <motion.button
        className={`
          relative inline-flex items-center rounded-full transition-all duration-300
          ${sizeClasses[size]}
          ${checked 
            ? 'bg-gray-800 dark:bg-gray-200 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.2),inset_-2px_-2px_4px_rgba(255,255,255,0.1)] dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.1)]'
            : 'bg-white/60 dark:bg-gray-800/60 shadow-[inset_4px_4px_8px_rgba(0,0,0,0.1),inset_-4px_-4px_8px_rgba(255,255,255,0.8)] dark:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)]'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
        onClick={() => !disabled && onChange(!checked)}
        disabled={disabled}
        whileTap={!disabled ? { scale: 0.95 } : {}}
      >
        <motion.div
          className={`
            ${thumbSizeClasses[size]} rounded-full
            ${checked 
              ? 'bg-white dark:bg-gray-900 shadow-[2px_2px_4px_rgba(0,0,0,0.2),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]'
              : 'bg-gray-300 dark:bg-gray-600 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-2px_-2px_4px_rgba(255,255,255,0.8)] dark:shadow-[2px_2px_4px_rgba(0,0,0,0.3),-2px_-2px_4px_rgba(255,255,255,0.1)]'
            }
          `}
          animate={{
            x: checked ? (size === 'sm' ? 16 : size === 'md' ? 24 : 32) : 2
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </motion.button>
      {label && (
        <span className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${disabled ? 'opacity-50' : ''}`}>
          {label}
        </span>
      )}
    </div>
  );
}
