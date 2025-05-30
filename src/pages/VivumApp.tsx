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
        aboutStyle={true}
        useParticles={true}
      />

      {/* What is Evidence Synthesis */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl font-bold mb-6">What is Evidence Synthesis?</h2>
              <p className="text-lg mb-6 text-[#e0e0e0] font-medium leading-relaxed">
                Evidence synthesis is the process of collecting, analyzing, and integrating 
                research findings to provide a comprehensive understanding of a specific 
                topic or question.
              </p>
              <p className="text-lg mb-6 text-[#e0e0e0] font-medium leading-relaxed text-shadow">
                Traditionally, this process has been labor-intensive, requiring researchers to 
                manually sort through dozens or even hundreds of research papers, extract 
                relevant data, and systematically analyze the findings.
              </p>
              <p className="text-lg text-[#e0e0e0] font-medium leading-relaxed text-shadow">
                At AD Vivum, we've developed Vivum.App to revolutionize this process, 
                using cutting-edge AI technology to automate many of the time-consuming tasks 
                while enhancing accuracy and insight.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Search className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Literature Review</h3>
                <p className="text-sm text-[#e0e0e0] font-medium">Comprehensive exploration of existing research</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Database className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Data Extraction</h3>
                <p className="text-sm text-[#e0e0e0] font-medium">Systematic collection of relevant information</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <BarChart className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Analysis</h3>
                <p className="text-sm text-[#e0e0e0] font-medium">Critical evaluation of collected evidence</p>
              </Card>
              
              <Card className="bg-muted/30 p-6 flex flex-col items-center text-center">
                <Share2 className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold mb-2">Integration</h3>
                <p className="text-sm text-[#e0e0e0] font-medium">Synthesis of findings into cohesive insights</p>
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
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-1 md:gap-0 h-auto md:h-10 p-1">
              <TabsTrigger value="automate" className="text-xs md:text-sm py-2">Automation</TabsTrigger>
              <TabsTrigger value="interface" className="text-xs md:text-sm py-2">Interface</TabsTrigger>
              <TabsTrigger value="collaboration" className="text-xs md:text-sm py-2">Collaboration</TabsTrigger>
              <TabsTrigger value="analysis" className="text-xs md:text-sm py-2">Analysis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="automate" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Automated Synthesis</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Our AI engine automatically extracts key data from research papers, 
                    including methodologies, sample sizes, outcomes, and statistical significance.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Automatic PDF text extraction and parsing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Intelligent categorization of research elements</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Statistical data compilation across studies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Citation management and bibliography generation</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop" 
                    alt="Automated Synthesis Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="interface" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">User-Friendly Interface</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Our intuitive dashboard makes complex research synthesis accessible to 
                    researchers at all levels of expertise.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Drag-and-drop paper upload functionality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Customizable project templates and workflows</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Visual filters for sorting and organizing papers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">One-click export in multiple formats (PDF, DOCX, CSV)</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop" 
                    alt="User Interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="collaboration" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Collaborative Research</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Enable seamless teamwork among researchers, regardless of geographic location, 
                    with real-time collaboration features.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Real-time multi-user editing and annotation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Role-based permissions and access controls</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Comment and feedback system for peer review</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Activity tracking and version history</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
                    alt="Collaboration Features" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="mt-8 space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-bold">Advanced Analysis Tools</h3>
                  <p className="text-base md:text-lg leading-relaxed">
                    Powerful analytical capabilities help you gain deeper insights from your 
                    synthesized research data.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Interactive data visualization dashboards</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Meta-analysis and statistical comparison tools</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Literature gap identification algorithms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-base">Research trend and pattern recognition</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg order-first lg:order-last">
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
