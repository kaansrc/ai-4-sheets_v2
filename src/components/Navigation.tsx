import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="flex items-center">
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
          className="ml-4 px-6 py-2 rounded-full bg-primary text-white font-semibold shadow hover:bg-primary/90 transition-colors"
        >
          Download Now
        </a>
      </div>
    </nav>
  );
};
