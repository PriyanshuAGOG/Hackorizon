import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter, Sparkles, Star, Award } from "lucide-react";
import speaker1 from "@assets/generated_images/Female_engineer_speaker_headshot_28df80eb.png";
import speaker2 from "@assets/generated_images/Male_developer_speaker_headshot_dd4fee6e.png";
import speaker3 from "@assets/generated_images/Senior_tech_judge_headshot_341a1309.png";
import speaker4 from "@assets/generated_images/Young_female_coder_headshot_65c04cf3.png";
import speaker5 from "@assets/generated_images/Tech_entrepreneur_judge_headshot_c37286b2.png";

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
  return (
    <section className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
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
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-2xl border-2 border-card-border hover:border-primary/70 transition-all duration-500 hover:scale-105 animate-slide-up overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_50px_rgba(255,94,0,0.4)]"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-speaker-${index}`}
            >
              {speaker.role === "Judge" && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all" />
              
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-primary rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
                  <Avatar className="relative w-32 h-32 border-4 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-[0_0_30px_rgba(255,94,0,0.3)]">
                    <AvatarImage src={speaker.image} alt={speaker.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-primary/30 to-orange-500/30 text-primary text-2xl font-black border-2 border-primary/50">
                      {speaker.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    className={`absolute -bottom-3 left-1/2 -translate-x-1/2 border-4 border-card shadow-lg ${
                      speaker.role === "Judge" 
                        ? 'bg-gradient-to-r from-orange-500 to-primary text-white border-primary/50 shadow-[0_0_20px_rgba(255,94,0,0.5)]'
                        : 'bg-secondary'
                    }`}
                  >
                    <Star className="w-3 h-3 mr-1" />
                    {speaker.role}
                  </Badge>
                </div>

                <h3 className="text-2xl font-black text-foreground mb-2 group-hover:text-primary transition-colors">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 font-medium">{speaker.title}</p>
                <Badge variant="outline" className="mb-6 border-primary/50 text-primary font-bold px-4 py-1">
                  <Sparkles className="w-3 h-3 mr-1" />
                  {speaker.expertise}
                </Badge>

                <div className="flex gap-3">
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 flex items-center justify-center transition-all hover:scale-110 border-2 border-primary/30 hover:border-primary/70 shadow-lg" data-testid={`link-linkedin-${index}`}>
                    <Linkedin className="w-5 h-5 text-primary" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 flex items-center justify-center transition-all hover:scale-110 border-2 border-primary/30 hover:border-primary/70 shadow-lg" data-testid={`link-twitter-${index}`}>
                    <Twitter className="w-5 h-5 text-primary" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
