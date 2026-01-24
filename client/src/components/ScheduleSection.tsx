import { Clock, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner, GridLines } from "./TechDecorations";

const schedule = [
  { time: "09:00 AM", title: "Registration & Check-in", description: "Get your badges and meet fellow hackers", location: "Main Hall", day: "Day 1" },
  { time: "10:00 AM", title: "Opening Ceremony", description: "Welcome address and hackathon kickoff", location: "Auditorium", day: "Day 1", highlight: true },
  { time: "11:00 AM", title: "Hacking Begins!", description: "Start building your projects", location: "Coding Zones", day: "Day 1" },
  { time: "03:00 PM", title: "Technical Workshops", description: "Hands-on sessions with industry experts", location: "Workshop Hall", day: "Day 1" },
  { time: "06:00 PM", title: "Mentorship Sessions", description: "Get guidance from experienced developers", location: "All Zones", day: "Day 1" },
  { time: "09:00 AM", title: "Final Submissions", description: "Submit your completed projects", location: "Online Portal", day: "Day 2", highlight: true },
  { time: "11:00 AM", title: "Project Presentations", description: "Showcase your innovations", location: "Main Auditorium", day: "Day 2" },
  { time: "02:00 PM", title: "Winner Announcement", description: "Prize distribution and closing ceremony", location: "Main Stage", day: "Day 2", highlight: true },
];

export default function ScheduleSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="tl" />
        <TechCorner position="tr" />
      </div>
      <div className="hidden lg:block">
        <GridLines />
      </div>
      
      {/* Side lines - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-10 sm:mb-16 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-3 sm:mb-4">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span><span className="text-primary">[</span> 20-21 Feb 2026 <span className="text-primary">]</span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">Event Schedule</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {["Day 1", "Day 2"].map((day) => (
            <div key={day} className="mb-8 sm:mb-12">
              <p className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-primary mb-4 sm:mb-6 border-b border-border pb-2">
                <span className="text-muted-foreground">//</span> {day}
              </p>
              <div className="space-y-1">
                {schedule
                  .filter((item) => item.day === day)
                  .map((item, idx) => (
                    <div
                      key={`${day}-${item.time}`}
                      className={`grid grid-cols-1 sm:grid-cols-[80px_1fr] gap-2 sm:gap-6 py-3 sm:py-4 border-b border-border transition-all duration-500 group hover:bg-border/20 cursor-default ${isVisible ? "opacity-100" : "opacity-0"}`}
                      style={{ transitionDelay: isVisible ? `${idx * 60}ms` : "0ms" }}
                    >
                      <div className="flex items-center sm:items-start gap-2 text-[10px] sm:text-xs font-mono text-muted-foreground">
                        <Clock className="w-3 h-3 group-hover:text-primary transition-colors" />
                        {item.time}
                      </div>
                      <div>
                        <h4 className={`text-sm sm:text-base font-semibold transition-colors ${item.highlight ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">{item.description}</p>
                        <div className="flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2 group-hover:text-primary/70 transition-colors">
                          <MapPin className="w-3 h-3" />
                          {item.location}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
