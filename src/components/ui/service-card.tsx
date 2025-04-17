
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkText?: string;
  linkHref?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  linkText = "Learn More",
  linkHref = "#",
  className,
}: ServiceCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1", 
        className
      )}
    >
      <CardHeader>
        {icon && <div className="text-primary mb-4">{icon}</div>}
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {/* Content can be added here */}
        </div>
      </CardContent>
      <CardFooter>
        <Link 
          to={linkHref} 
          className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          {linkText} <ArrowRight className="h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
