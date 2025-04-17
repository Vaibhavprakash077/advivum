
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <HeroSection
        title="Privacy Policy"
        subtitle="Effective Date: April 17, 2025"
      />
      
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              At AD Vivum, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our services.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide when using our services, 
              including but not limited to your name, email address, and telephone number.
            </p>
            
            <h2>How We Use Your Information</h2>
            <p>
              The information we collect may be used to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our services</li>
              <li>Provide customer support</li>
              <li>Monitor the usage of our services</li>
              <li>Detect, prevent and address technical issues</li>
            </ul>
            
            <h2>Disclosure of Your Information</h2>
            <p>
              We may share your information with third-party service providers to perform services on our behalf, 
              but we will not sell your personal information to third parties.
            </p>
            
            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. 
              While we have taken reasonable steps to secure the information you provide to us, please be aware that no 
              security measures are perfect or impenetrable.
            </p>
            
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the 
              new Privacy Policy on this page.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at info@advivum.im.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
