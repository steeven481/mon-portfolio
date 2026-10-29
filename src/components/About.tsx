import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Cpu, 
  Database, 
  Workflow, 
  CheckCircle2, 
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { t } = useTranslation();
  const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
  
  const stats = [
    {
      number: "3+",
      label: t('about.stats.experience.label'),
      description: t('about.stats.experience.description')
    },
    {
      number: "10+",
      label: t('about.stats.projects.label'),
      description: t('about.stats.projects.description')
    },
    {
      number: "100%",
      label: t('about.stats.satisfaction.label'),
      description: t('about.stats.satisfaction.description')
    }
  ];

  const pillars = [
    {
      icon: Workflow,
      title: t('about.pillars.pm.title'),
      description: t('about.pillars.pm.description'),
      badge: "NAOS • GEM",
      accent: "from-blue-500/20 to-indigo-500/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: Cpu,
      title: t('about.pillars.ai.title'),
      description: t('about.pillars.ai.description'),
      badge: "Capgemini",
      accent: "from-purple-500/20 to-pink-500/20 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Layers,
      title: t('about.pillars.industry.title'),
      description: t('about.pillars.industry.description'),
      badge: "Stellantis",
      accent: "from-amber-500/20 to-orange-500/20 text-amber-600 dark:text-amber-400"
    }
  ];

  const values = [
    {
      icon: Users,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description')
    },
    {
      icon: Target,
      title: t('about.values.precision.title'),
      description: t('about.values.precision.description')
    },
    {
      icon: Lightbulb,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t('about.title')}</span>
            </div>
            <h2 className="heading-lg mb-4">{t('about.subtitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t('about.description')}
            </p>
          </div>

          {/* 3 Pillars of Expertise */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {pillars.map((pillar, index) => (
              <Card 
                key={index} 
                className="card-professional p-6 relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 border-border/60"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.accent} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <Badge variant="secondary" className="text-xs shrink-0 font-medium">
                    {pillar.badge}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </Card>
            ))}
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="card-professional p-6 text-center border-border/50 hover:border-primary/40 transition-colors">
                <div className="text-4xl lg:text-5xl font-extrabold text-gradient mb-2 tracking-tight">
                  {stat.number}
                </div>
                <div className="font-semibold text-foreground text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.description}
                </div>
              </Card>
            ))}
          </div>

          {/* Technical & Functional Matrix */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Functional & Methodologies */}
            <Card className="card-professional p-7 border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="heading-md text-xl">{t('about.methodologies')}</h3>
                  <p className="text-xs text-muted-foreground">Management de projet & Gouvernance SI</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  "Product Ownership & Backlog",
                  "Gouvernance SAP & ERP",
                  "Méthodologies Agile / Scrum / SAFe",
                  "Cadrage & Spécifications Métiers",
                  "Gestion des Risques & Plannings",
                  "Conduite du Changement & UAT",
                  "Industrial Manufacturing (Usines)",
                  "Audit & Alignement Stratégique IT"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Technical Expertise */}
            <Card className="card-professional p-7 border-border/60">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="heading-md text-xl">{t('about.specialties')}</h3>
                  <p className="text-xs text-muted-foreground">Architecture, IA & Technologies</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {[
                  "Systèmes RAG & LLMs (LangChain)",
                  "Python, FastAPI & NLP",
                  "Bases Vectorielles (Vector DB)",
                  "Angular, React & Next.js",
                  "TypeScript, Node.js & Express",
                  "Java, SpringBoot & C++",
                  "MongoDB, MySQL & PostgreSQL",
                  "Docker, CI/CD & Keycloak"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-professional p-6 text-center hover:scale-[1.02] transition-all border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
