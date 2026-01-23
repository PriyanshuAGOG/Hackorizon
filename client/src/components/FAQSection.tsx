import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "Who can participate in Enigma'26?",
    answer: "Enigma'26 is open to all students currently enrolled in any recognized educational institution. Teams must have 2-4 members. We welcome beginners as well as experienced hackers!"
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, chargers, a valid student ID, and any hardware you plan to use. We'll provide internet, power outlets, and workspaces. Don't forget your enthusiasm and creativity!"
  },
  {
    question: "Is there any registration fee?",
    answer: "Registrations are completely free."
  },
  {
    question: "What are the judging criteria?",
    answer: "Projects will be judged on innovation (30%), technical implementation (30%), design & user experience (20%), impact & feasibility (15%), and presentation (5%). Make sure your solution is both creative and practical!"
  },
  {
    question: "What if I'm a beginner?",
    answer: "Perfect! We encourage beginners to participate. We'll have workshops, mentors, and resources to help you learn and build your project. Every expert was once a beginner!"
  },
  {
    question: "Can I start working on my project before the hackathon?",
    answer: "No, all code must be written during the hackathon. However, you can come with ideas and do research beforehand. Any pre-written code will lead to disqualification."
  },
  {
    question: "How do I submit my project?",
    answer: "Project submissions will be done through our online portal. You'll need to submit your code repository (GitHub), a demo video (max 3 minutes), and a brief presentation. Detailed guidelines will be provided at the event."
  },
  {
    question: "When and where is the event?",
    answer: "Enigma'26 will be held on 20-21 February 2026 at Rajasthan Institute of Engineering and Technology, Bhankrota, Jaipur, Rajasthan."
  }
];

export default function FAQSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-card/30 relative overflow-hidden">
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Everything you need to know about Enigma'26
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border hover:border-sky-500/50 px-6 py-2 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-sky-500 transition-colors duration-300 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-4 border-t border-sky-500/20 mt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center p-8 border-2 border-sky-500/30 bg-sky-500/5 backdrop-blur-sm hover:border-sky-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
            <h3 className="text-2xl font-bold text-sky-500 mb-3">
              Still have questions?
            </h3>
            <p className="text-foreground/70 mb-6">
              Can't find the answer you're looking for? Reach out to our team!
            </p>
            <a 
              href="mailto:enigma@rfriet.ac.in" 
              className="inline-block px-8 py-3 bg-sky-500 text-white font-semibold hover:bg-sky-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/50"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
