
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  className?: string;
  hoverContent?: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  icon,
  linkText = "Learn More",
  linkHref = "#",
  className,
  hoverContent,
}: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden h-full transition-all duration-300 border border-border/40",
        "hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 group",
        className
      )}
    >
      <CardHeader>
        {icon && (
          <div className="text-primary mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:text-secondary">
            {icon}
          </div>
        )}
        <CardTitle className="transition-colors duration-300 group-hover:text-primary">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {hoverContent}
        </div>
      </CardContent>
      <CardFooter>
        {hoverContent ? (
          <HoverCard>
            <HoverCardTrigger asChild>
              <Link 
                to={linkHref} 
                className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-secondary"
              >
                {linkText} <ArrowRight className="h-4 w-4 group-hover:animate-pulse" />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 p-4">
              {hoverContent}
            </HoverCardContent>
          </HoverCard>
        ) : (
          <Link 
            to={linkHref} 
            className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-secondary"
          >
            {linkText} <ArrowRight className="h-4 w-4 group-hover:animate-pulse" />
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
