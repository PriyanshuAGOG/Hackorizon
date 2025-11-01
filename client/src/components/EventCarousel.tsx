import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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
    description: "Showcasing groundbreaking ideas on stage",
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
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-event-moments-title">
          Event Moments
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border-primary/20 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)] transition-shadow">
            <div className="relative aspect-video">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                className="w-full h-full object-cover"
                data-testid={`img-carousel-${currentSlide}`}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-2xl font-bold text-white mb-1" data-testid="text-carousel-caption">
                  {slides[currentSlide].caption}
                </h3>
                <p className="text-gray-300">{slides[currentSlide].description}</p>
              </div>
            </div>
          </Card>

          <Button
            size="icon"
            variant="outline"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
            onClick={prevSlide}
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary/50 hover:bg-primary/20"
            onClick={nextSlide}
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
