
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";
import { Separator } from "@/components/ui/separator";
import { SectionTitle } from "@/components/ui/section-title";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <HeroSection
        title="Privacy Policy"
        subtitle="Effective Date: April 17, 2025"
        darkBackground={true}
      />
      
      <section className="py-16 px-4 bg-gradient-to-b from-[#1a1f36] to-[#141824]">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-[#E0E0E0] text-lg md:text-xl leading-relaxed mb-8 font-medium">
              At AD Vivum, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services.
            </p>
            
            <div className="mb-12">
              <SectionTitle 
                title="Information We Collect" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                We may collect personal information that you voluntarily provide when using our services, 
                including but not limited to your name, email address, and telephone number.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="How We Use Your Information" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                The information we collect may be used to:
              </p>
              <ul className="space-y-2 mt-4 text-[#E0E0E0] text-lg leading-relaxed">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Provide and maintain our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Notify you about changes to our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Provide customer support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Monitor the usage of our services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Detect, prevent and address technical issues</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Disclosure of Your Information" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                We may share your information with third-party service providers to perform services on our behalf, 
                but we will not sell your personal information to third parties.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Security of Your Information" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the information you provide to us, please be aware that no 
                security measures are perfect or impenetrable.
              </p>
            </div>
            
            <div className="mb-12">
              <SectionTitle 
                title="Changes to This Privacy Policy" 
                align="left" 
                showLine={true}
                gradient={true}
                revealOnScroll={false}
                titleClassName="text-3xl mb-2"
              />
              <p className="text-[#E0E0E0] text-lg leading-relaxed mt-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page.
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
                If you have questions or concerns about this Privacy Policy, please contact us at 
                <a href="mailto:info@advivum.im" className="text-primary hover:text-primary/80 ml-1">info@advivum.im</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
