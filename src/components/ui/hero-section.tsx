
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 overflow-hidden",
        backgroundImage ? "bg-cover bg-center" : "bg-gradient-to-br from-muted/70 via-muted/30 to-background dark:from-background dark:via-background/80 dark:to-background/40",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && darkOverlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-white/[0.02]" />
      )}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
        style={{ opacity: backgroundImage ? 0 : 0.5 }}
      />
      
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in max-w-4xl">
            {subtitle && (
              <p className="mb-4 text-lg font-medium text-primary uppercase tracking-widest">
                {subtitle}
              </p>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h1>
            {description && (
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                {description}
              </p>
            )}
            {(ctaText || ctaSecondaryText) && (
              <div className="flex flex-wrap gap-4 justify-center mt-8">
                {ctaText && (
                  <Button asChild size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary border-none shadow-lg shadow-primary/20 dark:shadow-primary/10">
                    <Link to={ctaLink || "#"}>{ctaText}</Link>
                  </Button>
                )}
                {ctaSecondaryText && (
                  <Button asChild variant="outline" size="lg" className="backdrop-blur-sm bg-white/10 border-white/20 dark:bg-black/20 dark:border-white/10">
                    <Link to={ctaSecondaryLink || "#"}>{ctaSecondaryText}</Link>
                  </Button>
                )}
              </div>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
