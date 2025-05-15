
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { ParticlesBackground } from "./particles-background";
import { useStaggeredFade } from "@/hooks/use-staggered-fade";

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
  n8nStyle?: boolean;
  graphicComponent?: React.ReactNode;
  darkBackground?: boolean;
  aboutStyle?: boolean;
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
  n8nStyle = false,
  graphicComponent,
  darkBackground = false,
  aboutStyle = false,
}: HeroSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const elementCount = 5;
  const delays = useStaggeredFade({
    baseDelay: 0.1,
    delayIncrement: 0.15,
    totalItems: elementCount,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={cn(
        "relative py-20 md:py-28 overflow-hidden min-h-[100vh] flex items-center",
        aboutStyle
          ? "bg-[#1A1F2C]" // About style dark background
          : darkBackground 
            ? "bg-[#1A1F2C]" // Dark background color
            : useGradient
              ? "bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60"
              : backgroundImage
                ? "bg-cover bg-center"
                : "bg-gradient-to-br from-muted/70 via-background/95 to-background/90 dark:from-background dark:via-background/90 dark:to-background/80",
        className
      )}
      style={
        backgroundImage && !useGradient
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundPositionY: `${scrollPosition * 0.5}px`,
            }
          : {}
      }
    >
      {/* Enhanced Particle Background with more density and interactivity */}
      {useParticles && (
        <ParticlesBackground
          particleColor={
            darkBackground || useGradient || aboutStyle
              ? "rgba(255, 255, 255, 0.3)"
              : "rgba(0, 196, 180, 0.4)"
          }
          particleCount={60}
          particleSpeed={0.8}
          className="opacity-70"
        />
      )}

      {/* Animated gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40 dark:to-background/60 opacity-80 animate-pulse-glow" />

      {backgroundImage && darkOverlay && !useGradient && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {!backgroundImage && !useGradient && !darkBackground && !aboutStyle && (
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      )}

      {/* Additional animated decorative elements */}
      <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-primary/10 rounded-full filter blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-30 animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center",
            aboutStyle ? "text-center justify-center" : 
            alignLeft ? "text-left md:justify-between" : "text-center justify-center"
          )}
        >
          <div
            className={cn(
              "max-w-3xl",
              aboutStyle ? "text-center" :
              alignLeft ? "" : "text-center",
              graphicImage || graphicComponent ? "md:w-1/2 mb-10 md:mb-0" : ""
            )}
          >
            {subtitle && (
              <p
                className={cn(
                  "mb-4 text-lg font-medium uppercase tracking-widest font-heading",
                  aboutStyle || useGradient || darkBackground
                    ? "text-[#E0E0E0]" // Light white for dark backgrounds
                    : "text-primary font-semibold",
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${delays[0]}s` }}
              >
                {subtitle}
              </p>
            )}

            {aboutStyle ? (
              <h1
                className={cn(
                  "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10 bg-gradient-to-r from-[#00C4B4] to-[#FEF7CD] bg-clip-text text-transparent",
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${delays[1]}s` }}
              >
                {title}
                <span className="absolute -z-10 inset-0 blur-xl opacity-10 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-glow"></span>
                <span className="block h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-[#00C4B4] to-[#FEF7CD] rounded-full"></span>
              </h1>
            ) : (
              <h1
                className={cn(
                  "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 relative z-10",
                  useGradient || darkBackground 
                    ? "text-[#FFFFFF]" // Bright white for dark backgrounds
                    : "text-[#2C2C2E]", // Deep black for light backgrounds
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${delays[1]}s` }}
              >
                {title}
                {/* Enhanced gradient glow effect behind title - reduced opacity for better readability */}
                <span className="absolute -z-10 inset-0 blur-xl opacity-10 bg-gradient-to-r from-primary via-secondary to-primary animate-pulse-glow"></span>
              </h1>
            )}

            {description && (
              <p
                className={cn(
                  "font-body text-lg md:text-xl max-w-2xl mb-8 leading-relaxed",
                  aboutStyle || useGradient || darkBackground
                    ? "text-[#E0E0E0]" // Light white for dark backgrounds
                    : "text-[#4A4A4D]", // Medium-dark gray for light backgrounds
                  aboutStyle || !alignLeft ? "mx-auto" : "",
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${delays[2]}s` }}
              >
                {description}
              </p>
            )}

            {(ctaText || ctaSecondaryText) && (
              <div
                className={cn(
                  "flex flex-wrap gap-4 mt-8",
                  aboutStyle || !alignLeft ? "justify-center" : "",
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: `${delays[3]}s` }}
              >
                {ctaText && (
                  <Button
                    asChild
                    size="lg"
                    className={cn(
                      "shadow-lg group relative overflow-hidden text-[16px] font-medium transition-all duration-300 transform hover:scale-105 rounded-lg",
                      aboutStyle || useGradient || darkBackground
                        ? "bg-white text-primary hover:bg-white/90 border-none" // Ensure high contrast on dark backgrounds
                        : "bg-primary text-white hover:bg-primary/90 border-primary/30" // Ensure high contrast on light backgrounds
                    )}
                  >
                    <Link to={ctaLink || "#"}>
                      <span className="relative z-10 font-medium">{ctaText}</span>
                      {/* Add subtle animated gradient on hover */}
                      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    </Link>
                  </Button>
                )}

                {ctaSecondaryText && (
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className={cn(
                      "text-[16px] font-medium transition-all duration-300 transform hover:scale-105 rounded-lg",
                      aboutStyle || useGradient || darkBackground
                        ? "glass-effect backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20" // Ensure visibility on dark backgrounds
                        : "glass-effect backdrop-blur-md bg-white/10 border-primary/20 dark:bg-black/20 dark:border-white/10 hover:bg-white/20 text-primary dark:text-white" // Enhanced contrast for light/dark mode
                    )}
                  >
                    <Link to={ctaSecondaryLink || "#"}>
                      {ctaSecondaryText}
                    </Link>
                  </Button>
                )}
              </div>
            )}

            {trustBadges && (
              <div
                className={cn(
                  "mt-16", 
                  isLoaded ? "animate-fade-in" : "opacity-0"
                )}
                style={{ animationDelay: "1s" }}
              >
                {trustBadges}
              </div>
            )}
          </div>

          {graphicImage && (
            <div
              className={cn(
                "md:w-1/2 flex justify-center md:justify-end",
                isLoaded ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${delays[4]}s` }}
            >
              <div className="relative w-full max-w-lg animate-float">
                <img
                  src={graphicImage}
                  alt="Tech illustration"
                  className="w-full h-auto drop-shadow-xl relative z-10"
                />
                {/* Reduced glow effects opacity for better text readability */}
                <div className="absolute -z-10 -left-4 -top-4 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-glow"></div>
                <div
                  className="absolute -z-10 -right-4 -bottom-4 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-glow"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          )}

          {graphicComponent && (
            <div
              className={cn(
                "md:w-1/2 flex justify-center md:justify-end",
                isLoaded ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${delays[4]}s` }}
            >
              {graphicComponent}
            </div>
          )}

          {children}
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center",
          useGradient || darkBackground || aboutStyle
            ? "text-white hover:text-white" // Brighter white for dark backgrounds
            : "text-primary/80 hover:text-primary",
          "transition-all duration-500 group",
          isLoaded ? "animate-fade-in" : "opacity-0"
        )}
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-sm mb-2 font-medium">Scroll Down</span>
        <ChevronDown className="h-6 w-6 animate-bounce group-hover:text-primary transition-colors" />
      </button>
    </section>
  );
}
