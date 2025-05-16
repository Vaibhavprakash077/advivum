
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

  // Effect to handle scroll to top when route changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

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
