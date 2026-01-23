import { Card } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function SponsorsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="sponsors" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/30 rounded-full mb-6 hover:bg-sky-500/20 hover:border-sky-500 transition-all group">
            <Building2 className="w-4 h-4 text-sky-500 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-mono text-sky-500 uppercase tracking-wider font-semibold">Partnership Opportunities</span>
          </div>

          <h2 className={`text-5xl md:text-7xl font-display font-black mb-6 text-foreground transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Become Our Sponsor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Partner with us to connect with talented developers and innovators
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-12 text-center border-2 border-sky-500/20 bg-card/50 backdrop-blur hover:border-sky-500/50 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_50px_rgba(14,165,233,0.2)]">
            <Building2 className="w-20 h-20 text-sky-500 mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-3xl font-bold text-foreground mb-4">Sponsorship Packages</h3>
            <p className="text-4xl text-sky-500 font-black mb-6">Coming Soon</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're working on exciting sponsorship opportunities. Stay tuned for updates!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
