import { Button } from "@/components/ui/button";
import { Camera, Instagram, Award, CheckCircle2, TrendingUp, Users, Video, Zap, Sparkles, Target, ArrowRight, Star, Rocket, Heart, Trophy, Clock, Hash, Send, Flame, Crown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots, CodeLine } from "@/components/TechDecorations";
import { useEffect, useState } from "react";

export default function Campaign() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.5); }
          50% { box-shadow: 0 0 40px rgba(var(--primary-rgb), 0.8); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out forwards; }
        .animate-glowPulse { animation: glowPulse 2s ease-in-out infinite; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; }
        .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out forwards; }
        .hover-scale { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .hover-scale:hover { transform: scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.2); }
        .text-gradient { background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary)) 50%, hsl(var(--accent)) 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .card-hover { transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .card-hover:hover { transform: translateY(-8px) scale(1.02); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3); border-color: hsl(var(--primary)); }
        .stagger-animation > * { animation: fadeInUp 0.6s ease-out backwards; }
        .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
        .icon-hover { transition: all 0.3s ease; }
        .group:hover .icon-hover { transform: rotate(10deg) scale(1.2); }
        .fire-border { position: relative; overflow: hidden; }
        .fire-border::before { content: ''; position: absolute; inset: -2px; background: linear-gradient(45deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))); background-size: 400% 400%; animation: shimmer 3s ease infinite; z-index: -1; border-radius: inherit; }
        .glow-card { box-shadow: 0 0 0px rgba(var(--primary-rgb), 0); transition: box-shadow 0.3s ease; }
        .glow-card:hover { box-shadow: 0 0 30px rgba(var(--primary-rgb), 0.3); }
      `}</style>

      {/* Tech corner decorations */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
      </div>
      <div className="hidden md:block">
        <FloatingDots count={6} />
      </div>
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border opacity-50" />
        <div className="absolute right-8 top-0 w-px h-full bg-border opacity-50" />
      </div>

      {/* ==================== HERO SECTION ==================== */}
      <section ref={heroRef} className="relative pt-32 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
        {/* Subtle geometric background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/[0.04] rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-[15%] w-64 h-64 bg-accent/[0.06] rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className={`max-w-5xl mx-auto ${heroVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>

            {/* Top bar - minimal */}
            <div className="flex items-center justify-between mb-16 animate-fadeInUp">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent"></div>
              <div className="px-6">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">Enigma'26 — Official Reel Campaign</span>
              </div>
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent"></div>
            </div>

            {/* Title block */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 border border-primary/20 bg-primary/[0.06] mb-10 animate-fadeInUp">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
                <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-primary font-medium">Now Live</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[0.9] mb-8 animate-slideInRight">
                <span className="text-gradient block">Hack The</span>
                <span className="text-foreground block mt-2">Moment</span>
              </h1>

              <div className="w-16 h-[2px] bg-primary mx-auto mb-8 animate-fadeInUp" style={{ animationDelay: "0.15s" }}></div>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-6 animate-fadeInUp font-light" style={{ animationDelay: "0.2s" }}>
                Capture the energy of India's most exciting hackathon. Create a reel.
                Get featured as a <span className="text-foreground font-medium">collaborator on Hack With India</span> — reaching
                thousands of builders, creators, and tech enthusiasts nationwide.
              </p>

              <p className="text-sm text-muted-foreground/70 font-mono uppercase tracking-widest animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
                Your content. Our platform. Massive reach.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-20 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 group relative overflow-hidden text-sm"
                onClick={() => window.open('https://instagram.com/hackwithindia', '_blank')}
              >
                <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <ArrowRight className="w-4 h-4 mr-2" />
                Start Creating
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono uppercase tracking-wider border border-border hover:border-primary hover:text-primary rounded-none px-10 py-6 text-sm"
                onClick={() => document.getElementById("how-to-enter")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>

            {/* Stats - clean grid */}
            <div className="grid grid-cols-3 max-w-xl mx-auto border border-border divide-x divide-border">
              {[
                { value: "100+", label: "Reels" },
                { value: "20-30", label: "Featured" },
                { value: "1000s", label: "Reach" }
              ].map((stat, idx) => (
                <div key={idx} className="py-6 px-4 text-center animate-fadeInUp" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <div className="text-xl sm:text-2xl font-bold text-foreground mb-1 font-mono">{stat.value}</div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== THE DEAL ==================== */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">01</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Here's The Deal</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">Why this is a no-brainer for you.</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: <Crown className="w-6 h-6" />, title: "Get Featured on Hack With India", desc: "The absolute best reels get collabed and reposted on Hack With India — national-level exposure to thousands of builders." },
                { icon: <Flame className="w-6 h-6" />, title: "Turn Your Grind Into Clout", desc: "24 hours of building something insane? That's content gold. Show the world what you built." },
                { icon: <Users className="w-6 h-6" />, title: "Show Off Your Squad", desc: "The teamwork, the 3AM energy, the breakthroughs — capture your crew in their element." },
                { icon: <TrendingUp className="w-6 h-6" />, title: "Real Reach, Not Fake Promises", desc: "Your reel goes up on Hack With You as a collab — and the best ones climb to Hack With India, Enigma, even RIET's page." },
                { icon: <Sparkles className="w-6 h-6" />, title: "Portfolio Flex", desc: "A featured reel on a national hackathon page? That's LinkedIn gold and resume fire." },
                { icon: <Target className="w-6 h-6" />, title: "Zero Cost, All Upside", desc: "You're already at the hackathon. Just pull out your phone, shoot the vibe, and drop it." }
              ].map((item, idx) => (
                <div key={idx} className="group p-6 bg-card border border-card-border hover:border-primary/50 transition-all glow-card card-hover">
                  <div className="text-primary flex-shrink-0 mb-3 icon-hover">{item.icon}</div>
                  <h3 className="font-semibold text-foreground mb-2 text-base">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WHAT TO SHOOT ==================== */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">02</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">What To Shoot</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">Literally anything that captures the madness. Here are some ideas:</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <Video className="w-5 h-5" />, text: "Your hackathon journey — from \"we have no idea\" to \"WE DID IT\"" },
                { icon: <Sparkles className="w-5 h-5" />, text: "Innovation storytelling — what you built and WHY it's crazy" },
                { icon: <Clock className="w-5 h-5" />, text: "Coding timelapses — watch your screen go from blank to beautiful" },
                { icon: <Users className="w-5 h-5" />, text: "Team moments — the laughs, the debates, the 3AM pizza runs" },
                { icon: <Star className="w-5 h-5" />, text: "Mentor interactions — that moment when everything clicked" },
                { icon: <Camera className="w-5 h-5" />, text: "Event energy — the venue, the crowd, the chaos, the vibe" },
                { icon: <Rocket className="w-5 h-5" />, text: "Demo day hype — showing your project to the world" },
                { icon: <Heart className="w-5 h-5" />, text: "Behind-the-scenes — the real, unfiltered hackathon life" },
                { icon: <Flame className="w-5 h-5" />, text: "Anything that makes people wish they were there" }
              ].map((content, idx) => (
                <div key={idx} className="p-5 bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg group glow-card">
                  <div className="flex items-start gap-3">
                    <div className="text-primary flex-shrink-0 mt-0.5 icon-hover">{content.icon}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{content.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick specs */}
            <div className="p-6 bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                <Zap className="w-5 h-5 text-primary" />
                Quick Specs (Keep It Clean)
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  {[
                    "Vertical 9:16 (standard reel format)",
                    "1080p minimum — no blurry mess",
                    "Clear audio — we need to HEAR the energy",
                    "Your own content — no stolen clips"
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    "No offensive stuff (obv)",
                    "Keep it respectful — hype, not hate",
                    "No random brand promotions",
                    "No third-party watermarks"
                  ].map((spec, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW TO ENTER ==================== */}
      <section id="how-to-enter" className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">03</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">How To Enter</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">5 steps. That's it. Takes 2 minutes.</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="space-y-4">
              {[
                { step: "1", icon: <Instagram className="w-6 h-6" />, title: "Follow @enigma_2k26, @hackwith.you & @hackwithindia", desc: "All three pages. Non-negotiable. This is how we find you." },
                { step: "2", icon: <Camera className="w-6 h-6" />, title: "Shoot Your Reel During Enigma'26", desc: "Capture the energy, the build, the chaos, the vibes — whatever hits different." },
                { step: "3", icon: <Hash className="w-6 h-6" />, title: "Post It With the Right Tags", desc: "Tag @enigma_2k26, @riet_official, and @hackwithindia. Use #Enigma26 #HackWithIndia #HackWithYou" },
                { step: "4", icon: <Send className="w-6 h-6" />, title: "Submit Through the Official Form", desc: "Drop your reel link in our submission form. Make sure your account is PUBLIC." },
                { step: "5", icon: <Sparkles className="w-6 h-6" />, title: "Wait for the DM", desc: "If you're selected, we'll hit you up for the collab post. Then you're officially featured." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-5 p-6 bg-card border border-card-border hover:border-primary/50 transition-all glow-card group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <span className="text-primary font-mono font-bold text-lg">{item.step}</span>
                  </div>
                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-primary icon-hover">{item.icon}</div>
                      <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">PRO TIP:</span> You can submit multiple reels. More entries = more chances to get featured. Go crazy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== REWARDS ==================== */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">04</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">What You Win</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">This isn't a "participation certificate" situation. This is real.</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="space-y-5">
              {[
                {
                  title: "Collab Post on Hack With You",
                  description: "All selected reels get published as collaboration posts on Hack With You's Instagram page. Your reel, on their page, with your name as collaborator. Dual reach. Dual clout.",
                  icon: <Rocket className="w-8 h-8" />,
                  tag: "ALL SELECTED"
                },
                {
                  title: "Featured on Hack With India",
                  description: "THE big one. The absolute best reels get featured, collabed, and reposted on the Hack With India page — national-level exposure to thousands of builders, hackers, and tech enthusiasts across the country.",
                  icon: <Crown className="w-8 h-8" />,
                  highlight: true,
                  tag: "TOP FEW"
                },
                {
                  title: "Enigma Page Feature",
                  description: "Some of the best reels get featured and reposted on the official Enigma Instagram page. Your content on the main event page — bragging rights that last forever.",
                  icon: <Instagram className="w-8 h-8" />,
                  tag: "BEST ONES"
                },
                {
                  title: "RIET Page Repost",
                  description: "A select few exceptional reels get featured and reposted on RIET's official page. Your work, recognized by the institution itself. That's a different level.",
                  icon: <Award className="w-8 h-8" />,
                  tag: "EXCEPTIONAL"
                },
                {
                  title: "\"Featured Creator\" Badge + Shoutout",
                  description: "Top creators get an official digital badge, a shoutout during the closing ceremony, and priority access to future Enigma media collabs.",
                  icon: <Trophy className="w-8 h-8" />,
                  tag: "ALL WINNERS"
                }
              ].map((reward, idx) => (
                <div
                  key={idx}
                  className={`p-8 border ${reward.highlight ? 'bg-primary/5 border-primary fire-border' : 'bg-background border-border'} hover:shadow-xl transition-all glow-card group`}
                >
                  <div className="flex items-start gap-6 relative z-10">
                    <div className={`${reward.highlight ? 'text-primary' : 'text-muted-foreground group-hover:text-primary transition-colors'} flex-shrink-0`}>
                      {reward.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xl font-semibold font-mono uppercase tracking-wide">{reward.title}</h3>
                        {reward.tag && (
                          <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full ${reward.highlight ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'}`}>
                            {reward.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{reward.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOW THE COLLAB WORKS ==================== */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">05</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">How The Collab Works</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">So you know exactly what "getting featured" means.</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-card border border-card-border glow-card">
                <Rocket className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-3 text-lg">How Your Reel Gets Posted</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  You share your reel with the Enigma team. We post the selected ones on <span className="text-foreground font-semibold">Hack With You's page</span> as a collab with you. The best ones climb higher:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Hack With You</span> — all selected reels get collabed here</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Hack With India</span> — top few get featured & reposted here</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Enigma & RIET pages</span> — best ones get featured here too</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-card border border-card-border glow-card">
                <Zap className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-semibold text-foreground mb-3 text-lg">The Selection Process</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  No complicated judging panels. We look at:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Creativity</span> — did you make something original?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Energy</span> — does it make us feel the vibe?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Story</span> — is there a narrative people connect with?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Flame className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span><span className="text-foreground font-medium">Quality</span> — decent editing, clear audio, good visuals</span>
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Follower count doesn't matter. A fire reel from 50 followers beats a boring one from 5K.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TIMELINE ==================== */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-3xl font-mono font-bold text-primary/30">06</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Timeline</h2>
            </div>
            <p className="text-muted-foreground mb-8 ml-14 text-base">Mark your calendar. This moves fast.</p>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="space-y-1">
              {[
                { emoji: "\uD83C\uDFAC", label: "Day 1 — Enigma'26 Starts", detail: "Camera ON. Start shooting from the moment you walk in.", highlight: true },
                { emoji: "\uD83D\uDD25", label: "Day 2 — Keep Creating", detail: "The best content comes from the grind. All-nighter energy = viral energy." },
                { emoji: "\uD83D\uDCE4", label: "Up to 48hrs After Event", detail: "Submission form closes. Post your reel & submit the link before the deadline." },
                { emoji: "\uD83D\uDC40", label: "Days 3–5 Post-Event", detail: "Our team reviews all submissions. The best ones get shortlisted." },
                { emoji: "\uD83D\uDE80", label: "Days 5–15 Post-Event", detail: "Featured reels start dropping on Hack With You, top ones on Hack With India, Enigma & RIET. Check your DMs." }
              ].map((phase, idx) => (
                <div key={idx} className={`flex items-start gap-5 p-6 ${phase.highlight ? 'bg-primary/5 border border-primary/30' : 'bg-card border border-card-border'} hover:border-primary/50 transition-colors glow-card`}>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-2xl">
                    {phase.emoji}
                  </div>
                  <div className="pt-1">
                    <h3 className="font-semibold text-foreground mb-1 text-base">{phase.label}</h3>
                    <p className="text-sm text-muted-foreground">{phase.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HASHTAGS ==================== */}
      <section className="relative py-16 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6">Use These Hashtags</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-8"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {["#Enigma26", "#HackWithIndia", "#HackWithYou", "#HackTheMoment", "#RIETJaipur"].map((tag, idx) => (
                <span key={idx} className="px-5 py-3 bg-primary/10 border border-primary/30 text-primary font-mono font-bold text-sm hover:bg-primary/20 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Copy-paste them. Use all of them. This is how we find your reel.
            </p>
          </div>
        </div>
      </section>

      {/* ==================== FINE PRINT ==================== */}
      <section className="relative py-16 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-6 text-center">The Fine Print</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-8"></div>

            <div className="space-y-3 text-sm text-muted-foreground">
              {[
                "By submitting, you give Enigma'26 permission to post your reel on Hack With You, Hack With India, Enigma, and RIET pages as collab/repost with proper credit.",
                "Your content may be lightly edited (captions, hashtags) for consistency — but the reel stays yours.",
                "You keep full ownership of your original content. We just get to share it.",
                "The organizing team can disqualify content that's offensive, harmful, or doesn't meet basic quality standards.",
                "Your account must be public during the evaluation period so we can actually see your reel.",
                "Selected creators will be contacted via Instagram DM before any collab post goes live."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-background border border-border">
                  <span className="text-primary font-mono font-bold text-xs mt-0.5">{String(idx + 1).padStart(2, '0')}</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="relative py-32 border-t border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">

            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Flame className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Your Move</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black mb-6">
              <span className="text-gradient">Stop Scrolling.</span>
              <span className="block text-foreground mt-2">Start Shooting.</span>
            </h2>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
              You're already at one of India's biggest hackathons. You're already building something insane.
              The only question is — <span className="text-foreground font-semibold">are you gonna let this moment go undocumented?</span>
            </p>

            <div className="space-y-3 mb-10 text-lg sm:text-xl font-semibold">
              <p className="text-foreground">Shoot the moment.</p>
              <p className="text-primary">Drop the reel.</p>
              <p className="text-foreground">Get featured.</p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-7 group relative overflow-hidden text-base"
                onClick={() => window.open('https://forms.google.com/enigma26-submission', '_blank')}
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Send className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Submit Your Reel
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono uppercase tracking-wider border-2 border-primary/50 hover:border-primary hover:bg-primary/5 rounded-none px-10 py-7 text-base"
                onClick={() => window.open('https://instagram.com/hackwithindia', '_blank')}
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow Hack With India
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-mono">
              Enigma'26 is the stage. Your content is the show. Let's make it legendary.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-sm text-muted-foreground font-mono">
              © 2026 Enigma'26 · RIET Jaipur · Hack The Moment Campaign
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
