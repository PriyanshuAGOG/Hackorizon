import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
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
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b-2 border-primary/30 shadow-[0_10px_40px_rgba(0,0,0,0.3)]' 
        : 'bg-transparent'
    }`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-orange-500/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer">
            <span className="text-2xl font-bold text-foreground tracking-widest hover:text-primary transition-all duration-300 hover:scale-110 inline-block" data-testid="text-logo">
              RIET
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-xs text-foreground/60 uppercase tracking-[0.2em] hidden sm:block group-hover:text-primary/80 transition-colors">
              Presented By
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Button
                key={item.name}
                variant="ghost"
                className="relative text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wide hover:scale-110 group overflow-hidden"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <a href={item.href}>
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              </Button>
            ))}
          </div>

          <div className="hidden md:block">
            <span className="text-sm text-foreground/60 uppercase tracking-[0.3em]" data-testid="text-menu">
              MENU
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
