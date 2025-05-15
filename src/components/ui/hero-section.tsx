
import { cn } from "@/lib/utils";
import { ParticlesBackground } from "./particles-background";

interface HeroSectionProps {
  title: string | React.ReactNode;  // Changed to accept both string and ReactNode
  titleElement?: React.ReactNode;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  style?: React.CSSProperties;
  aboutStyle?: boolean;
  useParticles?: boolean;
  titleClassName?: string;
  ctaText?: string;           // Added this prop
  ctaLink?: string;           // Added this prop
  ctaSecondaryText?: string;  // Added this prop
  ctaSecondaryLink?: string;  // Added this prop
  darkBackground?: boolean;   // Added this prop
  n8nStyle?: boolean;         // Added this prop
  alignLeft?: boolean;        // Added this prop
  fullHeight?: boolean;       // Added this prop for full viewport height option
}

export function HeroSection({
  title,
  titleElement,
  subtitle,
  description,
  align = "center",
  className,
  style,
  aboutStyle = false,
  useParticles = false,
  titleClassName,
  ctaText,             
  ctaLink,             
  ctaSecondaryText,    
  ctaSecondaryLink,    
  darkBackground,     
  n8nStyle,            
  alignLeft,
  fullHeight = false,  // Default to false to maintain backward compatibility           
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden flex items-center justify-center",
        fullHeight ? "min-h-[100vh]" : "min-h-[50vh]", // Use full height if specified
        aboutStyle ? "bg-gradient-to-br from-primary/10 to-secondary/10" : "",
        darkBackground ? "bg-gradient-to-r from-[#1a1f36] to-[#2b4f5f]" : "",
        className
      )}
      style={style}
    >
      {useParticles && <ParticlesBackground />}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto", 
          (alignLeft || align === "left") && "ml-0 mr-auto text-left",
          align === "right" && "mr-0 ml-auto text-right",
          align === "center" && !alignLeft && "text-center",
        )}>
          {titleElement ? (
            titleElement
          ) : (
            typeof title === 'string' ? (
              <h1 className={cn(
                "text-5xl md:text-6xl lg:text-7xl font-bold mb-8 relative inline-block",
                titleClassName
              )}>
                {title}
              </h1>
            ) : (
              title
            )
          )}
          
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto mb-10">
              {description}
            </p>
          )}
          
          {/* Enhanced CTA buttons with larger size and visual lift */}
          {(ctaText || ctaSecondaryText) && (
            <div className={cn(
              "mt-10 flex flex-wrap gap-5",
              align === "center" && !alignLeft && "justify-center",
              align === "right" && "justify-end"
            )}>
              {ctaText && ctaLink && (
                <a 
                  href={ctaLink} 
                  className={cn(
                    "inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                    n8nStyle ? "bg-gradient-to-r from-[#00C4B4] to-[#F28C38]" : "bg-primary"
                  )}
                >
                  {ctaText}
                </a>
              )}
              
              {ctaSecondaryText && ctaSecondaryLink && (
                <a 
                  href={ctaSecondaryLink} 
                  className="inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-foreground bg-transparent border-2 border-foreground/30 hover:bg-muted transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                >
                  {ctaSecondaryText}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
