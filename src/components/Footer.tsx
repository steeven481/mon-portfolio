import { Code2, Heart } from "lucide-react";
import {useTranslation} from "react-i18next";

const Footer = () => {
  const currentYear = new Date().getFullYear();
    const { t } = useTranslation();


    const quickLinks = [
      { name: t('nav.home'), href: "#home" },
      { name: t('nav.about'), href: "#about" },
      { name: t('nav.experience'), href: "#experience" },
      { name: t('nav.education'), href: "#education" },
      { name: t('nav.projects'), href: "#projects" },
      { name: t('nav.competitions'), href: "#competitions" },
      { name: t('nav.skills'), href: "#skills" },
      { name: t('nav.contact'), href: "#contact" },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide px-6">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg">Portfolio</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-xs">
              Développeur passionné créant des solutions numériques innovantes 
              et performantes pour web et mobile.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navigation</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sm text-muted-foreground hover:text-primary transition-[var(--transition)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>belfort, France</p>
              <p>steeven.yiemtsa-fopa@utbm.fr</p>
              <p>(+33) 745421660</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <span>© {currentYear} Portfolio steeven Yiemtsa.</span>
            <span>Fait avec</span>
            <span>React</span>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span>Tous droits réservés</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;