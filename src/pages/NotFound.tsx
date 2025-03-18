
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-workshop-slate/30 pt-20">
      <div className="workshop-container">
        <div className="max-w-lg mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-workshop-titanium/10 text-workshop-titanium rounded-full mb-6">
            <AlertTriangle size={32} />
          </div>
          <h1 className="text-5xl font-bold text-workshop-navy mb-4">404</h1>
          <p className="text-xl text-workshop-charcoal mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-workshop-navy text-workshop-light font-medium rounded-md transition-all duration-300 hover:bg-workshop-titanium"
          >
            <ArrowLeft size={16} />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
