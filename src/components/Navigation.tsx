import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-2 py-2 flex flex-wrap justify-between items-center">
        <Link to="/" className="flex items-center min-w-0">
          <img 
            src="/logo-new.png" 
            alt="AI for Sheets Logo" 
            className="h-14 w-auto"
            style={{ maxWidth: 'none' }} // This prevents the image from being constrained
          />
        </Link>
        <a
          href="https://workspace.google.com/marketplace/app/ai4sheets_ai_gpt_claude_gemini_email_fin/839333999405"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 mr-2 sm:ml-4 sm:mr-0 px-4 py-2 sm:px-6 sm:py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors text-sm sm:text-base flex-shrink-0"
          style={{ maxWidth: '90vw', whiteSpace: 'nowrap' }}
        >
          Download Now
        </a>
      </div>
    </nav>
  );
};
