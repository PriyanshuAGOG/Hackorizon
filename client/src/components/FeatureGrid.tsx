import { Trophy, Users, Cpu, Rocket, Lightbulb, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, GridLines } from "./TechDecorations";

const features = [
  {
    icon: Trophy,
    title: "Win Big Prizes",
    description: "Compete for cash prizes and exclusive opportunities. Top teams receive internships and recognition.",
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with 400+ developers, mentors, and industry leaders. Build lasting professional relationships.",
  },
  {
    icon: Cpu,
    title: "Latest Technology",
    description: "Work with AI, IoT, Web3, and cutting-edge tech stacks with guidance from experts in the field.",
  },
  {
    icon: Rocket,
    title: "Launch Projects",
    description: "Transform ideas into working prototypes in 24 hours with full infrastructure and mentor support.",
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
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech corners - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
      </div>
      
      {/* Grid lines background - hidden on mobile */}
      <div className="hidden lg:block">
        <GridLines />
      </div>
      
      {/* Thin decorative lines - hidden on small screens */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div
          className={`text-center mb-10 sm:mb-16 transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3 animate-pulse">
            <span className="text-primary">&lt;</span> Why Attend <span className="text-primary">/&gt;</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground gradient-text">
            Why Enigma'26?
          </h2>
        </div>

        {/* Responsive grid - 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-background p-6 sm:p-8 transition-all duration-500 group hover-lift cursor-default relative overflow-hidden ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 50}ms` : "0ms" }}
            >
              {/* Spotlight effect on hover */}
              <div className="absolute inset-0 spotlight pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <feature.icon className="w-5 h-5 text-primary mb-3 sm:mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                <h3 className="text-base sm:text-lg font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                  {feature.description}
                </p>
                {/* Animated underline on hover */}
                <div className="h-px w-0 bg-gradient-to-r from-transparent via-primary to-transparent mt-3 sm:mt-4 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
