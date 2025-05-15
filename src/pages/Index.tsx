import { Flame, BookOpen, GraduationCap, FileCheck, Sparkles, Users, Award, Building, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

export default function Index() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Your Partner for Evidence-Based Digital Health Solutions"
        subtitle="AD Vivum"
        description="We specialize in creating digital tools that transform research into actionable health insights, bridging the gap between academic knowledge and real-world applications."
        ctaText="Explore Our Services"
        ctaLink="/services"
        ctaSecondaryText="Contact Us"
        ctaSecondaryLink="/contact"
        aboutStyle={true}
        useParticles={true}
      />

      {/* What We Do Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle
            title="What We Do"
            subtitle="Bridging Research and Real-World Impact"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in">
              <Flame className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Digital Health Solutions</h3>
              <p className="text-sm text-[#222222] font-medium">Transforming healthcare with innovative technology.</p>
            </Card>
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in [animation-delay:200ms]">
              <BookOpen className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Evidence Synthesis</h3>
              <p className="text-sm text-[#222222] font-medium">Synthesizing research into actionable insights.</p>
            </Card>
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in [animation-delay:400ms]">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Academic Partnerships</h3>
              <p className="text-sm text-[#222222] font-medium">Collaborating with universities to drive innovation.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Expertise Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Our Expertise"
            subtitle="Turning Complexity into Clarity"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-6">AI-Driven Solutions</h3>
              <p className="text-lg mb-6 text-[#222222] font-medium">
                Leveraging artificial intelligence to enhance data analysis and decision-making in healthcare.
              </p>
              <ul className="space-y-3 text-[#222222]">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Predictive analytics for personalized treatment plans</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Automated literature reviews for evidence-based practice</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Machine learning models for disease detection</span>
                </li>
              </ul>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-6">Data Visualization</h3>
              <p className="text-lg mb-6 text-[#222222] font-medium">
                Transforming complex data sets into clear, actionable insights through innovative visualization techniques.
              </p>
              <ul className="space-y-3 text-[#222222]">
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Interactive dashboards for real-time monitoring</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Customizable reports for diverse stakeholders</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Geospatial mapping for public health initiatives</span>
                </li>
              </ul>
            </div>
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
                  <span className="font-medium">Automated data extraction from research papers</span>
                </li>
                <li className="flex items-start">
                  <FileCheck className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Intelligent categorization and synthesis</span>
                </li>
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span className="font-medium">Advanced analysis tools for researchers</span>
                </li>
              </ul>
              <Button asChild size="lg">
                <Link to="/vivum-app">Learn More</Link>
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl animate-slide-in-right">
              <img
                src="/vivum-logo.png"
                alt="Vivum.App"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle
            title="Why Choose Us"
            subtitle="Experience the AD Vivum Advantage"
          />
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in">
              <Award className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Expertise</h3>
              <p className="text-sm text-[#222222] font-medium">Decades of experience in digital health and AI.</p>
            </Card>
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in [animation-delay:200ms]">
              <Building className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Innovation</h3>
              <p className="text-sm text-[#222222] font-medium">Cutting-edge solutions tailored to your needs.</p>
            </Card>
            <Card className="bg-muted/30 p-6 flex flex-col items-center text-center animate-fade-in [animation-delay:400ms]">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-bold mb-2">Impact</h3>
              <p className="text-sm text-[#222222] font-medium">Transforming healthcare on a global scale.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle
            title="Our Clients"
            subtitle="Trusted by Leading Organizations"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://via.placeholder.com/150"
              alt="Client 1"
              className="rounded-lg shadow-md animate-fade-in"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Client 2"
              className="rounded-lg shadow-md animate-fade-in [animation-delay:100ms]"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Client 3"
              className="rounded-lg shadow-md animate-fade-in [animation-delay:200ms]"
            />
            <img
              src="https://via.placeholder.com/150"
              alt="Client 4"
              className="rounded-lg shadow-md animate-fade-in [animation-delay:300ms]"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-fade-in">Ready to Transform Healthcare?</h2>
          <p className="text-lg mb-8 text-[#222222] font-medium animate-fade-in [animation-delay:200ms]">
            Contact us today to learn how AD Vivum can help you achieve your digital health goals.
          </p>
          <Button asChild size="lg" className="animate-fade-in [animation-delay:400ms]">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}
