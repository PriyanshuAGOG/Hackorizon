import { Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner } from "./TechDecorations";

export default function SpeakersSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tr" />
        <TechCorner position="bl" />
      </div>
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-10 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
            <span className="text-primary">/*</span> Industry Experts <span className="text-primary">*/</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">Judges & Mentors</h2>
        </div>

        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          <div className="bg-background p-6 sm:p-8 text-center group hover-lift cursor-default transition-all">
            <Award className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Judges</h3>
            <p className="text-xs sm:text-sm text-primary mb-2">To Be Announced</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Industry experts from MNCs</p>
          </div>
          <div className="bg-background p-6 sm:p-8 text-center group hover-lift cursor-default transition-all">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Mentors</h3>
            <p className="text-xs sm:text-sm text-primary mb-2">To Be Announced</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Mentors from Industry</p>
          </div>
        </div>
      </div>
    </section>
  );
}
