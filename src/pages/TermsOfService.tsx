
import PageLayout from "@/components/layout/PageLayout";
import { HeroSection } from "@/components/ui/hero-section";

export default function TermsOfService() {
  return (
    <PageLayout>
      <HeroSection
        title="Terms of Service"
        subtitle="Effective Date: April 17, 2025"
      />
      
      <section className="py-16 px-4">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to AD Vivum. These Terms of Service govern your use of our website and services.
              By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <h2>Use of Services</h2>
            <p>
              You may use our services solely for lawful purposes and in accordance with these Terms of Service. 
              You agree not to use our services:
            </p>
            <ul>
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>To infringe upon or violate our intellectual property rights or the rights of others</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the services</li>
            </ul>
            
            <h2>Intellectual Property</h2>
            <p>
              The content, features, and functionality of our services are owned by AD Vivum and are protected 
              by copyright, trademark, and other intellectual property laws.
            </p>
            
            <h2>User Content</h2>
            <p>
              By submitting content to our services, you grant us a non-exclusive, perpetual, royalty-free, 
              worldwide license to use, modify, perform, display, reproduce, and distribute such content.
            </p>
            
            <h2>Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without any warranties of any kind, 
              either express or implied.
            </p>
            
            <h2>Limitation of Liability</h2>
            <p>
              In no event shall AD Vivum be liable for any indirect, incidental, special, consequential, 
              or punitive damages arising out of or relating to your use of our services.
            </p>
            
            <h2>Changes to Terms</h2>
            <p>
              We may revise these Terms of Service at any time without notice. By continuing to use our 
              services after any changes, you accept the revised Terms.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at info@advivum.im.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
