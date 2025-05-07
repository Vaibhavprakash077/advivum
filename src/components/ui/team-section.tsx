
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionTitle } from "@/components/ui/section-title";
import { ExternalLink } from "lucide-react";

type TeamMember = {
  name: string;
  title: string;
  description: string;
  image: string;
  orcidId?: string;
};

interface TeamSectionProps {
  members: TeamMember[];
}

export function TeamSection({ members }: TeamSectionProps) {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container">
        <SectionTitle 
          title="Our Team" 
          subtitle="Meet the experts behind Advivum"
          showLine={true}
          revealOnScroll={true}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
          {members.map((member, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 flex justify-center items-center p-6">
                  <Avatar className="h-48 w-48 rounded-full">
                    <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{member.name}</h3>
                  <p className="text-primary font-medium mb-4 dark:text-gray-100">{member.title}</p>
                  <div 
                    className="text-muted-foreground dark:text-neutral-200 mb-4 text-sm"
                    dangerouslySetInnerHTML={{ __html: member.description }}
                  />
                  {member.orcidId && (
                    <a 
                      href={`https://orcid.org/${member.orcidId}`}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-sm text-primary hover:text-primary/80 dark:hover:text-primary/90"
                    >
                      ORCID iD: {member.orcidId}
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
