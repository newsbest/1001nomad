import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleSubmenuEnter = (label: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setOpenSubmenu(label);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 300); // 300ms delay before hiding
  };

  const menuItems = [
    { label: 'خانه', id: 'home' },
    { label: 'خدمات ما', id: 'about' },
    {
      label: 'دیجیتال نومد',
      href: 'https://1001nomad.com/site/digital-nomad/',
      submenu: [
        { label: 'کوچگرد دیجیتال', href: 'https://1001nomad.com/site/the-digital-nomad/' },
        { label: 'معرفی فیلم و کتاب', href: 'https://1001nomad.com/site/suggest-book/' },
      ]
    },
    { label: 'حقوق بشر', href: 'https://1001nomad.com/site/human-right/' },
    {
      label: 'اخبار',
      href: 'https://1001nomad.com/site/news/',
      submenu: [
        { label: 'حقوق بشری', href: 'https://1001nomad.com/site/news-human-rights/' },
        { label: 'زنان', href: 'https://1001nomad.com/site/news-women/' },
        { label: 'دیجیتال', href: 'https://1001nomad.com/site/news-digital/' },
      ]
    },
    { label: 'مقاله', href: 'https://1001nomad.com/site/articles/' },
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
            {menuItems.map((item) => {
              if ('submenu' in item) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => handleSubmenuEnter(item.label)}
                    onMouseLeave={handleSubmenuLeave}
                  >
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-200 font-medium flex items-center gap-1"
                    >
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </a>
                    {openSubmenu === item.label && (
                      <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="block px-4 py-2 text-right text-foreground hover:bg-accent/10 hover:text-primary transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else if ('href' in item) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </a>
                );
              } else {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.label}
                  </button>
                );
              }
            })}
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
            {menuItems.map((item) => {
              if ('submenu' in item) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                      className="w-full text-right py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary font-medium flex items-center justify-between"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`} />
                      {item.label}
                    </button>
                    {openSubmenu === item.label && (
                      <div className="pr-4 flex flex-col gap-1 mt-1">
                        {item.submenu.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="text-right py-2 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              } else if ('href' in item) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-right py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary font-medium"
                  >
                    {item.label}
                  </a>
                );
              } else {
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-right py-3 px-4 hover:bg-accent/10 rounded-lg transition-colors duration-200 text-foreground hover:text-primary font-medium"
                  >
                    {item.label}
                  </button>
                );
              }
            })}
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
