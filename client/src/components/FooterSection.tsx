import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Terminal } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-background border-t border-border relative">
      {/* Subtle grid pattern - hidden on mobile for cleaner look */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none hidden sm:block">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground">ENIGMA'26</h3>
            </div>
            <p className="text-[10px] sm:text-xs font-mono text-muted-foreground mb-3 sm:mb-4">Presented by RIET Jaipur</p>
            <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">24-Hour Hackathon · 20-21 Feb 2026</p>
            <p className="text-xs sm:text-sm text-muted-foreground">Prize Pool Worth ₹1 Lakh</p>
            <div className="flex gap-4 mt-4">
              <a href="https://www.linkedin.com/school/riet-jaipur/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors touch-target">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/RIET_JAIPUR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors touch-target">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/riet_official?igsh=MmJobzltNHd3cXJu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors touch-target">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <a href="mailto:hackorizon@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors touch-target">
                <Mail className="w-4 h-4 flex-shrink-0" /> 
                <span className="break-all">hackorizon@gmail.com</span>
              </a>
              <a href="tel:+918306440385" className="flex items-center gap-2 hover:text-foreground transition-colors touch-target">
                <Phone className="w-4 h-4 flex-shrink-0" /> +91 8306440385
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Quick Links</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              {["Home", "Schedule", "Speakers", "Prizes", "FAQ"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="block text-muted-foreground hover:text-foreground transition-colors touch-target py-1">
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Venue */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Venue</h4>
            <div className="w-full h-28 sm:h-32 border border-border overflow-hidden mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.0123456789!2d75.6825!3d26.8205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc977c6a00001%3A0x9d41e52e68c5c7c5!2sRajasthan%20Institute%20of%20Engineering%20%26%20Technology%20(RIET)!5e0!3m2!1sen!2sin!4v1737500000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RIET Jaipur Location"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/PT6MCh5aX6fNos2N6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-muted-foreground hover:text-foreground transition-colors touch-target"
            >
              <MapPin className="w-3 h-3" /> Open in Maps
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-4 sm:pt-6 text-center text-[10px] sm:text-xs text-muted-foreground">
          <p>© 2026 ENIGMA'26 – RIET Jaipur. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
