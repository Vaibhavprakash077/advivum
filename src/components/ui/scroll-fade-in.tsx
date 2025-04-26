
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

export interface ScrollFadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down';
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
  repeat?: boolean;
  distance?: number;
}

export function ScrollFadeIn({
  children,
  direction = 'up',
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
  className,
  repeat = false,
  distance = 30,
}: ScrollFadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const shouldAnimate = repeat || (!repeat && !hasAnimated);
    if (!shouldAnimate) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasAnimated(true);
          if (!repeat) {
            observer.unobserve(element);
          }
        } else if (repeat) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '10px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [repeat, hasAnimated, threshold]);

  const translateDirection = direction === 'up' ? distance : -distance;

  return (
    <div
      ref={elementRef}
      className={cn('transition-all will-change-transform', className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? 'translateY(0)'
          : `translateY(${translateDirection}px)`,
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}
