import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions for AI for Sheets™</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-secondary/80 mb-6">
                Last updated: 01/10/2025
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By installing and using AI for Sheets™ ("the Add-on"), you agree to these Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p className="mb-6">
                AI for Sheets™ is a Google Workspace Add-on that provides AI-powered functions within Google Sheets™ using various AI providers.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Responsibilities</h2>
              <p className="mb-4">Users must:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Provide their own API keys for AI services</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Maintain the security of their API keys</li>
                <li>Use the Add-on in accordance with Google Workspace™ policies</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. API Usage</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>Users are responsible for all costs associated with their API usage</li>
                <li>The Add-on processes data through user-provided API credentials</li>
                <li>Users must comply with the terms of service of their chosen AI providers</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitations of Liability</h2>
              <p className="mb-4">The Add-on is provided "as is" without warranties of any kind. We are not liable for:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>API service disruptions</li>
                <li>Costs incurred through API usage</li>
                <li>Data processing results</li>
                <li>Any indirect or consequential damages</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>The Add-on and its original content are protected by applicable intellectual property laws</li>
                <li>Users retain all rights to their data</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Service Modifications</h2>
              <p className="mb-4">We reserve the right to:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Modify or discontinue features</li>
                <li>Update these terms</li>
                <li>Change functionality with notice</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
              <p className="mb-4">Users may terminate usage by:</p>
              <ul className="list-disc pl-6 mb-6">
                <li>Removing API keys</li>
                <li>Uninstalling the Add-on</li>
                <li>Discontinuing use of the service</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Governing Law</h2>
              <p className="mb-6">
                These terms shall be governed by and construed in accordance with applicable laws.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact</h2>
              <p className="mb-6">
                For any questions regarding these terms, please contact{" "}
                <a href="mailto:help@crowise.ai" className="text-primary hover:underline">
                  help@crowise.ai
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

export default Terms;