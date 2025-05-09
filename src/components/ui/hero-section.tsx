
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ParticlesBackground } from "./particles-background";
import { useStaggeredFade } from "@/hooks/use-staggered-fade";
import { ScrollFadeIn } from "./scroll-fade-in";

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
  useParticles?: boolean;
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
  useParticles = true,
}: HeroSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Staggered animation delays
  const elementCount = 5; // subtitle, title, description, buttons, image
  const delays = useStaggeredFade({
    baseDelay: 0.2,
    delayIncrement: 0.2,
    totalItems: elementCount,
  });
  
  // Parallax effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Trigger animations after mount
  useEffect(() => {
    setIsLoaded(true);
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
        "relative py-20 md:py-32 overflow-hidden min-h-[100vh] flex items-center",
        useGradient ? 
          "bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" : 
          backgroundImage ? "bg-cover bg-center" : 
          "bg-gradient-to-br from-muted/70 via-muted/30 to-background dark:from-background dark:via-background/80 dark:to-background/40",
        className
      )}
      style={backgroundImage && !useGradient ? { 
        backgroundImage: `url(${backgroundImage})`,
        backgroundPositionY: `${scrollPosition * 0.5}px` 
      } : {}}
    >
      {/* Particles Background */}
      {useParticles && !backgroundImage && (
        <ParticlesBackground 
          particleColor={useGradient ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 196, 180, 0.3)"}
        />
      )}
      
      {backgroundImage && darkOverlay && !useGradient && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      {!backgroundImage && !useGradient && (
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      )}
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/5 to-background opacity-40" />
      
      <div className="container relative z-10">
        <div className={cn(
          "flex flex-col md:flex-row items-center",
          alignLeft ? "text-left md:justify-between" : "text-center justify-center"
        )}>
          <div className={cn(
            "max-w-3xl",
            alignLeft ? "" : "text-center",
            graphicImage ? "md:w-1/2 mb-10 md:mb-0" : ""
          )}>
            {subtitle && (
              <p 
                className={cn(
                  "mb-4 text-lg font-medium uppercase tracking-widest font-heading opacity-0 transform translate-y-4",
                  useGradient ? "text-white/90" : "text-primary font-semibold",
                  isLoaded && "animate-fade-in"
                )}
                style={{ animationDelay: `${delays[0]}s` }}
              >
                {subtitle}
              </p>
            )}
            
            <h1 
              className={cn(
                "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 transform translate-y-4",
                useGradient ? "text-white" : "text-foreground",
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: `${delays[1]}s` }}
            >
              {title}
            </h1>
            
            {description && (
              <p 
                className={cn(
                  "font-body text-lg md:text-xl max-w-2xl mb-8 opacity-0 transform translate-y-4",
                  useGradient ? "text-white/90" : "text-[#333333] dark:text-white/90",
                  alignLeft ? "" : "mx-auto",
                  isLoaded && "animate-fade-in"
                )}
                style={{ animationDelay: `${delays[2]}s` }}
              >
                {description}
              </p>
            )}
            
            {(ctaText || ctaSecondaryText) && (
              <div 
                className={cn(
                  "flex flex-wrap gap-4 mt-8 opacity-0 transform translate-y-4",
                  alignLeft ? "" : "justify-center",
                  isLoaded && "animate-fade-in"
                )}
                style={{ animationDelay: `${delays[3]}s` }}
              >
                {ctaText && (
                  <Button 
                    asChild 
                    size="lg" 
                    className={cn(
                      "shadow-lg group relative overflow-hidden text-[16px] font-medium transition-all duration-300 transform hover:scale-105",
                      useGradient ? 
                        "bg-white text-primary hover:bg-white/90 border-none" : 
                        "glass-effect backdrop-blur-md bg-primary/90 hover:bg-primary text-white border-primary/30"
                    )}
                  >
                    <Link to={ctaLink || "#"}>
                      <span className="relative z-10 font-medium">{ctaText}</span>
                    </Link>
                  </Button>
                )}
                
                {ctaSecondaryText && (
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className={cn(
                      "text-[16px] font-medium transition-all duration-300 transform hover:scale-105",
                      useGradient ? 
                        "glass-effect backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" : 
                        "glass-effect backdrop-blur-md bg-white/10 border-primary/20 dark:bg-black/20 dark:border-white/10 hover:bg-white/20 text-primary dark:text-white"
                    )}
                  >
                    <Link to={ctaSecondaryLink || "#"}>{ctaSecondaryText}</Link>
                  </Button>
                )}
              </div>
            )}
            
            {trustBadges && (
              <div 
                className={cn(
                  "mt-16 opacity-0 transform translate-y-4",
                  isLoaded && "animate-fade-in"
                )}
                style={{ animationDelay: "1s" }}
              >
                {trustBadges}
              </div>
            )}
          </div>

          {/* Graphic Image */}
          {graphicImage && (
            <div 
              className={cn(
                "md:w-1/2 flex justify-center md:justify-end opacity-0 transform translate-y-4",
                isLoaded && "animate-fade-in"
              )}
              style={{ animationDelay: `${delays[4]}s` }}
            >
              <div className="relative w-full max-w-lg animate-float">
                <img 
                  src={graphicImage}
                  alt="Tech illustration"
                  className="w-full h-auto drop-shadow-xl"
                />

                {/* Decorative Elements */}
                <div className="absolute -z-10 -left-4 -top-4 w-72 h-72 bg-primary/30 rounded-full filter blur-3xl opacity-70 animate-pulse-glow"></div>
                <div className="absolute -z-10 -right-4 -bottom-4 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl opacity-70 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          )}

          {children}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0",
          useGradient ? "text-white/80 hover:text-white" : "text-primary/80 hover:text-primary",
          "transition-all duration-500",
          isLoaded && "animate-fade-in"
        )}
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  );
}
