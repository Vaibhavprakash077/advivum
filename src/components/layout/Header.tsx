import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/layout/Logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Vivum.App", path: "/vivum-app" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        "transition-all duration-300",
        scrolled ? "h-14 shadow-md" : "h-16"
      )}
    >
      <div className={cn(
        "container flex items-center justify-between",
        "transition-all duration-300",
        scrolled ? "h-14" : "h-16"
      )}>
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-base font-medium transition-colors relative py-1",
                  isActive 
                    ? "text-primary" 
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Contact Button */}
        <Button 
          asChild 
          size="sm"
          variant={scrolled ? "default" : "outline"}
          className={cn(
            "hidden md:flex transition-all duration-300",
            scrolled ? "bg-primary hover:bg-primary/90" : "border-primary text-primary hover:bg-primary/10"
          )}
        >
          <Link to="/contact">Get Started</Link>
        </Button>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
          isMenuOpen ? "slide-in-from-top-80" : "hidden"
        )}
      >
        <div className="relative z-20 grid gap-6 rounded-md p-4 shadow-md">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex w-full items-center rounded-md p-2 text-base font-medium",
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-accent"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Button className="mt-4 w-full" asChild>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Get Started
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
