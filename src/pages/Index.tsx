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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Meet the maker of AI for Sheets. Atlas!</h2>
              
              <div className="flex flex-col md:flex-row gap-12 items-center mb-8">
                <div className="w-full md:w-1/3">
                  <div className="relative aspect-square rounded-full overflow-hidden border-4 border-primary shadow-xl">
                    <img 
                      src="/atlas-photo.jpg" 
                      alt="Atlas" 
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 prose max-w-none text-secondary/80">
                  <p className="text-lg mb-4">
                    Hi! I'm Atlas, a 7-year-old developer from Canada, and this is my first product! 🚀
                  </p>
                  
                  <p className="mb-4">
                    One day, I asked my dad for a PlayStation 5. Instead of just buying it for me, he suggested something fun! He said I could build my own product using AI and earn money to buy the PS5 myself! I made this so you can get good responses, and I get money!
                  </p>

                  <p className="mb-4">
                    With my dad's idea and help, we started building AI for Sheets with Claude. He helped me understand how to work with AI, and I've been improving the product ever since. Now I'm learning about technology, coding, and how to create something useful!
                  </p>

                  <p className="mb-8">
                    Every donation helps me get closer to my PS5 goal. Thank you for supporting my journey! 🎮
                  </p>

                  <div className="text-center">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open('https://donate.stripe.com/8wM8yA4JvcB90WQ4gg', '_blank')}
                    >
                      Support My Project <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
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
