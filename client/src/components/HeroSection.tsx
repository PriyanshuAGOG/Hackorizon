import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots, CodeLine } from "./TechDecorations";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform";

export default function HeroSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const handleRegister = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-background">
      {/* Tech corner decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
        <TechCorner position="bl" />
        <TechCorner position="br" />
      </div>
      
      {/* Floating dots - hidden on mobile */}
      <div className="hidden md:block">
        <FloatingDots count={6} />
      </div>

      {/* Thin decorative lines - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
        <div className="absolute top-24 left-0 w-full h-px bg-border" />
        <div className="absolute bottom-24 left-0 w-full h-px bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className={`max-w-4xl mx-auto text-center ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
          
          {/* Code comment decoration - hidden on mobile */}
          <div className="hidden sm:block">
            <CodeLine className="justify-center mb-4" />
          </div>
          
          {/* Tagline */}
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground mb-4 sm:mb-6 animate-pulse">
            24-Hour Hackathon · Jaipur · Feb 2026
          </p>

          {/* Main title with subtle animation - responsive sizing */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-foreground tracking-tight leading-none mb-3 sm:mb-4">
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">E</span>
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">N</span>
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">I</span>
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">G</span>
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">M</span>
            <span className="inline-block hover:text-primary hover:scale-110 transition-all duration-300 hover:-translate-y-1">A</span>
            <span className="inline-block text-primary">'26</span>
          </h1>

          {/* Subtitle - responsive */}
          <p className="text-sm sm:text-lg md:text-xl font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary mb-6 sm:mb-8">
            Code · Collaborate · Innovate
          </p>

          {/* Description - responsive */}
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
            Join 800+ developers for an unforgettable experience of building, learning, and competing at Rajasthan's premier hackathon.
          </p>

          {/* CTAs - stack on mobile */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0">
            <Button
              size="lg"
              disabled
              className="w-full sm:w-auto bg-muted text-muted-foreground font-mono uppercase tracking-[0.1em] sm:tracking-[0.15em] px-6 sm:px-8 py-3 rounded-none cursor-not-allowed opacity-60 text-sm sm:text-base"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Registrations Closed
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-mono uppercase tracking-[0.1em] sm:tracking-[0.15em] border border-border text-foreground hover:border-primary hover:text-primary rounded-none px-6 sm:px-8 py-3 transition-colors text-sm sm:text-base"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              Learn More
            </Button>
          </div>

          {/* Stats row - 1 col on mobile, 3 cols on larger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border max-w-2xl mx-auto">
            {[
              { icon: <MapPin className="w-4 h-4" />, label: "Venue", value: "RIET Jaipur" },
              { icon: <Users className="w-4 h-4" />, label: "Hackers", value: "800+" },
              { icon: <Trophy className="w-4 h-4" />, label: "Prizes", value: "Cash + Perks" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-background p-4 sm:p-5 text-center group hover-lift cursor-default"
              >
                <div className="flex justify-center text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground mb-0.5 sm:mb-1">{item.label}</p>
                <p className="text-sm sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
