
import { Card } from "@/components/ui/card";
import { Award, Star, Gem, Sparkles, Diamond, Crown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import SponsorForm from "./SponsorForm";

const sponsorTiers = [
  {
    tier: "Title Sponsor",
    icon: Crown,
    amount: "₹10,00,000+",
    color: "from-yellow-400 via-yellow-500 to-orange-500",
    bgGlow: "bg-yellow-500/20",
    benefits: [
      "Exclusive naming rights",
      "Prime logo placement on all materials",
      "Keynote speaking opportunity",
      "Dedicated booth space",
      "Social media campaigns",
      "Direct access to all participants",
    ],
    spots: 1,
  },
  {
    tier: "Platinum Sponsors",
    icon: Diamond,
    amount: "₹5,00,000+",
    color: "from-cyan-400 via-blue-500 to-purple-500",
    bgGlow: "bg-cyan-500/20",
    benefits: [
      "Premium logo placement",
      "Workshop hosting opportunity",
      "Booth space",
      "Resume database access",
      "Social media mentions",
    ],
    spots: 2,
  },
  {
    tier: "Gold Sponsors",
    icon: Award,
    amount: "₹2,50,000+",
    color: "from-orange-400 via-orange-500 to-red-500",
    bgGlow: "bg-orange-500/20",
    benefits: [
      "Logo on website & materials",
      "Booth space",
      "Mentorship opportunities",
      "Social media coverage",
    ],
    spots: 5,
  },
  {
    tier: "Silver Sponsors",
    icon: Star,
    amount: "₹1,00,000+",
    color: "from-gray-300 via-gray-400 to-gray-500",
    bgGlow: "bg-gray-400/20",
    benefits: [
      "Logo on website",
      "Swag distribution",
      "Social media shoutouts",
    ],
    spots: 10,
  },
  {
    tier: "Community Partners",
    icon: Sparkles,
    amount: "In-Kind",
    color: "from-purple-400 via-pink-500 to-red-500",
    bgGlow: "bg-purple-500/20",
    benefits: [
      "Logo on website",
      "Social media recognition",
      "Collaboration opportunities",
    ],
    spots: "Unlimited",
  },
];

const currentSponsors = {
  title: [],
  platinum: [],
  gold: [],
  silver: [],
  community: [],
};

export default function SponsorsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();
  const [showSponsorForm, setShowSponsorForm] = useState(false);

  return (
    <section id="sponsors" ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#fbbf24' : i % 3 === 1 ? '#3b82f6' : '#a855f7',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Partnership Opportunities</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]">
            Our Sponsors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Partner with us to connect with India's brightest tech minds
          </p>

          <Button
            size="lg"
            onClick={() => setShowSponsorForm(true)}
            className="bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all px-8 py-6 text-lg font-bold font-mono pixel-corners neon-border"
          >
            <Mail className="w-5 h-5 mr-2" />
            Become a Sponsor
          </Button>
        </div>

        <div className="space-y-12 max-w-6xl mx-auto">
          {sponsorTiers.map((tier, index) => (
            <Card
              key={index}
              className={`group relative p-6 md:p-8 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-2xl border-2 border-card-border hover:border-primary/70 transition-all duration-500 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
                transitionDuration: '0.8s'
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              <div className={`absolute -right-12 -top-12 w-48 h-48 bg-gradient-to-br ${tier.color} opacity-10 rounded-full blur-3xl group-hover:blur-2xl transition-all`} />

              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center shadow-[0_0_30px_rgba(255,94,0,0.3)] group-hover:scale-110 transition-transform`}>
                    <tier.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-foreground mb-1">{tier.tier}</h3>
                    <p className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`}>
                      {tier.amount}
                    </p>
                    <p className="text-sm text-muted-foreground font-mono mt-1">
                      {typeof tier.spots === 'number' ? `${tier.spots} spot${tier.spots > 1 ? 's' : ''} available` : tier.spots}
                    </p>
                  </div>
                </div>

                <div className="flex-1 w-full md:w-auto">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm md:text-base text-muted-foreground">
                        <Gem className={`w-4 h-4 flex-shrink-0 mt-0.5 bg-gradient-to-r ${tier.color} bg-clip-text text-transparent`} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant="outline"
                  onClick={() => setShowSponsorForm(true)}
                  className="w-full md:w-auto border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all pixel-corners font-mono"
                >
                  Apply Now
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Current Sponsors Display */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-12 text-foreground">
            Thank You to Our Sponsors
          </h3>
          
          <div className="space-y-8">
            {Object.entries(currentSponsors).map(([key, sponsors]) => (
              <div key={key} className="p-8 bg-card/50 backdrop-blur-sm border-2 border-card-border pixel-corners">
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
                  {sponsorTiers.find(t => t.tier.toLowerCase().includes(key))?.tier || key}
                </p>
                {sponsors.length === 0 ? (
                  <p className="text-muted-foreground italic">Your logo could be here!</p>
                ) : (
                  <div className="flex flex-wrap items-center justify-center gap-8">
                    {/* Sponsor logos would go here */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <SponsorForm open={showSponsorForm} onOpenChange={setShowSponsorForm} />
    </section>
  );
}
