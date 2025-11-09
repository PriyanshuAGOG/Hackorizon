import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, useRef } from "react";
import { Zap, Code2, Users, Trophy, Terminal, Cpu, Binary, Award, Calendar } from "lucide-react";
import RegistrationForm from "./RegistrationForm";

export default function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 12, minutes: 34, seconds: 56 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number>();

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  const scrollToSponsors = useCallback(() => {
    document.getElementById('sponsors')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-950/20 to-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          transform: 'translateY(0)',
          willChange: 'transform'
        }} />
      </div>

      {/* Mouse follower glow */}
      <div 
        className="absolute w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Floating binary code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            {Math.random() > 0.5 ? '1010' : '0101'}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Top Section - RIET Presents */}
          <div className="text-center mb-8 md:mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="flex items-center gap-2">
                <img
                  src="/attached_assets/1000166910-removebg-preview_1762022522986.png"
                  alt="RIET Logo"
                  className="w-6 h-6 md:w-8 md:h-8 object-contain transition-all duration-500 hover:scale-125 hover:rotate-12 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.9)]"
                />
                <p className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-[0.3em] hover:text-primary transition-colors duration-300">
                  RIET Jaipur Presents
                </p>
              </div>
              <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
            
            {/* Left Column - Stats */}
            <div className="flex flex-col gap-6 lg:items-end">
              {[
                { icon: Users, value: "500+", label: "PARTICIPANTS", desc: "Talented Developers" },
                { icon: Trophy, value: "₹5L+", label: "PRIZE POOL", desc: "Worth of Rewards" },
                { icon: Code2, value: "100+", label: "PROJECTS", desc: "Innovative Ideas" }
              ].map((stat, i) => (
                <div key={i} className="relative group max-w-sm lg:max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 pixel-corners p-5 hover:border-primary transition-all duration-300 neon-border hover:scale-105">
                    <div className="flex items-center gap-4">
                      <stat.icon className="w-8 h-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 flex-shrink-0" />
                      <div className="text-left">
                        <div className="text-3xl font-black font-mono text-foreground group-hover:neon-glow transition-all duration-300">{stat.value}</div>
                        <div className="text-xs font-mono text-primary uppercase tracking-wider">{stat.label}</div>
                        <div className="text-xs text-muted-foreground mt-0.5">{stat.desc}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Column - Main Hero */}
            <div className="flex flex-col items-center text-center space-y-8 lg:space-y-10 max-w-2xl mx-auto">
              
              {/* Logo */}
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-8 bg-gradient-to-r from-primary via-secondary to-primary rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-all duration-700 animate-spin-slow" />
                <div className="absolute -inset-4 bg-primary/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src="/1000167568.png"
                  alt="Hackorizon Logo"
                  className="relative w-32 h-32 md:w-48 md:h-48 object-contain transition-all duration-700 group-hover:scale-125 group-hover:rotate-[360deg] drop-shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,1)] filter group-hover:brightness-110"
                />
              </div>

              {/* Title */}
              <div className="space-y-6">
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none ${glitchActive ? 'animate-glitch' : ''}`}>
                  <span className="block font-mono bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent neon-glow hover:scale-105 transition-transform duration-300 inline-block cursor-default"
                        style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }}>
                    HACKORIZON
                  </span>
                </h1>

                {/* 2K26 - Premium Design */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-2xl animate-pulse-glow" />
                  <div className="relative bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border-4 border-primary/50 px-12 py-6 pixel-corners neon-border hover:border-primary transition-all duration-500 hover:scale-105 group cursor-default">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <p className="relative text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent" 
                       style={{ 
                         backgroundSize: '200% 200%',
                         animation: 'shimmer 3s ease-in-out infinite',
                         WebkitTextStroke: '1px rgba(59, 130, 246, 0.3)'
                       }}>
                      2K26
                    </p>
                  </div>
                </div>

                {/* Tagline - Structured Design */}
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-primary/10 blur-xl" />
                  <div className="relative bg-card/40 backdrop-blur-sm border-2 border-primary/40 px-8 py-4 pixel-corners hover:border-primary transition-all duration-300 hover:scale-105 group">
                    <div className="flex items-center justify-center gap-3">
                      <Binary className="w-5 h-5 text-primary animate-pulse group-hover:rotate-180 transition-transform duration-500" />
                      <div className="flex items-center gap-2 text-sm md:text-base font-mono text-primary uppercase tracking-[0.2em]">
                        <span className="font-bold">36 Hours</span>
                        <span className="text-primary/50">•</span>
                        <span className="font-bold">Code</span>
                        <span className="text-primary/50">•</span>
                        <span className="font-bold">Create</span>
                        <span className="text-primary/50">•</span>
                        <span className="font-bold">Conquer</span>
                      </div>
                      <Binary className="w-5 h-5 text-primary animate-pulse group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="max-w-xl space-y-3 pt-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Join the ultimate coding marathon where innovation meets excellence. Build groundbreaking solutions across <span className="text-primary font-semibold">AI/ML, Web3, IoT</span> and more.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button
                  size="lg"
                  onClick={() => setShowRegistration(true)}
                  className="w-full sm:w-auto relative group px-8 py-6 text-lg font-bold font-mono bg-primary hover:bg-primary/90 text-primary-foreground border-4 border-primary-border pixel-corners neon-border overflow-hidden transition-all hover:scale-110 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                    <Terminal className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                    Register Now
                    <Zap className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-lg font-bold font-mono bg-card/50 backdrop-blur-sm border-4 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary pixel-corners neon-border transition-all hover:scale-110 hover:-translate-y-1 uppercase tracking-wider group"
                >
                  <Cpu className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right Column - Countdown & Info */}
            <div className="flex flex-col gap-6">
              
              {/* Countdown Timer */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 pixel-corners p-6 hover:border-primary transition-all duration-300 neon-border">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-mono text-primary uppercase tracking-wider">Event Starts In</span>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {[
                      { value: timeLeft.days, label: 'DAYS' },
                      { value: timeLeft.hours, label: 'HRS' },
                      { value: timeLeft.minutes, label: 'MIN' },
                      { value: timeLeft.seconds, label: 'SEC' }
                    ].map((item, i) => (
                      <div key={i} className="text-center">
                        <div className="text-3xl font-black font-mono text-primary neon-glow">
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-[9px] font-mono text-muted-foreground uppercase tracking-wider mt-1">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Title Sponsor */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 pixel-corners p-6 hover:border-primary transition-all duration-300 neon-border">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 text-center">
                    Title Sponsor
                  </p>
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    <span className="text-xl font-black text-primary group-hover:neon-glow transition-all duration-300">Your Brand Here</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={scrollToSponsors}
                    className="w-full text-xs text-muted-foreground hover:text-primary font-mono hover:scale-105 transition-all duration-300"
                  >
                    Become a Sponsor →
                  </Button>
                </div>
              </div>

              {/* Tech Tracks */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 pixel-corners p-6 hover:border-primary transition-all duration-300 neon-border">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3 text-center">
                    Tech Tracks
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {['AI/ML', 'Web3', 'IoT', 'Cloud', 'Mobile', 'AR/VR'].map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 text-xs font-mono font-bold text-primary bg-primary/10 border-2 border-primary/50 pixel-corners hover:bg-primary/20 hover:border-primary transition-all cursor-default uppercase tracking-wider hover:scale-110"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glitch overlay */}
      {glitchActive && (
        <div className="absolute inset-0 bg-primary/5 pointer-events-none animate-glitch" />
      )}

      <RegistrationForm open={showRegistration} onOpenChange={setShowRegistration} />
    </section>
  );
}