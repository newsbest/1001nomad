import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import LanguageSwitcher from "../LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "Our Services", id: "about" },
    { label: "How It Works", id: "how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <img
              src="/logo-transparent.png"
              alt="1001 Nomads Logo"
              className="h-14 w-14 lg:h-16 lg:w-16"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher current="en" />
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="transition-smooth hover-lift"
            >
              Contact Us
            </Button>
            <Button
              variant="hero"
              onClick={() => scrollToSection("cta")}
              className="gradient-primary text-white hover-lift"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher current="en" />
            <button
              className="text-foreground hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 bg-card border-t border-border ${
            isMobileMenuOpen ? "max-h-[32rem] pb-4 shadow-lg" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-2 px-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="w-full"
              >
                Contact Us
              </Button>
              <Button
                variant="hero"
                onClick={() => scrollToSection("cta")}
                className="w-full gradient-primary text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
