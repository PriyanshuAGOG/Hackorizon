import { Card } from "@/components/ui/card";
import { Trophy, Users, Cpu, Rocket, Lightbulb, Award, Sparkles, Zap, Star, Gem } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Win Big Prizes",
    description: "Compete for cash prizes, tech gadgets, and exclusive opportunities worth ₹5L+",
    color: "from-yellow-500 to-orange-500",
    accent: "bg-yellow-500/20",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.4)]",
  },
  {
    icon: Users,
    title: "Network Globally",
    description: "Connect with 500+ developers, mentors, and industry leaders from around the world",
    color: "from-blue-500 to-cyan-500",
    accent: "bg-blue-500/20",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
  },
  {
    icon: Cpu,
    title: "Latest Tech Stack",
    description: "Work with AI, IoT, Web3, and cutting-edge technologies with expert guidance",
    color: "from-purple-500 to-pink-500",
    accent: "bg-purple-500/20",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
  },
  {
    icon: Rocket,
    title: "Launch Projects",
    description: "Transform your ideas into working prototypes in 48 hours with full support",
    color: "from-orange-500 to-red-500",
    accent: "bg-orange-500/20",
    glow: "shadow-[0_0_40px_rgba(249,115,22,0.4)]",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description: "Get guidance from 20+ industry experts and technical mentors throughout the event",
    color: "from-green-500 to-emerald-500",
    accent: "bg-green-500/20",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.4)]",
  },
  {
    icon: Award,
    title: "Skill Recognition",
    description: "Earn certificates, digital badges, and showcase your achievements on your profile",
    color: "from-pink-500 to-rose-500",
    accent: "bg-pink-500/20",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.4)]",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Premium Experience</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-why-attend-title">
            Why Attend CODEVEDANS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover endless possibilities and transform your coding journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-card-border hover:border-primary/50 transition-all duration-500 hover:scale-105 animate-slide-up overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-feature-${index}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              
              <div className="relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} ${feature.accent} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${feature.glow}`}>
                  <feature.icon className="w-10 h-10 text-white" />
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-white animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                  {feature.title}
                  <Zap className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Gem className="w-6 h-6 text-primary animate-pulse" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
