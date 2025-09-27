import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2, Github, Linkedin, Mail, Gitlab } from "lucide-react"; // Correction ici
import { ThemeToggle } from "./ThemeToggle";
import LanguageSelector from "./LanguageSelector";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

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
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">Portfolio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-foreground transition-[var(--transition)] font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-[var(--transition)]"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
            <LanguageSelector />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSelector />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="px-6 py-4 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-muted-foreground hover:text-foreground transition-[var(--transition)] font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-muted-foreground hover:text-primary transition-[var(--transition)]"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;