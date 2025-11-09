import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Prizes", href: "#prizes" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b-2 border-primary/50 shadow-lg neon-border' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute -inset-3 bg-primary/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/1000167568.png"
                alt="Hackorizon Logo"
                className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 drop-shadow-[0_0_8px_rgba(139,92,246,0.5)] group-hover:drop-shadow-[0_0_15px_rgba(139,92,246,0.8)]"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[0.6rem] text-muted-foreground font-mono uppercase tracking-widest flex items-center gap-1.5">
                  <img
                    src="/attached_assets/1000166910-removebg-preview_1762022522986.png"
                    alt="RIET Logo"
                    className="w-4 h-4 object-contain transition-all duration-300 group-hover:scale-110 drop-shadow-[0_0_4px_rgba(139,92,246,0.3)] group-hover:drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]"
                  />
                  RIET PRESENTS
                </span>
              </div>
              <span className="text-lg md:text-xl font-black font-mono text-primary tracking-wider group-hover:neon-glow transition-all" data-testid="text-logo">
                HACKORIZON
              </span>
              <span className="text-[0.6rem] text-muted-foreground font-mono uppercase tracking-widest">
                36 HR HACKATHON
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="relative text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-mono font-semibold tracking-wide hover:scale-105 group px-4 py-2"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                <a href={item.href}>
                  <span className="relative z-10 uppercase text-xs">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300" />
                </a>
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Terminal className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-xs text-muted-foreground uppercase tracking-widest font-mono" data-testid="text-menu">
              MENU
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground border-2 border-primary/50 pixel-corners hover:bg-primary/10"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-primary" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t-2 border-primary/30 bg-background/95 backdrop-blur-md neon-border" data-testid="menu-mobile">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 transition-all font-mono font-semibold border-l-2 border-transparent hover:border-primary uppercase text-sm"
                onClick={() => setMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}