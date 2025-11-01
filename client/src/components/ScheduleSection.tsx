import { Card } from "@/components/ui/card";
import { Clock, MapPin } from "lucide-react";

const schedule = [
  {
    time: "09:00 AM",
    title: "Registration & Check-in",
    description: "Get your badges and swag kits",
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
    title: "Hacking Begins",
    description: "Start building your projects",
    location: "Lab 1-5",
    day: "Day 1",
  },
  {
    time: "01:00 PM",
    title: "Lunch Break",
    description: "Networking and refreshments",
    location: "Cafeteria",
    day: "Day 1",
  },
  {
    time: "03:00 PM",
    title: "Workshop: AI Fundamentals",
    description: "Learn from industry experts",
    location: "Workshop Hall A",
    day: "Day 1",
  },
  {
    time: "06:00 PM",
    title: "Mentorship Session",
    description: "Get guidance from mentors",
    location: "All Labs",
    day: "Day 1",
  },
  {
    time: "11:00 AM",
    title: "Final Submissions",
    description: "Submit your projects",
    location: "Online Portal",
    day: "Day 2",
    highlight: true,
  },
  {
    time: "02:00 PM",
    title: "Project Presentations",
    description: "Showcase your innovations",
    location: "Auditorium",
    day: "Day 2",
  },
  {
    time: "05:00 PM",
    title: "Prize Distribution",
    description: "Winner announcements and awards",
    location: "Main Stage",
    day: "Day 2",
    highlight: true,
  },
];

export default function ScheduleSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-schedule-title">
          Event Schedule
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          48 hours of innovation and excitement
        </p>

        <div className="max-w-4xl mx-auto space-y-4">
          {schedule.map((event, index) => (
            <Card
              key={index}
              className={`p-6 hover-elevate transition-all ${
                event.highlight
                  ? "bg-primary/10 border-primary/50 shadow-[0_0_20px_rgba(234,88,12,0.2)]"
                  : "bg-card/50 backdrop-blur-sm"
              } animate-slide-in overflow-visible`}
              style={{ animationDelay: `${index * 0.05}s` }}
              data-testid={`schedule-item-${index}`}
            >
              <div className="flex flex-col md:flex-row gap-4 md:items-center">
                <div className="flex items-center gap-3 md:w-48">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">{event.day}</p>
                    <p className="font-bold text-foreground">{event.time}</p>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{event.title}</h3>
                  <p className="text-muted-foreground mb-2">{event.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
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
