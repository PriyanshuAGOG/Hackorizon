import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Who can participate in CODEVEDANS 2025?",
    answer: "Any student currently enrolled in a college or university can participate. Teams can have 2-4 members.",
  },
  {
    question: "Is there a participation fee?",
    answer: "No! CODEVEDANS is completely free to attend. We provide meals, swag, and mentorship at no cost.",
  },
  {
    question: "What should I bring to the hackathon?",
    answer: "Bring your laptop, chargers, student ID, and enthusiasm! We'll provide everything else including meals, WiFi, and workspaces.",
  },
  {
    question: "Can I work on a project I've already started?",
    answer: "No, all projects must be started from scratch during the hackathon. However, you can use existing libraries and frameworks.",
  },
  {
    question: "Will there be mentors available?",
    answer: "Yes! We have 20+ industry experts and technical mentors available throughout the event to guide you.",
  },
  {
    question: "What if I don't have a team?",
    answer: "No problem! We'll have a team formation session at the beginning where you can meet other participants and form teams.",
  },
  {
    question: "What technologies can we use?",
    answer: "You're free to use any programming language, framework, or technology. We encourage innovation and creativity!",
  },
  {
    question: "Will accommodation be provided?",
    answer: "The hackathon venue will be open 24/7 during the event. Sleeping areas and refreshments will be available.",
  },
  {
    question: "How will projects be judged?",
    answer: "Projects are evaluated on innovation, technical complexity, design, feasibility, and presentation quality.",
  },
  {
    question: "Can we submit multiple projects?",
    answer: "Each team can submit one primary project, but you're welcome to work on side projects or experiments.",
  },
  {
    question: "What happens after the hackathon?",
    answer: "Winners receive prizes immediately. Top projects may get incubation support, funding opportunities, and media coverage.",
  },
  {
    question: "Is there a code of conduct?",
    answer: "Yes, all participants must follow our code of conduct ensuring a safe, inclusive, and respectful environment for everyone.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-faq-title">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Everything you need to know about CODEVEDANS
        </p>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-card-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline hover:text-primary transition-colors" data-testid={`faq-question-${index}`}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground" data-testid={`faq-answer-${index}`}>
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
