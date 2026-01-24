import { Trophy, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots } from "./TechDecorations";

export default function PrizesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="br" />
      </div>
      <FloatingDots count={5} />
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
            <span className="text-primary">$</span> Rewards
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6 sm:mb-8">Prizes & Awards</h2>

          <div className="max-w-md mx-auto border border-border p-6 sm:p-10 bg-background group hover-lift cursor-default transition-all">
            <div className="relative inline-block">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
              {/* Small decorative stars - hidden on mobile */}
              <Star className="hidden sm:block w-3 h-3 text-primary/50 absolute -top-1 -right-2 pulse-dot" />
              <Star className="hidden sm:block w-2 h-2 text-primary/30 absolute -bottom-1 -left-2 pulse-dot" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-1 sm:mb-2">Prize Pool</p>
            <p className="text-4xl sm:text-5xl font-serif font-black text-primary group-hover:scale-105 transition-transform">₹1 Lakh</p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">Cash prizes, certificates, and recognition for winning teams.</p>
            
            {/* Decorative line */}
            <div className="h-px w-0 bg-primary mx-auto mt-4 sm:mt-6 group-hover:w-20 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
