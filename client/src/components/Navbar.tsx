import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Prizes", href: "#prizes" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            <span className="text-xl font-display font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent" data-testid="text-logo">
              RIET
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="hover-elevate"
                asChild
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                <a href={item.href}>{item.name}</a>
              </Button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-primary to-orange-500" data-testid="button-nav-register">
              Register Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-lg animate-slide-up" data-testid="menu-mobile">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 rounded-md hover:bg-primary/10 transition-colors text-foreground"
                onClick={() => setMenuOpen(false)}
                data-testid={`link-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full bg-gradient-to-r from-primary to-orange-500 mt-4" data-testid="button-mobile-register">
              Register Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
