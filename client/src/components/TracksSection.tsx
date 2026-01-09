import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cpu, Brain, Palette, Database, Globe, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tracks = [
  {
    id: "ai",
    name: "AI/ML",
    icon: Brain,
    problems: [
      "Develop an AI-powered recommendation system for personalized learning experiences",
      "Create a machine learning model for early disease detection from medical images",
      "Build an intelligent chatbot for mental health support with NLP capabilities",
    ],
  },
  {
    id: "iot",
    name: "IoT",
    icon: Cpu,
    problems: [
      "Design a smart home automation system optimizing energy consumption",
      "Build an IoT-based agriculture monitoring system with predictive analytics",
      "Create a health monitoring wearable device with real-time alerts",
    ],
  },
  {
    id: "blockchain",
    name: "Blockchain",
    icon: Zap,
    problems: [
      "Develop a decentralized supply chain tracking system ensuring transparency",
      "Create a blockchain-based voting platform with enhanced security",
      "Build a DeFi application for accessible microfinance solutions",
    ],
  },
  {
    id: "design",
    name: "UI/UX Design",
    icon: Palette,
    problems: [
      "Design an accessible mobile app interface for visually impaired users",
      "Create an intuitive dashboard for complex data visualization and analysis",
      "Build a seamless onboarding experience for a fintech application",
    ],
  },
  {
    id: "data",
    name: "Data Science",
    icon: Database,
    problems: [
      "Analyze and visualize campus sustainability metrics with actionable insights",
      "Build a predictive model for traffic patterns and congestion management",
      "Create comprehensive insights from social media sentiment data with trend analysis",
    ],
  },
  {
    id: "web",
    name: "Web Dev",
    icon: Globe,
    problems: [
      "Design a progressive web app for integrated campus services and student engagement",
      "Create a real-time collaborative project management tool with advanced features",
      "Build a dynamic event discovery platform with personalized recommendations",
    ],
  },
];

export default function TracksSection() {
  const [activeTab, setActiveTab] = useState("ai");
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
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
            Hackathon Tracks
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose your domain and build something revolutionary
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 bg-transparent p-0 h-auto mb-8 sm:mb-12" data-testid="tabs-tracks">
            {tracks.map((track) => (
              <TabsTrigger
                key={track.id}
                value={track.id}
                className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  activeTab === track.id
                    ? 'bg-sky-500/10 border-sky-500 text-sky-500 shadow-lg shadow-sky-500/20'
                    : 'bg-card/50 border-border text-foreground/70 hover:border-sky-500/50'
                }`}
                data-testid={`tab-${track.id}`}
              >
                <track.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 transition-transform duration-300 ${
                  activeTab === track.id ? 'scale-110' : 'group-hover:scale-110'
                }`} />
                <span className="font-bold text-xs sm:text-sm tracking-wide">{track.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-4 sm:mt-8">
              <Card className="p-4 sm:p-6 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-sky-500/30 hover:border-sky-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-8 pb-4 sm:pb-6 border-b border-sky-500/20">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-sky-500/50 flex items-center justify-center flex-shrink-0 hover:bg-sky-500/10 transition-colors duration-300">
                    <track.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sky-500" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-500">{track.name}</h3>
                    <p className="text-sm sm:text-base text-foreground/60">Problem Statements</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {track.problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border border-border hover:border-sky-500/50 transition-all duration-300 hover:bg-sky-500/5 hover:translate-x-2 group"
                      data-testid={`problem-${track.id}-${index}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-2 border-sky-500/50 flex items-center justify-center text-sky-500 font-bold text-sm sm:text-base md:text-lg group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                        {index + 1}
                      </div>
                      <p className="text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed">{problem}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
