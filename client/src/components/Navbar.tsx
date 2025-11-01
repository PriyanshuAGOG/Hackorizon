import { Button } from "@/components/ui/button";
import { Menu, X, Rocket, Zap, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/70 backdrop-blur-2xl border-b-2 border-primary/30 shadow-[0_0_30px_rgba(255,94,0,0.2)]' 
        : 'bg-transparent border-b border-border/30'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <Rocket className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-primary blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="text-2xl font-display font-black bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent" data-testid="text-logo">
                RIET
              </span>
              <div className="flex items-center gap-1">
                <Terminal className="w-3 h-3 text-primary" />
                <span className="text-xs text-muted-foreground font-mono">CODEVEDANS</span>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 bg-card/50 backdrop-blur-xl rounded-full px-2 py-2 border border-border/50">
            {navItems.map((item, index) => (
              <Button
                key={item.name}
                variant="ghost"
                className="hover-elevate rounded-full px-6 relative group"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                <a href={item.href}>
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                  {index === 0 && <Zap className="w-3 h-3 ml-1 text-primary animate-pulse" />}
                </a>
              </Button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-orange-600 to-primary hover:from-orange-500 hover:to-primary shadow-[0_0_30px_rgba(255,94,0,0.4)] hover:shadow-[0_0_50px_rgba(255,94,0,0.6)] transition-all duration-300 hover:scale-105 rounded-full px-8 border-2 border-orange-400/50" data-testid="button-nav-register">
              <span className="font-bold">Register Now</span>
              <Zap className="w-4 h-4 ml-2 animate-pulse" />
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover-elevate rounded-full"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-2xl animate-slide-up shadow-[0_20px_50px_rgba(0,0,0,0.5)]" data-testid="menu-mobile">
          <div className="container mx-auto px-4 py-6 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-6 py-3 rounded-xl hover:bg-primary/10 transition-all text-foreground font-medium border border-transparent hover:border-primary/30"
                onClick={() => setMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-orange-600 to-primary hover:from-orange-500 hover:to-primary shadow-[0_0_30px_rgba(255,94,0,0.4)] rounded-full py-6 border-2 border-orange-400/50 mt-4" data-testid="button-mobile-register">
              <span className="font-bold text-lg">Register Now</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
