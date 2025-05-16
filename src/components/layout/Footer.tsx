
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Logo from "./Logo";
import { useEffect } from "react";

// Custom link component that handles scrolling to top
const ScrollToTopLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const handleClick = () => {
    // Smooth scroll to top after navigation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={to} className="hover:text-primary" onClick={handleClick}>
      {children}
    </Link>
  );
};

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 mt-12">
      <div className="container grid gap-8 md:grid-cols-4">
        <div className="space-y-4">
          <Logo />
          <p className="text-muted-foreground text-sm">
            Mentoring minds, shaping futures by bridging research, technology, and education.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-muted-foreground hover:text-primary">Home</Link></li>
            <li><Link to="/about" className="text-muted-foreground hover:text-primary">About</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/vivum-app" className="text-muted-foreground hover:text-primary">Vivum.App</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
              <a href="mailto:connect@vivum.im" className="text-muted-foreground hover:text-primary">connect@vivum.im</a>
            </li>
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
              <a href="tel:+919021699000" className="text-muted-foreground hover:text-primary">+91 9021699000</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mb-4">Newsletter</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Subscribe to our newsletter for updates and insights.
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Your email" className="max-w-[220px]" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-8 border-t text-center text-muted-foreground text-sm">
        <div className="flex justify-center items-center mb-3">
          <p>© {new Date().getFullYear()} AD Vivum. All rights reserved.</p>
          <img
            src="/lovable-uploads/303c97d9-1ffa-4229-88f5-0bdd2f650a0a.png"
            alt="AD Vivum Logo"
            className="h-6 w-6 mx-2 object-contain"
            style={{ 
              filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))",
              background: "transparent"
            }}
          />
          <a href="https://advivum.im" className="hover:text-primary">advivum.im</a>
        </div>
        <div className="mt-2 space-x-4">
          <ScrollToTopLink to="/privacy-policy">Privacy Policy</ScrollToTopLink>
          <ScrollToTopLink to="/terms-of-service">Terms of Service</ScrollToTopLink>
        </div>
      </div>
    </footer>
  );
}
