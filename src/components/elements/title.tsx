'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const titleVariants = cva(
  'font-bold tracking-tight text-foreground',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        gradient: 'bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent',
        muted: 'text-muted-foreground',
        accent: 'text-accent',
        primary: 'text-primary',
      },
      size: {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl lg:text-4xl',
        '4xl': 'text-4xl lg:text-5xl',
        '5xl': 'text-5xl lg:text-6xl',
        '6xl': 'text-6xl lg:text-7xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: '2xl',
      align: 'left',
    },
  }
);

const subtitleVariants = cva(
  'text-muted-foreground leading-relaxed',
  {
    variants: {
      size: {
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
      },
      align: {
        left: 'text-left',
        center: 'text-center',
        right: 'text-right',
      },
    },
    defaultVariants: {
      size: 'base',
      align: 'left',
    },
  }
);

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof titleVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

interface SubtitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof subtitleVariants> {}

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  titleProps?: Omit<TitleProps, 'children'>;
  subtitleProps?: Omit<SubtitleProps, 'children'>;
  className?: string;
}

const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant, size, align, as: Component = 'h2', ...props }, ref) => {
    return (
      <Component
        className={cn(titleVariants({ variant, size, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Title.displayName = 'Title';

const Subtitle = React.forwardRef<HTMLParagraphElement, SubtitleProps>(
  ({ className, size, align, ...props }, ref) => {
    return (
      <p
        className={cn(subtitleVariants({ size, align, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Subtitle.displayName = 'Subtitle';

const SectionTitle = React.forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ title, subtitle, titleProps, subtitleProps, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('space-y-2', className)}
        {...props}
      >
        <Title {...titleProps}>
          {title}
        </Title>
        {subtitle && (
          <Subtitle {...subtitleProps}>
            {subtitle}
          </Subtitle>
        )}
      </div>
    );
  }
);
SectionTitle.displayName = 'SectionTitle';

// Animated Title Component
interface AnimatedTitleProps extends TitleProps {
  words?: string[];
  delay?: number;
}

const AnimatedTitle = React.forwardRef<HTMLHeadingElement, AnimatedTitleProps>(
  ({ className, variant, size, align, as: Component = 'h1', words = [], delay = 100, children, ...props }, ref) => {
    const [displayedText, setDisplayedText] = React.useState('');
    const [currentWordIndex, setCurrentWordIndex] = React.useState(0);
    const [currentCharIndex, setCurrentCharIndex] = React.useState(0);

    const text = children?.toString() || '';
    const wordsToAnimate = words.length > 0 ? words : [text];

    React.useEffect(() => {
      if (wordsToAnimate.length === 0) return;

      const currentWord = wordsToAnimate[currentWordIndex];
      
      if (currentCharIndex < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, currentCharIndex + 1));
          setCurrentCharIndex(prev => prev + 1);
        }, delay);
        
        return () => clearTimeout(timeout);
      } else if (words.length > 1) {
        // If we have multiple words, cycle through them
        const timeout = setTimeout(() => {
          setCurrentWordIndex((prev) => (prev + 1) % wordsToAnimate.length);
          setCurrentCharIndex(0);
          setDisplayedText('');
        }, 2000); // Wait 2 seconds before next word
        
        return () => clearTimeout(timeout);
      }
    }, [currentCharIndex, currentWordIndex, wordsToAnimate, delay, words.length]);

    return (
      <Component
        className={cn(titleVariants({ variant, size, align, className }))}
        ref={ref}
        {...props}
      >
        {words.length > 0 ? (
          <>
            {displayedText}
            <span className="animate-pulse">|</span>
          </>
        ) : (
          children
        )}
      </Component>
    );
  }
);
AnimatedTitle.displayName = 'AnimatedTitle';

export { Title, Subtitle, SectionTitle, AnimatedTitle, titleVariants, subtitleVariants };
export type { TitleProps, SubtitleProps, SectionTitleProps, AnimatedTitleProps };