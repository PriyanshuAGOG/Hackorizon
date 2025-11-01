import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star, Sparkles, Gem, Crown } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const prizes = [
  {
    place: "1st Place",
    icon: Trophy,
    amount: "₹2,00,000",
    perks: ["Cash Prize", "Tech Gadgets Worth ₹50K", "Internship Opportunities", "1 Year Premium Tools Access", "Mentorship Program"],
    color: "from-yellow-400 via-yellow-500 to-orange-500",
    bgGlow: "bg-yellow-500/20",
    size: "large",
    badge: Crown,
  },
  {
    place: "2nd Place",
    icon: Medal,
    amount: "₹1,00,000",
    perks: ["Cash Prize", "Tech Gadgets Worth ₹25K", "Mentorship Sessions", "6 Months Premium Tools", "Certificate of Excellence"],
    color: "from-gray-300 via-gray-400 to-gray-500",
    bgGlow: "bg-gray-400/20",
    size: "medium",
    badge: Star,
  },
  {
    place: "3rd Place",
    icon: Award,
    amount: "₹50,000",
    perks: ["Cash Prize", "Tech Swag Kit", "Workshop Passes", "3 Months Premium Tools", "Recognition Certificate"],
    color: "from-orange-400 via-orange-500 to-red-500",
    bgGlow: "bg-orange-500/20",
    size: "medium",
    badge: Gem,
  },
  {
    place: "Best Innovation",
    icon: Star,
    amount: "₹25,000",
    perks: ["Special Recognition", "Feature on Platform", "Networking Opportunities", "Innovation Badge"],
    color: "from-purple-400 via-purple-500 to-pink-500",
    bgGlow: "bg-purple-500/20",
    size: "small",
    badge: Sparkles,
  },
];

export default function PrizesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 4 === 0 ? '#fbbf24' : i % 4 === 1 ? '#f97316' : i % 4 === 2 ? '#a855f7' : '#ec4899',
              boxShadow: `0 0 ${Math.random() * 30 + 10}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.4,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Rewards Await</span>
          </div>
          
          <h2 className={`text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} data-testid="text-prizes-title">
            Prizes & Rewards
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Total prize pool worth
          </p>
          <p className="text-6xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-primary bg-clip-text text-transparent animate-pulse-glow drop-shadow-[0_0_40px_rgba(255,94,0,0.6)]">
            ₹5,00,000+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-2xl border-2 border-card-border hover:border-primary/70 transition-all duration-500 hover:scale-105 animate-slide-up overflow-hidden ${
                prize.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`card-prize-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${prize.color} opacity-10 rounded-full blur-3xl group-hover:blur-2xl transition-all`} />
              
              <div className="relative text-center">
                <div className={`w-28 h-28 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${prize.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-[0_0_40px_rgba(255,94,0,0.3)] ${hoveredIndex === index ? 'animate-pulse-glow' : ''} relative`}>
                  <prize.icon className="w-14 h-14 text-white drop-shadow-lg" />
                  <prize.badge className="absolute -top-2 -right-2 w-8 h-8 text-white animate-pulse" />
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">{prize.place}</h3>
                <div className="relative inline-block mb-6">
                  <p className={`text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r ${prize.color} bg-clip-text text-transparent drop-shadow-lg ${hoveredIndex === index ? 'animate-pulse-glow' : ''}`}>
                    {prize.amount}
                  </p>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${prize.color} opacity-20 blur-xl -z-10`} />
                </div>

                <div className="space-y-3">
                  {prize.perks.map((perk, perkIndex) => (
                    <div
                      key={perkIndex}
                      className="flex items-center gap-3 text-sm text-muted-foreground justify-center font-medium"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${prize.color}`} />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>

                <Sparkles className={`mt-6 mx-auto w-6 h-6 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent animate-pulse`} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
