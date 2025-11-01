
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import CircuitPattern from "./CircuitPattern";
import { Star, Cross, Diamond } from "./DecorativeElements";
import RegistrationForm from "./RegistrationForm";
import rocketImg from "@assets/generated_images/Vintage_retro_rocket_illustration_118f7ced.png";
import robotImg from "@assets/generated_images/Vintage_retro_robot_illustration_b3d7b1a6.png";
import monitorImg from "@assets/generated_images/Vintage_monitor_with_code_6cd2a93a.png";
import statueImg from "@assets/generated_images/Classical_statue_with_grid_overlay_e17eec96.png";
import rietLogo from "@assets/1000166910-removebg-preview_1762022522986.png";

export default function HeroSection() {
  const [animatedElements, setAnimatedElements] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [cursorParticles, setCursorParticles] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [showRegistration, setShowRegistration] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setTimeout(() => setAnimatedElements(true), 100);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create cursor trail particles
      if (Math.random() > 0.7) {
        const newParticle = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };
        setCursorParticles(prev => [...prev.slice(-20), newParticle]);
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-24 md:pt-0">
      {/* Enhanced cursor trail particles */}
      {cursorParticles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-3 h-3 rounded-full pointer-events-none animate-fade-out"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            background: `radial-gradient(circle, ${Math.random() > 0.5 ? '#C02630' : '#DAA520'}, transparent)`,
            boxShadow: `0 0 ${10 + Math.random() * 10}px currentColor`,
          }}
        />
      ))}
      
      {/* Parallax mouse-following glow */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-radial from-primary/20 via-secondary/15 to-transparent blur-[150px] pointer-events-none transition-all duration-300"
        style={{
          left: `${mousePosition.x - 250}px`,
          top: `${mousePosition.y - 250}px`,
        }}
      />

      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <CircuitPattern />
      </div>
      
      {/* Floating decorative elements with parallax */}
      <div 
        className="absolute top-8 right-8 animate-float"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Star className="w-16 h-16 text-primary/60 animate-spin-slow" />
      </div>
      <div 
        className="absolute top-1/4 left-12 animate-bounce-slow" 
        style={{ 
          animationDelay: '0.5s',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <Cross className="w-10 h-10 text-foreground/40 animate-pulse" />
      </div>
      <div 
        className="absolute bottom-1/4 right-20 animate-wiggle" 
        style={{ 
          animationDelay: '1s',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <Diamond className="w-8 h-8 text-primary/50 animate-heartbeat" />
      </div>
      <div 
        className="absolute top-1/2 right-32 animate-swing" 
        style={{ 
          animationDelay: '1.5s',
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      >
        <Cross className="w-7 h-7 text-foreground/30" />
      </div>
      <div 
        className="absolute top-1/3 left-1/4 animate-tada" 
        style={{ 
          animationDelay: '2s',
          transform: `translateY(${scrollY * 0.18}px)`,
        }}
      >
        <Star className="w-12 h-12 text-secondary/40" />
      </div>
      <div 
        className="absolute bottom-1/3 left-1/3 animate-rubber-band" 
        style={{ 
          animationDelay: '2.5s',
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <Diamond className="w-6 h-6 text-primary/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-6xl mx-auto">
          {/* RIET Presented By Badge with enhanced animations */}
          <div 
            className={`transition-all duration-1000 ${animatedElements ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-180'}`}
          >
            <div className="inline-flex flex-col items-center gap-3 px-8 py-4 bg-gradient-to-br from-card/90 via-card/70 to-card/90 border-2 border-primary/30 rounded-2xl mb-6 backdrop-blur-2xl shadow-[0_8px_32px_rgba(192,38,48,0.15)] hover:shadow-[0_12px_48px_rgba(192,38,48,0.4)] hover:scale-105 hover:border-primary/60 transition-all duration-700 cursor-pointer group relative overflow-hidden animate-border-glow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-shift" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
              
              <span className="text-xs text-foreground/50 uppercase tracking-[0.35em] font-light relative z-10 group-hover:text-foreground/70 transition-colors">Presented By</span>
              <div className="flex items-center gap-3 relative z-10">
                <img 
                  src={rietLogo} 
                  alt="RIET" 
                  className="w-12 h-12 object-contain group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-[0_0_15px_rgba(192,38,48,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(192,38,48,1)] animate-pulse-glow"
                />
                <span className="text-xl md:text-2xl font-bold text-foreground tracking-wide group-hover:text-primary transition-colors duration-300 group-hover:animate-tada">
                  RIET
                </span>
              </div>
              <span className="text-xs text-foreground/60 text-center leading-tight max-w-xs font-light relative z-10 group-hover:text-foreground/80 transition-colors animate-text-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, currentColor 0%, currentColor 40%, rgba(192,38,48,0.8) 50%, currentColor 60%, currentColor 100%)', backgroundSize: '200% auto', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
                Rajasthan Institute of Engineering and Technology
              </span>
            </div>
          </div>

          {/* Enhanced title with letter-by-letter animations */}
          <div 
            className={`transition-all duration-1000 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-serif font-bold text-foreground mb-6 md:mb-8 tracking-tight hover:scale-105 transition-all duration-700 cursor-default group px-4"
              style={{
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '0.02em',
                textShadow: '0 0 40px rgba(232, 220, 196, 0.3)',
              }}
              data-testid="hero-title"
            >
              {['C','O','D','E','V','E','D','A','N','S'].map((letter, i) => (
                <span
                  key={i}
                  className="inline-block hover:text-primary hover:scale-150 hover:-rotate-12 hover:animate-bounce-in transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('animate-jello');
                    setTimeout(() => e.currentTarget.classList.remove('animate-jello'), 1000);
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>

          {/* Enhanced images with parallax */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16 my-8 md:my-12">
            <div 
              className={`transition-all duration-1000 delay-200 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} group cursor-pointer`}
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              <img
                src={rocketImg}
                alt="Rocket"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain filter drop-shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-bounce-slow group-hover:animate-rocket-ascend mix-blend-lighten hover-glow-primary"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 94, 0, 0.5)) brightness(1.1) contrast(1.2)',
                }}
                data-testid="img-rocket"
              />
            </div>

            <div 
              className={`hidden sm:block transition-all duration-1000 delay-400 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} group cursor-pointer`}
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <img
                src={statueImg}
                alt="Classical Art"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 object-contain filter drop-shadow-2xl opacity-90 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 animate-tilt group-hover:animate-flip mix-blend-lighten"
                style={{
                  filter: 'drop-shadow(0 0 30px rgba(232, 220, 196, 0.4)) brightness(1.1) contrast(1.2)',
                }}
                data-testid="img-statue"
              />
            </div>

            <div 
              className={`transition-all duration-1000 delay-300 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'} group cursor-pointer`}
              style={{ transform: `translateY(${scrollY * 0.06}px)` }}
            >
              <img
                src={robotImg}
                alt="Robot"
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-contain filter drop-shadow-lg group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 animate-float group-hover:animate-wobble mix-blend-lighten hover-glow-secondary"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(255, 94, 0, 0.5)) brightness(1.1) contrast(1.2)',
                }}
                data-testid="img-robot"
              />
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-500 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 animate-glow-pulse hover:animate-tada transition-all duration-300" data-testid="text-tagline">
              BLAST OFF INTO CODING!
            </h2>
          </div>

          <div 
            className={`transition-all duration-1000 delay-600 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button
              size="lg"
              onClick={() => setShowRegistration(true)}
              className="relative text-base sm:text-lg md:text-xl px-10 sm:px-12 md:px-16 py-6 md:py-8 rounded-xl bg-gradient-to-r from-primary via-red-600 to-primary bg-[length:200%_100%] hover:bg-right-bottom text-white font-bold tracking-wider border-2 border-primary/50 hover:border-secondary hover:scale-110 md:hover:scale-125 hover:-translate-y-2 transition-all duration-500 shadow-[0_10px_30px_rgba(192,38,48,0.3)] hover:shadow-[0_20px_60px_rgba(192,38,48,0.6),0_0_40px_rgba(218,165,32,0.4)] group overflow-hidden active:scale-95 animate-heartbeat hover:animate-rubber-band"
              data-testid="button-register"
            >
              <span className="relative z-10 group-hover:tracking-[0.3em] transition-all duration-300">REGISTER NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/60 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-secondary/30 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-primary rounded-xl blur opacity-30 group-hover:opacity-80 transition-opacity duration-500 -z-10 animate-pulse-glow" />
            </Button>
          </div>

          <div 
            className={`transition-all duration-1000 delay-700 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-2xl md:text-3xl text-primary font-bold tracking-widest mb-6 animate-text-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, #C02630 0%, #DAA520 50%, #C02630 100%)', backgroundSize: '200% auto', backgroundClip: 'text', WebkitBackgroundClip: 'text' }}>
              CODE. COLLABORATE. INNOVATE.
            </p>
          </div>

          <div 
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-800 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <img
              src={monitorImg}
              alt="Monitor"
              className="w-24 h-24 object-contain mix-blend-lighten hover:scale-125 hover:rotate-6 transition-all duration-300 animate-float cursor-pointer hover:animate-jello"
              style={{
                filter: 'brightness(1.1) contrast(1.2)',
              }}
              data-testid="img-monitor"
            />
          </div>

          <div 
            className={`transition-all duration-1000 delay-900 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-foreground/90 max-w-3xl mx-auto text-lg leading-relaxed font-light hover:text-foreground transition-colors duration-300">
              Join us for the most prestigious hackathon of 2025. Experience 48 hours of innovation,
              collaboration, and cutting-edge technology. Build the future, win amazing prizes worth ₹5L+, and connect
              with 500+ fellow developers in an unforgettable journey at RIET Jaipur.
            </p>
          </div>
        </div>
      </div>

      {/* Animated wave at bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20 animate-wave" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path 
          d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" 
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      <RegistrationForm open={showRegistration} onOpenChange={setShowRegistration} />
    </section>
  );
}
