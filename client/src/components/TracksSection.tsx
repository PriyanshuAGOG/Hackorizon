import { Card } from "@/components/ui/card";
import { Lock, Terminal } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, GridLines } from "./TechDecorations";

export default function TracksSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="top-left" />
        <TechCorner position="top-right" />
        <TechCorner position="bottom-left" />
        <TechCorner position="bottom-right" />
      </div>
      <div className="hidden lg:block">
        <GridLines />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-12 sm:w-16 bg-border" />
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">{"// Problem Statements"}</span>
            <div className="h-px w-12 sm:w-16 bg-border" />
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-3 sm:mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            Hackathon Tracks
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get ready for an exciting challenge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="group p-6 sm:p-8 md:p-12 lg:p-16 bg-card border border-border hover:border-primary/30 transition-all duration-500 text-center relative overflow-hidden">
            {/* Corner accents - hidden on mobile */}
            <div className="hidden sm:block">
              <div className="absolute top-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-t border-l border-primary/30 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:h-10 sm:group-hover:h-12" />
              <div className="absolute top-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-t border-r border-primary/30 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:h-10 sm:group-hover:h-12" />
              <div className="absolute bottom-0 left-0 w-6 sm:w-8 h-6 sm:h-8 border-b border-l border-primary/30 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:h-10 sm:group-hover:h-12" />
              <div className="absolute bottom-0 right-0 w-6 sm:w-8 h-6 sm:h-8 border-b border-r border-primary/30 transition-all duration-300 group-hover:w-10 sm:group-hover:w-12 group-hover:h-10 sm:group-hover:h-12" />
            </div>
            
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative p-3 sm:p-4 border border-border group-hover:border-primary/30 transition-colors duration-300">
                <Lock className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-foreground mb-4 sm:mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Coming Soon!
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              Tracks and problem statements will be revealed on the hackathon day.
            </p>
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 border border-border group-hover:border-primary/30 transition-colors duration-300">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
              <span className="text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-wider">20-21 February 2026</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
