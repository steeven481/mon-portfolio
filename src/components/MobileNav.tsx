import { useState, useEffect } from "react";
import { Home, Briefcase, Code2, MessageSquare, GraduationCap } from "lucide-react";

export const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Auto-hide when scrolling down fast, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      const sections = ["home", "about", "experience", "education", "projects", "competitions", "skills", "contact"];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "home", label: "Accueil", icon: Home },
    { id: "experience", label: "Parcours", icon: Briefcase },
    { id: "education", label: "Formation", icon: GraduationCap },
    { id: "projects", label: "Projets", icon: Code2 },
    { id: "contact", label: "Contact", icon: MessageSquare },
  ];

  return (
    <div 
      className={`lg:hidden fixed bottom-3 inset-x-0 z-40 flex justify-center px-4 pointer-events-none transition-all duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <nav className="pointer-events-auto glass px-3 py-2 rounded-full border border-border/70 shadow-2xl flex items-center gap-1 sm:gap-2">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold transition-all duration-200 active:scale-95 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {isActive && (
                <span className="text-[11px] tracking-tight animate-in fade-in duration-200">
                  {item.label}
                </span>
              )}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileNav;
