import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  FileCheck, 
  GraduationCap, 
  CheckCircle, 
  ArrowRight, 
  Award, 
  Building, 
  Users, 
  Globe,
  Sparkles
} from "lucide-react";
import { CalendarIcon } from "lucide-react";
import { Clock } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("mentorship");

  // Handle smooth scrolling to sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive Research Support"
        description="Explore our comprehensive services to support your research and learning journey."
      />

      {/* Navigation Tabs for Service Categories */}
      <section className="py-8 px-4 bg-muted/30 sticky top-16 z-30 backdrop-blur-sm">
        <div className="container">
          <Tabs 
            defaultValue="mentorship" 
            value={activeTab}
            onValueChange={(value) => {
              setActiveTab(value);
              scrollToSection(value);
            }}
            className="w-full"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
              <TabsTrigger value="mentorship" className="text-sm md:text-base">
                <BookOpen className="h-4 w-4 mr-2" /> Mentorship
              </TabsTrigger>
              <TabsTrigger value="publication" className="text-sm md:text-base">
                <FileCheck className="h-4 w-4 mr-2" /> Publication
              </TabsTrigger>
              <TabsTrigger value="courses" className="text-sm md:text-base">
                <GraduationCap className="h-4 w-4 mr-2" /> Courses
              </TabsTrigger>
              <TabsTrigger value="additional" className="text-sm md:text-base">
                <Award className="h-4 w-4 mr-2" /> Additional
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Comprehensive Research Support" 
            subtitle="We offer end-to-end services for researchers and learners at every stage"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                At AD Vivum, we understand that research is a journey filled with challenges and opportunities. 
                Our services are designed to provide targeted support exactly where you need it most, helping 
                you achieve excellence in every aspect of your academic and research endeavors.
              </p>
              <p className="text-lg">
                Whether you're a doctoral student navigating complex methodologies, a researcher seeking 
                publication success, or a professional looking to enhance your skills, our expert team is 
                ready to guide you every step of the way.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/30 p-6 rounded-lg flex flex-col items-center text-center animate-fade-in">
                <BookOpen className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Personalized Guidance</h3>
                <p className="text-sm text-muted-foreground">Tailored support for your unique research needs</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg flex flex-col items-center text-center animate-fade-in [animation-delay:200ms]">
                <FileCheck className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Expert Review</h3>
                <p className="text-sm text-muted-foreground">Critical feedback from experienced researchers</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg flex flex-col items-center text-center animate-fade-in [animation-delay:400ms]">
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Skill Development</h3>
                <p className="text-sm text-muted-foreground">Workshops and courses to enhance capabilities</p>
              </div>
              <div className="bg-muted/30 p-6 rounded-lg flex flex-col items-center text-center animate-fade-in [animation-delay:600ms]">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Career Advancement</h3>
                <p className="text-sm text-muted-foreground">Support for publication and professional growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentorship Section */}
      <section id="mentorship" className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="Research Mentorship" 
            subtitle="Personalized guidance to elevate your research skills and impact"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4">What is Research Mentorship?</h3>
              <p className="text-lg mb-6">
                Our mentorship program pairs you with experienced researchers who provide personalized 
                guidance throughout your research journey. From refining your research question to 
                analyzing data and preparing for defense, our mentors are with you every step of the way.
              </p>
              
              <h4 className="text-xl font-bold mb-3">Benefits</h4>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Accelerated skill development and methodological expertise</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Higher success rates in project completion and publication</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Access to established networks in your field of study</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Ongoing support through challenges and research obstacles</span>
                </li>
              </ul>
              
              <Button asChild>
                <Link to="/contact">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              
              <div className="space-y-6">
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">1</span>
                    </div>
                    <h4 className="text-lg font-medium">Initial Consultation</h4>
                  </div>
                  <p className="text-muted-foreground">
                    We begin with a comprehensive assessment of your research goals, existing skills, and areas 
                    where you need support.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">2</span>
                    </div>
                    <h4 className="text-lg font-medium">Mentor Matching</h4>
                  </div>
                  <p className="text-muted-foreground">
                    You're paired with a mentor specialized in your research area who will provide consistent guidance.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">3</span>
                    </div>
                    <h4 className="text-lg font-medium">Personalized Plan</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Together with your mentor, you'll develop a structured plan with clear milestones for your research journey.
                  </p>
                </div>
                
                <div className="bg-background p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-primary/10 rounded-full h-8 w-8 flex items-center justify-center mr-3">
                      <span className="font-bold text-primary">4</span>
                    </div>
                    <h4 className="text-lg font-medium">Ongoing Support</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Regular check-ins, feedback sessions, and practical guidance to keep your research on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publication Assistance Section */}
      <section id="publication" className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Publication Assistance" 
            subtitle="Expert support for manuscript preparation, submission, and successful publication"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold mb-4">Services Offered</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Manuscript Review</h4>
                    <p className="text-muted-foreground">Comprehensive review of your research paper with detailed feedback on structure, methodology, and clarity.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Editing Services</h4>
                    <p className="text-muted-foreground">Professional editing to enhance readability, flow, and adherence to academic standards and journal guidelines.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Journal Selection</h4>
                    <p className="text-muted-foreground">Strategic guidance on selecting the most appropriate journals for your research, maximizing chances of acceptance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Submission Support</h4>
                    <p className="text-muted-foreground">Assistance with the entire submission process, including formatting, cover letters, and response to reviewer comments.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              
              <div className="relative border-l-4 border-primary/20 ml-4 pl-8 py-4 space-y-12">
                <div className="relative">
                  <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                    <span className="font-bold">1</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Manuscript Submission</h4>
                  <p className="text-muted-foreground">
                    Submit your manuscript for initial assessment by our expert team.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                    <span className="font-bold">2</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Comprehensive Review</h4>
                  <p className="text-muted-foreground">
                    Receive detailed feedback on content, structure, methodology, and language.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                    <span className="font-bold">3</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Revision and Refinement</h4>
                  <p className="text-muted-foreground">
                    Work with our editors to implement changes and enhance your manuscript.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-12 p-2 bg-primary text-white rounded-full">
                    <span className="font-bold">4</span>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Publication Strategy</h4>
                  <p className="text-muted-foreground">
                    Develop a targeted approach for journal submission and address potential reviewer concerns.
                  </p>
                </div>
              </div>
              
              <div className="mt-12">
                <Button asChild>
                  <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-muted/30 p-6 rounded-lg">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "The publication assistance from AD Vivum helped me navigate the complex process of journal submission. Their expert guidance on responding to reviewer comments was invaluable, and ultimately led to acceptance in a high-impact journal."
              </blockquote>
              <p className="font-medium">
                Prof. James Wilson, Medical Research Institute
              </p>
            </div>
            <div className="bg-muted/30 p-6 rounded-lg">
              <blockquote className="text-lg italic text-muted-foreground mb-4">
                "As a non-native English speaker, their editing services significantly improved the clarity and readability of my manuscript. Their strategic advice on journal selection saved me months of time in the publication process."
              </blockquote>
              <p className="font-medium">
                Dr. Ana Lopez, Environmental Sciences
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses & Workshops Section */}
      <section id="courses" className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="Courses & Workshops" 
            subtitle="Master research methodologies and innovation with our expert-led programs"
          />
          
          <div className="animate-fade-in mb-16">
            <h3 className="text-2xl font-bold mb-6">Course Categories</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Research Publication</h4>
                <p className="text-muted-foreground mb-4">
                  Comprehensive courses on writing, structuring, submitting, and publishing research papers.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Academic Writing Excellence</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Journal Navigation Strategies</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Responding to Peer Review</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">AI for Research</h4>
                <p className="text-muted-foreground mb-4">
                  Training on leveraging AI tools in research workflows to enhance efficiency and insight.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">AI in Literature Review</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Data Analysis Automation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Ethical AI Implementation</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <div className="mb-4 p-3 bg-primary/10 w-fit rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold mb-3">Medical Education</h4>
                <p className="text-muted-foreground mb-4">
                  Specialized programs for medical professionals and students focusing on research and publication.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Clinical Research Methods</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Medical Writing Fundamentals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">Evidence Synthesis Techniques</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6">Featured Courses</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">Advanced Research Methodology</h4>
                <div className="flex items-center mb-4 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm mr-4">Starting June 15, 2025</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">8 weeks</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Learn cutting-edge research methods and analytical frameworks for producing high-impact scholarly work.
                </p>
                <Button asChild>
                  <a href="https://vivum.im" target="_blank" rel="noopener noreferrer">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              
              <div className="bg-background p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-bold mb-2">AI Tools for Systematic Reviews</h4>
                <div className="flex items-center mb-4 text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  <span className="text-sm mr-4">Starting July 20, 2025</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">6 weeks</span>
                </div>
                <p className="text-muted-foreground mb-4">
                  Master the use of AI and automation in literature reviews and evidence synthesis to save time and improve accuracy.
                </p>
                <Button asChild>
                  <a href="https://vivum.im" target="_blank" rel="noopener noreferrer">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <a href="https://vivum.im" target="_blank" rel="noopener noreferrer">
                  View Full Course Schedule
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section id="additional" className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Additional Services" 
            subtitle="Supporting researchers and organizations beyond the core research process"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {/* IPR Services */}
            <div className="animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" id="ipr">IPR Services</h3>
              </div>
              <p className="text-lg mb-4">
                Protect your intellectual property and innovations with our comprehensive IPR services.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Patent application assistance and guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Trademark registration and protection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Copyright registration for research outputs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>IP strategy development for research organizations</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            {/* Company Registration */}
            <div className="animate-fade-in [animation-delay:200ms]">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" id="registration">Company Registration</h3>
              </div>
              <p className="text-lg mb-4">
                Streamlined business setup and compliance solutions for research startups and organizations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Research startup incorporation services</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Regulatory compliance guidance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Tax registration and planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Legal documentation and contract preparation</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            {/* Entrepreneurship Support */}
            <div className="animate-fade-in [animation-delay:400ms]">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" id="entrepreneurship">Entrepreneurship Support</h3>
              </div>
              <p className="text-lg mb-4">
                Comprehensive guidance for researchers venturing into entrepreneurship and commercialization.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Research commercialization strategy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Business model development</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Investor pitch preparation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Market research and validation</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            
            {/* Web Solutions */}
            <div className="animate-fade-in [animation-delay:600ms]">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full mr-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold" id="web">Web Solutions</h3>
              </div>
              <p className="text-lg mb-4">
                Custom web development for research organizations, projects, and educational initiatives.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Research project websites and platforms</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>E-learning portals and course management systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Research data visualization tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                  <span>Publication repositories and knowledge bases</span>
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Research?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can support your research goals.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}

// Import CalendarIcon and Clock which were used but not defined
function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
