
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Flame, Target, BookOpen, Users } from "lucide-react";

// Sample team members data
const teamMembers = [
  {
    name: "Dr. Jane Smith",
    title: "Founder & Research Director",
    bio: "Ph.D. in Data Science with 15+ years of research experience. Passionate about democratizing research methodologies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Prof. Michael Brown",
    title: "Head of Publication Services",
    bio: "Former journal editor with expertise in academic publishing and research communication.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Dr. Emily Chen",
    title: "AI Research Lead",
    bio: "Specialist in AI applications for research synthesis and data analysis.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "David Wilson",
    title: "Educational Technology Director",
    bio: "Innovator in educational technology with a focus on interactive learning platforms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

export default function About() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="About AD Vivum"
        subtitle="Our Story"
        description="At Advivum, we mentor minds and shape futures by bridging research, technology, and education."
      />

      {/* Mission and Vision */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-8">
                To transform the research landscape by empowering individuals with the knowledge, tools, and support they need to excel in their academic and professional endeavors.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Excellence in Research</h3>
                    <p className="text-muted-foreground">Promoting rigorous methodologies and innovative approaches.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Knowledge Accessibility</h3>
                    <p className="text-muted-foreground">Making advanced research techniques accessible to all.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Community Building</h3>
                    <p className="text-muted-foreground">Creating networks of researchers, educators, and innovators.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg mb-6">
                We envision a world where research excellence is attainable for all, where technology enhances rather than complicates the discovery process, and where knowledge flows freely between disciplines and communities.
              </p>
              <p className="text-lg">
                AD Vivum stands at the intersection of traditional academic rigor and cutting-edge technology, creating bridges that connect researchers with the tools, knowledge, and networks they need to thrive in an increasingly complex landscape.
              </p>
              <div className="mt-8 p-6 bg-muted/30 rounded-lg border flex items-center">
                <Flame className="h-12 w-12 text-secondary mr-6" />
                <div>
                  <h3 className="font-medium text-lg">Our Name</h3>
                  <p className="text-muted-foreground">"AD Vivum" comes from the Latin phrase meaning "to the living" or "from life," reflecting our commitment to bringing research to life and making it relevant in the real world.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Background */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="Our History" 
            subtitle="The journey of AD Vivum from concept to reality"
          />
          
          <div className="relative border-l-4 border-primary/20 ml-4 pl-8 py-4 space-y-12">
            <div className="relative animate-fade-in">
              <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">2018: The Beginning</h3>
              <p className="text-lg">
                AD Vivum began as a small research consulting service, helping doctoral students navigate complex research methodologies and publication processes.
              </p>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:300ms]">
              <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">2020: Expanding Services</h3>
              <p className="text-lg">
                We expanded our offerings to include comprehensive publication assistance and specialized workshops for researchers across disciplines.
              </p>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:600ms]">
              <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">2022: Digital Transformation</h3>
              <p className="text-lg">
                The development of Vivum.App marked our entry into educational technology, bringing AI-powered tools to researchers worldwide.
              </p>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:900ms]">
              <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                <span className="font-bold">4</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">2025: Today and Beyond</h3>
              <p className="text-lg">
                Now a comprehensive research and education partner, AD Vivum continues to innovate at the intersection of academia, technology, and professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Our Team" 
            subtitle="Meet the experts who power AD Vivum's services"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.title}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Have questions about our services or want to learn more about how we can help you?
            Reach out to our team.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-background p-6 rounded-lg shadow-md w-full max-w-xs">
              <h3 className="font-bold text-lg mb-4">Contact Details</h3>
              <p className="mb-2"><strong>Email:</strong> info@advivum.im</p>
              <p className="mb-2"><strong>Phone:</strong> +1 (234) 567-890</p>
              <p><strong>Location:</strong> Boston, MA</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md w-full max-w-xs">
              <h3 className="font-bold text-lg mb-4">Office Hours</h3>
              <p className="mb-2"><strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM EST</p>
              <p><strong>Weekends:</strong> By appointment only</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
