
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionTitle } from "@/components/ui/section-title";
import { TeamSection, TeamMember } from "@/components/ui/team-section";
import { ScrollFadeIn } from "@/components/ui/scroll-fade-in";
import { useStaggeredFade } from "@/hooks/use-staggered-fade";
import { Flame, Target, BookOpen, Users, Lightbulb, Compass, Award, Rocket } from "lucide-react";

// Team members data
const teamMembers: TeamMember[] = [
  {
    name: "Dr. Waqar M. Naqvi",
    title: "Founder Director",
    description: "Dr. Waqar M. Naqvi is the visionary Founder Director of Advivum Research and Education. A distinguished scholar and educator, he holds multiple doctoral degrees including a PhD and a PhDs in Health Professions Education (HPE). His contributions to academic excellence and healthcare innovation have earned him prestigious honors such as the Fellowship of the Indian Association of Physiotherapists (FIAP) and recognition as an International FAIMER Fellow.<br/><br/>With a strong foundation in healthcare research, Dr. Naqvi has dedicated his career to advancing evidence-based practices, fostering interdisciplinary education, and mentoring future leaders in health sciences. His academic and research work is globally recognized, as reflected in his extensive publications and international collaborations.<br/><br/>Dr. Naqvi brings unparalleled expertise and leadership to Advivum, guiding its mission to bridge the gap between education and applied research in healthcare.",
    image: "/lovable-uploads/waqar_img.jpg",
    orcidId: "0000-0003-4484-8225",
    category: "leadership",
    quote: "Education without research is like a bird with one wing. We need both to soar."
  },
  {
    name: "Mr. Ujjwal Tiwary",
    title: "Health EdTech Specialist",
    description: "Ujjwal Tiwary is a dynamic Health EdTech Specialist at Advivum Research and Education, blending clinical insight with a passion for digital learning and research innovation. With a foundation in physiotherapy from Rajiv Gandhi University of Health Sciences, he brings a multidisciplinary perspective rooted in rehabilitation sciences, health education, and emerging technologies.<br/><br/>Ujjwal's contributions to the field span across academic research, public speaking, and global collaboration. He has presented systematic reviews at international physiotherapy conferences, focusing on areas like sports wearables, robotic rehab, and ophthalmologic physiotherapy. As a published author in PLOS ONE and inventor of a TMJ rehabilitation device, Ujjwal exemplifies scientific rigor and creativity.<br/><br/>He also works with platforms like Physiopedia, IOC, WHO, and FIFA. At Advivum, he leads tech-enabled educational strategies for health professionals.",
    image: "/lovable-uploads/db8f1834-15e7-4840-a254-4b45fd35f50b.png",
    orcidId: "0009-0009-5680-5311",
    category: "education",
    quote: "Technology is transforming how we learn and practice healthcare - embracing this change is key to future success."
  }
];

// Mission features with icons
const missionFeatures = [
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Excellence in Research",
    description: "Promoting rigorous methodologies and innovative approaches."
  },
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Knowledge Accessibility",
    description: "Making advanced research techniques accessible to all."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Community Building",
    description: "Creating networks of researchers, educators, and innovators."
  }
];

// Vision features with icons
const visionFeatures = [
  {
    icon: <Lightbulb className="h-6 w-6 text-secondary" />,
    title: "Innovation",
    description: "Embracing new technologies and methodologies."
  },
  {
    icon: <Compass className="h-6 w-6 text-secondary" />,
    title: "Guidance",
    description: "Providing clear pathways for academic and research success."
  },
  {
    icon: <Rocket className="h-6 w-6 text-secondary" />,
    title: "Advancement",
    description: "Propelling research and education to new heights."
  }
];

export default function About() {
  // Use staggered animation delays for timeline items
  const timelineDelays = useStaggeredFade({ totalItems: 4, delayIncrement: 0.3 });

  return (
    <PageLayout>
      {/* Enhanced Hero Section with improved typography and contrast */}
      <section className="py-24 px-4 flex items-center justify-center bg-gradient-to-br from-background to-muted/50 dark:from-background dark:to-muted/20">
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About AD Vivum
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
          <p className="text-xl md:text-2xl font-medium mb-8 leading-relaxed text-foreground/90 dark:text-foreground/90 animate-fade-in [animation-delay:200ms]">
            At Advivum, we mentor minds and shape futures by bridging research, technology, and education.
          </p>
        </div>
      </section>

      {/* Mission and Vision with enhanced hover effects and animations */}
      <section className="py-16 px-4 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollFadeIn direction="up" className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:w-16 after:h-1 after:bg-primary after:bottom-0 after:left-0 after:mt-2 after:rounded-full">Our Mission</h2>
              <p className="text-lg mb-8 dark:text-gray-100">
                To transform the research landscape by empowering individuals with the knowledge, tools, and support they need to excel in their academic and professional endeavors.
              </p>
              <div className="space-y-6">
                {missionFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="mr-4 p-3 bg-primary/10 rounded-full transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground dark:text-neutral-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollFadeIn>
            
            <ScrollFadeIn direction="up" delay={0.3} className="space-y-6">
              <h2 className="text-3xl font-bold mb-6 relative inline-block after:content-[''] after:absolute after:w-16 after:h-1 after:bg-secondary after:bottom-0 after:left-0 after:mt-2 after:rounded-full">Our Vision</h2>
              <p className="text-lg mb-6 dark:text-gray-100">
                We envision a world where research excellence is attainable for all, where technology enhances rather than complicates the discovery process, and where knowledge flows freely between disciplines and communities.
              </p>
              <p className="text-lg dark:text-gray-100">
                AD Vivum stands at the intersection of traditional academic rigor and cutting-edge technology, creating bridges that connect researchers with the tools, knowledge, and networks they need to thrive in an increasingly complex landscape.
              </p>
              
              <div className="space-y-6 mt-8">
                {visionFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="mr-4 p-3 bg-secondary/10 rounded-full transition-all duration-300 group-hover:bg-secondary/20 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg group-hover:text-secondary transition-colors duration-300">{feature.title}</h3>
                      <p className="text-muted-foreground dark:text-neutral-200">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-muted/30 rounded-lg border flex items-center transform transition-all duration-300 hover:shadow-lg hover:border-primary/30">
                <Flame className="h-12 w-12 text-secondary mr-6" />
                <div>
                  <h3 className="font-medium text-lg">Our Name</h3>
                  <p className="text-muted-foreground dark:text-neutral-200">&#34;AD Vivum&#34; comes from the Latin phrase meaning &#34;to the living&#34; or &#34;from life,&#34; reflecting our commitment to bringing research to life and making it relevant in the real world.</p>
                </div>
              </div>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* Company Background with enhanced timeline */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/40 to-muted/10 dark:from-muted/10 dark:to-background">
        <div className="container">
          <SectionTitle 
            title="Our History" 
            subtitle="The journey of AD Vivum from concept to reality"
            gradient={true}
          />
          
          <div className="relative border-l-4 border-primary/20 ml-4 pl-8 py-4 space-y-12">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description: "AD Vivum began as a small research consulting service, helping doctoral students navigate complex research methodologies and publication processes."
              },
              {
                year: "2020",
                title: "Expanding Services",
                description: "We expanded our offerings to include comprehensive publication assistance and specialized workshops for researchers across disciplines."
              },
              {
                year: "2022",
                title: "Digital Transformation",
                description: "The development of Vivum.App marked our entry into educational technology, bringing AI-powered tools to researchers worldwide."
              },
              {
                year: "2025",
                title: "Today and Beyond",
                description: "Now a comprehensive research and education partner, AD Vivum continues to innovate at the intersection of academia, technology, and professional development."
              }
            ].map((item, index) => (
              <ScrollFadeIn 
                key={index}
                delay={timelineDelays[index]}
                distance={50}
                className="relative"
              >
                <div className="absolute -left-12 p-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-md transform transition-transform duration-300 hover:scale-110">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{item.year}: </span>
                  {item.title}
                </h3>
                <p className="text-lg dark:text-gray-100">
                  {item.description}
                </p>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection members={teamMembers} />

      {/* Contact Information with hover effects */}
      <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Get in Touch</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto dark:text-gray-100">
            Have questions about our services or want to learn more about how we can help you?
            Reach out to our team.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <div className="bg-background dark:bg-card p-6 rounded-lg shadow-md w-full max-w-xs border border-transparent hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-4 text-primary">Contact Details</h3>
              <p className="mb-2 dark:text-neutral-200"><strong>Email:</strong> connect@vivum.im</p>
              <p className="mb-2 dark:text-neutral-200"><strong>Phone:</strong> +91 9021699000</p>
            </div>
            <div className="bg-background dark:bg-card p-6 rounded-lg shadow-md w-full max-w-xs border border-transparent hover:border-secondary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <h3 className="font-bold text-lg mb-4 text-secondary">Office Hours</h3>
              <p className="mb-2 dark:text-neutral-200"><strong>Monday-Friday:</strong> 9:00 AM - 6:00 PM EST</p>
              <p className="dark:text-neutral-200"><strong>Weekends:</strong> By appointment only</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
