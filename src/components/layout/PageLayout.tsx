
import Header from "./Header";
import Footer from "./Footer";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const isMobile = useIsMobile();
  const location = useLocation();

  // Enhanced effect to handle route changes
  useEffect(() => {
    console.log('Route changed to:', location.pathname);
    
    // Check if there's a hash in the URL
    if (location.hash) {
      // Wait a bit for the DOM to fully render
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    
    // Log to help debug routing issues
    console.log('PageLayout mounted/updated on path:', location.pathname);
    
    // This can help identify if the component is properly mounting on direct navigation
    if (window.performance) {
      const navEntries = performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        console.log('Navigation type:', (navEntries[0] as PerformanceNavigationTiming).type);
      }
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  );
}
