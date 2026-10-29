import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Github, Linkedin, Mail, Gitlab } from "lucide-react";
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
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        { icon: Github, href: "https://github.com/steeven481", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310", label: "LinkedIn" },
        { icon: Mail, href: "mailto:steeven.yiemtsa-fopa@utbm.fr", label: "Email" },
        { icon: Gitlab, href: "https://gitlab.com/yiemtsa1", label: "GitLab" },
    ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass shadow-[var(--shadow-soft)] border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-gradient">SY</span>
            </span>
          </a>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative"
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

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass rounded-2xl mx-4 mb-4 p-4 space-y-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all duration-300 font-medium`}
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-4 px-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
