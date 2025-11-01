import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FooterSection() {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-48" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 L100,40 L200,60 L300,45 L400,55 L500,40 L600,65 L700,50 L800,55 L900,45 L1000,60 L1100,50 L1200,55 L1200,100 L0,100 Z"
            fill="currentColor"
            className="text-primary animate-pulse-glow"
          />
        </svg>
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary rounded-full animate-pulse-glow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-foreground">CODEVEDANS 2025</h3>
            <p className="text-muted-foreground mb-4">
              Presented by RIET Jaipur. Join us for the ultimate hackathon experience.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="hover-elevate" data-testid="link-footer-linkedin">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover-elevate" data-testid="link-footer-twitter">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover-elevate" data-testid="link-footer-instagram">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="hover-elevate" data-testid="link-footer-github">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@codevedans.com" data-testid="link-email">
                  info@codevedans.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+911234567890" data-testid="link-phone">
                  +91 123 456 7890
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>RIET Campus, Jaipur, Rajasthan</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-4 text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Tracks", "Schedule", "Speakers", "Prizes", "Register"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-footer-${link.toLowerCase()}`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>© 2025 CODEVEDANS - RIET Jaipur. All rights reserved.</p>
          <p className="text-sm mt-2">
            Built with 💻 and ☕ by the CODEVEDANS Team
          </p>
        </div>
      </div>
    </footer>
  );
}
