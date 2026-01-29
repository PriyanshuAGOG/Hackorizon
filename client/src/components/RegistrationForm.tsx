
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Rocket, ExternalLink } from "lucide-react";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSe8WhPNn5GqrEhduyX8juD-kzTwGS9TJ0uDqpQs0hc4Yhwlzg/viewform";

export default function RegistrationForm({ open, onOpenChange }: RegistrationFormProps) {
  const handleRegister = () => {
    window.open(GOOGLE_FORM_URL, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 shadow-[0_0_60px_rgba(255,94,0,0.3)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent">
            Register for ENIGMA'26
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Join us for a 24-hour hackathon on 20-21 February 2026
          </DialogDescription>
        </DialogHeader>

        <div className="py-8 text-center">
          <div className="mb-6">
            <Rocket className="w-16 h-16 text-primary mx-auto animate-bounce" />
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg text-foreground">
              Ready to showcase your skills and win exciting prizes?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 rounded-full">Cash + Swags + Certificates + Perks</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">400+ Developers</span>
              <span className="px-3 py-1 bg-primary/10 rounded-full">24 Hours</span>
            </div>
          </div>

          <Button
            onClick={handleRegister}
            size="lg"
            className="w-full bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all py-6 text-lg font-bold"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Register Now
          </Button>

          <p className="mt-4 text-sm text-muted-foreground">
            You will be redirected to the registration form
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
