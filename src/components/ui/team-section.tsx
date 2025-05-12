import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, ExternalLink, GraduationCap, Users } from "lucide-react";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";
import { useStaggeredFade } from "@/hooks/use-staggered-fade";

export type TeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
  orcidId?: string;
  quote?: string;
  category: "research" | "education" | "leadership";
};

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  const [isClient, setIsClient] = useState(false);
  const delays = useStaggeredFade({ totalItems: members.length });

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const getCategoryIcon = (category: "research" | "education" | "leadership") => {
    switch(category) {
      case "research":
        return <Brain className="h-4 w-4" />;
      case "education":
        return <GraduationCap className="h-4 w-4" />;
      case "leadership":
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background soft gradient effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70 pointer-events-none" />
      
      <div className="container relative z-10">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the experts behind Advivum"
          showLine={true}
          revealOnScroll={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {members.map((member, index) => (
            isClient ? (
              <ScrollFadeIn 
                key={index} 
                delay={delays[index]} 
                distance={40}
              >
                <Card className="overflow-hidden dark:bg-black/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 rounded-2xl">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="md:w-1/3 flex justify-center items-center p-6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-60" />
                      <Avatar className="h-48 w-48 rounded-full border-4 border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.2)] relative z-10 hover:scale-105 transition-transform duration-300">
                        <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                        <AvatarFallback className="text-2xl text-white bg-primary/80">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="md:w-2/3 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                          <Badge 
                            variant="secondary" 
                            className="flex items-center gap-1 ml-2"
                          >
                            {getCategoryIcon(member.category)}
                            <span>{member.category || "Team"}</span>
                          </Badge>
                        </div>
                        <p className="text-primary font-medium mb-4 dark:text-gray-100">{member.title}</p>
                        <div 
                          className="text-gray-800 dark:text-neutral-200 mb-6 text-sm leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: member.description }}
                        />
                      </div>
                      
                      <div className="space-y-3">
                        {member.quote && (
                          <div className="italic text-sm text-white/80 py-2 px-3 bg-primary/10 rounded-lg border-l-4 border-primary/50">
                            "{member.quote}"
                          </div>
                        )}
                        
                        {member.orcidId && (
                          <a 
                            href={`https://orcid.org/${member.orcidId}`}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex items-center text-sm text-primary hover:text-primary/80 dark:text-primary hover:underline transition-colors group"
                          >
                            <span>ORCID iD: {member.orcidId}</span>
                            <ExternalLink className="h-3 w-3 ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </ScrollFadeIn>
            ) : (
              <div key={index} className="min-h-[300px]"></div> // Placeholder during server rendering
            )
          ))}
        </div>
      </div>
    </section>
  );
}
