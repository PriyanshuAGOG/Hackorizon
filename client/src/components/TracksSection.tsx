import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Brain, Wifi, Blocks, Heart, Database, Globe, Sparkles, Zap, Code2 } from "lucide-react";
import { useState } from "react";

const tracks = [
  {
    id: "ai",
    name: "AI & ML",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/5",
    glow: "shadow-[0_0_40px_rgba(168,85,247,0.4)]",
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
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/5",
    glow: "shadow-[0_0_40px_rgba(59,130,246,0.4)]",
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
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/5",
    glow: "shadow-[0_0_40px_rgba(34,197,94,0.4)]",
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
    color: "from-pink-500 to-rose-500",
    gradient: "bg-gradient-to-br from-pink-500/20 to-rose-500/5",
    glow: "shadow-[0_0_40px_rgba(236,72,153,0.4)]",
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
    color: "from-yellow-500 to-orange-500",
    gradient: "bg-gradient-to-br from-yellow-500/20 to-orange-500/5",
    glow: "shadow-[0_0_40px_rgba(234,179,8,0.4)]",
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
    color: "from-orange-500 to-red-500",
    gradient: "bg-gradient-to-br from-orange-500/20 to-red-500/5",
    glow: "shadow-[0_0_40px_rgba(249,115,22,0.4)]",
    problems: [
      "Design a progressive web app for integrated campus services and student engagement",
      "Create a real-time collaborative project management tool with advanced features",
      "Build a dynamic event discovery platform with personalized recommendations",
    ],
  },
];

export default function TracksSection() {
  const [activeTab, setActiveTab] = useState("ai");
  const activeTrack = tracks.find(t => t.id === activeTab) || tracks[0];

  return (
    <section className="py-32 bg-gradient-to-b from-background via-card to-background relative overflow-hidden">
      <div className="absolute inset-0">
        {tracks.map((track, i) => (
          <div
            key={i}
            className={`absolute w-96 h-96 bg-gradient-to-r ${track.color} opacity-5 rounded-full blur-[120px] animate-pulse-glow`}
            style={{
              left: `${(i * 20) % 100}%`,
              top: `${(i * 30) % 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Code2 className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Choose Your Path</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-tracks-title">
            Hackathon Tracks
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your domain and build something revolutionary
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 bg-transparent p-0 h-auto mb-12" data-testid="tabs-tracks">
            {tracks.map((track) => (
              <TabsTrigger
                key={track.id}
                value={track.id}
                className={`flex flex-col items-center gap-3 p-6 rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === track.id
                    ? `bg-gradient-to-br ${track.color} border-transparent ${track.glow} scale-105`
                    : 'bg-card/50 backdrop-blur-xl border-card-border hover:border-primary/50'
                }`}
                data-testid={`tab-${track.id}`}
              >
                <div className={`w-14 h-14 rounded-xl ${activeTab === track.id ? 'bg-white/20' : track.gradient} flex items-center justify-center transition-all`}>
                  <track.icon className={`w-7 h-7 ${activeTab === track.id ? 'text-white' : 'text-primary'}`} />
                </div>
                <span className={`font-bold text-sm ${activeTab === track.id ? 'text-white' : 'text-foreground'}`}>
                  {track.name}
                </span>
                {activeTab === track.id && <Sparkles className="w-4 h-4 text-white animate-pulse" />}
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-8">
              <Card className="p-10 bg-gradient-to-br from-card/90 to-card/40 backdrop-blur-2xl border-2 border-card-border shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden relative">
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${track.color} opacity-10 rounded-full blur-3xl`} />
                <div className={`absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-br ${track.color} opacity-10 rounded-full blur-3xl`} />
                
                <div className="relative">
                  <div className="flex items-center gap-6 mb-8">
                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${track.color} flex items-center justify-center ${track.glow}`}>
                      <track.icon className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className="text-4xl font-black bg-gradient-to-r ${track.color} bg-clip-text text-transparent mb-2">
                        {track.name}
                      </h3>
                      <p className="text-muted-foreground text-lg font-medium">Problem Statements</p>
                    </div>
                    <Zap className={`ml-auto w-8 h-8 bg-gradient-to-r ${track.color} bg-clip-text text-transparent animate-pulse`} />
                  </div>

                  <div className="space-y-5">
                    {track.problems.map((problem, index) => (
                      <div
                        key={index}
                        className="group flex gap-5 p-6 rounded-xl bg-gradient-to-br from-background/80 to-background/40 border-2 border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] animate-slide-in shadow-lg hover:shadow-2xl overflow-visible"
                        style={{ animationDelay: `${index * 0.1}s` }}
                        data-testid={`problem-${track.id}-${index}`}
                      >
                        <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} text-white flex items-center justify-center font-black text-xl ${track.glow} group-hover:scale-110 transition-transform`}>
                          {index + 1}
                        </div>
                        <p className="text-foreground text-lg leading-relaxed font-medium">{problem}</p>
                        <Sparkles className="flex-shrink-0 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
