
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  // Use a consistent approach to get the initial theme state
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') return false;
    
    // First check localStorage to respect user preference
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference !== null) {
      return storedPreference === 'true';
    }
    
    // Fall back to system preference if no stored preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const isMobile = useIsMobile();

  // Apply theme to document and localStorage whenever isDarkMode changes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Always update localStorage when theme changes
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  // Extra effect for mobile devices to ensure theme is applied on page navigation
  useEffect(() => {
    if (!isMobile) return;
    
    // Reapply theme from localStorage on each navigation/remount on mobile
    const storedPreference = localStorage.getItem('darkMode');
    if (storedPreference !== null) {
      setIsDarkMode(storedPreference === 'true');
    }
  }, [isMobile]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem('darkMode', newValue.toString());
      return newValue;
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Button
        variant="outline"
        size="icon"
        className="fixed right-4 top-20 z-50 rounded-full shadow-md border border-border bg-background/80 backdrop-blur-sm hover:bg-background/90"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-400" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
        <span className="sr-only">Toggle dark mode</span>
      </Button>
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
