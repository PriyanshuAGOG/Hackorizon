import { Card } from "@/components/ui/card";
import { Trophy, Users, Cpu, Rocket, Lightbulb, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Trophy,
    title: "Win Big Prizes",
    description: "Compete for cash prizes, tech gadgets, and exclusive opportunities. Top teams receive internships and recognition.",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with 300+ developers, mentors, and industry leaders. Build lasting professional relationships.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "Work with AI, IoT, Web3, and cutting-edge tech stacks with guidance from experts in the field.",
  },
  {
    icon: Rocket,
    title: "Launch Projects",
    description: "Transform ideas into working prototypes in 36 hours with full infrastructure and mentor support.",
  },
  {
    icon: Lightbulb,
    title: "Expert Mentorship",
    description: "Get guidance from industry experts providing technical assistance and strategic advice throughout the event.",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Earn certificates, digital badges, and showcase achievements on your professional profiles.",
  },
];

export default function FeatureGrid() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={sectionRef} className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-sky-500/30" />
            <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" />
            <div className="h-px w-20 bg-sky-500/30" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6">
            Why Attend?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover endless possibilities for growth and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative p-8 bg-card/80 backdrop-blur-sm border-2 border-sky-500/20 hover:border-sky-500 transition-all duration-500 overflow-hidden hover:scale-105 hover:-translate-y-2 cursor-pointer hover:shadow-[0_20px_60px_rgba(14,165,233,0.2)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
              }}
            >
              <div className="absolute inset-0 bg-sky-500/0 group-hover:bg-sky-500/5 transition-colors duration-500" />
              
              <div className="relative z-10">
                <div className="mb-6 inline-flex p-4 bg-sky-500/10 rounded-xl group-hover:bg-sky-500/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-sky-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-sky-500 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-sky-500/0 group-hover:bg-sky-500 transition-colors duration-500" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
