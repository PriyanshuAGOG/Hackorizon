import { Card } from "@/components/ui/card";
import { Trophy, Users, Cpu, Rocket, Lightbulb, Award } from "lucide-react";
import { Star, Diamond } from "./DecorativeElements";

const features = [
  {
    icon: Trophy,
    title: "Win Big Prizes",
    description: "Compete for cash prizes, tech gadgets, and exclusive opportunities worth ₹5L+. Top teams receive internships and funding.",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with 500+ developers, mentors, and industry leaders. Build lasting professional relationships.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "Work with AI, IoT, Web3, and cutting-edge tech stacks with guidance from experts in the field.",
  },
  {
    icon: Rocket,
    title: "Launch Projects",
    description: "Transform ideas into working prototypes in 48 hours with full infrastructure and mentor support.",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description: "Get guidance from 20+ industry experts providing technical assistance and strategic advice.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Earn certificates, digital badges, and showcase achievements on professional profiles.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(232,220,196,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,220,196,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-foreground/30" />
            <Star className="w-8 h-8 text-primary" />
            <div className="h-px w-24 bg-foreground/30" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4" style={{ fontFamily: '"Playfair Display", serif' }} data-testid="text-why-attend-title">
            Why Attend?
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light">
            Discover endless possibilities for growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border border-border hover:border-foreground/40 transition-all duration-500 overflow-hidden"
              data-testid={`card-feature-${index}`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Diamond className="w-4 h-4 text-primary" />
              </div>
              
              <div className="relative">
                <div className="w-16 h-16 border-2 border-foreground/30 flex items-center justify-center mb-6 group-hover:border-primary/60 transition-all">
                  <feature.icon className="w-8 h-8 text-foreground/70 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-foreground tracking-wide">{feature.title}</h3>
                <p className="text-foreground/70 text-base leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
