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
          className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] transition-all duration-300 ease-out"
          style={{
            background: 'radial-gradient(circle, #C02630 0%, transparent 70%)',
            left: `${mousePosition.x - 300}px`,
            top: `${mousePosition.y - 300}px`,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-orange-600/20 to-transparent blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-red-600/15 to-transparent blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
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
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Logo Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer group">
            <img 
              src={rietLogo} 
              alt="RIET Logo" 
              className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="flex flex-col items-start">
              <span className="text-xs text-white/60 uppercase tracking-widest font-light">Presented by</span>
              <span className="text-sm font-semibold text-white tracking-wide">Rajasthan Institute of Engineering & Technology</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/30 rounded-full">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary uppercase tracking-wider">India's Premier Hackathon 2025</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                CODEVEDANS
              </span>
            </h1>

            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/80 tracking-wide max-w-4xl mx-auto">
              Where Innovation Meets{" "}
              <span className="font-semibold text-transparent bg-gradient-to-r from-primary via-orange-500 to-primary bg-clip-text animate-shimmer bg-[length:200%_auto]">
                Excellence
              </span>
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto">
            {[
              { value: "48", label: "Hours", icon: Zap },
              { value: "500+", label: "Participants", icon: Code2 },
              { value: "₹5L+", label: "Prizes", icon: Sparkles },
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative px-4 py-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light">
            Join India's most prestigious hackathon at RIET Jaipur. Experience 48 hours of 
            cutting-edge innovation, collaborate with brilliant minds, and build solutions 
            that shape the future of technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => setShowRegistration(true)}
              className="relative group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-red-700 hover:from-primary/90 hover:to-red-700/90 text-white border-0 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_rgba(192,38,48,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Register Now
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContent}
              className="px-8 py-6 text-lg font-semibold bg-white/5 backdrop-blur-xl border-white/20 text-white hover:bg-white/10 hover:border-white/30 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
              <ChevronDown className="w-5 h-5 ml-2 animate-bounce" />
            </Button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
            {['AI/ML', 'Web3', 'IoT', 'Full Stack', 'Cloud'].map((tag, i) => (
              <span 
                key={i}
                className="px-4 py-2 text-sm font-medium text-white/80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:border-primary/30 hover:text-white transition-all duration-300 cursor-default"
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300 cursor-pointer group"
        aria-label="Scroll to content"
      >
        <span className="text-xs uppercase tracking-wider font-light">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2 group-hover:border-white/60 transition-colors duration-300">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </button>

      <RegistrationForm open={showRegistration} onOpenChange={setShowRegistration} />
    </section>
  );
}