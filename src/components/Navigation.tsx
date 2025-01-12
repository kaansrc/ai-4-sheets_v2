import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-secondary flex items-center gap-2">
          <img 
            src="/public/logo.png" 
            alt="AI for Sheets Logo" 
            className="h-8 w-auto" // Adjust height as needed, width will scale proportionally
          />
        </Link>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-secondary/80 hover:text-secondary transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-secondary/80 hover:text-secondary transition">
            Terms
          </Link>
        </div>
      </div>
    </nav>
  );
};
