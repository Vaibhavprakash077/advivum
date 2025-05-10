import { Flame, BookOpen, GraduationCap, FileCheck, Sparkles, Users, Award, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { SectionTitle } from "@/components/ui/section-title";
import { HeroSection } from "@/components/ui/hero-section";
import { ServiceCard } from "@/components/ui/service-card";
import { CourseCard } from "@/components/ui/course-card";
import { TrustBadges, defaultBadges } from "@/components/ui/trust-badges";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";
import { TechWorkflowGraphic } from "@/components/ui/tech-workflow-graphic";
import Logo from "@/components/layout/Logo";

// Sample featured courses
const featuredCourses = [
  {
    title: "Advanced Research Methodology",
    description: "Learn cutting-edge research methods and analytical frameworks.",
    date: "Starting June 15, 2025",
    duration: "8 weeks",
    format: "Online & In-person",
    category: "Research Publication",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "AI Tools for Systematic Reviews",
    description: "Master the use of AI and automation in literature reviews and evidence synthesis.",
    date: "Starting July 20, 2025",
    duration: "6 weeks",
    format: "Online",
    category: "AI for Research",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Medical Research Writing",
    description: "Specialized course on writing and publishing medical research papers.",
    date: "Starting August 5, 2025",
    duration: "10 weeks",
    format: "Hybrid",
    category: "Medical Education",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Index() {
  return (
    <PageLayout>
      {/* N8N Style Hero Section */}
      <HeroSection
        title={
          <span className="text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-[#00C4B4] to-white">
            ADVivum: Mentoring Minds, Shaping Futures
          </span>
        }
        subtitle="Empowering Research & Education"
        description="Empowering researchers and educators with AI-driven tools, expert mentorship, and innovative publication support."
        ctaText="Explore Services"
        ctaLink="/services"
        ctaSecondaryText="Learn More"
        ctaSecondaryLink="/about"
        n8nStyle={true}
        graphicComponent={<TechWorkflowGraphic />}
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

      {/* Featured Courses */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Featured Courses" 
            subtitle="Enhance your skills with our expert-led programs"
            revealOnScroll={true}
            showLine={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course, index) => (
              <CourseCard
                key={index}
                {...course}
                link="https://vivum.im/login/index.php"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90">
              <a href="https://vivum.im/login/index.php" target="_blank" rel="noopener noreferrer">
                View All Courses
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Vivum.App Spotlight */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Discover Vivum.App</h2>
              <p className="text-lg mb-6">
                Our AI-powered platform for evidence synthesis is transforming research efficiency.
                Streamline your literature review process and focus on insights rather than data management.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Automated data extraction from research papers</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Intelligent organization of research findings</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Collaborative research environment</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Time-saving analysis tools</span>
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
