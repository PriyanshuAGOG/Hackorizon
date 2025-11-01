import { Card } from "@/components/ui/card";
import { Trophy, Users, Cpu, Rocket, Lightbulb, Award } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Win Prizes",
    description: "Compete for cash prizes, tech gadgets, and exclusive opportunities worth ₹5L+",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    title: "Network Globally",
    description: "Connect with 500+ developers, mentors, and industry leaders",
    color: "text-blue-500",
  },
  {
    icon: Cpu,
    title: "Latest Tech",
    description: "Work with AI, IoT, Web3, and cutting-edge technologies",
    color: "text-purple-500",
  },
  {
    icon: Rocket,
    title: "Launch Projects",
    description: "Transform your ideas into working prototypes in 48 hours",
    color: "text-orange-500",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description: "Get guidance from 20+ industry experts and technical mentors",
    color: "text-green-500",
  },
  {
    icon: Award,
    title: "Skill Recognition",
    description: "Earn certificates, badges, and showcase your achievements",
    color: "text-pink-500",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-orange-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-why-attend-title">
          Why Attend CODEVEDANS?
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Discover endless possibilities and opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover-elevate active-elevate-2 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(234,88,12,0.2)] group animate-slide-up overflow-visible"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-feature-${index}`}
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color === 'text-yellow-500' ? 'from-yellow-500/20 to-yellow-500/5' : feature.color === 'text-blue-500' ? 'from-blue-500/20 to-blue-500/5' : feature.color === 'text-purple-500' ? 'from-purple-500/20 to-purple-500/5' : feature.color === 'text-orange-500' ? 'from-orange-500/20 to-orange-500/5' : feature.color === 'text-green-500' ? 'from-green-500/20 to-green-500/5' : 'from-pink-500/20 to-pink-500/5'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
