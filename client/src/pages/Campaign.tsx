import { Button } from "@/components/ui/button";
import { Camera, Instagram, Award, CheckCircle2, TrendingUp, Users, Video, Image as ImageIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots, CodeLine } from "@/components/TechDecorations";
import { useEffect } from "react";

export default function Campaign() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Tech corner decorations */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
      </div>
      
      {/* Floating dots */}
      <div className="hidden md:block">
        <FloatingDots count={6} />
      </div>

      {/* Thin decorative lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border opacity-50" />
        <div className="absolute right-8 top-0 w-px h-full bg-border opacity-50" />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className={`max-w-5xl mx-auto text-center ${heroVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            
            <div className="hidden sm:block">
              <CodeLine className="justify-center mb-6" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Official Creator Campaign</span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-foreground tracking-tight leading-none mb-6">
              ENIGMA'26
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-mono uppercase tracking-wider text-primary mb-8">
              Build. Create. Get Featured.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Document your hackathon journey through high-quality digital content and gain official recognition across Enigma and partner platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6"
                onClick={() => window.open('https://instagram.com/enigma_riet', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow Enigma
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono uppercase tracking-wider border border-border hover:border-primary hover:text-primary rounded-none px-8 py-6"
                onClick={() => document.getElementById("guidelines")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Guidelines
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Overview</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                Enigma'26 is not just a hackathon. It is a platform for builders, innovators, and creators.
              </p>
              <p className="text-base sm:text-lg">
                To amplify the spirit of innovation and showcase the real energy of the event, we are launching the <span className="font-semibold text-foreground">Official Enigma'26 Creator Campaign</span>. This initiative invites participants to document their hackathon journey through high-quality digital content and gain official recognition across Enigma and partner platforms.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {[
                  "Encourage authentic storytelling",
                  "Promote participant visibility",
                  "Expand digital reach of Enigma'26",
                  "Provide creators with real exposure",
                  "Strengthen brand value of participants and teams"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-card-border rounded-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg pt-6 text-center italic text-foreground">
                Participants are not just attending an event. They are contributing to its narrative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Campaign Objective</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Video className="w-6 h-6" />, text: "Showcase the real builder journey during Enigma'26" },
                { icon: <TrendingUp className="w-6 h-6" />, text: "Promote creative expression among participants" },
                { icon: <Users className="w-6 h-6" />, text: "Increase digital engagement across platforms" },
                { icon: <Camera className="w-6 h-6" />, text: "Create long-term digital documentation" },
                { icon: <Award className="w-6 h-6" />, text: "Offer participants official digital recognition" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="text-primary flex-shrink-0">{item.icon}</div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-base sm:text-lg text-foreground mt-10 italic">
              This initiative positions Enigma'26 as a tech festival driven by innovation and storytelling.
            </p>
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">What Participants Can Create</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Mini vlogs documenting arrival, preparation, or hackathon experience",
                "Cinematic reels capturing the energy of the event",
                "Team introduction videos",
                "24-hour coding journey edits",
                "Hackathon survival-themed content",
                "Mentor interaction highlights",
                "Project demo reels",
                "Aesthetic photography and curated photo posts",
                "Informational reels explaining problem statement or solution",
                "Creative or humorous content reflecting event atmosphere"
              ].map((content, idx) => (
                <div key={idx} className="p-5 bg-card border border-card-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-base text-foreground mt-10 font-medium">
              Content must be original and created by the participating team or individual.
            </p>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Rewards & Recognition</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-6">
              {[
                {
                  title: "Enigma Instagram Feature",
                  description: "Top entries will be reposted or featured on the official Enigma Instagram page.",
                  icon: <Instagram className="w-8 h-8" />
                },
                {
                  title: "Official Website Feature",
                  description: "Outstanding content will be embedded on the official Enigma'26 website under Event Highlights.",
                  icon: <ImageIcon className="w-8 h-8" />
                },
                {
                  title: "RIET Platform Recognition",
                  description: "Exceptional creators may be highlighted on RIET's official platforms.",
                  icon: <Award className="w-8 h-8" />
                },
                {
                  title: "Grand Feature Opportunity",
                  description: "One team will be selected for a Collaboration Reel and Post published with the official Hack With India page - providing national-level digital exposure.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  highlight: true
                }
              ].map((reward, idx) => (
                <div 
                  key={idx} 
                  className={`p-8 border ${reward.highlight ? 'bg-primary/5 border-primary' : 'bg-background border-border'} hover:shadow-xl transition-all`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`${reward.highlight ? 'text-primary' : 'text-muted-foreground'} flex-shrink-0`}>
                      {reward.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 font-mono uppercase tracking-wide">{reward.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{reward.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section id="guidelines" className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Participation Guidelines</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground text-center mb-8">To be eligible for evaluation, participants must:</p>
              
              {[
                "Follow the official Enigma Instagram page",
                "Follow the official Hack With India page",
                "Tag Enigma, RIET, and Hack With India in their post",
                "Use official hashtags: #Enigma26 #HackWithIndia #RIETJaipur",
                "Maintain a public account during the evaluation period"
              ].map((guideline, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-card border border-card-border">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-mono font-semibold text-sm">{idx + 1}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-1">{guideline}</p>
                </div>
              ))}

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20">
                <p className="text-sm text-center">
                  <span className="font-semibold text-foreground">Note:</span> Multiple entries are permitted. Failure to follow participation guidelines may result in disqualification from evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Evaluation Criteria</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Creativity and originality",
                "Quality of storytelling",
                "Editing and production value",
                "Authentic representation of the hackathon spirit",
                "Energy and engagement",
                "Overall impact and clarity"
              ].map((criteria, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 bg-background border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-muted-foreground">{criteria}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-base text-foreground mt-10 italic">
              Evaluation will focus on quality and authenticity, not follower count or prior influence.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Timeline</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-1">
              {[
                { label: "Day 1 of Enigma'26", detail: "Start posting eligible content" },
                { label: "Day 2 of Enigma'26", detail: "Continue content creation" },
                { label: "Up to 48 hours after event", detail: "Final submission window" }
              ].map((phase, idx) => (
                <div key={idx} className="flex items-start gap-6 p-6 bg-card border border-card-border hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-mono font-bold">{idx + 1}</span>
                  </div>
                  <div className="pt-2">
                    <h3 className="font-semibold text-foreground mb-1">{phase.label}</h3>
                    <p className="text-sm text-muted-foreground">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-base text-muted-foreground mt-10">
              Winners and featured creators will be officially announced on Enigma platforms following evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* Code of Conduct Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Code of Conduct</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <p className="text-center text-muted-foreground mb-8">All content must:</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Maintain respectful and professional language",
                "Avoid offensive, discriminatory, or inappropriate material",
                "Represent the event and institution positively",
                "Not include unauthorized brand promotions"
              ].map((rule, idx) => (
                <div key={idx} className="p-5 bg-background border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{rule}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background border border-border">
              <p className="text-sm text-center text-muted-foreground">
                The organizing team reserves the right to disqualify content that violates these standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Recognition Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Special Recognition</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Top creators may receive:</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                'An official "Enigma\'26 Featured Creator" digital badge',
                "Public acknowledgment during the closing ceremony",
                "Mention in post-event documentation",
                "Priority consideration for future Enigma media initiatives"
              ].map((recognition, idx) => (
                <div key={idx} className="p-6 bg-card border border-card-border text-center hover:border-primary/50 transition-colors">
                  <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{recognition}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="relative py-32 border-t border-border bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-8">Final Statement</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8">
              The Creator Campaign is an opportunity to build more than just a project.
            </p>

            <div className="space-y-3 mb-12">
              {[
                "Build visibility",
                "Build credibility",
                "Build a personal brand",
                "Document innovation in real time"
              ].map((statement, idx) => (
                <p key={idx} className="text-base sm:text-lg font-medium text-foreground">
                  {statement}
                </p>
              ))}
            </div>

            <div className="space-y-6 text-lg sm:text-xl font-medium">
              <p className="text-foreground">Enigma'26 is a stage.</p>
              <p className="text-muted-foreground">
                Participants who capture its energy and tell its story effectively may become the official faces of the event.
              </p>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-primary mt-8">
                Build. Create. Get Featured.
              </p>
            </div>

            <div className="mt-12">
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-6 text-base"
                onClick={() => window.open('https://instagram.com/enigma_riet', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Join the Campaign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 Enigma'26 · RIET Jaipur · All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
