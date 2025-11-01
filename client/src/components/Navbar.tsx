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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-foreground/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-foreground tracking-widest" data-testid="text-logo">
              RIET
            </span>
            <span className="text-xs text-foreground/60 uppercase tracking-[0.2em] hidden sm:block">
              Presented By
            </span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-all font-medium tracking-wide"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                <a href={item.href}>{item.name}</a>
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
