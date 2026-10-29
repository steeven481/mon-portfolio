import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Github, Linkedin, Gitlab, ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { t } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["home", "about", "experience", "education", "projects", "competitions", "skills", "contact"];
            for (const section of sections.reverse()) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navigation = [
        { name: t('nav.home'), href: "#home" },
        { name: t('nav.about'), href: "#about" },
        { name: t('nav.experience'), href: "#experience" },
        { name: t('nav.education'), href: "#education" },
        { name: t('nav.projects'), href: "#projects" },
        { name: t('nav.competitions'), href: "#competitions" },
        { name: t('nav.skills'), href: "#skills" },
        { name: t('nav.contact'), href: "#contact" },
    ];

    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310", label: "LinkedIn" },
        { icon: Github, href: "https://github.com/steeven481", label: "GitHub" },
        { icon: Gitlab, href: "https://gitlab.com/yiemtsa1", label: "GitLab" },
    ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass shadow-[var(--shadow-soft)] border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-foreground">Steeven </span>
              <span className="text-gradient">Y.</span>
            </span>
          </a>

          {/* Desktop Navigation (kept exactly as-is for PC & tablets) */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
            <div className="w-px h-5 bg-border mx-1" />
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Actions: Language + Theme + Hamburger */}
          <div className="lg:hidden flex items-center gap-1.5">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 rounded-xl glass border border-border/50"
            >
              <span className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'} absolute`}>
                <Menu className="w-5 h-5" />
              </span>
              <span className={`transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'} absolute`}>
                <X className="w-5 h-5" />
              </span>
            </Button>
          </div>
        </div>

        {/* Mobile Full-Screen / Modal Sheet Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-background/80 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-300 border-b border-border/50">
            <div className="space-y-1 pt-2">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold px-4 mb-2">
                Navigation
              </div>
              {navigation.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-all duration-200 ${
                      isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-foreground/80 hover:bg-secondary/70 hover:text-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <ArrowRight className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground/40'}`} />
                  </a>
                );
              })}
            </div>

            {/* Mobile Menu Footer */}
            <div className="pt-6 border-t border-border/50 space-y-4">
              <div className="flex items-center justify-center gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary transition-all active:scale-95"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>

              <Button
                asChild
                className="w-full h-12 rounded-2xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg shadow-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                <a href="#contact">
                  {t('hero.cta.contact')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
