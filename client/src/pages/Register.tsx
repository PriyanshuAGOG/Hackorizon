import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Users, User } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Register() {
  const [formData, setFormData] = useState({
    teamName: "",
    teamSize: "individual",
    leaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    track: "",
    projectIdea: "",
    experienceLevel: "",
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    alert("Registration submitted! We'll contact you soon.");
  };

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24 max-w-3xl">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>

        <Card className="border-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Register for HackOrizon 2026</CardTitle>
            <CardDescription className="text-base">
              Fill out the form below to register your team for the hackathon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Team Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Team Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="teamSize">Participation Type *</Label>
                  <Select
                    value={formData.teamSize}
                    onValueChange={(value) => handleChange("teamSize", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Individual
                        </div>
                      </SelectItem>
                      <SelectItem value="team">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          Team (2-4 members)
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {formData.teamSize === "team" && (
                  <div className="space-y-2">
                    <Label htmlFor="teamName">Team Name *</Label>
                    <Input
                      id="teamName"
                      value={formData.teamName}
                      onChange={(e) => handleChange("teamName", e.target.value)}
                      placeholder="Enter your team name"
                      required
                    />
                  </div>
                )}
              </div>

              {/* Leader Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  {formData.teamSize === "team" ? "Team Leader" : "Participant"} Information
                </h3>
                
                <div className="space-y-2">
                  <Label htmlFor="leaderName">Full Name *</Label>
                  <Input
                    id="leaderName"
                    value={formData.leaderName}
                    onChange={(e) => handleChange("leaderName", e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="leaderEmail">Email *</Label>
                    <Input
                      id="leaderEmail"
                      type="email"
                      value={formData.leaderEmail}
                      onChange={(e) => handleChange("leaderEmail", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="leaderPhone">Phone Number *</Label>
                    <Input
                      id="leaderPhone"
                      type="tel"
                      value={formData.leaderPhone}
                      onChange={(e) => handleChange("leaderPhone", e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="collegeName">College/University *</Label>
                  <Input
                    id="collegeName"
                    value={formData.collegeName}
                    onChange={(e) => handleChange("collegeName", e.target.value)}
                    placeholder="Enter your institution name"
                    required
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Project Details</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="track">Preferred Track *</Label>
                  <Select
                    value={formData.track}
                    onValueChange={(value) => handleChange("track", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a track" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                      <SelectItem value="web3">Web3 & Blockchain</SelectItem>
                      <SelectItem value="iot">IoT & Hardware</SelectItem>
                      <SelectItem value="fintech">FinTech</SelectItem>
                      <SelectItem value="healthcare">HealthTech</SelectItem>
                      <SelectItem value="sustainability">Sustainability</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectIdea">Project Idea (Optional)</Label>
                  <Textarea
                    id="projectIdea"
                    value={formData.projectIdea}
                    onChange={(e) => handleChange("projectIdea", e.target.value)}
                    placeholder="Brief description of what you plan to build..."
                    rows={4}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experienceLevel">Experience Level *</Label>
                  <Select
                    value={formData.experienceLevel}
                    onValueChange={(value) => handleChange("experienceLevel", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select your experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreeTerms}
                  onCheckedChange={(checked) => handleChange("agreeTerms", checked)}
                />
                <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                  I agree to the terms and conditions and confirm that all information provided is accurate.
                  I understand that registrations are subject to availability.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!formData.agreeTerms}
              >
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
