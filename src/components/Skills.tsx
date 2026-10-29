import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Workflow, 
  Bot, 
  Globe, 
  Database, 
  Cpu, 
  Wrench, 
  Sparkles,
  CheckCircle2,
  Terminal
} from "lucide-react";

const Skills = () => {
  const { t } = useTranslation();
  const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
  
  const skillCategories = [
    {
      icon: Workflow,
      title: t('skills.categories.pm'),
      color: "text-blue-500 bg-blue-500/10",
      skills: [
        { name: "SAP (ERP) & SI Governance", level: t('skills.levels.advanced') },
        { name: "Product Ownership & Backlog", level: t('skills.levels.expert') },
        { name: "Roadmap Stratégique & KPI", level: t('skills.levels.expert') },
        { name: "Agile / Scrum / Kanban", level: t('skills.levels.expert') },
        { name: "Cadrage & Cahier des charges", level: t('skills.levels.advanced') },
        { name: "Conduite du changement & UAT", level: t('skills.levels.advanced') }
      ]
    },
    {
      icon: Bot,
      title: t('skills.categories.ai'),
      color: "text-purple-500 bg-purple-500/10",
      skills: [
        { name: "Systèmes RAG (Retrieval-Augmented)", level: t('skills.levels.advanced') },
        { name: "LangChain & LlamaIndex", level: t('skills.levels.advanced') },
        { name: "Bases Vectorielles (Vector DB)", level: t('skills.levels.advanced') },
        { name: "LLMs & Fact-Checking", level: t('skills.levels.advanced') },
        { name: "Python, FastAPI & NLP", level: t('skills.levels.expert') },
        { name: "Computer Vision (OpenCV)", level: t('skills.levels.intermediate') }
      ]
    },
    {
      icon: Globe,
      title: t('skills.categories.web'),
      color: "text-emerald-500 bg-emerald-500/10",
      skills: [
        { name: "Angular (RxJS)", level: t('skills.levels.expert') },
        { name: "TypeScript & JavaScript", level: t('skills.levels.expert') },
        { name: "React.js & Next.js", level: t('skills.levels.advanced') },
        { name: "Node.js & Express", level: t('skills.levels.advanced') },
        { name: "Java & SpringBoot", level: t('skills.levels.advanced') },
        { name: "Architectures Microservices & REST", level: t('skills.levels.advanced') }
      ]
    },
    {
      icon: Database,
      title: t('skills.categories.database'),
      color: "text-amber-500 bg-amber-500/10",
      skills: [
        { name: "MongoDB", level: t('skills.levels.advanced') },
        { name: "MySQL & PostgreSQL", level: t('skills.levels.advanced') },
        { name: "Docker & Containerisation", level: t('skills.levels.advanced') },
        { name: "CI/CD & DevOps Pipelines", level: t('skills.levels.intermediate') },
        { name: "Keycloak (IAM / Sécurité)", level: t('skills.levels.advanced') },
        { name: "Firebase & Cloud Services", level: t('skills.levels.intermediate') }
      ]
    },
    {
      icon: Cpu,
      title: "Robotique & Manufacturing",
      color: "text-rose-500 bg-rose-500/10",
      skills: [
        { name: "Logiciels Propriétaires Manufacturing", level: t('skills.levels.advanced') },
        { name: "Optimisation Process Industriels", level: t('skills.levels.advanced') },
        { name: "ROS1 / ROS2 & Gazebo", level: t('skills.levels.intermediate') },
        { name: "Robotique Mobile (Tiago)", level: t('skills.levels.intermediate') },
        { name: "Simulation & Asservissement", level: t('skills.levels.intermediate') }
      ]
    },
    {
      icon: Wrench,
      title: t('skills.categories.tools'),
      color: "text-cyan-500 bg-cyan-500/10",
      skills: [
        { name: "Jira & Confluence", level: t('skills.levels.expert') },
        { name: "MS Project & Excel Avancé", level: t('skills.levels.advanced') },
        { name: "Git, GitHub & GitLab", level: t('skills.levels.expert') },
        { name: "Postman & API Testing", level: t('skills.levels.advanced') },
        { name: "Linux / Shell Scripting", level: t('skills.levels.advanced') }
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case t('skills.levels.expert'):
        return "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20";
      case t('skills.levels.advanced'):
        return "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20";
      case t('skills.levels.intermediate'):
        return "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20";
      default:
        return "bg-secondary text-muted-foreground border-border/50";
    }
  };

  return (
    <section id="skills" className="section-padding relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

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
              <span>{t('skills.title')}</span>
            </div>
            <h2 className="heading-lg mb-4">{t('skills.subtitle')}</h2>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              {t('skills.description')}
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="card-professional p-5 sm:p-6 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 group border-border/60 hover:border-primary/40"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-6">
                  <div className={`p-2.5 rounded-xl ${category.color} group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div 
                      key={skillIdx} 
                      className="flex items-center justify-between gap-2 p-2 rounded-lg bg-secondary/40 hover:bg-secondary/70 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-medium text-foreground/90">
                        {skill.name}
                      </span>
                      <Badge 
                        variant="outline" 
                        className={`text-[10px] sm:text-xs font-semibold px-2 py-0.5 rounded-md ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Soft Skills & Methods Badges */}
          <div className="mt-16 text-center max-w-4xl mx-auto">
            <h3 className="heading-md text-xl mb-6">{t('skills.otherSkills')}</h3>
            <div className="flex flex-wrap justify-center gap-2.5">
              {[
                "Product Ownership", "SAP S/4HANA & ECC", "Gouvernance des SI",
                "Gestion de Roadmap", "Sprint Planning & Retrospectives",
                "Conduite du Changement", "Communication IT / Métiers",
                "Design de RAG & Vector Search", "Prompt Engineering",
                "Clean Architecture", "PWA (Progressive Web Apps)",
                "Lean Manufacturing", "Audit & Qualité Logicielle",
                "Esprit d'équipe & Leadership"
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="px-3.5 py-1.5 rounded-xl glass border border-border/60 hover:border-primary/50 text-xs sm:text-sm font-medium text-foreground hover:scale-105 transition-all shadow-sm cursor-default"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
