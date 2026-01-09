import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import { Zap, Code2, Users, Trophy, Terminal, Cpu, Binary, Sparkles, Award, Rocket } from "lucide-react";
import { Link } from "wouter";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 45, hours: 12, minutes: 34, seconds: 56 });
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  // Binary rain animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(14, 165, 233, 0.5)';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-sky-950/20 pt-24 md:pt-28 pb-16">
      {/* Binary Rain Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-20"
      />

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

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Top: RIET Presents with symmetrical design */}
          <div className="flex flex-col items-center gap-6 mb-8 md:mb-12 animate-fade-in">
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent via-sky-500 to-sky-500" />
              <div className="relative group">
                <div className="absolute -inset-2 bg-sky-500/30 rounded-full blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.7)] group-hover:drop-shadow-[0_0_30px_rgba(14,165,233,1)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <p className="text-xs md:text-sm font-mono text-sky-400 uppercase tracking-[0.3em] font-bold px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-lg backdrop-blur-sm">
                RIET Jaipur Presents
              </p>
              <div className="relative group">
                <div className="absolute -inset-2 bg-sky-500/30 rounded-full blur-xl group-hover:bg-sky-500/50 transition-all duration-300" />
                <img
                  src="/rietlogo.png"
                  alt="RIET Logo"
                  className="relative w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_20px_rgba(14,165,233,0.7)] group-hover:drop-shadow-[0_0_30px_rgba(14,165,233,1)] transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent via-sky-500 to-sky-500" />
            </div>

            {/* Main Logo with premium effects */}
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-8 bg-gradient-to-r from-sky-500/30 via-blue-500/30 to-sky-500/30 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-all duration-700 animate-pulse" />
              <div className="absolute -inset-4 bg-sky-500/40 rounded-full blur-2xl group-hover:scale-110 transition-all duration-500" />
              <img
                src="/mainlogo.png"
                alt="Hackorizon Logo"
                className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-[0_0_30px_rgba(14,165,233,0.8)] group-hover:drop-shadow-[0_0_60px_rgba(14,165,233,1)] transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              {/* Sparkle effects */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-sky-400 animate-pulse" />
              <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Main Content - Symmetrical Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
            
            {/* Left Column: Title + Description */}
            <div className="space-y-6 text-center lg:text-left">
              {/* Title Section */}
              <div className="space-y-4">
                <div className="relative inline-block">
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none font-mono text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 animate-gradient drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                    HACKORIZON
                  </h1>
                  <div className="absolute -inset-4 bg-sky-500/20 blur-2xl -z-10" />
                </div>
                
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="h-px w-16 bg-gradient-to-r from-transparent to-sky-500" />
                  <p className="text-2xl md:text-3xl font-bold text-sky-400 font-mono">2026</p>
                  <div className="h-px w-16 bg-gradient-to-l from-transparent to-sky-500" />
                </div>

                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-sky-500/20 via-blue-500/20 to-sky-500/20 border-2 border-sky-500/40 rounded-xl hover:border-sky-400 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] transition-all duration-300 group backdrop-blur-sm">
                  <Binary className="w-5 h-5 text-sky-400 group-hover:rotate-180 transition-transform duration-500" />
                  <span className="text-sm md:text-base font-mono text-sky-300 uppercase tracking-wider font-bold">36 Hours • Code • Create • Conquer</span>
                  <Zap className="w-5 h-5 text-sky-400 group-hover:scale-125 transition-transform" />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-4 max-w-xl mx-auto lg:mx-0">
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                  Join <span className="text-sky-400 font-bold">300+ developers</span> from across the nation for{" "}
                  <span className="font-bold text-sky-400">36 hours</span> of non-stop innovation and creativity.
                </p>
                <p className="text-sm md:text-base text-muted-foreground/90 leading-relaxed">
                  Build groundbreaking solutions in <span className="text-sky-400 font-semibold">AI/ML, Web3, IoT, Cloud,</span> and more.
                  Network with industry leaders, learn from experts, and compete for amazing prizes.
                </p>
              </div>

              {/* CTA Buttons - Premium Design */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 pt-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto relative group px-8 py-6 text-base md:text-lg font-bold bg-gradient-to-r from-sky-500 via-blue-500 to-sky-500 hover:from-sky-400 hover:via-blue-400 hover:to-sky-400 text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.8)] overflow-hidden border-2 border-sky-400/50"
                  >
                    <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
                    <span className="relative z-10 flex items-center justify-center gap-3 uppercase tracking-wider">
                      <Rocket className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
                      Register Now
                      <Sparkles className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                    </span>
                  </Button>
                </Link>

                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto px-8 py-6 text-base md:text-lg font-bold border-2 border-sky-500/50 text-sky-400 hover:border-sky-400 hover:bg-sky-500/20 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] uppercase tracking-wider group backdrop-blur-sm"
                >
                  <Cpu className="w-5 h-5 mr-3 group-hover:rotate-180 transition-transform duration-500" />
                  Learn More
                </Button>
              </div>

              {/* Tech Tags - Premium Pills */}
              <div className="flex flex-wrap items-center lg:justify-start justify-center gap-2 pt-2">
                {[
                  { name: 'AI/ML', icon: Binary },
                  { name: 'Web3', icon: Code2 },
                  { name: 'IoT', icon: Cpu },
                  { name: 'Cloud', icon: Terminal },
                  { name: 'Mobile', icon: Zap },
                  { name: 'AR/VR', icon: Trophy }
                ].map((tag) => (
                  <span 
                    key={tag.name}
                    className="px-4 py-2 text-xs md:text-sm font-mono font-bold text-sky-400 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-sky-500/10 border border-sky-500/40 rounded-full hover:bg-sky-500/20 hover:border-sky-400 hover:scale-110 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)] transition-all cursor-default uppercase tracking-wider flex items-center gap-2 group backdrop-blur-sm"
                  >
                    <tag.icon className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Timer + Stats - Symmetrical */}
            <div className="space-y-6">
              {/* Countdown Timer - Premium Cards */}
              <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border-2 border-sky-500/30 rounded-2xl p-6 shadow-[0_0_50px_rgba(14,165,233,0.2)] hover:shadow-[0_0_80px_rgba(14,165,233,0.4)] transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Terminal className="w-5 h-5 text-sky-400" />
                  <h3 className="text-sm md:text-base font-mono font-bold text-sky-400 uppercase tracking-widest">Event Countdown</h3>
                  <Terminal className="w-5 h-5 text-sky-400" />
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { value: timeLeft.days, label: 'DAYS' },
                    { value: timeLeft.hours, label: 'HRS' },
                    { value: timeLeft.minutes, label: 'MIN' },
                    { value: timeLeft.seconds, label: 'SEC' }
                  ].map((item, i) => (
                    <div key={i} className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      <div className="relative bg-gradient-to-br from-sky-500/20 via-blue-500/20 to-sky-500/20 border-2 border-sky-500/40 rounded-xl p-3 md:p-4 hover:border-sky-400 hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                        <div className="text-2xl md:text-3xl lg:text-4xl font-black font-mono text-sky-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.8)]">
                          {String(item.value).padStart(2, '0')}
                        </div>
                        <div className="text-[9px] md:text-xs font-mono text-sky-300/70 uppercase tracking-wider mt-1">
                          {item.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Cards - Premium Design */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Users, value: "300+", label: "PARTICIPANTS", color: "from-sky-500/20 to-blue-500/20" },
                  { icon: Trophy, value: "6", label: "TRACKS", color: "from-blue-500/20 to-purple-500/20" },
                  { icon: Award, value: "₹5L+", label: "PRIZES", color: "from-purple-500/20 to-sky-500/20" }
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-blue-500/30 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    <div className={`relative bg-gradient-to-br ${stat.color} backdrop-blur-xl border-2 border-sky-500/40 rounded-xl p-4 hover:border-sky-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-lg`}>
                      <div className="bg-sky-500/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-500/30 transition-colors border border-sky-500/30">
                        <stat.icon className="w-6 h-6 text-sky-400 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                      </div>
                      <div className="text-xl md:text-2xl lg:text-3xl font-black font-mono text-sky-400 drop-shadow-[0_0_10px_rgba(14,165,233,0.6)]">{stat.value}</div>
                      <div className="text-[9px] md:text-xs font-mono text-sky-300/70 uppercase tracking-wider mt-1">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info Card */}
              <div className="bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-xl border-2 border-sky-500/30 rounded-2xl p-5 shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:shadow-[0_0_50px_rgba(14,165,233,0.4)] transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-500/20 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border border-sky-500/30">
                    <Zap className="w-5 h-5 text-sky-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm md:text-base font-bold text-sky-400 mb-2">Why Participate?</h4>
                    <ul className="space-y-1.5 text-xs md:text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Win exciting prizes & recognition
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Network with 300+ developers
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        Learn from industry experts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-sky-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
