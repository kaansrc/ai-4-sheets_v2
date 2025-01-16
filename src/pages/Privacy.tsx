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
                This privacy policy describes how AI for Sheets™ ("the Add-on") handles information when you use our Google Workspace Add-on.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection and Use</h2>
              <p className="mb-4">The Add-on operates entirely on your device and within Google's infrastructure:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>The Add-on only processes Google Sheets™ data that you explicitly select when using our functions</li>
                <li>API keys that you provide for AI services are stored solely in Google's secure infrastructure</li>
                <li>Basic user settings and preferences are stored locally within Google's infrastructure</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Data Processing</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>All data processing occurs locally on your device through the Google Sheets interface</li>
                <li>We maintain no servers and do not collect, store, or process any user data on our infrastructure</li>
                <li>The Add-on functions as a bridge between your Google Sheet and your chosen AI service</li>
                <li>Spreadsheet data is processed only when you explicitly use our functions and is never stored or transmitted to us</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Security</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>The Add-on operates within Google's secure infrastructure</li>
                <li>We never have access to your API keys, spreadsheet data, or user preferences</li>
                <li>All communications between your device and AI services occur directly through their official APIs</li>
                <li>We do not maintain any servers or databases that could store your information</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Sharing and Transfer</h2>
              <p className="mb-4">Due to our client-side architecture:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>We do not have the ability to share, transfer, or disclose your data as we never have access to it</li>
                <li>Data processing occurs directly between:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Your Google Sheet and your chosen AI service</li>
                    <li>Your browser and Google's infrastructure</li>
                  </ul>
                </li>
                <li>We do not act as an intermediary for any data transfers</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention and Deletion</h2>
              <p className="mb-4">As we do not collect or store any data:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>All user preferences and API keys are stored solely within Google's infrastructure</li>
                <li>Data is automatically removed when you uninstall the Add-on</li>
                <li>No additional deletion requests are necessary as we maintain no user data</li>
                <li>All processing is real-time and leaves no persistent data on our end</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
              <p className="mb-4">The Add-on integrates with:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>OpenAI™ API</li>
                <li>Anthropic Claude API</li>
                <li>Google Gemini™ API</li>
              </ul>
              <p className="mb-4">When you use our functions:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>You connect directly to these services using your own API keys</li>
                <li>We do not intermediate these connections</li>
                <li>You are responsible for reviewing and complying with these services' terms and conditions</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. User Rights</h2>
              <p className="mb-4">Through Google's infrastructure, you can:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Access your stored preferences</li>
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
