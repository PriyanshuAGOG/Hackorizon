import { Card } from "@/components/ui/card";
import { Clock, MapPin, Calendar, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registration & Check-in",
    description: "Get your badges, swag kits, and meet fellow hackers",
    location: "Main Hall",
    day: "Day 1",
  },
  {
    time: "10:00 AM",
    title: "Opening Ceremony",
    description: "Welcome address, keynote speakers, and official hackathon kickoff",
    location: "Auditorium",
    day: "Day 1",
    highlight: true,
  },
  {
    time: "11:00 AM",
    title: "Hacking Begins!",
    description: "Start building your revolutionary projects and innovations",
    location: "Lab 1-5",
    day: "Day 1",
  },
  {
    time: "01:00 PM",
    title: "Lunch & Networking",
    description: "Gourmet meals, networking sessions, and team bonding",
    location: "Cafeteria",
    day: "Day 1",
  },
  {
    time: "03:00 PM",
    title: "Workshop: AI Fundamentals",
    description: "Deep dive into AI/ML with hands-on coding sessions",
    location: "Workshop Hall A",
    day: "Day 1",
  },
  {
    time: "06:00 PM",
    title: "Mentorship Sessions",
    description: "Get expert guidance and technical support from industry leaders",
    location: "All Labs",
    day: "Day 1",
  },
  {
    time: "09:00 PM",
    title: "Midnight Snacks & Games",
    description: "Refreshments, gaming zone, and relaxation activities",
    location: "Common Area",
    day: "Day 1",
  },
  {
    time: "11:00 AM",
    title: "Final Submissions Deadline",
    description: "Submit your completed projects and demos",
    location: "Online Portal",
    day: "Day 2",
    highlight: true,
  },
  {
    time: "02:00 PM",
    title: "Project Presentations",
    description: "Showcase your innovations to judges and audience",
    location: "Main Auditorium",
    day: "Day 2",
  },
  {
    time: "05:00 PM",
    title: "Winner Announcement & Awards",
    description: "Prize distribution ceremony and closing remarks",
    location: "Main Stage",
    day: "Day 2",
    highlight: true,
  },
];

export default function ScheduleSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">48 Hours</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-schedule-title">
            Event Schedule
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            48 hours of non-stop innovation, learning, and excitement
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {schedule.map((event, index) => (
            <Card
              key={index}
              className={`group relative p-8 transition-all duration-500 hover:scale-[1.02] overflow-hidden ${
                event.highlight
                  ? "bg-gradient-to-r from-orange-500/20 via-primary/20 to-orange-500/20 border-2 border-primary/70 shadow-[0_0_40px_rgba(255,94,0,0.4)] hover:shadow-[0_0_60px_rgba(255,94,0,0.6)]"
                  : "bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl border-2 border-card-border hover:border-primary/50"
              } ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              style={{ 
                transitionDelay: isVisible ? `${index * 0.05}s` : '0s',
                transitionDuration: '0.6s'
              }}
              data-testid={`schedule-item-${index}`}
            >
              {event.highlight && (
                <>
                  <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-primary to-orange-500 opacity-20 rounded-full blur-2xl group-hover:blur-3xl transition-all" />
                  <Zap className="absolute top-4 right-4 w-6 h-6 text-primary animate-pulse" />
                </>
              )}

              <div className="flex flex-col md:flex-row gap-6 md:items-center relative">
                <div className="flex items-center gap-4 md:w-64">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    event.highlight 
                      ? 'bg-gradient-to-br from-orange-500 to-primary shadow-[0_0_30px_rgba(255,94,0,0.5)]'
                      : 'bg-gradient-to-br from-primary/20 to-orange-500/20 border-2 border-primary/30'
                  }`}>
                    <Clock className={`w-7 h-7 ${event.highlight ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <div>
                    <p className="font-mono text-sm text-muted-foreground font-bold mb-1">{event.day}</p>
                    <p className={`text-xl font-black ${event.highlight ? 'text-primary' : 'text-foreground'}`}>{event.time}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className={`text-lg md:text-xl lg:text-2xl font-black mb-2 ${
                    event.highlight 
                      ? 'bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent'
                      : 'text-foreground group-hover:text-primary transition-colors'
                  }`}>
                    {event.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-3">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <MapPin className={`w-4 h-4 ${event.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <span className={event.highlight ? 'text-primary' : 'text-muted-foreground'}>{event.location}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}