import { Clock, MapPin, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const schedule = [
  // Day 1 - 20 Feb
  { time: "8:00 AM", endTime: "11:00 AM", title: "Registration, Check-in & Reporting", description: "Welcome hackers! Get your badges, explore the venue, and meet the team.", location: "Registration Desk", day: "Day 1 (20 Feb)", highlight: false, color: "from-blue-500" },
  { time: "11:00 AM", endTime: "12:00 PM", title: "Orientation & Inaugural Ceremony", description: "Learn about event rules, guidelines, and get inspired by keynote speakers.", location: "Main Ground", day: "Day 1 (20 Feb)", highlight: true, color: "from-purple-500" },
  { time: "12:00 PM", endTime: "1:00 PM", title: "Hackathon Coding Begins!", description: "Start building your ideas. Let the creative journey begin!", location: "Code Rooms", day: "Day 1 (20 Feb)", highlight: true, color: "from-orange-500" },
  { time: "1:00 PM", endTime: "2:00 PM", title: "Lunch Break", description: "Refuel with delicious food and refreshments.", location: "Food Court", day: "Day 1 (20 Feb)", highlight: false, color: "from-green-500" },
  { time: "5:00 PM", endTime: "8:00 PM", title: "Mentorship Round", description: "Get expert guidance and feedback from industry professionals.", location: "Code Rooms", day: "Day 1 (20 Feb)", highlight: false, color: "from-yellow-500" },
  { time: "9:00 PM", endTime: "10:00 PM", title: "Dinner Break", description: "Energy boost! Grab dinner and recharge.", location: "Food Court", day: "Day 1 (20 Feb)", highlight: false, color: "from-pink-500" },
  { time: "10:00 PM", endTime: "11:30 PM", title: "Presentation Round", description: "First batch of teams present their progress and get feedback.", location: "Main Ground", day: "Day 1 (20 Feb)", highlight: true, color: "from-cyan-500" },

  // Day 2 - 21 Feb
  { time: "8:00 AM", endTime: "9:00 AM", title: "Breakfast", description: "Start your final day with energy and enthusiasm.", location: "Food Court", day: "Day 2 (21 Feb)", highlight: false, color: "from-amber-500" },
  { time: "9:00 AM", endTime: "1:00 PM", title: "Final Coding Sprint & Submissions", description: "Last hours to polish your project and submit. Make it count!", location: "Code Rooms", day: "Day 2 (21 Feb)", highlight: true, color: "from-red-500" },
  { time: "2:00 PM", endTime: "3:30 PM", title: "Project Evaluation & Judging", description: "Expert panel evaluates all submissions based on innovation, design, and impact.", location: "Main Ground", day: "Day 2 (21 Feb)", highlight: true, color: "from-indigo-500" },
  { time: "3:30 PM", endTime: "5:00 PM", title: "Winner Announcements, Prize Ceremony & Closing", description: "Celebrate achievements! Winner announcements, awards, and closing remarks.", location: "Main Ground", day: "Day 2 (21 Feb)", highlight: true, color: "from-violet-500" },
];

export default function ScheduleSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Minimal decorations - hidden on mobile */}
      <div className="hidden lg:block">
        <div className="absolute left-8 top-0 w-px h-full bg-border" />
        <div className="absolute right-8 top-0 w-px h-full bg-border" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3 sm:mb-4">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span><span className="text-primary">[</span> 20-21 Feb 2026 <span className="text-primary">]</span></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-foreground">Event Schedule</h2>
        </div>

        {/* Timeline - clean and minimal */}
        <div className="max-w-3xl mx-auto">
          {["Day 1 (20 Feb)", "Day 2 (21 Feb)"].map((day, dayIdx) => (
            <div key={day} className={dayIdx > 0 ? "mt-12 sm:mt-16" : ""}>
              {/* Day divider */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 bg-border" />
                <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground font-semibold px-2">{day}</p>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Schedule items */}
              <div className="space-y-3 sm:space-y-4">
                {schedule
                  .filter((item) => item.day === day)
                  .map((item, idx) => (
                    <div
                      key={`${day}-${item.time}`}
                      className={`group border border-border transition-all duration-500 p-4 sm:p-6 hover:border-primary/50 cursor-default ${
                        isVisible ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ transitionDelay: isVisible ? `${idx * 50}ms` : "0ms" }}
                    >
                      {/* Left accent bar - subtle */}
                      <div className="absolute left-0 top-0 bottom-0 w-px bg-border group-hover:bg-primary transition-colors" />

                      <div className="ml-2 sm:ml-3">
                        {/* Time */}
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs sm:text-sm font-mono text-primary font-semibold">
                            {item.time} - {item.endTime}
                          </span>
                          {item.highlight && (
                            <span className="text-[9px] font-mono text-primary/70">★</span>
                          )}
                        </div>

                        {/* Title */}
                        <h4 className={`text-sm sm:text-base font-semibold transition-colors group-hover:text-primary ${
                          item.highlight ? "text-primary" : "text-foreground"
                        }`}>
                          {item.title}
                        </h4>

                        {/* Description and location - minimal info */}
                        <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <p>{item.description}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
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
