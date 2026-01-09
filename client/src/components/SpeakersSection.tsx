import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter, Sparkles, Star, Award, Code2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
const speaker1 = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80";
const speaker2 = "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&q=80";
const speaker3 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80";
const speaker4 = "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80";
const speaker5 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";

const speakers = [
  {
    name: "Dr. Priya Sharma",
    role: "Judge",
    title: "AI Research Lead, Tech Corp",
    image: speaker1,
    expertise: "AI & ML",
    fallback: "PS",
  },
  {
    name: "Arjun Patel",
    role: "Mentor",
    title: "Senior Developer, StartupHub",
    image: speaker2,
    expertise: "Full Stack",
    fallback: "AP",
  },
  {
    name: "Rajesh Kumar",
    role: "Judge",
    title: "CTO, Innovation Labs",
    image: speaker3,
    expertise: "System Design",
    fallback: "RK",
  },
  {
    name: "Ananya Singh",
    role: "Mentor",
    title: "Blockchain Developer",
    image: speaker4,
    expertise: "Web3",
    fallback: "AS",
  },
  {
    name: "Vikram Desai",
    role: "Judge",
    title: "Tech Entrepreneur & Investor",
    image: speaker5,
    expertise: "Product Strategy",
    fallback: "VD",
  },
];

export default function SpeakersSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0">
        {speakers.filter(s => s.role === "Judge").map((_, i) => (
          <div
            key={i}
            className="absolute w-80 h-80 rounded-full blur-[120px] animate-pulse-glow"
            style={{
              background: 'radial-gradient(circle, rgba(255,94,0,0.15), transparent 70%)',
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Industry Experts</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-speakers-title">
            Speakers & Judges
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from and be evaluated by top industry professionals
          </p>
        </div>

        <div className={`grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className={`group relative p-4 sm:p-6 md:p-8 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-2xl border-2 border-card-border hover:border-primary/70 transition-all duration-500 hover:scale-105 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,94,0,0.4)] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
                transitionDuration: '0.8s'
              }}
              data-testid={`card-speaker-${index}`}
            >
              {speaker.role === "Judge" && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all" />

              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-4 sm:mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-primary rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
                  <Avatar className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 border-4 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(255,94,0,0.3)]">
                    <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/30 to-orange-500/30 text-primary text-lg sm:text-xl md:text-2xl font-black border-2 border-primary/50">
                      {speaker.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={`absolute -bottom-2 sm:-bottom-3 left-1/2 -translate-x-1/2 border-2 sm:border-4 border-card shadow-lg text-[10px] sm:text-xs ${
                      speaker.role === "Judge"
                        ? 'bg-gradient-to-r from-orange-500 to-primary text-white border-primary/50 shadow-[0_0_20px_rgba(255,94,0,0.5)]'
                        : 'bg-secondary'
                    }`}
                  >
                    <Star className="w-2 h-2 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                    {speaker.role}
                  </Badge>
                </div>

                <div className="text-center w-full">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {speaker.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-2 line-clamp-2">
                    {speaker.title}
                  </p>

                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 border border-primary/30 rounded-full">
                    <Code2 className="w-3 h-3 text-primary" />
                    <span className="text-[10px] sm:text-xs font-medium text-primary">{speaker.expertise}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}