import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PaymentSuccessModal from "../components/PaymentSuccessModal";

const features = [
  "🔄 Multiple AI Providers - Choose between OpenAI™, Claude, or Google Gemini",
  "⚡ Ready-to-Use Functions - 11 powerful functions for analysis and insights",
  "🎯 Custom Controls - Fine-tune AI responses with adjustable settings",
  "Seamless integration with Google Sheets™",
];

const Index = () => {
  // Check for ?success in the query string
  const showSuccess = typeof window !== 'undefined' && window.location.search.includes('success');
  return (
    <div className="min-h-screen flex flex-col">
      {showSuccess && <PaymentSuccessModal open={true} />}
      <Navigation />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="gradient-bg py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center animate-fade-up">
              <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">
  Supercharge Google Sheets™ with AI & Automated Data Enrichment
</h1>
<p className="text-xl text-secondary/80 mb-8">
  Seamlessly integrate leading AI models (OpenAI™, Claude, Gemini & more) <b>AND</b> powerful data enrichment tools (LinkedIn scraping, email finding) directly in your spreadsheets. Automate tasks, enrich data, and build workflows without leaving Sheets.
</p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.open('https://workspace.google.com/marketplace/app/ai4sheets_ai_gpt_claude_gemini_email_fin/839333999405', '_blank')}
              >
                Start Free – No Credit Card Required <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="text-sm text-secondary/60 mt-2">No credit card required.</div>
            </div>
          </div>
        </section>

        {/* Problem/Solution Section */}
        <section className="py-16 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
                Stop Wasting Time & Money on Data Tasks
              </h2>
              <p className="text-lg text-secondary/80 mb-2">
                Manually finding leads, enriching data, and personalizing outreach is slow and tedious. Powerful automation tools exist, but often come with complex interfaces and high monthly costs locking you into their ecosystem. <b>AI for Sheets</b> brings the power you need directly into the familiar Google Sheets environment, leveraging best-in-class external APIs you control, at a fraction of the cost.
              </p>
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
              <div className="aspect-video w-full rounded-lg shadow-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VDQcIBVfBqo"
                  title="How AI for Sheets Works"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              {/* Step-by-step instructions */}
              <div className="mt-10">
                <ol className="space-y-4 text-lg text-secondary/80 max-w-2xl mx-auto list-decimal list-inside bg-gray-50 border border-gray-100 rounded-lg p-8">
                  <li><b>Install</b> the Add-on from Google Workspace Marketplace.</li>
                  <li><b>Open Settings</b> from the Extensions menu.</li>
                  <li><b>Add your API Keys</b> (OpenAI, Apify, Icypeas, etc.).</li>
                  <li>Use <b>=LLM()</b> functions in cells <b>OR</b> use Data Enrichment tools in the sidebar.</li>
                </ol>
              </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Unlock AI Creativity & Analysis in Any Cell
              </h2>
              <p className="text-lg text-secondary/80 text-center mb-10">
                Use <b>=LLM()</b> to access GPT-4o, Claude 3.5, Gemini, and more—bring your own key. 10+ ready-to-use helper functions make summarizing, translating, searching, and more effortless.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Multiple AI Providers</b><br />Choose between OpenAI™, Claude, Gemini, DeepSeek, Perplexity.
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Flexible =LLM() Function</b><br />Access any supported model with custom settings.
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>10+ Ready-to-Use Functions</b><br />Simplify tasks: Summarize (=LLM_SUM), Translate (=LLM_TR), Sentiment (=LLM_SENT), Web Search (=LLM_SEARCH), and more.
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Custom Controls</b><br />Fine-tune AI responses with temperature/token settings.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Enrichment Suite Section */}
        <section className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Automate Lead Generation & Data Enrichment Workflows
              </h2>
              <p className="text-lg text-secondary/80 text-center mb-10">
                Purpose-built for sales, marketing, and recruiting. Use external APIs (Apify, Icypeas) via the sidebar—bring your own key for full cost control.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Find Company LinkedIn URLs</b><br />Turn domains into LinkedIn company page URLs. (Apify)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Find People LinkedIn Profiles</b><br />Find decision-makers by domain + title. (Apify)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Scrape LinkedIn Profiles</b><br />Extract contact info, work history, skills, etc., from profile URLs. (Apify)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Scrape LinkedIn Company Pages</b><br />Get website, industry, size, description, etc., from company URLs. (Apify)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Find Emails</b><br />Discover work emails using names and domains. (Icypeas)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Verify Emails</b><br />Check email deliverability and validity. (Icypeas)
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Batch Processing & Error Retrying</b><br />Start/Continue processing large lists, with error retrying.
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-100 hover:border-primary/20 transition">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <b>Apify Affiliate Link</b><br />Get $5 free credit with our link!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases / Who It's For Section */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Built for Your Workflow
              </h2>
              <ul className="space-y-8 text-lg text-secondary/80">
                <li>
                  <b>Sales Teams:</b> Find leads, identify decision-makers on LinkedIn, find emails, personalize outreach messages with AI – build your entire outbound sequence faster.
                </li>
                <li>
                  <b>Marketers:</b> Enrich audience lists with company data, analyze customer feedback sentiment, generate ad copy variations, research competitors.
                </li>
                <li>
                  <b>Recruiters:</b> Source candidates on LinkedIn, scrape profile details, find contact information, draft personalized outreach messages.
                </li>
                <li>
                  <b>Researchers:</b> Gather data from web searches, scrape company information, summarize articles, analyze text data.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Simple, Transparent Pricing</h2>
              <div className="space-y-8 text-lg text-secondary/80">
                <div className="text-center">
                  <span className="inline-block text-4xl font-bold text-primary">$9.99/mo</span>
                  <span className="mx-2 text-xl">or</span>
                  <span className="inline-block text-4xl font-bold text-primary">$79.99/yr</span>
                  <div className="text-base mt-2">Free trial available. Subscription unlocks all features.</div>
                </div>
                <div className="border-l-4 border-primary pl-4 bg-white/70 rounded">
                  <b>External API Costs:</b> You bring your own API keys for services like OpenAI, Apify, and Icypeas. You pay those platforms directly for your actual usage—giving you full control over costs. Many offer free tiers or credits to get started (e.g., Apify’s $5/month).
                </div>
                <div className="text-center mt-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">Massive Savings vs. Alternatives</h3>
                  <div className="mb-2">
                    Building common sales workflows (like finding company info, decision-maker LinkedIn, email, and personalizing a message) can cost over <b>$0.37 per prospect</b> with tools like Clay (<span className="text-secondary/60">$149/mo for ~400 prospects</span>).
                  </div>
                  <div className="mb-2">
                    With <b>AI for Sheets ($9.99/mo + pay-as-you-go APIs)</b>, the same workflow can cost as little as <b className="text-green-600">$0.02 - $0.03 per prospect</b> in external API fees. <span className="font-bold text-green-700">That’s over 90% cheaper!</span>
                  </div>
                </div>
                {/* Placeholder for comparison table */}
                <div className="my-8 bg-white border border-gray-200 rounded-lg p-6 text-center text-secondary/70">
                  <div className="font-semibold mb-2">Sample Comparison Table</div>
                  <div className="flex flex-col md:flex-row justify-center gap-6">
                    <div>
                      <div className="font-bold text-primary">AI for Sheets</div>
                      <div>$9.99/mo + API usage</div>
                      <div>Full control, pay per use</div>
                    </div>
                    <div>
                      <div className="font-bold text-secondary">Clay</div>
                      <div>$149/mo</div>
                      <div>~400 prospects, bundled APIs</div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-10">
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-lg px-8 py-4"
                    onClick={() => window.open('https://workspace.google.com/marketplace/app/ai4sheets_ai_gpt_claude_gemini_email_fin/839333999405', '_blank')}
                  >
                    Start Your 1 Month Free Trial
                  </Button>
                  <div className="text-sm text-secondary/60 mt-2">No credit card required.</div>
                </div>
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
                    Hello! I'm Atlas. My dad and I started AI for Sheets as a weekend project. We initially tried donations to save for my PS5 goal, but realized building more great features and offering a subscription was the best way forward!
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

        {/* Learn from Atlas Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">
        Learn AI for Sheets from the Maker!
      </h2>
      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/Qx1rv-TrJRc"
          title="Learn About AI for Sheets"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
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
