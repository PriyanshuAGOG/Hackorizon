import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Linkedin, Twitter } from "lucide-react";
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
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0">
        {speakers.filter(s => s.role === "Judge").map((_, i) => (
          <div
            key={i}
            className="absolute w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-speakers-title">
          Speakers & Judges
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Learn from and be evaluated by industry experts
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 backdrop-blur-sm border-card-border hover:border-primary/50 hover-elevate transition-all group animate-slide-up overflow-visible"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`card-speaker-${index}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <Avatar className="w-24 h-24 border-2 border-primary/50 group-hover:border-primary transition-colors">
                    <AvatarImage src={speaker.image} alt={speaker.name} />
                    <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">
                      {speaker.fallback}
                    </AvatarFallback>
                  </Avatar>
                  <Badge
                    variant={speaker.role === "Judge" ? "default" : "secondary"}
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-2 border-background"
                  >
                    {speaker.role}
                  </Badge>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">{speaker.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{speaker.title}</p>
                <Badge variant="outline" className="mb-4">
                  {speaker.expertise}
                </Badge>

                <div className="flex gap-3">
                  <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" data-testid={`link-linkedin-${index}`}>
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors" data-testid={`link-twitter-${index}`}>
                    <Twitter className="w-4 h-4 text-primary" />
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
