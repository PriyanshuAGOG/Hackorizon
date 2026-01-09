
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Zap, Code2, Users, Trophy, Terminal, Cpu, Binary } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 34, seconds: 56 });

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 2px, transparent 2px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Floating binary code */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary font-mono text-sm animate-float"
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
        <div className="max-w-6xl mx-auto text-center space-y-6 md:space-y-10">
          
          {/* RIET Presents */}
          <div className="space-y-2 animate-fade-in">
            <div className="flex items-center justify-center gap-3">
              <img
                src="/1000167568.png"
                alt="RIET Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain animate-float"
              />
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <p className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-widest">
                RIET Jaipur Presents
              </p>
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <img
                src="/1000167568.png"
                alt="RIET Logo"
                className="w-8 h-8 md:w-10 md:h-10 object-contain animate-float"
              />
            </div>
          </div>

          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative bg-card border-4 border-primary rounded-lg p-2">
                <img
                  src="/1000167568.png"
                  alt="Hackorizon Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-none">
              <span className="block font-mono text-primary">
                HACKORIZON
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">2026</p>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border-2 border-primary/50 rounded-lg">
              <Binary className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-xs md:text-sm font-mono text-primary uppercase tracking-widest">36 Hours • Code • Create • Conquer</span>
            </div>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto space-y-4 px-4">
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Join developers from across the nation for{" "}
              <span className="font-bold text-foreground">36 hours</span> of non-stop innovation, coding, and creativity.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground/80">
              Build groundbreaking solutions in <span className="text-foreground font-medium">AI/ML, Web3, IoT,</span> and more.
              Network with industry leaders and compete for exciting prizes.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto px-4">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HRS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEC' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="relative bg-card border-2 border-primary/50 rounded-lg p-2 sm:p-3 md:p-4 hover:border-primary transition-all">
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-mono text-primary">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-3xl mx-auto px-4">
            {[
              { icon: Users, value: "300+", label: "PARTICIPANTS" },
              { icon: Trophy, value: "6", label: "TRACKS" },
              { icon: Code2, value: "36", label: "HOURS" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-lg p-3 sm:p-4 md:p-5 hover:border-primary transition-all">
                  <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black font-mono text-foreground">{stat.value}</div>
                  <div className="text-[9px] sm:text-[10px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 px-4 pt-4">
            <Link href="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto relative group px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                  <Terminal className="w-4 h-4 md:w-5 md:h-5" />
                  Register Now
                  <Zap className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-bold border-2 border-primary/50 hover:border-primary transition-all hover:scale-105 uppercase tracking-wider"
            >
              <Cpu className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Learn More
            </Button>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 pt-4 px-4">
            {['AI/ML', 'Web3', 'IoT', 'Cloud', 'Mobile', 'AR/VR'].map((tag, i) => (
              <span 
                key={i}
                className="px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-sm font-mono font-medium text-primary bg-primary/10 border border-primary/50 rounded hover:bg-primary/20 transition-all cursor-default uppercase tracking-wider"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
