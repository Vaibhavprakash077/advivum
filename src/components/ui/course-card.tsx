
import { Link } from "react-router-dom";
import { ArrowRight, CalendarIcon, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  title: string;
  description: string;
  date?: string;
  duration?: string;
  format?: string;
  link?: string;
  image?: string;
  category?: string;
}

export function CourseCard({
  title,
  description,
  date,
  duration,
  format,
  link = "#",
  image,
  category,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {image && (
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        {category && (
          <Badge variant="outline" className="w-fit">
            {category}
          </Badge>
        )}
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2">
          {date && (
            <div className="flex items-center text-sm text-muted-foreground">
              <CalendarIcon className="mr-2 h-4 w-4" />
              <span>{date}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-2 h-4 w-4" />
              <span>{duration}</span>
            </div>
          )}
          {format && (
            <div className="text-sm text-muted-foreground">
              Format: {format}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link to={link}>
            Register Now <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
