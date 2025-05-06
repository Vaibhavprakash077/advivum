
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
  useGradient?: boolean;
  graphicImage?: string;
  alignLeft?: boolean;
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
  useGradient = false,
  graphicImage,
  alignLeft = false,
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
        useGradient ? "bg-gradient-to-r from-[#00C4B4] to-[#1A3C34]" : 
          backgroundImage ? "bg-cover bg-center" : 
          "bg-gradient-to-br from-muted/70 via-muted/30 to-background dark:from-background dark:via-background/80 dark:to-background/40",
        className
      )}
      style={backgroundImage && !useGradient ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${scrollPosition * 0.5}px` 
      } : {}}
    >
      {backgroundImage && darkOverlay && !useGradient && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      {!backgroundImage && !useGradient && (
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      )}
      
      {/* Gradient overlay for non-gradient backgrounds */}
      {!useGradient && (
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background opacity-75 animate-pulse-glow" />
      )}
      
      <div className="container relative z-10">
        <div className={cn(
          "flex flex-col md:flex-row items-center",
          alignLeft ? "text-left md:justify-between" : "text-center justify-center"
        )}>
          <div className={cn(
            "animate-fade-in max-w-3xl",
            alignLeft ? "" : "text-center",
            graphicImage ? "md:w-1/2 mb-10 md:mb-0" : ""
          )}>
            {subtitle && (
              <p className={cn(
                "mb-4 text-lg font-medium uppercase tracking-widest animate-fade-in [animation-delay:200ms] font-heading",
                useGradient ? "text-white/90" : "text-primary font-semibold" 
              )}>
                {subtitle}
              </p>
            )}
            <h1 className={cn(
              "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:400ms]",
              useGradient ? "text-white" : "text-foreground"
            )}>
              {title}
            </h1>
            {description && (
              <p className={cn(
                "font-body text-lg md:text-xl max-w-2xl mb-8 animate-fade-in [animation-delay:600ms]",
                useGradient ? "text-white" : "text-[#333333] dark:text-white/90",
                alignLeft ? "" : "mx-auto"
              )}>
                {description}
              </p>
            )}
            {(ctaText || ctaSecondaryText) && (
              <div className={cn(
                "flex flex-wrap gap-4 mt-8 animate-fade-in [animation-delay:800ms]",
                alignLeft ? "" : "justify-center"
              )}>
                {ctaText && (
                  <Button 
                    asChild 
                    size="lg" 
                    className={cn(
                      "shadow-lg group relative overflow-hidden text-[16px] font-medium",
                      useGradient ? 
                        "bg-[#00C4B4] hover:bg-[#00a89a] text-white border-none shadow-[#00C4B4]/20" : 
                        "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-primary/20 dark:shadow-primary/10"
                    )}
                  >
                    <Link to={ctaLink || "#"}>
                      <span className="relative z-10 font-medium">{ctaText}</span>
                      {!useGradient && (
                        <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      )}
                    </Link>
                  </Button>
                )}
                {ctaSecondaryText && (
                  <Button asChild variant="outline" size="lg" className={cn(
                    "text-[16px] font-medium",
                    useGradient ? 
                      "backdrop-blur-sm bg-white/10 border-white/20 text-white hover:bg-white/20" : 
                      "backdrop-blur-sm bg-white/10 border-white/20 dark:bg-black/20 dark:border-white/10 hover:bg-white/20 text-[#333333] dark:text-white"
                  )}>
                    <Link to={ctaSecondaryLink || "#"}>{ctaSecondaryText}</Link>
                  </Button>
                )}
              </div>
            )}
            
            {trustBadges && (
              <div className={cn(
                "mt-16 animate-fade-in [animation-delay:1000ms]",
                alignLeft ? "" : ""
              )}>
                {trustBadges}
              </div>
            )}
          </div>

          {/* Graphic Image */}
          {graphicImage && (
            <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in [animation-delay:800ms]">
              <div className="relative w-full max-w-lg animate-float">
                <img 
                  src={graphicImage}
                  alt="Tech illustration"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>
          )}

          {children}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-primary/80 hover:text-primary transition-colors"
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
