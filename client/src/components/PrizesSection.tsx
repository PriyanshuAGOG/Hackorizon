import { Card } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function PrizesSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Rewards</span>
          </div>

          <h2 className={`text-5xl md:text-7xl font-display font-black mb-6 text-foreground transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Prizes & Awards
          </h2>
          <p className="text-xl text-muted-foreground">
            Exciting prizes and recognition for winning teams
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center border-2 border-primary/20 bg-card/50 backdrop-blur">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">Prize Pool</h3>
            <p className="text-6xl font-black text-primary mb-6">To Be Announced</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're working on bringing together an exciting prize pool for our winners.
              Stay tuned for updates on cash prizes, tech gadgets, internship opportunities, and more!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
