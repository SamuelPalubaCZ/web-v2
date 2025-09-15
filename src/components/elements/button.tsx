'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 backdrop-blur-md border',
  {
    variants: {
      variant: {
        default: 'bg-white/20 border-white/30 text-gray-700 hover:bg-white/30 hover:border-white/40 shadow-lg',
        primary: 'bg-primary/20 border-primary/30 text-primary hover:bg-primary/30 hover:border-primary/40 shadow-lg shadow-primary/20',
        secondary: 'bg-gray-100/50 border-gray-200/50 text-gray-600 hover:bg-gray-100/70 hover:border-gray-200/70',
        ghost: 'bg-transparent border-transparent text-gray-600 hover:bg-white/10 hover:border-white/20',
        outline: 'bg-transparent border-gray-200/50 text-gray-600 hover:bg-white/10 hover:border-gray-300/50',
        destructive: 'bg-red-500/20 border-red-500/30 text-red-600 hover:bg-red-500/30 hover:border-red-500/40 shadow-lg shadow-red-500/20',
        success: 'bg-green-500/20 border-green-500/30 text-green-600 hover:bg-green-500/30 hover:border-green-500/40 shadow-lg shadow-green-500/20',
        toggle: 'bg-white/20 border-white/30 text-gray-700 hover:bg-white/30 data-[state=on]:bg-primary/30 data-[state=on]:border-primary/40 data-[state=on]:text-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-6',
        xl: 'h-14 px-8 text-base',
        icon: 'h-10 w-10',
        'icon-sm': 'h-8 w-8',
        'icon-lg': 'h-12 w-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

// Icon Button Component
export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  'aria-label': string;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, size = 'icon', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        size={size}
        className={cn('shrink-0', className)}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);
IconButton.displayName = 'IconButton';

// Toggle Button Component
export interface ToggleButtonProps extends ButtonProps {
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const ToggleButton = React.forwardRef<HTMLButtonElement, ToggleButtonProps>(
  ({ pressed, onPressedChange, className, variant = 'toggle', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        className={cn(className)}
        data-state={pressed ? 'on' : 'off'}
        onClick={() => onPressedChange?.(!pressed)}
        {...props}
      />
    );
  }
);
ToggleButton.displayName = 'ToggleButton';

export { Button, IconButton, ToggleButton, buttonVariants };