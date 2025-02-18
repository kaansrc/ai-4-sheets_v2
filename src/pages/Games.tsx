import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

const games = [
  {
    title: "Brick Breaker",
    description: "A classic arcade game with modern power-ups and multiple levels",
    image: "/games/brick-breaker-preview.jpg",
    url: "/games/brick-breaker"
  }
  // More games can be added here later
];

const Games = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8">Games by Atlas</h1>
            <p className="text-lg text-secondary/80 mb-12">
              Check out the games I've created! Each game helps me learn more about coding and get closer to my PS5 goal.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {games.map((game, index) => (
                <Link 
                  key={index}
                  to={game.url}
                  className="block group"
                >
                  <div className="border rounded-lg overflow-hidden hover:border-primary/20 transition-colors">
                    <div className="aspect-video bg-gray-100">
                      <img 
                        src={game.image} 
                        alt={game.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {game.title}
                      </h2>
                      <p className="text-secondary/80">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Games;
