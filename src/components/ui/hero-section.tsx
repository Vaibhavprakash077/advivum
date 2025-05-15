
import { cn } from "@/lib/utils";
import { ParticlesBackground } from "./particles-background";

interface HeroSectionProps {
  title: string;
  titleElement?: React.ReactNode;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  style?: React.CSSProperties;
  aboutStyle?: boolean;
  useParticles?: boolean;
  titleClassName?: string; // Add this prop for custom title styling
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
  titleClassName, // Add to function parameters
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden min-h-[50vh] flex items-center justify-center",
        aboutStyle ? "bg-gradient-to-br from-primary/10 to-secondary/10" : "",
        className
      )}
      style={style}
    >
      {useParticles && <ParticlesBackground />}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className={cn(
          "max-w-4xl mx-auto", 
          align === "left" && "ml-0 mr-auto text-left",
          align === "right" && "mr-0 ml-auto text-right",
          align === "center" && "text-center",
        )}>
          {titleElement ? (
            titleElement
          ) : (
            <h1 className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 relative inline-block",
              titleClassName // Add the custom title class here
            )}>
              {title}
            </h1>
          )}
          
          {subtitle && (
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-muted-foreground">
              {subtitle}
            </h2>
          )}
          
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
