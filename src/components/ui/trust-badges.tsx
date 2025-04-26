
import { BadgeCheck, Star, Award, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustBadge {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

export function TrustBadges({ badges, className }: TrustBadgesProps) {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-3 gap-4", className)}>
      {badges.map((badge, index) => (
        <div 
          key={index} 
          className="trust-indicator group animate-fade-in"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-full p-2.5 bg-gradient-to-br from-primary to-secondary bg-clip-padding">
              {badge.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const defaultBadges: TrustBadge[] = [
  {
    icon: <Award className="h-5 w-5 text-white" />,
    title: "Excellence in Research",
    description: "Top-rated research mentorship and support"
  },
  {
    icon: <Award className="h-5 w-5 text-white" />,
    title: "100+ research papers",
    description: "Published with our guidance and support"
  },
  {
    icon: <Users className="h-5 w-5 text-white" />,
    title: "500+ community members",
    description: "Researchers and students we've helped"
  }
];
