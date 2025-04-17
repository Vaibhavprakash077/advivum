
import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  showLine?: boolean;
  revealOnScroll?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
  gradient = false,
  showLine = false,
  revealOnScroll = true,
}: SectionTitleProps) {
  const [isVisible, setIsVisible] = useState(!revealOnScroll);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!revealOnScroll) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: a0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [revealOnScroll]);

  return (
    <div
      ref={sectionRef}
      className={cn(
        "space-y-2 mb-10",
        align === "center" && "text-center",
        align === "right" && "text-right",
        isVisible ? "animate-fade-in" : "opacity-0",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl relative inline-block",
        gradient ? "bg-gradient-to-r from-primary via-primary/90 to-secondary bg-clip-text text-transparent" : ""
      )}>
        {title}
      </h2>
      
      {showLine && (
        <div className={cn(
          "h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-transform duration-700",
          align === "center" ? "mx-auto w-24" : align === "right" ? "ml-auto w-24" : "w-24",
          isVisible ? "transform-none" : "transform scale-x-0"
        )} />
      )}
      
      {subtitle && (
        <p className={cn(
          "text-lg text-muted-foreground max-w-3xl mt-4 transition-opacity duration-700 delay-300",
          align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "",
          isVisible ? "opacity-100" : "opacity-0"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
