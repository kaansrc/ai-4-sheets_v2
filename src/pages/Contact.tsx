import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
            <div className="prose max-w-none">
              <p className="text-lg mb-6">
                For any questions or support, please email us at:{" "}
                <a 
                  href="mailto:support@ai4sheets.com" 
                  className="text-primary hover:underline"
                >
                  support@ai4sheets.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
