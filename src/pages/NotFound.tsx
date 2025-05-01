import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="container flex flex-col items-center justify-center py-20 min-h-[70vh] text-center">
        <div className="max-w-md mx-auto space-y-6">
          <img
            src="/lovable-uploads/303c97d9-1ffa-4229-88f5-0bdd2f650a0a.png"
            alt="AD Vivum Logo"
            className="h-16 w-16 object-contain mx-auto mb-4 animate-pulse"
            style={{ 
              filter: "drop-shadow(0 0 2px rgba(0,0,0,0.1))",
              background: "transparent"
            }}
          />
          <h1 className="text-7xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-semibold">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
          
          <Alert className="bg-muted/60 border-muted mt-6">
            <AlertTitle className="text-sm font-medium">Error Details</AlertTitle>
            <AlertDescription className="text-xs font-mono">
              <div className="mt-2">
                <strong>Path:</strong> {location.pathname}
              </div>
              <div className="mt-1">
                <strong>Code:</strong> NOT_FOUND
              </div>
            </AlertDescription>
          </Alert>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" variant="default">
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                Go to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="javascript:history.back()" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Need help? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>
          </p>
        </div>
      </div>
    </PageLayout>
  );
}

export default NotFound;
