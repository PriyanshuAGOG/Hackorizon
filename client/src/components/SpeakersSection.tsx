import { Card } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function SpeakersSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Industry Experts</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 text-foreground">
            Judges & Mentors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn from and be evaluated by top industry professionals
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <Card className="p-8 text-center border-2 border-primary/20 bg-card/50 backdrop-blur">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Judges</h3>
            <p className="text-lg font-bold text-primary mb-2">To Be Announced</p>
            <p className="text-muted-foreground">
              We're bringing together industry leaders and experts to evaluate your projects.
            </p>
          </Card>

          <Card className="p-8 text-center border-2 border-primary/20 bg-card/50 backdrop-blur">
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-3">Mentors</h3>
            <p className="text-lg font-bold text-primary mb-2">To Be Announced</p>
            <p className="text-muted-foreground">
              Experienced developers will be available to guide and support you throughout the hackathon.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
