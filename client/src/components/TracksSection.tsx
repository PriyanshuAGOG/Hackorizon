import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Brain, Wifi, Blocks, Heart, Database, Globe } from "lucide-react";

const tracks = [
  {
    id: "ai",
    name: "AI & ML",
    icon: Brain,
    color: "text-purple-500",
    problems: [
      "Develop an AI-powered chatbot for student support",
      "Create a machine learning model for exam performance prediction",
      "Build an intelligent code review assistant",
    ],
  },
  {
    id: "iot",
    name: "IoT",
    icon: Wifi,
    color: "text-blue-500",
    problems: [
      "Design a smart campus energy management system",
      "Create an IoT-based attendance tracking solution",
      "Build a real-time air quality monitoring network",
    ],
  },
  {
    id: "web3",
    name: "Web3",
    icon: Blocks,
    color: "text-green-500",
    problems: [
      "Develop a decentralized credential verification system",
      "Create an NFT-based achievement platform",
      "Build a blockchain-powered voting system",
    ],
  },
  {
    id: "social",
    name: "Social Impact",
    icon: Heart,
    color: "text-pink-500",
    problems: [
      "Create an app to connect volunteers with NGOs",
      "Build a platform for rural education accessibility",
      "Develop a food waste reduction marketplace",
    ],
  },
  {
    id: "data",
    name: "Data Science",
    icon: Database,
    color: "text-yellow-500",
    problems: [
      "Analyze and visualize campus sustainability metrics",
      "Build a predictive model for traffic patterns",
      "Create insights from social media sentiment data",
    ],
  },
  {
    id: "web",
    name: "Web Dev",
    icon: Globe,
    color: "text-orange-500",
    problems: [
      "Design a progressive web app for campus services",
      "Create a collaborative project management tool",
      "Build a real-time event discovery platform",
    ],
  },
];

export default function TracksSection() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-tracks-title">
          Hackathon Tracks
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Choose your domain and build something amazing
        </p>

        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-card/50 p-2 h-auto" data-testid="tabs-tracks">
            {tracks.map((track) => (
              <TabsTrigger
                key={track.id}
                value={track.id}
                className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary hover-elevate py-3"
                data-testid={`tab-${track.id}`}
              >
                <track.icon className={`w-4 h-4 ${track.color}`} />
                <span className="hidden sm:inline">{track.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tracks.map((track) => (
            <TabsContent key={track.id} value={track.id} className="mt-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-card-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${track.color === 'text-purple-500' ? 'from-purple-500/20 to-purple-500/5' : track.color === 'text-blue-500' ? 'from-blue-500/20 to-blue-500/5' : track.color === 'text-green-500' ? 'from-green-500/20 to-green-500/5' : track.color === 'text-pink-500' ? 'from-pink-500/20 to-pink-500/5' : track.color === 'text-yellow-500' ? 'from-yellow-500/20 to-yellow-500/5' : 'from-orange-500/20 to-orange-500/5'} flex items-center justify-center`}>
                    <track.icon className={`w-8 h-8 ${track.color}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{track.name}</h3>
                    <p className="text-muted-foreground">Problem Statements</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {track.problems.map((problem, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-colors animate-slide-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                      data-testid={`problem-${track.id}-${index}`}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <p className="text-foreground">{problem}</p>
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
