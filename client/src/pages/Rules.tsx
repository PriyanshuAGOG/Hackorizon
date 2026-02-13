import { Button } from "@/components/ui/button";
import { BookOpen, Users, Shield, Award, Code, FileCheck, AlertCircle, MapPin, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, FloatingDots, CodeLine } from "@/components/TechDecorations";
import { useEffect } from "react";

export default function Rules() {
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
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Official Rulebook</span>
            </div>

            {/* Main title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black text-foreground tracking-tight leading-none mb-6">
              ENIGMA'26
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl md:text-3xl font-mono uppercase tracking-wider text-primary mb-8">
              Rules & Guidelines
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Complete guidelines for participation, team formation, evaluation criteria, and event policies.
            </p>

            {/* Quick Nav */}
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <Button
                size="sm"
                variant="outline"
                className="font-mono uppercase tracking-wider text-xs border border-border hover:border-primary hover:text-primary rounded-none"
                onClick={() => document.getElementById("eligibility")?.scrollIntoView({ behavior: "smooth" })}
              >
                Eligibility
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="font-mono uppercase tracking-wider text-xs border border-border hover:border-primary hover:text-primary rounded-none"
                onClick={() => document.getElementById("teams")?.scrollIntoView({ behavior: "smooth" })}
              >
                Teams
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="font-mono uppercase tracking-wider text-xs border border-border hover:border-primary hover:text-primary rounded-none"
                onClick={() => document.getElementById("evaluation")?.scrollIntoView({ behavior: "smooth" })}
              >
                Evaluation
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="font-mono uppercase tracking-wider text-xs border border-border hover:border-primary hover:text-primary rounded-none"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section id="eligibility" className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">1</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Eligibility</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "Open to undergraduate and postgraduate students across India",
                "Valid college ID is mandatory for offline check-in",
                "Inter-college teams are permitted",
                "Members of the organizing committee are not eligible to compete"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 bg-card border border-card-border hover:border-primary/50 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Composition Section */}
      <section id="teams" className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">2</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Team Composition</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                "Solo participation is allowed",
                "Team size: Minimum 1 and Maximum 6 members",
                "A participant may be part of only one team",
                "Each team must have a unique name",
                "All members must be registered through the official registration form"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-background border border-border">
                  <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration and Participation Policy */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">3</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Registration & Participation Policy</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "Registration must be completed with accurate details",
                "Participants must join official communication channels for updates",
                "Offline participation is subject to venue capacity and follows a first-come basis",
                "A minimal participation fee will apply to cover food and accommodation logistics",
                "Providing false information or proxy attendance may result in disqualification"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 bg-card border border-card-border hover:shadow-md transition-all">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks and Problem Statements */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">4</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Tracks & Problem Statements</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                "Participants are free to choose any track",
                "Participants may choose any problem statement",
                "Problem statements will be released at the event",
                "Open Innovation permits interdisciplinary and mixed-domain solutions",
                "Each team may submit only one final project"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-background border border-border">
                  <Code className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Build Rules and Resources */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">5</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Build Rules & Resources</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                "Development must begin only after the official kickoff announcement",
                "Fully developed pre-event projects are not permitted",
                "Pre-built templates are not allowed",
                "Any programming language, framework, API, cloud platform, or AI tool may be used",
                "Teams must clearly explain their architecture and implementation during evaluation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 bg-card border border-card-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 ml-0 sm:ml-16">
              <p className="text-sm text-center text-foreground">
                <span className="font-semibold">Tech Freedom:</span> Use any tools, but demonstrate full understanding of your implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Usage Policy */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">6</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">AI Usage Policy</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                { text: "AI tools for coding, design, research, and debugging are permitted", highlight: true },
                { text: "Teams must demonstrate understanding and ownership of their work", highlight: false },
                { text: "Copied or blindly generated solutions may impact evaluation", highlight: false },
                { text: "Plagiarism may result in immediate disqualification", highlight: false }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-4 p-5 border ${item.highlight ? 'bg-primary/5 border-primary' : 'bg-background border-border'}`}
                >
                  <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Submission Requirements */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">7</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Submission Requirements</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "GitHub repository link with relevant commit history",
                "Clear project description outlining the problem and solution",
                "Presentation deck for demonstration",
                "Deployment link if applicable"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-card border border-card-border hover:border-primary/50 transition-colors">
                  <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Criteria */}
      <section id="evaluation" className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">8</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Evaluation Criteria</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "Innovation and originality",
                "Technical depth and execution quality",
                "Real-world relevance and impact",
                "User experience and interface design",
                "Scalability and feasibility",
                "Business viability where applicable",
                "Clarity of presentation"
              ].map((criteria, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-background border border-border">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{criteria}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-background border-2 border-primary ml-0 sm:ml-16">
              <p className="text-sm text-center font-semibold text-foreground">
                Judges' decisions are final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Attendance and Check-In */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">9</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Attendance & Check-In</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                "Offline check-in is mandatory",
                "All team members must be physically present",
                "Valid college ID must be carried",
                "Late arrival beyond the designated window may affect participation"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-card border border-card-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">10</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Code of Conduct</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "Maintain respectful and professional conduct at all times",
                "Adhere to institutional and event policies",
                "Harassment or unsafe behavior will not be tolerated"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-5 bg-background border border-border">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Wellbeing */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">11</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Safety & Wellbeing</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              {[
                "ENIGMA'26 is committed to providing a safe and inclusive environment",
                "Separate and secure resting spaces will be arranged for girl participants",
                "Event areas will be supervised by faculty and organizing members",
                "Any safety concern should be reported immediately to the organizing team"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-card border border-card-border">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities and Accommodation */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">12</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Facilities & Accommodation</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="grid sm:grid-cols-2 gap-4 ml-0 sm:ml-16">
              {[
                "Food will be provided during the event",
                "Basic resting arrangements will be available",
                "Participants should carry personal essentials",
                "Organizers are not responsible for personal belongings"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-5 bg-background border border-border">
                  <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            {/* Participation Fee Details */}
            <div className="mt-8 ml-0 sm:ml-16">
              <div className="p-6 bg-primary/5 border-2 border-primary">
                <h3 className="text-lg font-semibold text-foreground mb-4">Participation Fee Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Fee: ₹400 per head</p>
                      <p className="text-sm text-muted-foreground mt-1">Covers food and accommodation logistics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Lunch & Dinner on 20 Feb 2026</p>
                      <p className="text-sm text-muted-foreground mt-1">Full meals provided during hackathon day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2"></div>
                    <div>
                      <p className="font-semibold text-foreground">Breakfast on 21 Feb 2026</p>
                      <p className="text-sm text-muted-foreground mt-1">Nutritious breakfast before final submission</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media and Visibility */}
      <section className="relative py-20 border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">13</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Media & Visibility</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="ml-0 sm:ml-16">
              <div className="p-6 bg-card border border-card-border">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Sponsors may highlight winning projects with due credit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Authority */}
      <section className="relative py-20 border-t border-border bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <span className="text-primary font-mono font-bold text-xl">14</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold">Final Authority</h2>
            </div>
            <div className="h-px w-24 bg-primary mb-12 ml-16"></div>
            
            <div className="space-y-4 ml-0 sm:ml-16">
              <div className="p-6 bg-background border-2 border-primary">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                  The organizing committee reserves the right to take decisions in unforeseen circumstances.
                </p>
              </div>
              <div className="p-6 bg-background border border-border">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-center">
                  Operational updates may be communicated during the event to ensure smooth execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="relative py-32 border-t border-border bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">Contact Information</h2>
              <div className="h-px w-24 bg-primary mx-auto mb-6"></div>
              <p className="text-muted-foreground">
                During the event, participants may approach any volunteer, faculty coordinator, or organizer for assistance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Priyanshu Agarwal", phone: "9588810249" },
                { name: "Pawan Singh", phone: "8306440385" },
                { name: "Uday Raniwal", phone: "9650674245" },
                { name: "Mukesh Firoda", phone: "7742334950" },
                { name: "Rohaan Singh", phone: "9875874278" }
              ].map((contact, idx) => (
                <div key={idx} className="p-6 bg-background border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="flex flex-col items-center text-center gap-3">
                    <Phone className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{contact.name}</p>
                      <a 
                        href={`tel:${contact.phone}`}
                        className="text-sm text-primary hover:underline font-mono"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
