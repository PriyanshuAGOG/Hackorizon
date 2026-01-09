import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Brain, Wifi, Blocks, Heart, Database, Globe } from "lucide-react";
import { Star, Cross } from "./DecorativeElements";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tracks = [
  {
    id: "ai",
    name: "AI & ML",
    icon: Brain,
    problems: [
      "Develop an AI-powered chatbot for personalized student support and academic guidance",
      "Create a machine learning model for exam performance prediction and improvement suggestions",
      "Build an intelligent code review assistant with automated bug detection and optimization",
    ],
  },
  {
    id: "iot",
    name: "IoT",
    icon: Wifi,
    problems: [
      "Design a smart campus energy management system with real-time monitoring and optimization",
      "Create an IoT-based automated attendance tracking solution with facial recognition",
      "Build a real-time air quality monitoring network with predictive analytics and alerts",
    ],
  },
  {
    id: "web3",
    name: "Web3",
    icon: Blocks,
    problems: [
      "Develop a decentralized credential verification system for academic certificates",
      "Create an NFT-based achievement and skill recognition platform for students",
      "Build a blockchain-powered transparent voting system with enhanced security",
    ],
  },
  {
    id: "social",
    name: "Social Impact",
    icon: Heart,
    problems: [
      "Create an app to efficiently connect volunteers with NGOs and social causes",
      "Build a comprehensive platform for rural education accessibility and digital learning",
      "Develop a food waste reduction marketplace connecting donors with recipients",
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
    <section ref={sectionRef} className="py-32 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(232,220,196,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(232,220,196,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <Cross className="w-6 h-6 text-primary" />
            <div className="h-px w-16 bg-foreground/30" />
            <Star className="w-8 h-8 text-primary" />
            <div className="h-px w-16 bg-foreground/30" />
            <Cross className="w-6 h-6 text-primary" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4" style={{ fontFamily: '"Playfair Display", serif' }} data-testid="text-tracks-title">
            Hackathon Tracks
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto font-light">
            Choose your domain and build something revolutionary
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 bg-transparent p-0 h-auto mb-8 sm:mb-12" data-testid="tabs-tracks">
            {tracks.map((track) => (
              <TabsTrigger
                key={track.id}
                value={track.id}
                className={`flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 border-2 transition-all duration-300 ${
                  activeTab === track.id
                    ? 'bg-primary/10 border-primary text-foreground'
                    : 'bg-card/50 border-border text-foreground/70 hover:border-foreground/40'
                }`}
                data-testid={`tab-${track.id}`}
              >
                <track.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                <span className="font-bold text-xs sm:text-sm tracking-wide">{track.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-4 sm:mt-8">
              <Card className="p-4 sm:p-6 md:p-10 bg-card/80 backdrop-blur-sm border-2 border-border">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-8 pb-4 sm:pb-6 border-b border-border">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-foreground/30 flex items-center justify-center flex-shrink-0">
                    <track.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">{track.name}</h3>
                    <p className="text-sm sm:text-base text-foreground/60 font-light">Problem Statements</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {track.problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex gap-3 sm:gap-4 p-3 sm:p-4 md:p-6 border border-border hover:border-foreground/40 transition-all duration-300"
                      data-testid={`problem-${track.id}-${index}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-2 border-primary/50 flex items-center justify-center text-primary font-bold text-sm sm:text-base md:text-lg">
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
