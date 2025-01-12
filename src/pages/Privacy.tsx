import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy for AI for Sheets™</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-secondary/80 mb-6">
                Last updated: 01/10/2025
              </p>
              
              <p className="mb-6">
                This privacy policy describes how AI for Sheets™ ("the Add-on") collects, uses, and protects your information when you use our Google Workspace Add-on.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection and Use</h2>
              <p className="mb-4">The Add-on collects and processes only the necessary information required for its functionality:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Sheets™ data that you choose to process using our functions</li>
                <li>API keys that you provide for AI services</li>
                <li>Basic user settings and preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data Processing</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>All data processing occurs through official Google Workspace™ and user-provided AI service APIs</li>
                <li>No data is stored on our servers</li>
                <li>API keys are stored securely in Google's infrastructure</li>
                <li>Spreadsheet data is processed only when you explicitly use our functions</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We never store your API keys or spreadsheet data outside of Google's secure infrastructure</li>
                <li>All communications are encrypted using industry-standard protocols</li>
                <li>We do not have access to your stored API keys or processed data</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Third-Party Services</h2>
              <p className="mb-4">The Add-on integrates with:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>OpenAI™ API</li>
                <li>Anthropic Claude API</li>
                <li>Google Gemini™ API</li>
              </ul>
              <p className="mb-6">Users are responsible for complying with these services' terms and conditions.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your stored preferences</li>
                <li>Delete your stored preferences</li>
                <li>Remove API keys</li>
                <li>Uninstall the Add-on</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Changes to This Policy</h2>
              <p className="mb-6">
                We reserve the right to update this privacy policy at any time. Users will be notified of any changes through the Add-on interface.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact</h2>
              <p className="mb-6">
                For any questions regarding this privacy policy, please contact us at{" "}
                <a href="mailto:support@ai4sheets.com" className="text-primary hover:underline">
                  support@ai4sheets.com
                </a>
              </p>

              <p className="text-sm text-secondary/60 mt-8 italic">
                Disclaimer: Google Sheets™ and Google Workspace™ are trademarks of Google LLC.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
