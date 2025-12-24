import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SignupForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup submitted:", { fullName, email, password, confirmPassword });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
          Full Name
        </Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Aayush"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="h-11 bg-card border-input"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signupEmail" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <Input
          id="signupEmail"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-11 bg-card border-input"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="signupPassword" className="text-sm font-medium text-foreground">
          Password
        </Label>
        <Input
          id="signupPassword"
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-11 bg-card border-input"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
          Confirm Password
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="h-11 bg-card border-input"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full h-11 mt-2"
      >
        Create Account
      </Button>
    </form>
  );
};

export default SignupForm;
