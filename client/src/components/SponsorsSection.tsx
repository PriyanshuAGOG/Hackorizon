import { Building2, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots } from "./TechDecorations";

export default function SponsorsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="sponsors" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="br" />
      </div>
      <FloatingDots count={4} />
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-2 sm:mb-3">
            <span className="text-primary">{"{ "}</span>Partnership<span className="text-primary">{" }"}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground mb-6 sm:mb-8">Become Our Sponsor</h2>

          <div className="max-w-md mx-auto border border-border p-6 sm:p-10 bg-background group hover-lift transition-all cursor-default">
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Sponsorship Packages</p>
            <p className="text-base sm:text-lg text-primary mb-3 sm:mb-4">Coming Soon</p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Partner with us to connect with talented developers and innovators.</p>
            
            <a 
              href="mailto:hackorizon@gmail.com" 
              className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.1em] sm:tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors touch-target"
            >
              <Mail className="w-4 h-4" /> Contact for Sponsorship
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
