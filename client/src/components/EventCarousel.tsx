import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { TechCorner } from "./TechDecorations";
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
  const { ref: sectionRef, isVisible } = useScrollAnimation();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Tech decorations - hidden on mobile */}
      <div className="hidden sm:block">
        <TechCorner position="top-left" />
        <TechCorner position="top-right" />
        <TechCorner position="bottom-left" />
        <TechCorner position="bottom-right" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="h-px w-16 sm:w-24 bg-border" />
            <span className="text-[10px] sm:text-xs font-mono text-muted-foreground tracking-widest">{"{ Gallery }"}</span>
            <div className="h-px w-16 sm:w-24 bg-border" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-serif font-bold text-foreground mb-3 sm:mb-4" style={{ fontFamily: '"Playfair Display", serif' }} data-testid="text-event-moments-title">
            Event Moments
          </h2>
        </div>

        <div className={`relative max-w-5xl mx-auto group transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '0.2s' }}>
          <Card className="overflow-hidden border border-border hover:border-primary/30 bg-card transition-all duration-500">
            <div className="relative aspect-video overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                data-testid={`img-carousel-${currentSlide}`}
                key={currentSlide}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-background/60" />

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-10 border-t border-border bg-background/80">
                <h3 className="text-lg sm:text-2xl lg:text-3xl font-serif font-bold text-foreground mb-1 sm:mb-2" style={{ fontFamily: '"Playfair Display", serif' }} data-testid="text-carousel-caption">
                  {slides[currentSlide].caption}
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">{slides[currentSlide].description}</p>
              </div>
            </div>
          </Card>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 pointer-events-none">
            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-border bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-background transition-all duration-300 touch-target"
              onClick={prevSlide}
              data-testid="button-carousel-prev"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              className="pointer-events-auto w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border border-border bg-background/80 hover:bg-primary hover:border-primary text-foreground hover:text-background transition-all duration-300 touch-target"
              onClick={nextSlide}
              data-testid="button-carousel-next"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 lg:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 touch-target ${
                  index === currentSlide
                    ? "w-8 sm:w-12 h-1.5 sm:h-2 bg-primary"
                    : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-foreground/30 hover:bg-foreground/50"
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