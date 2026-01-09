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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-20 relative z-10 py-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Top: RIET Presents + Logo */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/30 rounded-lg blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                />
              </div>
              <p className="text-xs md:text-sm font-mono text-sky-500 uppercase tracking-[0.2em] font-semibold">
                RIET Jaipur Presents
              </p>
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/30 rounded-lg blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-8 h-8 md:w-10 md:h-10 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                />
              </div>
            </div>

            {/* Logo */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-all duration-500" />
              <img
                src="/mainlogo.png"
                alt="Hackorizon Logo"
                className="relative w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.6)] group-hover:drop-shadow-[0_0_40px_rgba(14,165,233,0.9)] transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Title + Description + CTA */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none font-mono text-sky-500 drop-shadow-[0_0_20px_rgba(14,165,233,0.5)]">
                  HACKORIZON
                </h1>
                <p className="text-xl md:text-2xl font-bold text-foreground">2026</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border-2 border-sky-500/30 rounded-lg">
                  <Binary className="w-4 h-4 text-sky-500" />
                  <span className="text-xs md:text-sm font-mono text-sky-500 uppercase tracking-wider font-semibold">36 Hours • Code • Create • Conquer</span>
                </div>
              </div>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join developers from across the nation for <span className="font-bold text-sky-500">36 hours</span> of non-stop innovation. 
                Build solutions in <span className="text-sky-500 font-semibold">AI/ML, Web3, IoT</span> and more.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto relative group px-6 py-5 text-base font-bold bg-sky-500 hover:bg-sky-600 text-white transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] overflow-hidden"
                  >
                    <span className="absolute inset-0 bg-sky-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                      <Terminal className="w-4 h-4" />
                      Register Now
                    </span>
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-6 py-5 text-base font-bold border-2 border-sky-500/50 text-sky-500 hover:border-sky-500 hover:bg-sky-500/10 transition-all hover:scale-105 uppercase tracking-wider group"
                >
                  <Cpu className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
                  Learn More
                </Button>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-2">
                {['AI/ML', 'Web3', 'IoT', 'Cloud', 'Mobile', 'AR/VR'].map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1.5 text-xs font-mono font-semibold text-sky-500 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 hover:border-sky-500 transition-all cursor-default uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Timer + Stats */}
            <div className="space-y-6">
              {/* Countdown Timer */}
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: timeLeft.days, label: 'DAYS' },
                  { value: timeLeft.hours, label: 'HRS' },
                  { value: timeLeft.minutes, label: 'MIN' },
                  { value: timeLeft.seconds, label: 'SEC' }
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative bg-card border-2 border-sky-500/30 rounded-lg p-3 hover:border-sky-500 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl md:text-3xl font-black font-mono text-sky-500">
                        {String(item.value).padStart(2, '0')}
                      </div>
                      <div className="text-[9px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">
                        {item.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Users, value: "300+", label: "PARTICIPANTS" },
                  { icon: Trophy, value: "6", label: "TRACKS" },
                  { icon: Code2, value: "36", label: "HOURS" }
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className="relative bg-card/50 backdrop-blur-sm border-2 border-sky-500/30 rounded-lg p-3 hover:border-sky-500 hover:scale-105 transition-all duration-300">
                      <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-sky-500 mx-auto mb-2 group-hover:scale-110 transition-all duration-300" />
                      <div className="text-xl md:text-2xl font-black font-mono text-foreground">{stat.value}</div>
                      <div className="text-[9px] md:text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
