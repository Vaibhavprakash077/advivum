
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { Separator } from "@/components/ui/separator";
import { SectionTitle } from "@/components/ui/section-title";

export default function TermsOfService() {
  return (
    <PageLayout>
      <HeroSection
        title="Terms of Service"
        subtitle="Effective Date: April 17, 2025"
        darkBackground={true}
      />
      
      <section className="py-16 px-4 bg-gradient-to-b from-[#1a1f36] to-[#141824]">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#E0E0E0] text-lg md:text-xl leading-relaxed mb-8 font-medium">
              Welcome to AD Vivum. These Terms of Service govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <div className="mb-12">
              <SectionTitle 
                title="Use of Services" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                You may use our services solely for lawful purposes and in accordance with these Terms of Service. 
                You agree not to use our services:
              </p>
              <ul className="space-y-2 mt-4 text-[#E0E0E0] text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>In any way that violates any applicable law or regulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To transmit any material that is defamatory, offensive, or otherwise objectionable</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To infringe upon or violate our intellectual property rights or the rights of others</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Intellectual Property" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                The content, features, and functionality of our services are owned by AD Vivum and are protected 
                by copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="User Content" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                By submitting content to our services, you grant us a non-exclusive, perpetual, royalty-free, 
                worldwide license to use, modify, perform, display, reproduce, and distribute such content.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Disclaimer of Warranties" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                Our services are provided "as is" and "as available" without any warranties of any kind, 
                either express or implied.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Limitation of Liability" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                In no event shall AD Vivum be liable for any indirect, incidental, special, consequential, 
                or punitive damages arising out of or relating to your use of our services.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Changes to Terms" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                We may revise these Terms of Service at any time without notice. By continuing to use our 
                services after any changes, you accept the revised Terms.
              </p>
            </div>
            
            <div className="mb-8">
              <SectionTitle 
                title="Contact Us" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                If you have any questions about these Terms, please contact us at 
                <a href="mailto:info@advivum.im" className="text-primary hover:text-primary/80 ml-1">info@advivum.im</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
