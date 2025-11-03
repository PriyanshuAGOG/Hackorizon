import { Card } from "@/components/ui/card";
import { Trophy, Users, Cpu, Rocket, Lightbulb, Award } from "lucide-react";
import { Star, Diamond } from "./DecorativeElements";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
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
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto px-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-border hover:border-primary/60 transition-all duration-700 overflow-hidden hover:scale-105 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-[0_20px_60px_rgba(255,94,0,0.3)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              data-testid={`card-feature-${index}`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
                transitionDuration: '0.8s'
              }}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:rotate-180">
                <Diamond className="w-4 h-4 text-primary animate-pulse" />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-foreground/30 flex items-center justify-center mb-4 md:mb-6 group-hover:border-primary/60 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foreground/70 group-hover:text-primary transition-all duration-500 relative z-10 group-hover:scale-125" />
                </div>
                
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground tracking-wide group-hover:text-primary transition-colors duration-500">{feature.title}</h3>
                <p className="text-foreground/70 text-sm sm:text-base leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">{feature.description}</p>
                <div className="mt-4 md:mt-6 h-0.5 md:h-1 w-0 group-hover:w-full bg-gradient-to-r from-primary to-orange-500 transition-all duration-700 rounded-full" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
