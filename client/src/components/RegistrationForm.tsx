
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { User, Mail, Phone, School, Users, Code, Rocket } from "lucide-react";

interface RegistrationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RegistrationForm({ open, onOpenChange }: RegistrationFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: "",
    teamName: "",
    teamSize: "",
    track: "",
    projectIdea: "",
    experience: "",
    github: "",
    linkedin: "",
    whyJoin: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
    onOpenChange(false);
    setStep(1);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card via-card/95 to-card/90 border-2 border-primary/30 shadow-[0_0_60px_rgba(255,94,0,0.3)]">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold bg-gradient-to-r from-orange-500 via-primary to-orange-500 bg-clip-text text-transparent animate-shimmer">
            Register for HACKORIZON 2026
          </DialogTitle>
          <DialogDescription className="text-base text-muted-foreground">
            Step {step} of 3 - Fill in your details to join the ultimate hackathon experience
          </DialogDescription>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-6">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                s <= step ? 'bg-gradient-to-r from-primary to-orange-500 shadow-[0_0_20px_rgba(255,94,0,0.5)]' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4 animate-slide-in">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="John Doe"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

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
                  placeholder="john@example.com"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="college" className="flex items-center gap-2">
                    <School className="w-4 h-4 text-primary" />
                    College/University *
                  </Label>
                  <Input
                    id="college"
                    value={formData.college}
                    onChange={(e) => handleChange("college", e.target.value)}
                    placeholder="RIET Jaipur"
                    required
                    className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="year">Year of Study *</Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => handleChange("year", e.target.value)}
                    placeholder="3rd Year"
                    required
                    className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="branch">Branch/Major *</Label>
                <Input
                  id="branch"
                  value={formData.branch}
                  onChange={(e) => handleChange("branch", e.target.value)}
                  placeholder="Computer Science"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 2: Team Information */}
          {step === 2 && (
            <div className="space-y-4 animate-slide-in">
              <div className="space-y-2">
                <Label htmlFor="teamName" className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Team Name *
                </Label>
                <Input
                  id="teamName"
                  value={formData.teamName}
                  onChange={(e) => handleChange("teamName", e.target.value)}
                  placeholder="Code Warriors"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="teamSize">Team Size (1-4 members) *</Label>
                <Input
                  id="teamSize"
                  type="number"
                  min="1"
                  max="4"
                  value={formData.teamSize}
                  onChange={(e) => handleChange("teamSize", e.target.value)}
                  placeholder="4"
                  required
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="track" className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-primary" />
                  Preferred Track *
                </Label>
                <select
                  id="track"
                  value={formData.track}
                  onChange={(e) => handleChange("track", e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-primary/30 bg-background px-3 py-2 text-sm focus:border-primary hover:border-primary/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Select a track</option>
                  <option value="ai">AI & Machine Learning</option>
                  <option value="web3">Web3 & Blockchain</option>
                  <option value="iot">IoT & Hardware</option>
                  <option value="social">Social Innovation</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectIdea">Project Idea (Brief Description) *</Label>
                <Textarea
                  id="projectIdea"
                  value={formData.projectIdea}
                  onChange={(e) => handleChange("projectIdea", e.target.value)}
                  placeholder="Describe your project idea in a few sentences..."
                  required
                  rows={4}
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="experience">Hackathon Experience</Label>
                <Textarea
                  id="experience"
                  value={formData.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                  placeholder="Tell us about your previous hackathon experience or why this is your first..."
                  rows={3}
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>
            </div>
          )}

          {/* Step 3: Additional Information */}
          {step === 3 && (
            <div className="space-y-4 animate-slide-in">
              <div className="space-y-2">
                <Label htmlFor="github">GitHub Profile (Optional)</Label>
                <Input
                  id="github"
                  value={formData.github}
                  onChange={(e) => handleChange("github", e.target.value)}
                  placeholder="https://github.com/username"
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => handleChange("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="whyJoin" className="flex items-center gap-2">
                  <Rocket className="w-4 h-4 text-primary" />
                  Why do you want to join HACKORIZON 2026? *
                </Label>
                <Textarea
                  id="whyJoin"
                  value={formData.whyJoin}
                  onChange={(e) => handleChange("whyJoin", e.target.value)}
                  placeholder="Share your motivation and what excites you about this hackathon..."
                  required
                  rows={5}
                  className="border-primary/30 focus:border-primary hover:border-primary/50 transition-all"
                />
              </div>

              <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  By submitting this form, you agree to our terms and conditions. We'll send you updates about the event via email.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 pt-4">
            {step > 1 && (
              <Button
                type="button"
                onClick={prevStep}
                variant="outline"
                className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
              >
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-primary to-orange-500 hover:shadow-[0_0_30px_rgba(255,94,0,0.5)] transition-all animate-pulse-glow"
              >
                Submit Registration
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
