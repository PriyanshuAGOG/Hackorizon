import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import img1 from "@assets/generated_images/Students_coding_at_hackathon_678fb8fd.png";
import img2 from "@assets/generated_images/Team_celebrating_hackathon_win_10a7e6e8.png";
import img3 from "@assets/generated_images/Hackathon_project_presentation_stage_f1e43ba2.png";

const slides = [
  {
    image: img1,
    caption: "Intense Coding Sessions",
    description: "Teams collaborating on innovative solutions with cutting-edge technology",
  },
  {
    image: img2,
    caption: "Victory Celebrations",
    description: "Winners celebrating their incredible achievements and hard work",
  },
  {
    image: img3,
    caption: "Project Presentations",
    description: "Showcasing groundbreaking ideas and innovations on the main stage",
  },
];

export default function EventCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-32 bg-gradient-to-b from-background to-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,94,0,0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-primary uppercase tracking-wider">Live Moments</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,94,0,0.3)]" data-testid="text-event-moments-title">
            Event Moments
          </h2>
          <p className="text-xl text-muted-foreground">
            Experience the energy and excitement of previous hackathons
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden border-2 border-primary/30 shadow-[0_0_60px_rgba(255,94,0,0.3)] hover:shadow-[0_0_100px_rgba(255,94,0,0.5)] transition-all duration-500 bg-gradient-to-br from-card to-background">
            <div className="relative aspect-video group">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-testid={`img-carousel-${currentSlide}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <div className="flex items-start gap-4 mb-4">
                  <Sparkles className="w-8 h-8 text-primary animate-pulse flex-shrink-0" />
                  <div>
                    <h3 className="text-4xl font-black text-white mb-3 drop-shadow-[0_0_20px_rgba(255,94,0,0.5)]" data-testid="text-carousel-caption">
                      {slides[currentSlide].caption}
                    </h3>
                    <p className="text-xl text-gray-200 drop-shadow-lg">{slides[currentSlide].description}</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-6 right-6 flex justify-between pointer-events-none">
                <Button
                  size="icon"
                  className="pointer-events-auto w-14 h-14 rounded-full bg-primary/90 backdrop-blur-xl border-2 border-white/50 hover:bg-primary hover:scale-110 shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all"
                  onClick={prevSlide}
                  data-testid="button-carousel-prev"
                >
                  <ChevronLeft className="w-8 h-8" />
                </Button>

                <Button
                  size="icon"
                  className="pointer-events-auto w-14 h-14 rounded-full bg-primary/90 backdrop-blur-xl border-2 border-white/50 hover:bg-primary hover:scale-110 shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all"
                  onClick={nextSlide}
                  data-testid="button-carousel-next"
                >
                  <ChevronRight className="w-8 h-8" />
                </Button>
              </div>
            </div>
          </Card>

          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-12 h-4 bg-gradient-to-r from-orange-500 to-primary shadow-[0_0_20px_rgba(255,94,0,0.6)]"
                    : "w-4 h-4 bg-muted-foreground/30 hover:bg-muted-foreground/50 hover:scale-110"
                }`}
                onClick={() => setCurrentSlide(index)}
                data-testid={`button-carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
