import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import AuthTabs from "@/components/auth/AuthTabs";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="p-4">
        <Link to="/" className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold text-foreground tracking-tight">LEXORA</span>
        </Link>
      </header>

      <div className="flex items-center justify-center p-4 pt-8">
        <div className="w-full max-w-md">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-10">
            {/* Brand */}
            <div className="flex flex-col items-center mb-8">
              <h1 className="text-2xl font-bold text-foreground tracking-tight">
                LEXORA
              </h1>
              <p className="text-sm text-muted-foreground text-center mt-2">
                {activeTab === "login"
                  ? "Login to your Lexora Account"
                  : "Sign up to access your practice tests and track your progress"}
              </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-8">
              <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Forms */}
            {activeTab === "login" ? <LoginForm /> : <SignupForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
