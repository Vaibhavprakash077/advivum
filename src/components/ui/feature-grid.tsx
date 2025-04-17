
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  items: React.ReactNode[];
  className?: string;
  columns?: number;
}

export function FeatureGrid({ 
  items, 
  className, 
  columns = 6 
}: FeatureGridProps) {
  return (
    <div className={cn("w-full overflow-hidden", className)}>
      <div className="flex flex-wrap justify-center gap-2">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 transition-all hover:scale-105 hover:shadow-lg"
            style={{ 
              animationDelay: `${index * 50}ms`,
              animationDuration: '0.5s',
              animationFillMode: 'both',
              animationName: 'fadeInUp'
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function GradientHeading({ 
  children, 
  subtext,
  className 
}: { 
  children: React.ReactNode;
  subtext?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("text-center my-12", className)}>
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-foreground to-foreground/70 dark:from-primary dark:to-white bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
      {subtext && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtext}
        </p>
      )}
    </div>
  );
}
