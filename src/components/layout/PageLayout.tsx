
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
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
