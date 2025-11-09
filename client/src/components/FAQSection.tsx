import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Who can participate in HACKORIZON 2026?",
    answer: "Any student currently enrolled in a college or university can participate. Teams can have 2-4 members. No prior hackathon experience required!",
  },
  {
    question: "Is there a participation fee?",
    answer: "No! HACKORIZON is completely free to attend. We provide meals, swag, mentorship, workshops, and all amenities at absolutely no cost to participants.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, chargers, student ID, and enthusiasm! We'll provide everything else including meals, WiFi, workspaces, sleeping areas, and all necessary facilities.",
  },
  {
    question: "Can I work on a project I've already started?",
    answer: "No, all projects must be started from scratch during the hackathon to ensure fairness. However, you're free to use existing libraries, frameworks, and open-source tools.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! We have 20+ industry experts and technical mentors available throughout the event to provide guidance, debugging support, and technical assistance.",
  },
  {
    question: "What if I don't have a team?",
    answer: "No problem! We'll have a team formation session at the beginning where you can meet other participants with similar interests and form teams organically.",
  },
  {
    question: "What technologies can we use?",
    answer: "You're free to use any programming language, framework, or technology stack. We encourage innovation, creativity, and exploration of new technologies!",
  },
  {
    question: "Will accommodation be provided?",
    answer: "The hackathon venue will be open 24/7 during the event. Comfortable sleeping areas, refreshments, gaming zones, and relaxation spaces will be available throughout.",
  },
  {
    question: "How will projects be judged?",
    answer: "Projects are evaluated on innovation, technical complexity, design quality, real-world feasibility, presentation skills, and overall impact. Our expert judges will provide detailed feedback.",
  },
  {
    question: "Can we submit multiple projects?",
    answer: "Each team can submit one primary project for the main competition. However, you're welcome to work on side projects, experiments, or proofs of concept for learning.",
  },
  {
    question: "What happens after the hackathon?",
    answer: "Winners receive prizes immediately. Top projects may get incubation support, seed funding opportunities, media coverage, and connections with investors and accelerators.",
  },
  {
    question: "Is there a code of conduct?",
    answer: "Yes, all participants must follow our comprehensive code of conduct ensuring a safe, inclusive, respectful, and harassment-free environment for everyone.",
  },
];

export default function FAQSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Got Questions?</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about HACKORIZON 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`group bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-card-border rounded-2xl px-8 py-2 data-[state=open]:border-primary/70 data-[state=open]:shadow-[0_0_40px_rgba(255,94,0,0.3)] transition-all duration-300 hover:border-primary/50 overflow-hidden relative ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 0.05}s` : '0s',
                  transitionDuration: '0.6s'
                }}
                data-testid={`faq-item-${index}`}
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                
                <AccordionTrigger className="text-left hover:no-underline py-6 text-lg font-bold group-hover:text-primary transition-colors relative" data-testid={`faq-question-${index}`}>
                  <div className="flex items-start gap-4 flex-1 pr-4">
                    <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1 animate-pulse" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pl-9 pb-6" data-testid={`faq-answer-${index}`}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
