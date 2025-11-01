import { Button } from "@/components/ui/button";
import { Rocket, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import rocketImg from "@assets/generated_images/Cyberpunk_rocket_spacecraft_illustration_3c135411.png";
import robotImg from "@assets/generated_images/Friendly_cyberpunk_coding_robot_9495fc77.png";

export default function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const keywords = ["Code", "Collaborate", "Innovate", "Create", "Build"];
  const [keywordIndex, setKeywordIndex] = useState(0);

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(28, 95, 48, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28, 95, 48, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-md mb-4">
            <p className="text-xs tracking-[0.3em] text-primary uppercase font-mono">
              Presented By RIET
            </p>
          </div>

          <h1
            className={`text-6xl md:text-8xl lg:text-9xl font-display font-bold bg-gradient-to-r from-primary via-yellow-500 to-primary bg-clip-text text-transparent ${
              glitchActive ? "animate-glitch" : ""
            } cursor-pointer hover:animate-shimmer bg-[length:200%_auto]`}
            style={{
              backgroundImage: "linear-gradient(90deg, hsl(var(--primary)), gold, hsl(var(--primary)))",
            }}
            data-testid="hero-title"
          >
            CODEVEDANS
          </h1>

          <div className="flex flex-col md:flex-row gap-8 items-center justify-center my-12">
            <div className="relative animate-rocket-ascend hover:scale-110 transition-transform">
              <img
                src={rocketImg}
                alt="Rocket"
                className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(234,88,12,0.5)]"
                data-testid="img-rocket"
              />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-t from-orange-500 to-transparent blur-xl opacity-60" />
            </div>

            <div className="relative animate-float hover:scale-105 transition-transform">
              <img
                src={robotImg}
                alt="Robot"
                className="w-32 h-32 md:w-48 md:h-48 drop-shadow-[0_0_30px_rgba(234,88,12,0.3)]"
                data-testid="img-robot"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary animate-pulse-glow" data-testid="text-tagline">
            BLAST OFF INTO CODING!
          </h2>

          <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl text-muted-foreground font-mono h-12">
            <span>{typewriterText}</span>
            <span className="animate-pulse-glow text-primary">|</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-full bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] transition-all hover:scale-105"
              data-testid="button-register"
            >
              <Rocket className="w-5 h-5 mr-2" />
              REGISTER NOW
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-primary/50 hover:bg-primary/10"
              data-testid="button-learn-more"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed pt-8 animate-slide-up">
            Join us for the most electrifying hackathon of 2025! Experience 48 hours of innovation,
            collaboration, and cutting-edge technology. Build the future, win amazing prizes, and connect
            with fellow developers in an unforgettable coding adventure at RIET Jaipur.
          </p>
        </div>
      </div>
    </section>
  );
}
