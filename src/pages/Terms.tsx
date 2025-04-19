import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Terms and Conditions for AI4Sheets™</h1>
            <div className="prose max-w-none">
              <p className="text-lg text-secondary/80 mb-6">
                Last updated: 04/19/2025
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-6">
                By installing, subscribing to, or using AI4Sheets™ (“the Add-on”), you agree to these Terms and Conditions. If you do not agree, do not use the Add-on.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p className="mb-6">
                AI4Sheets™ is a Google Workspace Add-on providing AI-powered functions within Google Sheets™ using various third-party AI providers. The Add-on is offered on a recurring subscription basis.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Subscriptions, Payments, and Billing</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>All payments for AI4Sheets™ are recurring and processed securely via Stripe.</li>
                <li>By subscribing, you authorize us to charge your payment method for the recurring subscription fee until you cancel.</li>
                <li>You may cancel your subscription at any time; your access to paid features will continue until the end of your current billing period.</li>
                <li>No prorated refunds or credits are provided for partial months or unused service.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Refund Policy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>All payments are non-refundable. If you believe you were charged in error, please contact <a href="mailto:support@ai4sheets.com" className="text-primary hover:underline">support@ai4sheets.com</a>.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Account Termination and Suspension</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We reserve the right to suspend or terminate your access to paid features if payment is not received or if your payment method is declined.</li>
                <li>You may terminate your use of the Add-on at any time by canceling your subscription and uninstalling the Add-on.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>You are responsible for providing and securing your own API keys for third-party AI services.</li>
                <li>You are responsible for all costs associated with your API usage, including any charges incurred by third-party AI providers as a result of using AI4Sheets™.</li>
                <li>AI4Sheets™ does not control, limit, or monitor your API usage or costs.</li>
                <li>You must comply with all applicable laws, regulations, and the terms of service of your chosen AI providers.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Data Collection and Privacy</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We collect and store only your email address for the purpose of managing subscriptions and accounts.</li>
                <li>No other user data, including AI requests, Google Sheets content, or GTM features, is stored or processed by our servers.</li>
                <li>All payments are processed by Stripe; we do not store your credit card or payment details.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Service Modifications and Availability</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>We reserve the right to modify or discontinue features at any time, with or without notice.</li>
                <li>We do not guarantee uninterrupted service or error-free operation.</li>
                <li>We are not liable for any loss of data, revenue, or profits due to service outages, errors, or failures of third-party providers.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>The Add-on is provided “as is” without warranties of any kind, express or implied.</li>
                <li>In no event shall our aggregate liability exceed the total subscription fees paid by you in the twelve (12) months preceding the claim.</li>
                <li>We are not liable for any indirect, incidental, consequential, or punitive damages.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">10. No Guarantee of Results</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>AI4Sheets™ and its underlying AI providers do not guarantee the accuracy, reliability, or suitability of any results generated.</li>
                <li>You use the Add-on and its outputs at your own risk.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">11. Intellectual Property</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>The Add-on and its original content are protected by applicable intellectual property laws.</li>
                <li>Users retain all rights to their own data.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law</h2>
              <ul className="list-disc pl-6 mb-6">
                <li>These terms shall be governed by and construed in accordance with the laws of Ontario, Canada.</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact</h2>
              <p className="mb-6">
                For questions about these terms, contact: <a href="mailto:support@ai4sheets.com" className="text-primary hover:underline">support@ai4sheets.com</a>
              </p>

              <p className="text-sm text-secondary/60 mt-8 italic">
                Disclaimer: Google Sheets™ and Google Workspace™ are trademarks of Google LLC. AI4Sheets™ is not affiliated with or endorsed by Google LLC.
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
