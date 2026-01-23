import { Card } from "@/components/ui/card";
import { Cpu, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function TracksSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(14,165,233,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(14,165,233,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-sky-500 rotate-45 animate-pulse" />
            <div className="h-px w-16 bg-sky-500/30" />
            <div className="w-3 h-3 border-2 border-sky-500" />
            <div className="h-px w-16 bg-sky-500/30" />
            <div className="w-2 h-2 bg-sky-500 rotate-45 animate-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-sky-500 mb-4">
            Hackathon Tracks
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Get ready for an exciting challenge
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 sm:p-12 md:p-16 bg-card/80 backdrop-blur-sm border-2 border-sky-500/30 hover:border-sky-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Lock className="w-20 h-20 text-sky-500 animate-pulse" />
                <div className="absolute inset-0 bg-sky-500 blur-2xl opacity-20" />
              </div>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-sky-500 mb-6">Coming Soon!</h3>
            <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-8">
              Tracks and problem statements will be revealed on the hackathon day.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-sky-500/10 border border-sky-500/30 rounded-full">
              <Cpu className="w-5 h-5 text-sky-500" />
              <span className="text-sm font-mono text-sky-500 uppercase tracking-wider">20-21 February 2026</span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
