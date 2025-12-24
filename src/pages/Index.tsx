import { useState } from "react";
import BookIcon from "@/components/icons/BookIcon";
import AuthTabs from "@/components/auth/AuthTabs";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-10">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center mb-8">
            <BookIcon className="mb-4" />
            <h1 className="text-2xl font-bold text-foreground tracking-tight">
              LEXORA
            </h1>
            <p className="text-sm text-muted-foreground text-center mt-2">
              {activeTab === "login"
                ? "Login to your Lexora Account"
                : "Sign in to access your practice tests and track your progress"}
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
  );
};

export default Index;
