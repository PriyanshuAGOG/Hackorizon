import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, ExternalLink, Sparkles, Code2, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform";

export default function HeroSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const handleRegister = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card/30 to-background"
    >
      {/* Sophisticated Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)'
        }} />
      </div>

      {/* Radial Gradient Spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-60" style={{
        background: 'radial-gradient(ellipse 100% 60% at 50% 45%, rgba(14, 165, 233, 0.08), transparent 70%)'
      }} />

      {/* Animated Accent Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Premium Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: '#0ea5e9',
              boxShadow: `0 0 ${Math.random() * 15 + 5}px rgba(14, 165, 233, 0.6)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className={`text-center max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* RIET Presents with Logos */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/1000167568.png"
                  alt="RIET Logo"
                  className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.6)] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary/30 bg-card/50 backdrop-blur-sm rounded-xl hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.2)]">
              <span className="text-[0.65rem] sm:text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                RIET PRESENTS
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img
                  src="/1000167568.png"
                  alt="RIET Logo"
                  className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_8px_rgba(14,165,233,0.6)] group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Main Title with Premium Styling */}
          <div className="relative mb-6 sm:mb-8 md:mb-10">
            <div className="absolute -inset-4 sm:-inset-8 bg-primary/5 blur-3xl rounded-full" />
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tight leading-none">
              <span className="inline-block bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(14,165,233,0.3)]">
                ENIGMA'26
              </span>
            </h1>
            {/* Decorative Elements */}
            <div className="absolute -left-4 sm:-left-8 md:-left-12 top-1/2 -translate-y-1/2 w-8 sm:w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
            <div className="absolute -right-4 sm:-right-8 md:-right-12 top-1/2 -translate-y-1/2 w-8 sm:w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
          </div>

          {/* Subtitle with Icon */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" />
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground/90">
              24-Hour Hackathon
            </p>
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-primary animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Premium Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 sm:mb-12 md:mb-14 leading-relaxed px-4">
            Where innovation meets excellence. Join 400+ developers in an extraordinary journey of 
            <span className="text-primary font-semibold"> creation</span>,
            <span className="text-primary font-semibold"> collaboration</span>, and
            <span className="text-primary font-semibold"> competition</span>.
          </p>

          {/* Premium Event Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-10 sm:mb-12 md:mb-14 px-4">
            <div className="group relative p-4 sm:p-6 bg-card/80 backdrop-blur-md border-2 border-border hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Event Date</p>
              <p className="text-sm sm:text-base font-bold text-foreground">20-21 Feb 2026</p>
            </div>
            
            <div className="group relative p-4 sm:p-6 bg-card/80 backdrop-blur-md border-2 border-border hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Venue</p>
              <p className="text-sm sm:text-base font-bold text-foreground">RIET Jaipur</p>
            </div>
            
            <div className="group relative p-4 sm:p-6 bg-card/80 backdrop-blur-md border-2 border-border hover:border-primary/50 rounded-xl transition-all duration-300 hover:shadow-[0_8px_30px_rgba(14,165,233,0.15)] hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-1">Participants</p>
              <p className="text-sm sm:text-base font-bold text-foreground">400+ Developers</p>
            </div>
          </div>

          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 md:mb-20 px-4">
            <Button
              size="lg"
              onClick={handleRegister}
              className="w-full sm:w-auto group relative bg-primary hover:bg-primary/90 text-white px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(14,165,233,0.4)]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
              <span className="relative z-10">Register Now</span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto border-2 border-primary/40 hover:border-primary hover:bg-primary/10 px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_30px_rgba(14,165,233,0.2)]"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Explore More
            </Button>
          </div>

          {/* Premium Prize Pool Display */}
          <div className="relative inline-block group">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative px-8 sm:px-12 py-6 sm:py-8 bg-gradient-to-br from-card/90 via-card/80 to-card/90 backdrop-blur-xl border-2 border-primary/40 rounded-2xl shadow-[0_8px_40px_rgba(14,165,233,0.25)] hover:shadow-[0_12px_50px_rgba(14,165,233,0.35)] transition-all duration-300 hover:scale-105">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3 sm:mb-4 group-hover:rotate-12 transition-transform duration-300" />
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-wider">Prize Pool</p>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-primary via-primary to-primary bg-clip-text text-transparent">
                Worth ₹1 Lakh
              </p>
              <div className="absolute top-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-primary/30" />
              <div className="absolute top-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-primary/30" />
              <div className="absolute bottom-2 left-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-primary/30" />
              <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-primary/30" />
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
    </section>
  );
}
