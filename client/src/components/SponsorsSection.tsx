import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const sponsors = [
  {
    name: "OpenAI",
    role: "API Sponsor",
    description: "Providing OpenAI API credits for winners and participants. Access to powerful AI models and tools for development.",
    logo: "/openai.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: ".xyz",
    role: "Domain Partner",
    description: "Free domains and perks for participants. Modern, innovative domain extensions for your projects.",
    logo: "/xyz.jpg",
    color: "from-blue-500 to-cyan-500",
  },
];

export default function SponsorsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [hoveredSponsor, setHoveredSponsor] = useState<string | null>(null);

  return (
    <section id="sponsors" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Minimal decorations - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - minimal and clean */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4 animate-pulse">
            <span className="text-primary">{"< "}</span>Partners<span className="text-primary">{" />"}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            Supported By
          </h2>
        </div>

        {/* Sponsors grid - minimal two column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {sponsors.map((sponsor, idx) => {
            const isHovered = hoveredSponsor === sponsor.name;
            
            return (
              <div
                key={sponsor.name}
                onMouseEnter={() => setHoveredSponsor(sponsor.name)}
                onMouseLeave={() => setHoveredSponsor(null)}
                className={`transition-opacity duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
              >
                <div className="group cursor-default">
                  {/* Logo - minimal, no box */}
                  <div className="mb-5 sm:mb-7 flex items-center justify-start">
                    <div className="relative">
                      {/* Subtle glow on hover */}
                      <div className={`absolute inset-0 blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${sponsor.color}`} />
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={`h-12 sm:h-14 md:h-16 w-auto object-contain relative z-10 transition-all duration-300 ${
                          isHovered ? "scale-105" : "scale-100"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Sponsor info - minimal and clean */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.1em] text-muted-foreground group-hover:text-primary/70 transition-colors">
                      {sponsor.role}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                      {sponsor.description}
                    </p>
                  </div>

                  {/* Subtle underline on hover */}
                  <div className={`mt-4 sm:mt-6 h-px bg-border group-hover:bg-primary transition-colors duration-300 w-8`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA - minimal */}
        <div className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-border">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Interested in sponsoring?</p>
            <a 
              href="mailto:hackorizon@gmail.com" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-mono uppercase tracking-[0.1em] text-primary hover:text-foreground transition-colors group"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
