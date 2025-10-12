import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
// Using uploaded image directly
// import ermetesLogo from "@assets/ermetes-logo.png";

const ModernNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  // Detect if on article page and get lang/slug from URL
  const isArticlePage = window.location.pathname.includes('/magazine/');
  if (isArticlePage) {
    const match = window.location.pathname.match(/\/magazine\/(en|it)\/([^/]+)/);
    if (match) {
      currentLang = match[1];
      currentSlug = match[2];
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navigationItems = [
    { key: "projects", label: t('navigation.projects'), href: '/#projects' },
    { key: "about", label: t('navigation.about'), href: '/#about' },
    { key: "contact", label: t('navigation.contact'), href: '/#contact' },
  ];
  // Language switcher flags
  const languages = [
    { code: 'it', label: 'IT', flag: '🇮🇹' },
    { code: 'en', label: 'EN', flag: '🇬🇧' },
    { code: 'fr', label: 'FR', flag: '🇫🇷' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 dm-sans-light bg-dark/95 backdrop-blur-md shadow-sm border-b border-border/10`}
    >
      <div className="md:container mx-auto md:px-4 mt-2">
        <div className="flex items-center justify-between h-12 md:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="./assets/logo.png"
              alt="S.E. Investing Logo"
              className="w-auto"
              style={{ height: '36px', paddingLeft: '0px' }}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {/* Language flags */}
            <div className="flex items-center space-x-2 ml-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    i18n.changeLanguage(lang.code);
                  }}
                  className={`text-xl px-1 focus:outline-none ${i18n.language === lang.code ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                  aria-label={lang.label}
                >
                  <span>{lang.flag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                i18n.changeLanguage(lang.code);
              }}
              className={`text-xl px-1 md:hidden focus:outline-none ${i18n.language === lang.code ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
              aria-label={lang.label}
            >
              <span>{lang.flag}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;