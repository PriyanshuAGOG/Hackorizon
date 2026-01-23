import { Button } from "@/components/ui/button";
import { Rocket, Calendar, MapPin, Users, ExternalLink } from "lucide-react";
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#0ea5e9' : '#f97316',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-8 animate-pulse">
            <Rocket className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">RIET Jaipur Presents</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black mb-6">
            <span className="bg-gradient-to-r from-sky-500 via-primary to-orange-500 bg-clip-text text-transparent">
              ENIGMA'26
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground/90 mb-4">
            24-Hour Hackathon
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Join the ultimate coding experience where innovation meets creativity.
            Build, collaborate, and compete for exciting prizes!
          </p>

          {/* Event Details */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="font-medium">20-21 February 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-lg">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="font-medium">RIET Jaipur</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/50 border border-border rounded-lg">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">400+ Developers</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={handleRegister}
              className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_40px_rgba(255,94,0,0.5)] transition-all px-8 py-6 text-lg font-bold group"
            >
              <ExternalLink className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Register Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 px-8 py-6 text-lg font-bold"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>

          {/* Prize Pool Highlight */}
          <div className="mt-16 inline-block">
            <div className="px-8 py-4 bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/40 rounded-2xl">
              <p className="text-sm text-muted-foreground mb-1">Prize Pool</p>
              <p className="text-3xl sm:text-4xl font-black text-primary">Worth ₹1 Lakh</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-card to-transparent" />
    </section>
  );
}
