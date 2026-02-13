import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Campaign", href: "/campaign", isRoute: true },
  { name: "Rules", href: "/rules", isRoute: true },
  { name: "Schedule", href: "#schedule" },
  { name: "Speakers", href: "#speakers" },
  { name: "Prizes", href: "#prizes" },
  { name: "Sponsors", href: "#sponsors" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <img
              src="/mainlogo.png"
              alt="ENIGMA'26 Logo"
              className="w-11 h-11 sm:w-12 sm:h-12 object-cover scale-105 hover:scale-110 transition-transform duration-300"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
                RIET Presents
              </span>
              <span className="text-xl font-serif font-bold text-foreground">
                ENIGMA'26
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {nitem.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`link-nav-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              )tem.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            daitem.isRoute ? (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground py-2 border-b border-border"
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground py-2 border-b border-border"
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                >
                  {item.name}
                </a>
              ) (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block text-sm font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground py-2 border-b border-border"
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