import { Card } from "@/components/ui/card";
import { Trophy, Medal, Award, Star } from "lucide-react";
import { useState } from "react";

const prizes = [
  {
    place: "1st Place",
    icon: Trophy,
    amount: "₹2,00,000",
    perks: ["Cash Prize", "Tech Gadgets Worth ₹50K", "Internship Opportunities", "1 Year Premium Tools Access"],
    color: "from-yellow-500 to-orange-500",
    size: "large",
  },
  {
    place: "2nd Place",
    icon: Medal,
    amount: "₹1,00,000",
    perks: ["Cash Prize", "Tech Gadgets Worth ₹25K", "Mentorship Sessions", "6 Months Premium Tools"],
    color: "from-gray-400 to-gray-600",
    size: "medium",
  },
  {
    place: "3rd Place",
    icon: Award,
    amount: "₹50,000",
    perks: ["Cash Prize", "Tech Swag Kit", "Workshop Passes", "3 Months Premium Tools"],
    color: "from-orange-600 to-red-600",
    size: "medium",
  },
  {
    place: "Best Innovation",
    icon: Star,
    amount: "₹25,000",
    perks: ["Special Recognition", "Feature on Platform", "Networking Opportunities"],
    color: "from-purple-500 to-pink-500",
    size: "small",
  },
];

export default function PrizesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-prizes-title">
          Prizes & Rewards
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Total prize pool worth ₹5,00,000+
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/50 hover-elevate transition-all group animate-slide-up relative overflow-visible ${
                prize.size === "large" ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              data-testid={`card-prize-${index}`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${prize.color} flex items-center justify-center group-hover:scale-110 transition-transform ${hoveredIndex === index ? 'animate-pulse-glow' : ''}`}>
                  <prize.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">{prize.place}</h3>
                <p className={`text-4xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent mb-4 animate-pulse-glow`}>
                  {prize.amount}
                </p>

                <div className="space-y-2">
                  {prize.perks.map((perk, perkIndex) => (
                    <div
                      key={perkIndex}
                      className="flex items-center gap-2 text-sm text-muted-foreground justify-center"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
