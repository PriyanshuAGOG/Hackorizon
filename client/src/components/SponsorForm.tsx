
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Building2, Mail, Phone, User, Globe, Award } from "lucide-react";

interface SponsorFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SponsorForm({ open, onOpenChange }: SponsorFormProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    website: "",
    tier: "",
    message: "",
    brandingAssets: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sponsor application submitted:", formData);
    onOpenChange(false);
  };

  const tiers = [
    "Title Sponsor",
    "Platinum Sponsor",
    "Gold Sponsor",
    "Silver Sponsor",
    "Community Partner",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 shadow-[0_0_60px_rgba(255,94,0,0.3)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent">
            Sponsor Hackorizon 2K25
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Partner with us to reach 500+ talented developers and innovators
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="companyName" className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                Company/Organization Name *
              </Label>
              <Input
                id="companyName"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Tech Corp Inc."
                required
                className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactPerson" className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                Contact Person *
              </Label>
              <Input
                id="contactPerson"
                value={formData.contactPerson}
                onChange={(e) => handleChange("contactPerson", e.target.value)}
                placeholder="John Doe"
                required
                className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="contact@company.com"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+91 1234567890"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Company Website
              </Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleChange("website", e.target.value)}
                placeholder="https://company.com"
                className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tier" className="flex items-center gap-2">
                <Award className="w-4 h-4 text-primary" />
                Sponsorship Tier *
              </Label>
              <select
                id="tier"
                value={formData.tier}
                onChange={(e) => handleChange("tier", e.target.value)}
                required
                className="flex h-9 w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-sm focus:border-primary hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <option value="">Select a tier</option>
                {tiers.map((tier) => (
                  <option key={tier} value={tier}>{tier}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Information</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your company's goals and how you'd like to engage with participants..."
                rows={4}
                className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
              />
            </div>

            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <p className="text-sm text-muted-foreground">
                Our team will review your application and contact you within 2-3 business days with sponsorship details and next steps.
              </p>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all py-6 text-lg font-bold"
          >
            Submit Application
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
