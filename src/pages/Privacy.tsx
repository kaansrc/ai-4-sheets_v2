import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy for AI4Sheets™</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-secondary/80 mb-6">
                Last updated: 04/19/2025
              </p>
              
              <p className="mb-6">
                This privacy policy describes how AI4Sheets™ ("the Add-on") collects, uses, and protects your information when you use our Google Workspace Add-on.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection and Use</h2>
              <p className="mb-4">The Add-on collects and processes only the necessary information required for its functionality:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Google Sheets™ data that you choose to process using our functions</li>
                <li>API keys that you provide for AI services</li>
                <li>Basic user settings and preferences</li>
                <li>Your email address (for account and subscription management only)</li>
              </ul>
              <p className="mb-4">
                We do not use your email address for marketing purposes or share it with third parties, except as required for payment processing or by law.
              </p>

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

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing, Transfer, and Disclosure</h2>
              <p className="mb-4">Your Google user data and API keys are handled in the following ways:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Data is processed directly between your Google Sheet and the AI services you choose to use (OpenAI, Anthropic, or Google)</li>
                <li>Google has access to necessary data to provide the Add-on functionality as part of the Google Workspace platform</li>
                <li>We do not transfer or disclose your data to any other third parties</li>
                <li>We may be required to share information if required by law, regulation, or valid legal process</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention and Deletion</h2>
              <p className="mb-4">Regarding Google user data (including spreadsheet content and related Google Workspace data):</p>
              <ul className="list-disc pl-6 mb-6">
                <li>We do not retain or store any Google user data. All Google Sheets data is only processed in real-time when you use our functions</li>
                <li>Google user data is immediately discarded after processing and is never persisted in any form</li>
                <li>No Google user data needs to be deleted because we do not store it</li>
                <li>When you uninstall the Add-on, all access to Google user data is immediately terminated</li>
              </ul>
              
              <p className="mb-4">Regarding other Add-on data:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>API keys and user preferences stored in Google's infrastructure are automatically deleted when you uninstall the Add-on</li>
                <li>You can delete your API keys at any time through the Add-on settings</li>
                <li>Since we don't maintain any servers or databases, no additional data deletion procedures are necessary</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Services and Payments</h2>
              <p className="mb-4">The Add-on integrates with:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>OpenAI™ API</li>
                <li>Anthropic Claude API</li>
                <li>Google Gemini™ API</li>
              </ul>
              <p className="mb-4">Users are responsible for complying with these services' terms and conditions.</p>
              <p className="mb-6">All payments are processed securely via Stripe. We do not store your credit card or payment details. Stripe’s privacy policy applies to all payment transactions.</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your stored preferences</li>
                <li>Delete your stored preferences</li>
                <li>Remove API keys</li>
                <li>Uninstall the Add-on</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to This Policy</h2>
              <p className="mb-6">
                We reserve the right to update this privacy policy at any time. Users will be notified of any changes through the Add-on interface.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact</h2>
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
