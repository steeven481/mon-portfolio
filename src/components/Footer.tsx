import { Code2, Github, Linkedin, Gitlab, Mail, Heart } from "lucide-react";
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
      { icon: Mail, href: "mailto:steeven.yiemtsa-fopa@utbm.fr", label: "Email" },
    ];

  return (
    <footer className="bg-card/80 backdrop-blur-xl border-t border-border/60">
      <div className="container-wide px-6">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-foreground">
                Steeven <span className="text-gradient">Yiemtsa</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              SAP IT Product Manager chez NAOS • Étudiant en Master Management de Projet Numérique & SI à Grenoble Ecole de Management (GEM).
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all"
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors py-0.5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info Column (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-foreground">Contact Direct</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">France</p>
              <p>steeven.yiemtsa-fopa@utbm.fr</p>
              <p>(+33) 74 54 21 660</p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  À l'écoute d'opportunités
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>© {currentYear} Steeven Yiemtsa. Tous droits réservés.</span>
          </div>
          
          <div className="flex items-center gap-1">
            <span>Conçu avec rigueur & passion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
