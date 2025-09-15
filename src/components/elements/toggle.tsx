'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface ToggleProps {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  variant?: 'default' | 'primary' | 'success';
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ 
    checked = false, 
    onCheckedChange, 
    disabled = false, 
    className, 
    size = 'default',
    variant = 'default',
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'w-8 h-4',
      default: 'w-11 h-6',
      lg: 'w-14 h-8'
    };

    const thumbSizeClasses = {
      sm: 'w-3 h-3',
      default: 'w-5 h-5',
      lg: 'w-6 h-6'
    };

    const translateClasses = {
      sm: checked ? 'translate-x-4' : 'translate-x-0.5',
      default: checked ? 'translate-x-5' : 'translate-x-0.5',
      lg: checked ? 'translate-x-6' : 'translate-x-1'
    };

    const variantClasses = {
      default: checked 
        ? 'bg-primary/30 border-primary/40' 
        : 'bg-white/20 border-white/30',
      primary: checked 
        ? 'bg-primary/40 border-primary/50' 
        : 'bg-white/20 border-white/30',
      success: checked 
        ? 'bg-green-500/30 border-green-500/40' 
        : 'bg-white/20 border-white/30'
    };

    const thumbVariantClasses = {
      default: checked 
        ? 'bg-primary shadow-lg shadow-primary/20' 
        : 'bg-white shadow-lg',
      primary: checked 
        ? 'bg-primary shadow-lg shadow-primary/30' 
        : 'bg-white shadow-lg',
      success: checked 
        ? 'bg-green-500 shadow-lg shadow-green-500/20' 
        : 'bg-white shadow-lg'
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={cn(
          'relative inline-flex shrink-0 cursor-pointer rounded-full border backdrop-blur-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        onClick={() => !disabled && onCheckedChange?.(!checked)}
        {...props}
      >
        <span
          className={cn(
            'pointer-events-none block rounded-full transition-transform duration-200',
            thumbSizeClasses[size],
            translateClasses[size],
            thumbVariantClasses[variant]
          )}
        />
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';

export { Toggle };
export type { ToggleProps };