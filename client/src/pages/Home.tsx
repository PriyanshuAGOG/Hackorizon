import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import EventCarousel from "@/components/EventCarousel";
import TracksSection from "@/components/TracksSection";
import ScheduleSection from "@/components/ScheduleSection";
import SpeakersSection from "@/components/SpeakersSection";
import PrizesSection from "@/components/PrizesSection";
import SponsorsSection from "@/components/SponsorsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      const currentSequence = (window as any).konamiSequence || "";
      const newSequence = currentSequence + key;
      
      if ("ENIGMA26".startsWith(newSequence)) {
        (window as any).konamiSequence = newSequence;

        if (newSequence === "ENIGMA26") {
          alert("🚀 Easter Egg Unlocked! You found the secret! Welcome to the ENIGMA'26 secret club! 🎉");
          (window as any).konamiSequence = "";
        }
      } else {
        (window as any).konamiSequence = "";
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div id="home">
          <HeroSection />
        </div>
        <FeatureGrid />
        <EventCarousel />
        <div id="tracks">
          <TracksSection />
        </div>
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="speakers">
          <SpeakersSection />
        </div>
        <div id="prizes">
          <PrizesSection />
        </div>
        <SponsorsSection />
        <div id="faq">
          <FAQSection />
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
