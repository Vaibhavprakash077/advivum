
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
  ctaText,             // Added to function parameters
  ctaLink,             // Added to function parameters
  ctaSecondaryText,    // Added to function parameters
  ctaSecondaryLink,    // Added to function parameters
  darkBackground,      // Added to function parameters
  n8nStyle,            // Added to function parameters
  alignLeft,           // Added to function parameters
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden min-h-[50vh] flex items-center justify-center",
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
                "text-4xl md:text-5xl lg:text-6xl font-bold mb-8 relative inline-block",
                titleClassName
              )}>
                {title}
              </h1>
            ) : (
              title
            )
          )}
          
          {subtitle && (
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
              {description}
            </p>
          )}
          
          {/* Render CTA buttons if provided */}
          {(ctaText || ctaSecondaryText) && (
            <div className={cn(
              "mt-10 flex gap-4",
              align === "center" && !alignLeft && "justify-center",
              align === "right" && "justify-end"
            )}>
              {ctaText && ctaLink && (
                <a 
                  href={ctaLink} 
                  className={cn(
                    "inline-flex items-center px-6 py-3 rounded-md font-medium text-white",
                    n8nStyle ? "bg-gradient-to-r from-[#00C4B4] to-[#F28C38]" : "bg-primary"
                  )}
                >
                  {ctaText}
                </a>
              )}
              
              {ctaSecondaryText && ctaSecondaryLink && (
                <a 
                  href={ctaSecondaryLink} 
                  className="inline-flex items-center px-6 py-3 rounded-md font-medium text-foreground bg-transparent border border-foreground/20 hover:bg-muted"
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
