
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
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 overflow-hidden",
        backgroundImage ? "bg-cover bg-center" : "bg-muted/30",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in max-w-3xl">
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
              <div className="flex flex-wrap gap-4 justify-center">
                {ctaText && (
                  <Button asChild size="lg">
                    <Link to={ctaLink || "#"}>{ctaText}</Link>
                  </Button>
                )}
                {ctaSecondaryText && (
                  <Button asChild variant="outline" size="lg">
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
