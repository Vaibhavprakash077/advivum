
import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock, 
  CheckCircle 
} from "lucide-react";
import WhatsAppSection from "@/components/ui/whatsapp-section";
import WhatsAppFloatingButton from "@/components/ui/whatsapp-floating-button";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const { name, email, message } = formState;
      const { error: supabaseError } = await supabase
        .from("contacts")
        .insert([{ name, email, message }]);
      if (supabaseError) {
        setError("Sorry, something went wrong. Please try again.");
        setIsSubmitting(false);
        return;
      }
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
      // Hide the success message after 5s
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (e: any) {
      setError("Sorry, something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {/* Hero Section with updated title and tagline styling */}
      <HeroSection
        title="" // Adding empty title to satisfy the type requirement
        titleElement={
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-3 tracking-tight font-modern bg-gradient-to-r from-white via-white/95 to-white/85 bg-clip-text text-transparent animate-fade-in">
              ADVivum
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl italic font-medium bg-gradient-to-r from-[#00C4B4] via-[#7EDFD3] to-[#F28C38] bg-clip-text text-transparent mb-4 animate-fade-in [animation-delay:300ms]">
              Mentoring Minds, Shaping Futures
            </p>
          </div>
        }
        aboutStyle={true}
        useParticles={true}
      />

      {/* Contact Form and Info */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-6 flex items-start">
                  <CheckCircle className="h-6 w-6 mr-3 flex-shrink-0 text-green-500" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. We'll respond to your inquiry shortly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                      required
                    />
                  </div>

                  {error && (
                    <div className="text-red-600 bg-red-50 border border-red-100 rounded p-3">
                      {error}
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in [animation-delay:300ms]">
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground mb-8">
                Reach out directly or visit us at our office. We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <a href="mailto:connect@vivum.im" className="text-muted-foreground hover:text-primary">
                      connect@vivum.im
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Phone</h3>
                    <a href="tel:+919545685143" className="text-muted-foreground hover:text-primary">
                      +91 9545685143
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 p-3 bg-primary/10 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Weekends: By appointment only
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/30">
        <div className="container">
          <WhatsAppSection />
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px] animate-fade-in">
            {/* Replace with actual Google Maps embed */}
            <div className="w-full h-full bg-muted/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-primary/40 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Map would be embedded here in the production version
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-3">What types of research do you support?</h3>
              <p className="text-muted-foreground">
                We support a wide range of research disciplines, including medical, social sciences, 
                engineering, and humanities. Our experts have diverse backgrounds to provide specialized guidance.
              </p>
            </div>
            
            <div className="animate-fade-in [animation-delay:200ms]">
              <h3 className="text-xl font-bold mb-3">How long does the publication process take?</h3>
              <p className="text-muted-foreground">
                The timeline varies depending on the journal and complexity of the research. 
                Our guidance typically helps reduce the overall time to publication by streamlining 
                the preparation and submission process.
              </p>
            </div>
            
            <div className="animate-fade-in [animation-delay:400ms]">
              <h3 className="text-xl font-bold mb-3">Do you offer virtual consultations?</h3>
              <p className="text-muted-foreground">
                Yes, we offer virtual consultations for all our services. This allows us to 
                work with researchers globally, providing support regardless of location.
              </p>
            </div>
            
            <div className="animate-fade-in [animation-delay:600ms]">
              <h3 className="text-xl font-bold mb-3">What makes Vivum.App different from other research tools?</h3>
              <p className="text-muted-foreground">
                Vivum.App is designed specifically for evidence synthesis, with AI capabilities 
                that understand research contexts and methodologies, making it more efficient and 
                accurate for research-specific tasks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with our team today and discover how AD Vivum can support your research journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:connect@vivum.im">
                Email Us <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="tel:+919545685143">
                Contact Us <Phone className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      {/* WhatsApp Floating Button */}
      <WhatsAppFloatingButton />
    </PageLayout>
  );
}
