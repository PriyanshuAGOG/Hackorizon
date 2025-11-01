import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Star } from "./DecorativeElements";
import img1 from "@assets/generated_images/Students_coding_at_hackathon_678fb8fd.png";
import img2 from "@assets/generated_images/Team_celebrating_hackathon_win_10a7e6e8.png";
import img3 from "@assets/generated_images/Hackathon_project_presentation_stage_f1e43ba2.png";

const slides = [
  {
    image: img1,
    caption: "Intense Coding Sessions",
    description: "Teams collaborating on innovative solutions",
  },
  {
    image: img2,
    caption: "Victory Celebrations",
    description: "Winners celebrating their achievements",
  },
  {
    image: img3,
    caption: "Project Presentations",
    description: "Showcasing groundbreaking ideas",
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
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-24 bg-foreground/30" />
            <Star className="w-8 h-8 text-primary" />
            <div className="h-px w-24 bg-foreground/30" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-4" style={{ fontFamily: '"Playfair Display", serif' }} data-testid="text-event-moments-title">
            Event Moments
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto group">
          <Card className="overflow-hidden border-2 border-border bg-card/50 hover:border-primary/60 transition-all duration-700 shadow-2xl hover:shadow-[0_30px_80px_rgba(255,94,0,0.4)] animate-scale-in">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000 group-hover:opacity-100"
                data-testid={`img-carousel-${currentSlide}`}
                key={currentSlide}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <h3 className="text-3xl font-bold text-foreground mb-2" data-testid="text-carousel-caption">
                  {slides[currentSlide].caption}
                </h3>
                <p className="text-xl text-foreground/80">{slides[currentSlide].description}</p>
              </div>
            </div>
          </Card>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-14 h-14 border-2 border-foreground/30 bg-black/70 backdrop-blur-xl hover:bg-primary hover:border-primary text-foreground hover:text-background rounded-none hover:scale-125 hover:-rotate-12 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,94,0,0.6)]"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-14 h-14 border-2 border-foreground/30 bg-black/70 backdrop-blur-xl hover:bg-primary hover:border-primary text-foreground hover:text-background rounded-none hover:scale-125 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,94,0,0.6)]"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 h-2 bg-primary"
                    : "w-2 h-2 bg-foreground/30 hover:bg-foreground/50"
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
