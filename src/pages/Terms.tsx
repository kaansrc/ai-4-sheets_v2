import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-secondary/80 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using AI for Sheets, you accept and agree to be bound by these
                Terms and Conditions and our Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
              <p className="mb-4">
                We grant you a personal, non-exclusive, non-transferable license to use
                AI for Sheets in accordance with these Terms.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Restrictions</h2>
              <p className="mb-4">
                You agree not to modify, copy, distribute, transmit, display, perform,
                reproduce, publish, license, create derivative works from, transfer, or
                sell any information obtained from AI for Sheets.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify
                users of any changes by updating the date at the top of this page.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;