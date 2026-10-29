import { Code2, Github, Linkedin, Gitlab } from "lucide-react";
import { useTranslation } from "react-i18next";

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

    const socialLinks = [
      { icon: Linkedin, href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310", label: "LinkedIn" },
      { icon: Github, href: "https://github.com/steeven481", label: "GitHub" },
      { icon: Gitlab, href: "https://gitlab.com/yiemtsa1", label: "GitLab" },
    ];

  return (
    <footer className="bg-card/80 backdrop-blur-xl border-t border-border/60">
      <div className="container-wide px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4 text-center md:text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-foreground">
                Steeven <span className="text-gradient">Yiemtsa</span>
              </span>
            </a>
            <p className="text-muted-foreground text-xs sm:text-sm max-w-sm mx-auto md:mx-0 leading-relaxed">
              SAP IT Product Manager chez NAOS • Master Management de Projet Numérique & SI (Grenoble Ecole de Management).
            </p>
            <div className="flex items-center justify-center md:justify-start gap-3 pt-1">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 active:scale-95 transition-all"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (4 cols) */}
          <div className="md:col-span-4 space-y-3 text-center md:text-left">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Column (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-center md:text-left">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground">Disponibilité</h3>
            <div className="space-y-1.5 text-xs sm:text-sm text-muted-foreground">
              <p className="font-medium text-foreground">France (Mobilité nationale)</p>
              <p>Échanges via LinkedIn ou Formulaire</p>
              <div className="pt-2 flex justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Ouvert aux échanges
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground text-center sm:text-left">
          <div>
            <span>© {currentYear} Steeven Yiemtsa. Tous droits réservés.</span>
          </div>
          
          <div>
            <span>Conçu avec rigueur & excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
