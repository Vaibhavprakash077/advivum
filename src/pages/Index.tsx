import { Flame, BookOpen, GraduationCap, FileCheck, Sparkles, Users, Award, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/section-title";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { TrustBadges, defaultBadges } from "@/components/ui/trust-badges";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";
import Logo from "@/components/layout/Logo";

export default function Index() {
  // Function to handle smooth scrolling to sections within the page
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Custom title element with styled AD and Vivum
  const customTitle = (
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 relative inline-block px-2 py-1">
      <span className="font-bold text-white">AD</span>
      <span className="italic bg-gradient-to-r from-[#00FFFF] via-[#00FF88] to-[#FF8C00] bg-clip-text text-transparent tracking-wide">Vivum</span>
    </h1>
  );

  return (
    <PageLayout>
      {/* Enhanced Hero Section with Full Height and Enhanced Typography */}
      <HeroSection
        title={customTitle}
        subtitle="Mentoring Minds, Shaping Futures"
        description="Empowering researchers and educators with AI-driven tools, expert mentorship, and innovative publication support."
        ctaText="Explore Services"
        ctaLink="/services" 
        ctaSecondaryText="Learn More"
        ctaSecondaryLink="/about"
        n8nStyle={true}
        darkBackground={true}
        useParticles={true}
        alignLeft={false}
        fullHeight={true} 
      />

      {/* Services Overview */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive support for your research and learning journey"
            showLine={true}
            revealOnScroll={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Research Mentorship"
              description="Personalized guidance to elevate your research skills and impact."
              icon={<BookOpen className="h-10 w-10" />}
              linkHref="/services#mentorship"
              className="animate-fade-in [animation-delay:200ms]"
              hoverContent={
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>One-on-one sessions with experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Customized research plan development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Regular progress tracking and feedback</span>
                  </li>
                </ul>
              }
            />
            
            <ServiceCard
              title="Publication Assistance"
              description="Expert support for manuscript preparation, submission, and successful publication."
              icon={<FileCheck className="h-10 w-10" />}
              linkHref="/services#publication"
              className="animate-fade-in [animation-delay:400ms]"
              hoverContent={
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Journal selection guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Manuscript editing and formatting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Response to reviewer comments</span>
                  </li>
                </ul>
              }
            />
            
            <ServiceCard
              title="Courses & Workshops"
              description="Master research methodologies and innovation with our expert-led programs."
              icon={<GraduationCap className="h-10 w-10" />}
              linkHref="/services#courses"
              className="animate-fade-in [animation-delay:600ms]"
              hoverContent={
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Live online and in-person options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Hands-on practical exercises</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Certification upon completion</span>
                  </li>
                </ul>
              }
            />
            
            <ServiceCard
              title="Vivum.App"
              description="Our AI-powered platform for evidence synthesis—transforming research efficiency."
              icon={<Sparkles className="h-10 w-10" />}
              linkHref="/vivum-app"
              className="animate-fade-in [animation-delay:800ms]"
              hoverContent={
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Automated data extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Intelligent analysis tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Collaboration features</span>
                  </li>
                </ul>
              }
            />
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="Specialized Solutions" 
            subtitle="Supporting researchers and organizations at every step"
            showLine={true}
            gradient={true}
            revealOnScroll={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="IPR Services"
              description="Protection for your intellectual property and innovation."
              icon={<Award className="h-10 w-10" />}
              linkHref="/services#ipr"
              className="animate-fade-in [animation-delay:200ms]"
            />
            
            <ServiceCard
              title="Company Registration"
              description="Streamlined business setup and compliance solutions."
              icon={<Building className="h-10 w-10" />}
              linkHref="/services#registration"
              className="animate-fade-in [animation-delay:400ms]"
            />
            
            <ServiceCard
              title="Entrepreneurship Support"
              description="Guidance for researchers venturing into entrepreneurship."
              icon={<Users className="h-10 w-10" />}
              linkHref="/services#entrepreneurship"
              className="animate-fade-in [animation-delay:600ms]"
            />
            
            <ServiceCard
              title="Web Solutions"
              description="Custom web development for research organizations and projects."
              icon={<Globe className="h-10 w-10" />}
              linkHref="/services#web"
              className="animate-fade-in [animation-delay:800ms]"
            />
          </div>
        </div>
      </section>

      {/* Vivum.App Spotlight */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Discover Vivum.App</h2>
              <p className="text-lg mb-6 text-[#222222] font-medium">
                Our AI-powered platform for evidence synthesis is transforming research efficiency.
                Streamline your literature review process and focus on insights rather than data management.
              </p>
              <ul className="space-y-3 mb-8 text-[#222222]">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium text-white">Automated data extraction from research papers</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium text-white">Intelligent organization of research findings</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium text-white">Collaborative research environment</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium text-white">Time-saving analysis tools</span>
                </li>
              </ul>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                <a href="https://vivum.app" target="_blank" rel="noopener noreferrer">
                  Sign Up Now
                </a>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-xl animate-slide-in-right group transform transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
                alt="Vivum.App Interface" 
                className="w-full h-auto rounded-lg transform transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Vivum.App</h3>
                  <p>Revolutionizing evidence synthesis and research workflows</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-muted/30 to-secondary/5">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Ready to Start Your Journey?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            Join AD Vivum today and transform your research and learning experience with expert guidance and cutting-edge tools.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-fade-in [animation-delay:400ms]">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
