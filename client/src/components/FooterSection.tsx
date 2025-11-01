import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github, Rocket, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="bg-gradient-to-b from-card to-background border-t-2 border-primary/30 relative overflow-hidden">
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-64 opacity-10" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 L100,40 L200,60 L300,45 L400,55 L500,40 L600,65 L700,50 L800,55 L900,45 L1000,60 L1100,50 L1200,55 L1200,100 L0,100 Z"
            fill="currentColor"
            className="text-primary animate-pulse-glow"
          />
        </svg>
        
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse-glow"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 2 === 0 ? '#ff5e00' : '#fbbf24',
              boxShadow: `0 0 ${Math.random() * 20 + 10}px currentColor`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <Rocket className="w-10 h-10 text-primary" />
                <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-black bg-gradient-to-r from-orange-500 to-primary bg-clip-text text-transparent">CODEVEDANS 2025</h3>
                <p className="text-xs text-muted-foreground font-mono">Presented by RIET Jaipur</p>
              </div>
            </div>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Join us for the ultimate hackathon experience. Build the future, one line of code at a time.
            </p>
            <div className="flex gap-3">
              <Button size="icon" className="rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 border-2 border-primary/30 hover:border-primary/70 shadow-lg hover:scale-110 transition-all" data-testid="link-footer-linkedin">
                <Linkedin className="w-5 h-5 text-primary" />
              </Button>
              <Button size="icon" className="rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 border-2 border-primary/30 hover:border-primary/70 shadow-lg hover:scale-110 transition-all" data-testid="link-footer-twitter">
                <Twitter className="w-5 h-5 text-primary" />
              </Button>
              <Button size="icon" className="rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 border-2 border-primary/30 hover:border-primary/70 shadow-lg hover:scale-110 transition-all" data-testid="link-footer-instagram">
                <Instagram className="w-5 h-5 text-primary" />
              </Button>
              <Button size="icon" className="rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 hover:from-primary/40 hover:to-orange-500/40 border-2 border-primary/30 hover:border-primary/70 shadow-lg hover:scale-110 transition-all" data-testid="link-footer-github">
                <Github className="w-5 h-5 text-primary" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all p-3 rounded-lg hover:bg-primary/5">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <a href="mailto:info@codevedans.com" className="font-medium" data-testid="link-email">
                  info@codevedans.com
                </a>
              </div>
              <div className="group flex items-center gap-3 text-muted-foreground hover:text-primary transition-all p-3 rounded-lg hover:bg-primary/5">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <a href="tel:+911234567890" className="font-medium" data-testid="link-phone">
                  +91 123 456 7890
                </a>
              </div>
              <div className="group flex items-center gap-3 text-muted-foreground p-3 rounded-lg">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">RIET Campus, Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-display font-bold mb-6 text-foreground flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["Home", "Tracks", "Schedule", "Speakers", "Prizes", "FAQ"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="group flex items-center gap-2 text-muted-foreground hover:text-primary transition-all p-3 rounded-lg hover:bg-primary/5 font-medium"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  <Sparkles className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t-2 border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-muted-foreground">
              © 2025 CODEVEDANS - RIET Jaipur. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
              <Code2 className="w-4 h-4 text-primary" />
              Built with passion and innovation
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
