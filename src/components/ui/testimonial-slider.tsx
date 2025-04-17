
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

interface Testimonial {
  quote: string;
  author: string;
  title?: string;
  avatar?: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  autoplaySpeed?: number;
}

export function TestimonialSlider({ 
  testimonials, 
  autoplaySpeed = 5000 
}: TestimonialSliderProps) {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [api, autoplaySpeed]);

  return (
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
              <Card className="rounded-lg border shadow-sm h-full">
                <CardContent className="pt-8 relative">
                  <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20" />
                  <blockquote className="text-lg text-muted-foreground italic px-6">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4 px-6 pb-6">
                  {testimonial.avatar && (
                    <div className="rounded-full overflow-hidden h-12 w-12">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.author}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
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
      <CarouselPrevious className="hidden md:flex -left-12" />
      <CarouselNext className="hidden md:flex -right-12" />
      
      <div className="flex justify-center gap-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-8 bg-primary" : "w-2 bg-primary/20"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </Carousel>
  );
}
