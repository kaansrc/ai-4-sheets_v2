import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import BrickBreakerGame from "../components/games/BrickBreaker";

const BrickBreaker = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">Brick Breaker</h1>
              <p className="text-lg text-secondary/80">
                A classic arcade game with modern power-ups and multiple levels. Help me reach my PS5 goal by playing and having fun!
              </p>
            </div>

            <BrickBreakerGame />
            
            {/* Support section */}
            <div className="mt-12 text-center">
              <h2 className="text-2xl font-semibold mb-4">Support My PS5 Goal!</h2>
              <p className="text-secondary/80 mb-6">
                Every donation brings me closer to my PlayStation 5 goal. Thank you for playing and supporting my journey in game development!
              </p>
              <button 
                onClick={() => window.open('https://donate.stripe.com/8wM8yA4JvcB90WQ4gg', '_blank')}
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
              >
                Support My Project
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BrickBreaker;
