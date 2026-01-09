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
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `
            linear-gradient(rgba(14, 165, 233, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14, 165, 233, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8 md:space-y-12">
          
          {/* RIET Presents */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/30 rounded-lg blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                />
              </div>
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <p className="text-sm md:text-base font-mono text-sky-500 uppercase tracking-[0.2em] font-semibold">
                RIET Jaipur Presents
              </p>
              <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
              <div className="relative group">
                <div className="absolute inset-0 bg-sky-500/30 rounded-lg blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_15px_rgba(14,165,233,0.5)] group-hover:drop-shadow-[0_0_25px_rgba(14,165,233,0.8)] transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Logo */}
          <div className="inline-flex items-center justify-center">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-6 bg-sky-500/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-500 animate-pulse-slow" />
              <img
                src="/1000167568.png"
                alt="Hackorizon Logo"
                className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_0_30px_rgba(14,165,233,0.6)] group-hover:drop-shadow-[0_0_50px_rgba(14,165,233,0.9)] transition-all duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none font-mono text-sky-500 drop-shadow-[0_0_30px_rgba(14,165,233,0.5)] hover:drop-shadow-[0_0_50px_rgba(14,165,233,0.8)] transition-all duration-300 cursor-default">
              HACKORIZON
            </h1>

            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">2026</p>

            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/10 border-2 border-sky-500/30 rounded-lg hover:border-sky-500/60 hover:bg-sky-500/20 transition-all duration-300 group">
              <Binary className="w-5 h-5 text-sky-500 group-hover:scale-110 transition-transform" />
              <span className="text-sm md:text-base font-mono text-sky-500 uppercase tracking-widest font-semibold">36 Hours • Code • Create • Conquer</span>
            </div>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto space-y-5 px-4">
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Join developers from across the nation for{" "}
              <span className="font-bold text-sky-500">36 hours</span> of non-stop innovation, coding, and creativity.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground/80">
              Build groundbreaking solutions in <span className="text-sky-500 font-semibold">AI/ML, Web3, IoT,</span> and more.
              Network with industry leaders and compete for exciting prizes.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto px-4">
            {[
              { value: timeLeft.days, label: 'DAYS' },
              { value: timeLeft.hours, label: 'HRS' },
              { value: timeLeft.minutes, label: 'MIN' },
              { value: timeLeft.seconds, label: 'SEC' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-sky-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-card border-2 border-sky-500/30 rounded-xl p-3 sm:p-4 md:p-6 hover:border-sky-500 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black font-mono text-sky-500">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider mt-1">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4">
            {[
              { icon: Users, value: "300+", label: "PARTICIPANTS" },
              { icon: Trophy, value: "6", label: "TRACKS" },
              { icon: Code2, value: "36", label: "HOURS" }
            ].map((stat, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 bg-sky-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative bg-card/50 backdrop-blur-sm border-2 border-sky-500/30 rounded-xl p-4 sm:p-5 md:p-6 hover:border-sky-500 hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sky-500 mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black font-mono text-foreground">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 pt-6">
            <Link href="/register">
              <Button
                size="lg"
                className="w-full sm:w-auto relative group px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl font-bold bg-sky-500 hover:bg-sky-600 text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.6)] overflow-hidden"
              >
                <span className="absolute inset-0 bg-sky-400/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-wider">
                  <Terminal className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                  Register Now
                  <Zap className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 md:px-10 py-6 md:py-7 text-lg md:text-xl font-bold border-2 border-sky-500/50 text-sky-500 hover:border-sky-500 hover:bg-sky-500/10 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] uppercase tracking-wider group"
            >
              <Cpu className="w-5 h-5 md:w-6 md:h-6 mr-3 group-hover:rotate-180 transition-transform duration-500" />
              Learn More
            </Button>
          </div>

          {/* Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 pt-6 px-4">
            {['AI/ML', 'Web3', 'IoT', 'Cloud', 'Mobile', 'AR/VR'].map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-2 md:px-4 md:py-2.5 text-sm md:text-base font-mono font-semibold text-sky-500 bg-sky-500/10 border border-sky-500/30 rounded-lg hover:bg-sky-500/20 hover:border-sky-500 hover:scale-110 transition-all cursor-default uppercase tracking-wider hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                style={{ animationDelay: `${i * 0.1}s` }}
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
