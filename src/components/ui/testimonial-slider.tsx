
import { useState, useEffect } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  avatar?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
  className?: string;
}

export function TestimonialSlider({ 
  testimonials, 
  autoplaySpeed = 5000,
  className 
}: TestimonialSliderProps) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [api, autoplaySpeed, isHovering]);

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Carousel 
        setApi={setApi} 
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
              <div className="p-4">
                <Card className="rounded-lg border shadow-sm h-full transition-all duration-300 hover:shadow-md">
                  <CardContent className="pt-8 pb-4 relative">
                    <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                    <blockquote className="text-lg text-muted-foreground italic px-6">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  <CardFooter className="flex items-center gap-4 px-6 pb-6">
                    <Avatar className="h-12 w-12 border-2 border-primary/20">
                      {testimonial.avatar ? (
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                      ) : null}
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {getInitials(testimonial.author)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      {testimonial.title && (
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-12 h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity" />
        <CarouselNext className="hidden md:flex -right-12 h-8 w-8 rounded-full opacity-70 hover:opacity-100 transition-opacity" />
      </Carousel>
      
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 rounded-full transition-all duration-300", 
              current === index 
                ? "w-8 bg-primary" 
                : "w-2 bg-primary/20 hover:bg-primary/40"
            )}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
