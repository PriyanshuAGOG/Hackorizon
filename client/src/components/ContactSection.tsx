import { Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const contacts = [
  { name: "Pawan Singh", phone: "8306440385" },
  { name: "Rohaan Singh", phone: "9875874278" },
  { name: "Priyanshu Agarwal", phone: "9588810249" },
];

export default function ContactSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-10 sm:mb-14 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4 animate-pulse">
            <span className="text-primary">{"// "}</span>Contact
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">
            For Queries & Collaboration
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-3 sm:mt-4 max-w-2xl mx-auto">
            Reach out to the team for any questions, partnerships, or support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-4xl mx-auto">
          {contacts.map((contact, idx) => (
            <div
              key={contact.phone}
              className={`bg-background p-6 sm:p-8 text-left group transition-opacity duration-700 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${idx * 100}ms` : "0ms" }}
            >
              <div className="flex items-center gap-2 text-primary mb-3">
                <Phone className="w-4 h-4" />
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground">Contact</span>
              </div>
              <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {contact.name}
              </p>
              <a
                href={`tel:${contact.phone}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {contact.phone}
              </a>
              <div className="mt-4 h-px w-8 bg-border group-hover:bg-primary transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
