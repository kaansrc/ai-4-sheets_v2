import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "🔄 Multiple AI Providers - Choose between OpenAI™, Claude, or Google Gemini™",
  "⚡ Ready-to-Use Functions - 11 powerful functions for analysis and insights",
  "🎯 Custom Controls - Fine-tune AI responses with adjustable settings",
  "Seamless integration with Google Sheets™",
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="gradient-bg py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
                Transform Your Google Sheets™ with Multiple AI Providers
              </h1>
              <p className="text-xl text-secondary/80 mb-8">
                Seamlessly integrate OpenAI™, Claude, and Google Gemini™ directly in your spreadsheets. Use powerful AI functions with your preferred provider's API key.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://workspace.google.com/marketplace/app/ai_for_sheets_gpt_claude_gemini/839333999405', '_blank')}
              >
                Install Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                How It Works
              </h2>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                  src="https://www.youtube.com/embed/eE_pywET2PI?si=a0Zz3e71yVGKpDda"
                  title="How AI for Sheets Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Powerful Features
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                    <p className="text-secondary/80">{feature}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-12">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('https://workspace.google.com/marketplace/app/ai_for_sheets_gpt_claude_gemini/839333999405', '_blank')}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">About AI for Sheets™</h2>
              <div className="prose max-w-none text-secondary/80">
                <p className="mb-6">
                  AI for Sheets™ was created by a team of data enthusiasts and spreadsheet power users who saw the potential to revolutionize how people work with data in Google Sheets™. We believe in making advanced AI capabilities accessible to everyone, regardless of their technical expertise.
                </p>
                <p className="mb-6">
                  Our mission is to empower users with the flexibility to choose their preferred AI provider while maintaining complete control over their data and API keys. Whether you're conducting data analysis, generating content, or automating workflows, AI for Sheets™ provides the tools you need to work more efficiently.
                </p>
                <p>
                  We're committed to continuous improvement and regularly update our add-on with new features based on user feedback. Join our growing community of users who are transforming their spreadsheet workflows with AI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
