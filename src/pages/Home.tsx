import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Clock, FileText, Headphones, BookOpen, PenTool, Mic } from "lucide-react";

const testCards = [
  {
    icon: Headphones,
    title: "Listening Test",
    duration: "30 minutes",
    detail: "40 questions",
    color: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: BookOpen,
    title: "Reading Test",
    duration: "60 minutes",
    detail: "40 questions",
    color: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    icon: PenTool,
    title: "Writing Test",
    duration: "60 minutes",
    detail: "2 tasks",
    color: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Mic,
    title: "Speaking Test",
    duration: "11-14 minutes",
    detail: "3 parts",
    color: "bg-amber-100",
    iconColor: "text-amber-600",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-foreground tracking-tight">LEXORA</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3">
              <Button className="rounded-full px-6">
                Mock IELTS Tests
              </Button>
              <Button variant="outline" className="rounded-full px-6" asChild>
                <Link to="/auth">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted/50 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            IELTS Mock Tests
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practice IELTS online with Lexora with all cambridge questions sets.
            <br />
            Test. Get Scored. Improve
          </p>
        </div>
      </section>

      {/* Test Cards */}
      <section className="py-12 md:py-16 flex-1">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testCards.map((card) => (
              <div
                key={card.title}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}>
                  <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-3">
                  {card.title}
                </h3>
                <div className="space-y-1.5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{card.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    <span>{card.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Contact Us */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-primary-foreground">📍</span>
                  KU, Dhulikhel
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-foreground">📞</span>
                  9741740551
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-primary-foreground">✉️</span>
                  lexora@gmail.com
                </p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                >
                  <span className="text-sm">f</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                >
                  <span className="text-sm">📷</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                >
                  <span className="text-sm">in</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
