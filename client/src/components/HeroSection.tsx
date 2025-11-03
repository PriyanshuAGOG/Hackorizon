import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Sparkles, Zap, Code2 } from "lucide-react";
import RegistrationForm from "./RegistrationForm";
import rietLogo from "@assets/1000166910-removebg-preview_1762022522986.png";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showRegistration, setShowRegistration] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black"
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full opacity-15 blur-[80px] md:blur-[100px] transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, #C02630 0%, transparent 70%)',
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-gradient-to-br from-orange-600/15 to-transparent blur-[100px] md:blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-tr from-red-600/10 to-transparent blur-[80px] md:blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating particles - hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-10">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-3 py-2 md:px-5 md:py-2.5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer group">
            <img 
              src={rietLogo} 
              alt="RIET Logo" 
              className="w-7 h-7 md:w-9 md:h-9 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="flex flex-col items-start">
              <span className="text-[9px] md:text-xs text-white/60 uppercase tracking-widest font-light">Presented by</span>
              <span className="text-[10px] md:text-xs font-semibold text-white tracking-wide">Rajasthan Institute of Engineering & Technology</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-3 md:space-y-5">
            <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full">
              <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary animate-pulse" />
              <span className="text-[10px] md:text-sm font-medium text-primary uppercase tracking-wider">India's Premier Hackathon 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight leading-none">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                CODEVEDANS
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl font-light text-white/80 tracking-wide max-w-4xl mx-auto px-4">
              Where Innovation Meets{" "}
              <span className="font-semibold text-transparent bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text animate-shimmer bg-[length:200%_auto]">
                Excellence
              </span>
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 max-w-3xl mx-auto px-2">
            {[
              { value: "48", label: "Hours", icon: Zap },
              { value: "500+", label: "Participants", icon: Code2 },
              { value: "₹5L+", label: "Prizes", icon: Sparkles },
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative px-2 py-3 sm:px-3 sm:py-4 md:px-4 md:py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary mx-auto mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-0.5 md:mb-1">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Join India's most prestigious hackathon at RIET Jaipur. Experience 48 hours of 
            cutting-edge innovation, collaborate with brilliant minds, and build solutions 
            that shape the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-2 md:pt-4 px-4">
            <Button
              size="lg"
              onClick={() => setShowRegistration(true)}
              className="w-full sm:w-auto relative group px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg font-semibold bg-gradient-to-r from-primary to-red-700 hover:from-primary/90 hover:to-red-700/90 text-white border-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(192,38,48,0.4)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Register Now
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContent}
              className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-6 text-sm md:text-lg font-semibold bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ChevronDown className="w-4 h-4 md:w-5 md:h-5 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-4 md:pt-8 px-4">
            {['AI/ML', 'Web3', 'IoT', 'Full Stack', 'Cloud'].map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/30 hover:text-white transition-all duration-300 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="hidden md:flex absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider font-light">Scroll to explore</span>
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white/60 transition-colors duration-300">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </button>

      <RegistrationForm open={showRegistration} onOpenChange={setShowRegistration} />
    </section>
  );
}