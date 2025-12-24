import { cn } from "@/lib/utils";

interface AuthTabsProps {
  activeTab: "login" | "signup";
  onTabChange: (tab: "login" | "signup") => void;
}

const AuthTabs = ({ activeTab, onTabChange }: AuthTabsProps) => {
  return (
    <div className="flex w-full max-w-[240px] rounded-full bg-secondary p-1">
      <button
        onClick={() => onTabChange("login")}
        className={cn(
          "flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200",
          activeTab === "login"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Login
      </button>
      <button
        onClick={() => onTabChange("signup")}
        className={cn(
          "flex-1 py-2 px-6 rounded-full text-sm font-medium transition-all duration-200",
          activeTab === "signup"
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthTabs;
