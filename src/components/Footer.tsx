import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-100 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary/60 text-sm">
            © {new Date().getFullYear()} AI for Sheets. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-secondary/60 hover:text-secondary transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-secondary/60 hover:text-secondary transition">
              Terms & Conditions
            </Link>
            <Link to="/contact" className="text-sm text-secondary/60 hover:text-secondary transition">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
