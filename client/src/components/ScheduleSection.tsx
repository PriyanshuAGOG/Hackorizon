import { Card } from "@/components/ui/card";
import { Clock, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registration & Check-in",
    description: "Get your badges and meet fellow hackers",
    location: "Main Hall",
    day: "Day 1",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address and hackathon kickoff",
    location: "Auditorium",
    day: "Day 1",
    highlight: true,
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins!",
    description: "Start building your projects",
    location: "Coding Zones",
    day: "Day 1",
  },
  {
    time: "01:00 PM",
    title: "Lunch & Networking",
    description: "Refreshments and team bonding",
    location: "Cafeteria",
    day: "Day 1",
  },
  {
    time: "03:00 PM",
    title: "Technical Workshops",
    description: "Hands-on sessions with industry experts",
    location: "Workshop Hall",
    day: "Day 1",
  },
  {
    time: "06:00 PM",
    title: "Mentorship Sessions",
    description: "Get guidance from experienced developers",
    location: "All Zones",
    day: "Day 1",
  },
  {
    time: "09:00 PM",
    title: "Midnight Snacks",
    description: "Refreshments and relaxation",
    location: "Common Area",
    day: "Day 1",
  },
  {
    time: "11:00 AM",
    title: "Final Submissions",
    description: "Submit your completed projects",
    location: "Online Portal",
    day: "Day 2",
    highlight: true,
  },
  {
    time: "02:00 PM",
    title: "Project Presentations",
    description: "Showcase your innovations",
    location: "Main Auditorium",
    day: "Day 2",
  },
  {
    time: "05:00 PM",
    title: "Winner Announcement",
    description: "Prize distribution and closing ceremony",
    location: "Main Stage",
    day: "Day 2",
    highlight: true,
  },
];

export default function ScheduleSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 border border-primary/30 rounded-full mb-4 sm:mb-6">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-mono text-primary uppercase tracking-wider">36 Hours</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black mb-4 sm:mb-6 text-foreground">
            Event Schedule
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Two days of intensive coding, learning, and innovation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {['Day 1', 'Day 2'].map((day) => (
            <div key={day} className="mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-6 pl-4 border-l-4 border-primary">{day}</h3>
              <div className="space-y-4">
                {schedule.filter(item => item.day === day).map((item, idx) => (
                  <Card
                    key={idx}
                    className={`p-6 border-2 transition-all hover:border-primary ${
                      item.highlight ? 'border-primary/50 bg-primary/5' : 'border-border'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="font-mono text-sm font-bold text-primary">{item.time}</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-bold text-foreground mb-1">{item.title}</h4>
                        <p className="text-muted-foreground mb-2">{item.description}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
