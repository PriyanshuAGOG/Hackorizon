import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import rietLogo from "@assets/1000166910-removebg-preview_1762022522986.png";

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
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-primary/20 shadow-[0_4px_30px_rgba(192,38,48,0.2)]' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-14 h-14 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
              <img 
                src={rietLogo} 
                alt="RIET Logo" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(192,38,48,0.6)] group-hover:drop-shadow-[0_0_25px_rgba(192,38,48,0.9)] transition-all duration-500"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground tracking-wider group-hover:text-primary transition-all duration-300" data-testid="text-logo">
                RIET
              </span>
              <span className="text-[0.6rem] text-foreground/50 uppercase tracking-[0.15em] group-hover:text-secondary/80 transition-colors duration-300">
                Jaipur
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Button
                key={item.name}
                variant="ghost"
                className="relative text-foreground/70 hover:text-foreground hover:bg-primary/5 transition-all duration-300 font-medium tracking-wide hover:scale-105 group overflow-hidden px-4 py-2 rounded-lg"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <a href={item.href}>
                  <span className="relative z-10 transition-all duration-300 group-hover:translate-y-[-2px] inline-block">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] group-hover:w-3/4 transition-all duration-500 rounded-full group-hover:animate-gradient-shift" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </a>
              </Button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
            <span className="text-xs text-foreground/40 uppercase tracking-[0.25em] font-light" data-testid="text-menu">
              Navigation
            </span>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-foreground/20 bg-black/95 backdrop-blur-md" data-testid="menu-mobile">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all font-medium"
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
