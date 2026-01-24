import { useEffect, useState } from "react";

export default function RocketScroll() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(Math.min(100, Math.max(0, percent)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rocket-scroll-container hidden md:block">
      <div className="rocket-track" />
      <div
        className="rocket-indicator"
        style={{ top: `${scrollPercent}%` }}
      >
        🚀
      </div>
    </div>
  );
}
