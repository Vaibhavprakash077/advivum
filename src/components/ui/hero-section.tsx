
import { cn } from "@/lib/utils";
import { ParticlesBackground } from "./particles-background";
import { Link } from "react-router-dom";

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
  ctaText?: string;           
  ctaLink?: string;           
  ctaSecondaryText?: string;  
  ctaSecondaryLink?: string;  
  darkBackground?: boolean;   
  n8nStyle?: boolean;         
  alignLeft?: boolean;        
  fullHeight?: boolean;       
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
  fullHeight = false,           
}: HeroSectionProps) {
  // Helper function to determine if link is internal or external
  const isExternalLink = (link: string) => {
    return link.startsWith('http://') || link.startsWith('https://');
  };

  // Helper function to handle hash links (scrolling to section)
  const handleHashLink = (event: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    event.preventDefault();
    if (hash.startsWith('#')) {
      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

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
          
          {/* Enhanced CTA buttons with proper link handling and accessibility */}
          {(ctaText || ctaSecondaryText) && (
            <div className={cn(
              "mt-10 flex flex-wrap gap-5",
              align === "center" && !alignLeft && "justify-center",
              align === "right" && "justify-end"
            )}>
              {ctaText && ctaLink && (
                isExternalLink(ctaLink) ? (
                  <a 
                    href={ctaLink} 
                    className={cn(
                      "inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                      n8nStyle ? "bg-gradient-to-r from-[#00C4B4] to-[#F28C38]" : "bg-primary"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ctaText} - opens in a new tab`}
                  >
                    {ctaText}
                  </a>
                ) : (
                  <Link 
                    to={ctaLink} 
                    className={cn(
                      "inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl",
                      n8nStyle ? "bg-gradient-to-r from-[#00C4B4] to-[#F28C38]" : "bg-primary"
                    )}
                    aria-label={ctaText}
                  >
                    {ctaText}
                  </Link>
                )
              )}
              
              {ctaSecondaryText && ctaSecondaryLink && (
                ctaSecondaryLink.startsWith('#') ? (
                  <a 
                    href={ctaSecondaryLink} 
                    onClick={(e) => handleHashLink(e, ctaSecondaryLink)}
                    className="inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-foreground bg-transparent border-2 border-foreground/30 hover:bg-muted transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    aria-label={ctaSecondaryText}
                  >
                    {ctaSecondaryText}
                  </a>
                ) : isExternalLink(ctaSecondaryLink) ? (
                  <a 
                    href={ctaSecondaryLink} 
                    className="inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-foreground bg-transparent border-2 border-foreground/30 hover:bg-muted transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${ctaSecondaryText} - opens in a new tab`}
                  >
                    {ctaSecondaryText}
                  </a>
                ) : (
                  <Link 
                    to={ctaSecondaryLink} 
                    className="inline-flex items-center px-8 py-4 rounded-md text-lg font-semibold text-foreground bg-transparent border-2 border-foreground/30 hover:bg-muted transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    aria-label={ctaSecondaryText}
                  >
                    {ctaSecondaryText}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
