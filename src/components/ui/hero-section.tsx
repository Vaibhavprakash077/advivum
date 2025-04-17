
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  backgroundImage?: string;
  className?: string;
  children?: React.ReactNode;
  darkOverlay?: boolean;
  trustBadges?: React.ReactNode;
}

export function HeroSection({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  backgroundImage,
  className,
  children,
  darkOverlay = false,
  trustBadges,
}: HeroSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll down function
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <section
      className={cn(
        "relative py-20 md:py-32 overflow-hidden min-h-[90vh] flex items-center",
        backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-br from-muted/70 via-muted/30 to-background dark:from-background dark:via-background/80 dark:to-background/40",
        className
      )}
      style={backgroundImage ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${scrollPosition * 0.5}px` 
      } : {}}
    >
      {backgroundImage && darkOverlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      )}
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background opacity-75 animate-pulse-glow" />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in max-w-4xl">
            {subtitle && (
              <p className="mb-4 text-lg font-medium text-primary uppercase tracking-widest animate-fade-in [animation-delay:200ms]">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:400ms]">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in [animation-delay:600ms]">
                {description}
              </p>
            )}
            {(ctaText || ctaSecondaryText) && (
              <div className="flex flex-wrap gap-4 justify-center mt-8 animate-fade-in [animation-delay:800ms]">
                {ctaText && (
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20 dark:shadow-primary/10 group relative overflow-hidden"
                  >
                    <Link to={ctaLink || "#"}>
                      <span className="relative z-10">{ctaText}</span>
                      <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                )}
                {ctaSecondaryText && (
                  <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-white/10 border-white/20 dark:bg-black/20 dark:border-white/10 hover:bg-white/20">
                    <Link to={ctaSecondaryLink || "#"}>{ctaSecondaryText}</Link>
                  </Button>
                )}
              </div>
            )}
            
            {trustBadges && (
              <div className="mt-16 animate-fade-in [animation-delay:1000ms]">
                {trustBadges}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/80 hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
