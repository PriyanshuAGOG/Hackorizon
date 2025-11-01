import { Button } from "@/components/ui/button";
import { Rocket, Sparkles, Code2, Terminal, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import rocketImg from "@assets/generated_images/Cyberpunk_rocket_spacecraft_illustration_3c135411.png";
import robotImg from "@assets/generated_images/Friendly_cyberpunk_coding_robot_9495fc77.png";
import TechLogos from "./TechLogos";

export default function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const keywords = ["Code", "Collaborate", "Innovate", "Create", "Build"];
  const [keywordIndex, setKeywordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 300);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  useEffect(() => {
    let charIndex = 0;
    const currentKeyword = keywords[keywordIndex];
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentKeyword.length) {
        setTypewriterText(currentKeyword.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setKeywordIndex((prev) => (prev + 1) % keywords.length);
        }, 2000);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [keywordIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-card">
      <TechLogos />
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,94,0,0.1),transparent_50%)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,94,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,94,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }} />
        
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#ff5e00' : i % 3 === 1 ? '#00d9ff' : '#ff0080',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animation: `pulse-glow ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/20 via-orange-500/20 to-primary/20 border border-primary/30 rounded-full backdrop-blur-xl shadow-[0_0_50px_rgba(255,94,0,0.3)] hover:shadow-[0_0_70px_rgba(255,94,0,0.5)] transition-all duration-300 group">
            <Terminal className="w-4 h-4 text-primary animate-pulse" />
            <p className="text-xs tracking-[0.3em] text-primary uppercase font-mono font-bold">
              Presented By RIET Jaipur
            </p>
            <Code2 className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <div className="relative inline-block">
            <h1
              className={`text-7xl md:text-9xl lg:text-[12rem] font-display font-black bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent ${
                glitchActive ? "animate-glitch" : ""
              } cursor-pointer hover:scale-105 transition-transform duration-300 bg-[length:200%_auto] animate-shimmer drop-shadow-[0_0_50px_rgba(255,94,0,0.5)]`}
              style={{
                WebkitTextStroke: '2px rgba(255,94,0,0.1)',
                textShadow: '0 0 80px rgba(255,94,0,0.8), 0 0 120px rgba(255,94,0,0.4)',
              }}
              data-testid="hero-title"
            >
              CODEVEDANS
            </h1>
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-3xl -z-10 animate-pulse-glow" />
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center justify-center my-16">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-primary rounded-full blur-3xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-glow" />
              <img
                src={rocketImg}
                alt="Rocket"
                className="relative w-40 h-40 md:w-56 md:h-56 drop-shadow-[0_0_50px_rgba(255,94,0,0.8)] animate-rocket-ascend hover:scale-110 transition-transform duration-500"
                data-testid="img-rocket"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-t from-orange-500 via-primary to-transparent blur-2xl opacity-80 animate-pulse-glow" />
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-500 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animation: `float ${Math.random() * 2 + 1}s ease-in-out infinite`,
                    animationDelay: `${Math.random()}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse-glow" />
              <img
                src={robotImg}
                alt="Robot"
                className="relative w-40 h-40 md:w-56 md:h-56 drop-shadow-[0_0_50px_rgba(0,217,255,0.6)] animate-float hover:scale-105 transition-transform duration-500"
                data-testid="img-robot"
              />
            </div>
          </div>

          <div className="relative">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent animate-pulse-glow drop-shadow-[0_0_30px_rgba(255,94,0,0.5)]" data-testid="text-tagline">
              BLAST OFF INTO CODING!
            </h2>
            <Zap className="absolute -top-4 -right-8 w-8 h-8 text-primary animate-pulse" />
          </div>

          <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl text-muted-foreground font-mono h-14 font-bold">
            <Code2 className="w-8 h-8 text-primary animate-pulse" />
            <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">{typewriterText}</span>
            <span className="animate-pulse text-primary text-5xl">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button
              size="lg"
              className="relative text-xl px-12 py-8 rounded-full bg-gradient-to-r from-orange-600 via-primary to-orange-600 hover:from-orange-500 hover:via-primary hover:to-orange-500 shadow-[0_0_50px_rgba(255,94,0,0.5)] hover:shadow-[0_0_80px_rgba(255,94,0,0.8)] transition-all duration-300 hover:scale-110 group overflow-hidden border-2 border-orange-400/50"
              data-testid="button-register"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Rocket className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              <span className="relative font-bold tracking-wider">REGISTER NOW</span>
              <Sparkles className="w-6 h-6 ml-3 animate-pulse" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-xl px-12 py-8 rounded-full border-2 border-primary/70 hover:border-primary bg-primary/5 hover:bg-primary/15 backdrop-blur-xl shadow-[0_0_30px_rgba(255,94,0,0.3)] hover:shadow-[0_0_50px_rgba(255,94,0,0.5)] transition-all duration-300 hover:scale-105 group"
              data-testid="button-learn-more"
            >
              <Sparkles className="w-5 h-5 mr-3 group-hover:animate-spin transition-transform" />
              <span className="font-bold tracking-wide">Learn More</span>
            </Button>
          </div>

          <div className="relative max-w-3xl mx-auto pt-12">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-2xl" />
            <p className="relative text-muted-foreground text-xl leading-relaxed animate-slide-up backdrop-blur-sm bg-card/30 p-8 rounded-2xl border border-border/50 shadow-[0_0_30px_rgba(255,94,0,0.2)]">
              Join us for the most <span className="text-primary font-bold">electrifying hackathon</span> of 2025! Experience <span className="text-primary font-bold">48 hours</span> of innovation,
              collaboration, and cutting-edge technology. Build the future, win <span className="text-primary font-bold">₹5L+ prizes</span>, and connect
              with <span className="text-primary font-bold">500+ fellow developers</span> in an unforgettable coding adventure at RIET Jaipur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
