
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center" | "right";
  gradient?: boolean;
  showLine?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  className,
  align = "center",
  gradient = false,
  showLine = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "space-y-2 mb-10 animate-fade-in",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl",
        gradient && "bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      )}>
        {title}
      </h2>
      
      {showLine && (
        <div className={cn(
          "h-1 bg-gradient-to-r from-primary to-secondary rounded-full", 
          align === "center" ? "mx-auto w-24" : align === "right" ? "ml-auto w-24" : "w-24"
        )} />
      )}
      
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
