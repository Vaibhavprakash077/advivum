
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Search, 
  Database, 
  Share2, 
  Clock, 
  BarChart, 
  CheckCircle, 
  BrainCircuit,
  Users,
  Sparkles,
  ArrowRight,
  FileText,
  Lightbulb,
  Zap
} from "lucide-react";

export default function VivumApp() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <HeroSection
        title="Vivum.App"
        subtitle="AI-Powered Evidence Synthesis"
        description="Our AI app for evidence synthesis is transforming research efficiency."
        ctaText="Sign Up Now"
        ctaLink="https://vivum.app"
        ctaSecondaryText="Learn More"
        ctaSecondaryLink="#features"
      />

      {/* What is Evidence Synthesis */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">What is Evidence Synthesis?</h2>
              <p className="text-lg mb-6 text-[#222222] font-medium">
                Evidence synthesis is the process of collecting, analyzing, and integrating 
                research findings to provide a comprehensive understanding of a specific 
                topic or question.
              </p>
              <p className="text-lg mb-6 text-[#222222] font-medium">
                Traditionally, this process has been labor-intensive, requiring researchers to 
                manually sort through dozens or even hundreds of research papers, extract 
                relevant data, and systematically analyze the findings.
              </p>
              <p className="text-lg text-[#222222] font-medium">
                At AD Vivum, we've developed Vivum.App to revolutionize this process, 
                using cutting-edge AI technology to automate many of the time-consuming tasks 
                while enhancing accuracy and insight.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Literature Review</h3>
                <p className="text-sm text-[#222222] font-medium">Comprehensive exploration of existing research</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Database className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Data Extraction</h3>
                <p className="text-sm text-[#222222] font-medium">Systematic collection of relevant information</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <BarChart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Analysis</h3>
                <p className="text-sm text-[#222222] font-medium">Critical evaluation of collected evidence</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Share2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Integration</h3>
                <p className="text-sm text-[#222222] font-medium">Synthesis of findings into cohesive insights</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Our AI App Helps */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <SectionTitle 
            title="How Our AI App Helps" 
            subtitle="Streamlines data analysis, enhances accuracy, and accelerates research"
          />
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background p-8 flex flex-col items-center text-center animate-fade-in">
              <div className="rounded-full bg-primary/10 p-4 mb-6">
                <Clock className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Save Time</h3>
              <p className="text-muted-foreground">
                Automate tedious tasks like data extraction and categorization, 
                reducing weeks of work to mere hours.
              </p>
            </Card>
            
            <Card className="bg-background p-8 flex flex-col items-center text-center animate-fade-in [animation-delay:200ms]">
              <div className="rounded-full bg-primary/10 p-4 mb-6">
                <BookOpen className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Improve Accuracy</h3>
              <p className="text-muted-foreground">
                AI-powered analysis reduces human error and ensures consistent 
                application of review criteria across all papers.
              </p>
            </Card>
            
            <Card className="bg-background p-8 flex flex-col items-center text-center animate-fade-in [animation-delay:400ms]">
              <div className="rounded-full bg-primary/10 p-4 mb-6">
                <Lightbulb className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Discover Insights</h3>
              <p className="text-muted-foreground">
                Uncover patterns and relationships across papers that might 
                be missed by traditional review methods.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Key Features" 
            subtitle="Powerful tools designed for researchers"
          />
          
          <Tabs defaultValue="automate" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="automate">Automation</TabsTrigger>
              <TabsTrigger value="interface">Interface</TabsTrigger>
              <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
              <TabsTrigger value="analysis">Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automate" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Automated Synthesis</h3>
                  <p className="text-lg mb-6">
                    Our AI engine automatically extracts key data from research papers, 
                    including methodologies, sample sizes, outcomes, and statistical significance.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Automatic PDF text extraction and parsing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Intelligent categorization of research elements</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Statistical data compilation across studies</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Citation management and bibliography generation</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
                    alt="Automated Synthesis Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interface" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">User-Friendly Interface</h3>
                  <p className="text-lg mb-6">
                    Our intuitive dashboard makes complex research synthesis accessible to 
                    researchers at all levels of expertise.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Drag-and-drop paper upload functionality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Customizable project templates and workflows</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Visual filters for sorting and organizing papers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>One-click export in multiple formats (PDF, DOCX, CSV)</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                    alt="User Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="collaboration" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Collaborative Research</h3>
                  <p className="text-lg mb-6">
                    Enable seamless teamwork among researchers, regardless of geographic location, 
                    with real-time collaboration features.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Real-time multi-user editing and annotation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Role-based permissions and access controls</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Comment and feedback system for peer review</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Activity tracking and version history</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Collaboration Features" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Advanced Analysis Tools</h3>
                  <p className="text-lg mb-6">
                    Powerful analytical capabilities help you gain deeper insights from your 
                    synthesized research data.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Interactive data visualization dashboards</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Meta-analysis and statistical comparison tools</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Literature gap identification algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>Research trend and pattern recognition</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                    alt="Analysis Tools" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Technology Behind */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container">
          <SectionTitle 
            title="The Technology Behind Vivum.App" 
            subtitle="Cutting-edge AI engineered specifically for research contexts"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm animate-fade-in">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Understanding</h3>
              <p className="text-muted-foreground">
                Our AI models are trained on millions of research papers to understand 
                academic structures, methodologies, and specialized terminology across 
                disciplines.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm animate-fade-in [animation-delay:200ms]">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Natural Language Processing</h3>
              <p className="text-muted-foreground">
                Advanced NLP capabilities extract meaning from research papers, 
                accurately identifying methodologies, results, and conclusions even 
                from complex scientific language.
              </p>
            </div>
            
            <div className="bg-background p-8 rounded-lg shadow-sm animate-fade-in [animation-delay:400ms]">
              <div className="bg-primary/10 p-3 rounded-full w-fit mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">
                Our algorithms continuously improve as they process more papers, 
                adapting to disciplinary variations and evolving research conventions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <SectionTitle 
            title="Who Can Benefit" 
            subtitle="Vivum.App serves diverse research needs across disciplines"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex animate-slide-in-left">
              <div className="mr-6 p-4 bg-primary/10 h-fit rounded-full">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Academic Researchers</h3>
                <p className="text-muted-foreground">
                  Streamline literature reviews for grant applications, theses, and 
                  publications. Identify research gaps and opportunities more efficiently.
                </p>
              </div>
            </div>
            
            <div className="flex animate-slide-in-right">
              <div className="mr-6 p-4 bg-primary/10 h-fit rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Systematic Reviewers</h3>
                <p className="text-muted-foreground">
                  Conduct comprehensive, methodologically sound systematic reviews in 
                  less time, with greater accuracy and transparency.
                </p>
              </div>
            </div>
            
            <div className="flex animate-slide-in-left [animation-delay:300ms]">
              <div className="mr-6 p-4 bg-primary/10 h-fit rounded-full">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Medical Professionals</h3>
                <p className="text-muted-foreground">
                  Stay updated on the latest clinical evidence and research developments 
                  relevant to patient care and treatment decisions.
                </p>
              </div>
            </div>
            
            <div className="flex animate-slide-in-right [animation-delay:300ms]">
              <div className="mr-6 p-4 bg-primary/10 h-fit rounded-full">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Research Organizations</h3>
                <p className="text-muted-foreground">
                  Enhance team collaboration on large-scale evidence synthesis projects, 
                  improving efficiency and knowledge management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <div className="bg-background p-8 rounded-lg shadow-sm max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop" 
                  alt="Dr. Emily Rodriguez" 
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <blockquote className="text-xl italic text-muted-foreground mb-6">
                "Vivum.App transformed our systematic review process. What used to take my team 
                months now takes weeks, with better accuracy and deeper insights. The AI-powered 
                data extraction saved us countless hours of manual work."
              </blockquote>
              <div>
                <p className="font-bold">Dr. Emily Rodriguez</p>
                <p className="text-sm text-muted-foreground">Research Director, Medical Institute</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Research?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of researchers who are already saving time and gaining deeper insights with Vivum.App.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://vivum.app" target="_blank" rel="noopener noreferrer">
                Sign Up Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Request a Demo
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Free trial available with no credit card required
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
