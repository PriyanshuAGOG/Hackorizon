import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import CircuitPattern from "./CircuitPattern";
import { Star, Cross, Diamond } from "./DecorativeElements";
import rocketImg from "@assets/generated_images/Vintage_retro_rocket_illustration_118f7ced.png";
import robotImg from "@assets/generated_images/Vintage_retro_robot_illustration_b3d7b1a6.png";
import monitorImg from "@assets/generated_images/Vintage_monitor_with_code_6cd2a93a.png";
import statueImg from "@assets/generated_images/Classical_statue_with_grid_overlay_e17eec96.png";

export default function HeroSection() {
  const [animatedElements, setAnimatedElements] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimatedElements(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <CircuitPattern />
      
      <div className="absolute top-8 right-8 animate-pulse">
        <Star className="w-12 h-12 text-primary/60" />
      </div>
      <div className="absolute top-1/4 left-12 animate-pulse" style={{ animationDelay: '0.5s' }}>
        <Cross className="w-8 h-8 text-foreground/40" />
      </div>
      <div className="absolute bottom-1/4 right-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Diamond className="w-6 h-6 text-primary/50" />
      </div>
      <div className="absolute top-1/2 right-32 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Cross className="w-6 h-6 text-foreground/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-6 max-w-6xl mx-auto">
          <div 
            className={`transition-all duration-1000 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h1
              className="text-7xl md:text-9xl lg:text-[10rem] font-serif font-bold text-foreground mb-8 tracking-tight"
              style={{
                fontFamily: '"Playfair Display", serif',
                letterSpacing: '0.02em'
              }}
              data-testid="hero-title"
            >
              CODEVEDANS
            </h1>
          </div>

          <div className="flex items-center justify-center gap-8 md:gap-16 my-12">
            <div 
              className={`transition-all duration-1000 delay-200 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <img
                src={rocketImg}
                alt="Rocket"
                className="w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-lg"
                data-testid="img-rocket"
              />
            </div>

            <div 
              className={`hidden md:block transition-all duration-1000 delay-400 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <img
                src={statueImg}
                alt="Classical Art"
                className="w-40 h-40 md:w-56 md:h-56 object-contain filter drop-shadow-2xl opacity-90"
                data-testid="img-statue"
              />
            </div>

            <div 
              className={`transition-all duration-1000 delay-300 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
            >
              <img
                src={robotImg}
                alt="Robot"
                className="w-32 h-32 md:w-48 md:h-48 object-contain filter drop-shadow-lg"
                data-testid="img-robot"
              />
            </div>
          </div>

          <div 
            className={`transition-all duration-1000 delay-500 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8" data-testid="text-tagline">
              BLAST OFF INTO CODING!
            </h2>
          </div>

          <div 
            className={`transition-all duration-1000 delay-600 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Button
              size="lg"
              className="text-xl px-12 py-8 rounded-none bg-primary hover:bg-primary/90 text-background font-bold tracking-wider border-2 border-primary hover:scale-105 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]"
              data-testid="button-register"
            >
              REGISTER NOW
            </Button>
          </div>

          <div 
            className={`transition-all duration-1000 delay-700 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-2xl md:text-3xl text-primary font-bold tracking-widest mb-6">
              CODE. COLLABORATE. INNOVATE.
            </p>
          </div>

          <div 
            className={`flex items-center justify-center gap-4 transition-all duration-1000 delay-800 ${animatedElements ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}
          >
            <img
              src={monitorImg}
              alt="Monitor"
              className="w-24 h-24 object-contain"
              data-testid="img-monitor"
            />
          </div>

          <div 
            className={`transition-all duration-1000 delay-900 ${animatedElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <p className="text-foreground/90 max-w-3xl mx-auto text-lg leading-relaxed font-light">
              Join us for the most prestigious hackathon of 2025. Experience 48 hours of innovation,
              collaboration, and cutting-edge technology. Build the future, win amazing prizes worth ₹5L+, and connect
              with 500+ fellow developers in an unforgettable journey at RIET Jaipur.
            </p>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 100" preserveAspectRatio="none">
        <path 
          d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z" 
          fill="currentColor"
          className="text-foreground"
        />
      </svg>
    </section>
  );
}
