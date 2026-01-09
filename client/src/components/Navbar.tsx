import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "wouter";

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
        ? 'bg-background/95 backdrop-blur-xl border-b-2 border-primary/50 shadow-lg' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <img
                  src="/mainlogo.png"
                  alt="Hackorizon Logo"
                  className="relative w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-[0.6rem] text-muted-foreground font-mono uppercase tracking-widest flex items-center gap-1.5">
                    <img
                      src="/riet.png"
                      alt="RIET Logo"
                      className="w-4 h-4 object-contain transition-all duration-300 group-hover:scale-110"
                    />
                    RIET PRESENTS
                  </span>
                </div>
                <span className="text-lg md:text-xl font-black font-mono text-primary tracking-wider transition-all" data-testid="text-logo">
                  HACKORIZON
                </span>
                <span className="text-[0.6rem] text-muted-foreground font-mono uppercase tracking-widest">
                  36 HR HACKATHON
                </span>
              </div>
            </div>
          </Link>

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
            <Link href="/register">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-bold uppercase tracking-wider">
                <Terminal className="w-4 h-4 mr-2" />
                Register
              </Button>
            </Link>
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
        <div className="md:hidden border-t-2 border-primary/30 bg-background/95 backdrop-blur-md" data-testid="menu-mobile">
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
            <Link href="/register">
              <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground font-mono font-bold uppercase tracking-wider" onClick={() => setMenuOpen(false)}>
                <Terminal className="w-4 h-4 mr-2" />
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}