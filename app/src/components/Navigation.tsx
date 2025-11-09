import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'خانه', id: 'home' },
    { label: 'ماموریت ما', id: 'about' },
    { label: 'ویژگی‌های پلتفرم', id: 'how-it-works' },
    { label: 'نظرات', id: 'testimonials' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img
              src="/logo-transparent.png"
              alt="1001 Nomads Logo"
              className="h-14 w-14 lg:h-16 lg:w-16"
            />
          </div>

          {/* Desktop Menu */}
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

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="transition-smooth hover-lift"
            >
              تماس با ما
            </Button>
            <Button
              variant="hero"
              onClick={() => scrollToSection('cta')}
              className="gradient-primary text-white hover-lift"
            >
              شروع کنید
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-2 pt-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-right py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary font-medium"
              >
                {item.label}
              </button>
            ))}
            <div className="flex flex-col gap-2 mt-2 px-4">
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="w-full"
              >
                تماس با ما
              </Button>
              <Button
                variant="hero"
                onClick={() => scrollToSection('cta')}
                className="w-full gradient-primary text-white"
              >
                شروع کنید
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
