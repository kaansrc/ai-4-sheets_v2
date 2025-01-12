import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="AI for Sheets Logo" 
            className="h-14 w-auto"
            style={{ maxWidth: 'none' }}
          />
        </Link>
      </div>
    </nav>
  );
};
