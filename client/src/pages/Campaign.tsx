import { Button } from "@/components/ui/button";
import { Camera, Instagram, Award, CheckCircle2, TrendingUp, Users, Video, Image as ImageIcon, Zap, Shield, BookOpen, BarChart3, Lightbulb, Link2, ArrowRight, Sparkles, Target, Layers, AlertTriangle, TrendingDown, Clock, FileText, Lock, Briefcase, AlertCircle, Gauge, CheckSquare2, Eye, BarChart2, Scale } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots, CodeLine } from "@/components/TechDecorations";
import { useEffect, useState } from "react";

export default function Campaign() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: executiveRef, isVisible: executiveVisible } = useScrollAnimation();
  const { ref: ratioSectionRef, isVisible: ratioVisible } = useScrollAnimation();
  const { ref: objectiveRef, isVisible: objectiveVisible } = useScrollAnimation();
  const { ref: governanceRef, isVisible: governanceVisible } = useScrollAnimation();
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState(0);
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
        @keyframes rotateIcon {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
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
        .border-gradient { position: relative; background: linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--card)) 100%); border: 1px solid transparent; background-clip: padding-box; }
        .border-gradient::before { content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1px; background: linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%); -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0); -webkit-mask-composite: xor; mask-composite: exclude; opacity: 0.5; }
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
        .premium-line { position: relative; display: inline-block; }
        .premium-line::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, hsl(var(--primary)), transparent); animation: expandWidth 0.6s ease-out forwards; animation-delay: 0.3s; }
      `}</style>
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
      <section ref={heroRef} className="relative pt-40 pb-32 sm:pt-56 sm:pb-40 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className={`max-w-5xl mx-auto text-center ${heroVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}>
            
            <div className="hidden sm:block mb-8">
              <CodeLine className="justify-center" />
            </div>

            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/30 bg-primary/10 mb-10 animate-fadeInUp hover:border-primary/60 transition-all cursor-pointer group">
              <div className="icon-hover">
                <Camera className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Official Digital Documentation</span>
              <Zap className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Main title with gradient */}
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tighter leading-none mb-6 animate-slideInRight">
              <span className="text-gradient">ENIGMA</span>
              <span className="block text-foreground">'26</span>
            </h1>

            {/* Premium subtitle */}
            <p className="text-2xl sm:text-3xl md:text-4xl font-mono uppercase tracking-widest text-primary mb-8 animate-slideInLeft font-bold">
              Build. Create. Get Featured.
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary"></div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fadeInUp" style={{ animationDelay: "0.3s" }}>
              Transform your Enigma'26 experience into professional digital storytelling. Document innovation, capture authenticity, and gain official recognition on national platforms—exclusively via Hack with You.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-fadeInUp stagger-animation" style={{ animationDelay: "0.4s" }}>
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 group relative overflow-hidden card-hover"
                onClick={() => window.open('https://instagram.com/enigma_riet', '_blank')}
              >
                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                <Instagram className="w-5 h-5 mr-2 group-hover:animate-float" />
                Follow Campaign
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono uppercase tracking-wider border-2 border-primary/50 hover:border-primary hover:text-primary hover:bg-primary/5 rounded-none px-8 py-6 card-hover"
                onClick={() => document.getElementById("framework")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Details
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto">
              {[
                { value: "100+", label: "Submissions" },
                { value: "20-30", label: "Featured" },
                { value: "10-14", label: "Days Reach" }
              ].map((stat, idx) => (
                <div key={idx} className="p-4 animate-fadeInUp" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
                  <div className="text-2xl sm:text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Document Overview Section */}
      <section className="relative py-16 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-8 text-center">Proposal Overview</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-10"></div>
            
            <p className="text-center text-muted-foreground mb-10 text-sm sm:text-base">
              This comprehensive documentation covers all aspects of the Enigma'26 Digital Campaign initiative:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { num: "01", title: "Executive Summary" },
                { num: "02", title: "Strategic Rationale" },
                { num: "03", title: "Objectives" },
                { num: "04", title: "Publishing Governance" },
                { num: "05", title: "Scope of Content" },
                { num: "06", title: "Implementation Framework" },
                { num: "07", title: "Moderation & Compliance" },
                { num: "08", title: "Content Quality Guidelines" },
                { num: "09", title: "Legal & Consent Mechanism" },
                { num: "10", title: "Resource Requirements" },
                { num: "11", title: "Risk Assessment & Mitigation" },
                { num: "12", title: "Expected Outcomes & Impact" },
                { num: "13", title: "Conclusion" }
              ].map((section, idx) => (
                <div key={idx} className="p-4 bg-background border border-border hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <span className="text-xs font-mono font-bold text-primary">{section.num}</span>
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-foreground">{section.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">01</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Executive Summary</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                This proposal outlines a structured digital documentation initiative for Enigma'26. The campaign aims to professionally capture participant experiences through curated short-form content. All selected content will be published exclusively on the Hack with You platform as collaborative posts with respective participants.
              </p>
              <p className="text-base sm:text-lg">
                This ensures <span className="font-semibold text-foreground">centralized brand governance, institutional dignity, and maximum organic digital amplification</span>. The Creator Campaign is more than content curation—it is strategic institutional positioning in the digital landscape.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-8">
                {[
                  "Centralized brand governance and institutional dignity",
                  "Professional documentation of event scale and quality",
                  "Authentic student-led storytelling",
                  "Measurable organic digital impressions",
                  "Reusable institutional digital assets",
                  "Strategic long-term branding impact"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-card border border-card-border rounded-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg pt-6 text-center italic text-foreground">
                Modern national-level hackathons establish sustained digital presence through structured content initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Rationale Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">02</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Strategic Rationale</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-base sm:text-lg">
                <span className="font-semibold text-foreground">Modern national-level hackathons extend impact beyond physical execution through structured digital presence.</span> A curated content initiative will position Enigma'26 as a professionally organized institutional event while enhancing visibility for the host institution.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6">
                {[
                  { title: "Brand Positioning", desc: "Establishes Enigma'26 as a premier, professionally executed event" },
                  { title: "Sponsor Value", desc: "Demonstrates measurable digital ROI and audience engagement" },
                  { title: "Admission Outreach", desc: "Creates compelling institutional narratives for prospective students" }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-background border border-border">
                    <h3 className="font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>

              <p className="text-base sm:text-lg pt-6 text-center italic text-foreground">
                The campaign supports long-term branding, sponsor engagement, and future admission outreach through authentic digital storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">03</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Campaign Objectives</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: <Layers className="w-6 h-6" />, text: "Establish a centralized digital content ecosystem" },
                { icon: <Camera className="w-6 h-6" />, text: "Professionally document the scale and quality of Enigma'26" },
                { icon: <Users className="w-6 h-6" />, text: "Encourage student-led storytelling and responsible media participation" },
                { icon: <TrendingUp className="w-6 h-6" />, text: "Generate measurable organic digital impressions" },
                { icon: <BookOpen className="w-6 h-6" />, text: "Create reusable digital assets for institutional archives and presentations" },
                { icon: <Sparkles className="w-6 h-6" />, text: "Position Enigma'26 as a digitally-native, innovation-focused event" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-card border border-card-border hover:border-primary/50 transition-colors">
                  <div className="text-primary flex-shrink-0">{item.icon}</div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scope of Content Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">05</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Scope of Content</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <p className="text-center text-muted-foreground mb-10 text-base sm:text-lg">
              Participants may submit the following content formats reflecting professionalism, innovation, and institutional integrity:
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                "Hackathon journey documentation",
                "Innovation storytelling reels",
                "Coding timelapses and build demonstrations",
                "Team collaboration footage",
                "Mentorship interaction highlights",
                "Structured mini-documentary vlogs",
                "Event and campus activity visuals"
              ].map((content, idx) => (
                <div key={idx} className="p-5 bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex items-start gap-3">
                    <Video className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 bg-primary/5 border border-primary/20">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2 text-lg">
                <FileText className="w-6 h-6 text-primary" />
                Content Quality Guidelines
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                All submissions must adhere to the following technical and professional standards:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    Technical Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Vertical 9:16 format recommended</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Minimum 1080p resolution required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Clear audio quality (no distortion)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Professional editing and transitions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Content Standards
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>No objectionable language or imagery</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Respectful campus/participant depiction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>No third-party watermarks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>Institutional decorum compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-background border border-border rounded">
                <p className="text-xs text-muted-foreground text-center">
                  <span className="font-semibold text-foreground">Important:</span> Content reflecting professionalism, innovation, and institutional integrity will be prioritized during evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Framework Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">06</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Implementation Framework</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6">
              {[
                {
                  phase: "Phase I",
                  title: "Pre-Event Communication",
                  duration: "Before Hackathon",
                  details: [
                    "Official announcement and campaign launch",
                    "Content guidelines dissemination to all participants",
                    "Hashtag standardization (#Enigma26 #HackWithYou #HackWithIndia)",
                    "Submission mechanism activation"
                  ]
                },
                {
                  phase: "Phase II",
                  title: "During Event",
                  duration: "48-72 Hours",
                  details: [
                    "Participants independently create content",
                    "Real-time monitoring and support",
                    "Dedicated moderation team reviews submissions actively",
                    "Compliance screening during event execution"
                  ]
                },
                {
                  phase: "Phase III",
                  title: "Post-Event Curation",
                  duration: "7-10 Days",
                  details: [
                    "15-30 high-quality reels shortlisted",
                    "Creators contacted for collaboration confirmation",
                    "Structured posting calendar implemented",
                    "Analytics compiled for impact measurement"
                  ]
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-background border border-border hover:border-primary/50 transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-mono font-bold">{item.phase}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                        <span className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded">{item.duration}</span>
                      </div>
                      <ul className="space-y-2">
                        {item.details.map((detail, didx) => (
                          <li key={didx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="relative py-20 border-t border-border">
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

      {/* Submission CTA Section */}
      <section className="relative py-20 border-t border-border bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/30 bg-primary/10 mb-8">
              <Camera className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Ready to Participate?</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold mb-6">Submit Your Content</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Complete the official submission form with your content link and mandatory declaration. Our review committee will evaluate all submissions based on the criteria outlined above.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Submission window opens Day 1 of Enigma'26</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Final deadline: 48 hours after event conclusion</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Results announced within 7-10 days post-event</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="font-mono uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-10 py-6 group"
                onClick={() => window.open('https://forms.google.com/enigma26-submission', '_blank')}
              >
                <FileText className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Open Submission Form
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-mono uppercase tracking-wider border-2 border-primary/50 hover:border-primary hover:bg-primary/5 rounded-none px-10 py-6"
                onClick={() => document.getElementById("guidelines")?.scrollIntoView({ behavior: "smooth" })}
              >
                Review Guidelines
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-8 italic">
              By submitting, you agree to grant Enigma'26 and Hack with You the rights outlined in the Legal & Consent Framework section.
            </p>
          </div>
        </div>
      </section>

      {/* Publishing Governance Model Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">04</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Publishing Governance Model</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6">
              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Centralized Publishing Authority
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All curated content will be posted <span className="font-semibold text-foreground">exclusively on the Hack with You Instagram page</span>. Each approved reel will be published using Instagram's collaboration feature with the student creator.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Posts appear on both Hack with You page and student's account</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Dual visibility with centralized publishing control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enigma'26 or Hack with India may share selected posts through story amplification only</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Brand Consistency Standards
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Maintaining institutional dignity while enabling creative expression through structured guidelines:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Centralized captioning and publishing authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Standardized hashtag usage and disclosures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Consistent visual identity and messaging tone</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Editorial guidelines for institutional representation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moderation & Compliance Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">07</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Moderation & Compliance</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6">
              <div className="p-6 bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Review Committee Evaluation Criteria
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  All submissions will be evaluated on the basis of:
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Professional representation of event",
                    "Visual and audio clarity",
                    "Institutional compliance standards",
                    "Brand alignment with Enigma'26 values",
                    "Absence of inappropriate or objectionable material",
                    "Innovation and storytelling quality"
                  ].map((criteria, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckSquare2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{criteria}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Content Filtering Process
                </h3>
                <ol className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">1</span>
                    <span><span className="font-semibold text-foreground">Initial Screening:</span> Compliance check against institutional decorum standards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">2</span>
                    <span><span className="font-semibold text-foreground">Quality Review:</span> Technical and creative quality assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">3</span>
                    <span><span className="font-semibold text-foreground">Brand Alignment:</span> Verification of alignment with Enigma'26 values</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-semibold text-primary">4</span>
                    <span><span className="font-semibold text-foreground">Final Approval:</span> Only approved content proceeds to publication</span>
                  </li>
                </ol>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Real-Time Moderation
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A dedicated moderation team will review submissions in real time during event execution, ensuring compliance screening before publication and enabling immediate feedback to creators.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal & Consent Mechanism Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">09</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Legal & Consent Framework</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6">
              <div className="p-6 bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" />
                  Intellectual Property Rights
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  All participant submissions must include a mandatory legal declaration granting the following rights:
                </p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                    <span><span className="font-semibold text-foreground">Enigma'26</span> and <span className="font-semibold text-foreground">Hack with You</span> have the right to repost and republish content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                    <span>Content may be edited if required for institutional or brand compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                    <span>Publication occurs as collaborative posts with proper credit to the creator</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5"></div>
                    <span>Content may be archived for institutional presentations and digital assets</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Submission Form Requirements
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  The submission form will contain a comprehensive declaration that ensures:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Transparent intellectual property usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Institutional protection and legal compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Clear attribution and creator recognition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>All participants' consent and acknowledgment</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Creator Rights & Protection
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  While institutional and brand rights are secured, creators retain ownership of their original work unless explicitly modified by the moderation team. All modifications will be communicated clearly before publication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Detailed Evaluation Criteria</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Creativity & Originality", desc: "Unique storytelling perspective and innovative approach to capturing the hackathon experience" },
                { title: "Quality of Storytelling", desc: "Narrative clarity, emotional engagement, and authentic representation of participant journey" },
                { title: "Technical Excellence", desc: "Editing quality, visual clarity, audio quality, and production value standards" },
                { title: "Hackathon Spirit", desc: "Authentic representation of innovation, collaboration, and the core values of Enigma'26" },
                { title: "Energy & Engagement", desc: "Ability to captivate viewers and inspire participation in the Enigma'26 community" },
                { title: "Overall Impact", desc: "Potential to enhance event brand positioning and institutional credibility" }
              ].map((criteria, idx) => (
                <div key={idx} className="p-5 bg-background border border-border hover:border-primary/50 transition-colors">
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{criteria.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{criteria.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-primary/5 border border-primary/20 text-center">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Note:</span> Evaluation will focus on quality and authenticity, not follower count or prior influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Requirements Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">10</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Resource Requirements</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Human Resources
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>3–4 Content Review Committee Members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>2 Social Media Coordination Officers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>1 Campaign Lead</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Infrastructure Needs
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Google Form submission system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cloud storage repository</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Official Instagram collaboration access</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-6 bg-primary/5 border border-primary/20">
              <p className="text-center text-sm font-semibold text-foreground">
                Financial Impact: No additional financial expenditure anticipated
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment & Mitigation Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">11</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Risk Assessment & Mitigation Strategy</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-4">
              {[
                {
                  risk: "Low-quality submissions diluting campaign effectiveness",
                  mitigation: "Implement strict quality filtration protocols and comprehensive moderation standards",
                  severity: "High"
                },
                {
                  risk: "Brand inconsistency in published content messaging",
                  mitigation: "Establish centralized captioning authority and unified publishing guidelines",
                  severity: "High"
                },
                {
                  risk: "Reputational sensitivity or controversial content publication",
                  mitigation: "Conduct manual compliance screening before collaboration approval with contingency removal protocols",
                  severity: "Critical"
                },
                {
                  risk: "Low participant engagement and submission volume",
                  mitigation: "Early promotion, clear guidelines dissemination, and incentive structure communication",
                  severity: "Medium"
                },
                {
                  risk: "Intellectual property disputes or permission issues",
                  mitigation: "Mandatory legal declaration in submission form with transparent IP rights framework",
                  severity: "Medium"
                },
                {
                  risk: "Technical issues with Instagram collaboration feature",
                  mitigation: "Backup publication protocols and alternative distribution channels identified",
                  severity: "Low"
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-foreground">{item.risk}</h3>
                        <span className={`text-xs font-mono px-2 py-1 rounded ${
                          item.severity === 'Critical' ? 'bg-red-500/10 text-red-700' :
                          item.severity === 'High' ? 'bg-orange-500/10 text-orange-700' :
                          'bg-blue-500/10 text-blue-700'
                        }`}>
                          {item.severity}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Mitigation:</span> {item.mitigation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes & Impact Metrics Section */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">12</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Expected Outcomes & Impact Metrics</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {[
                { metric: "100+", label: "Participant-Generated Submissions", icon: <Users className="w-6 h-6" /> },
                { metric: "20–30", label: "Curated Collaborative Publications", icon: <Camera className="w-6 h-6" /> },
                { metric: "10–14", label: "Days of Sustained Engagement Cycle", icon: <Clock className="w-6 h-6" /> },
                { metric: "2500+", label: "Target Organic Reach (Conservative)", icon: <TrendingUp className="w-6 h-6" /> }
              ].map((item, idx) => (
                <div key={idx} className="p-6 bg-background border border-border text-center hover:border-primary/50 transition-colors">
                  <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
                  <div className="text-3xl font-bold text-gradient mb-2">{item.metric}</div>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BarChart2 className="w-5 h-5 text-primary" />
                  Key Performance Indicators (KPIs)
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Total submission volume and participation rate",
                    "Engagement rate (likes, comments, shares per post)",
                    "Reach expansion across Instagram platform",
                    "Click-through rates to official Enigma platforms",
                    "Follower growth on Hack with You account",
                    "Brand sentiment and community response analysis",
                    "Creator retention for future campaigns",
                    "Institutional credibility perception metrics"
                  ].map((kpi, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Gauge className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{kpi}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Post-Event Analytics & Reporting
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A comprehensive analytics report will be compiled post-event to quantify impressions, engagement rates, and digital growth. This data will inform future campaign iterations and demonstrate ROI to stakeholders and sponsors.
                </p>
              </div>

              <div className="p-6 bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Strategic Impact Goals
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Strengthened positioning of Enigma'26 as a national-level hackathon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Enhanced institutional credibility and digital presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sustained digital narrative extending event impact beyond physical execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Community development and creator ecosystem establishment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6 text-center">Campaign Timeline</h2>
            <div className="h-px w-24 bg-primary mx-auto mb-12"></div>
            
            <div className="space-y-1">
              {[
                { label: "Day 1 of Enigma'26", detail: "Start posting eligible content on official channels" },
                { label: "Day 2 of Enigma'26", detail: "Continue content creation and submission" },
                { label: "Up to 48 hours after event", detail: "Final submission window closes" },
                { label: "Days 3–5 Post-Event", detail: "Content review and moderation process" },
                { label: "Days 5–15 Post-Event", detail: "Collaborative post publication on structured calendar (7–10 days)" }
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
              Winners and featured creators will be officially announced on Enigma platforms following evaluation completion.
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

      {/* Conclusion & Approval Request Section */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-mono font-bold text-primary/30">13</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Conclusion</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12"></div>
            
            <div className="space-y-6">
              <div className="p-8 bg-primary/5 border border-primary/20">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  This initiative ensures <span className="font-semibold text-foreground">structured digital amplification of Enigma'26</span> while maintaining institutional professionalism and centralized brand governance. The campaign will transform the event into a sustained digital narrative that enhances institutional credibility and long-term visibility.
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mt-6">
                  {[
                    { icon: <Shield className="w-6 h-6" />, label: "Institutional Professionalism" },
                    { icon: <TrendingUp className="w-6 h-6" />, label: "Digital Amplification" },
                    { icon: <Award className="w-6 h-6" />, label: "Long-Term Visibility" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-background border border-border text-center">
                      <div className="text-primary mx-auto mb-2 flex justify-center">{item.icon}</div>
                      <p className="text-xs text-muted-foreground font-medium">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-background border-2 border-primary/30 text-center">
                <h3 className="text-xl font-semibold text-foreground mb-4">Formal Approval Request</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Approval is respectfully requested to proceed with structured execution of the Enigma'26 Digital Documentation & Reel Campaign as outlined in this comprehensive proposal.
                </p>
                <div className="flex flex-wrap justify-center gap-3 text-sm">
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded">
                    <span className="font-semibold text-primary">Submitted for:</span> Institutional Approval
                  </div>
                  <div className="px-4 py-2 bg-primary/10 border border-primary/20 rounded">
                    <span className="font-semibold text-primary">Publishing Partner:</span> Hack with You
                  </div>
                </div>
              </div>
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
