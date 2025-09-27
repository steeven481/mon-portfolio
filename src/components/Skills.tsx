import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  Smartphone, 
  Globe, 
  Cloud, 
  Network, 
  Palette, 
  Database,
  Code2,
  Cpu,
  Sparkles
} from "lucide-react";

const Skills = () => {
  const { t } = useTranslation();
  const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
  
  const skillCategories = [
    {
      icon: Smartphone,
      title: t('skills.categories.mobile'),
      color: "text-blue-500",
      skills: [
          { name: "Ionic", level: t('skills.levels.advanced') },
        { name: "Flutter & Dart", level: t('skills.levels.beginner') },
        { name: "React Native", level: t('skills.levels.beginner') },
        { name: "Kotlin", level: t('skills.levels.beginner') }
      ]
    },
    {
      icon: Globe,
      title: t('skills.categories.web'),
      color: "text-green-500",
      skills: [
          { name: "Angular", level: t('skills.levels.expert') },
        { name: "React.js & Next.js", level: t('skills.levels.beginner') },
        { name: "TypeScript", level: t('skills.levels.advanced') },
        { name: "Node.js & Express", level: t('skills.levels.advanced') },
      ]
    },
    {
      icon: Database,
      title: t('skills.categories.database'),
      color: "text-purple-500",
      skills: [
        { name: "Firebase", level: t('skills.levels.intermediate') },
        { name: "MongoDB", level: t('skills.levels.advanced') },
        { name: "PostgreSQL", level: t('skills.levels.beginner') },
      ]
    },
    {
      icon: Cloud,
      title: t('skills.categories.cloud'),
      color: "text-orange-500",
      skills: [
        { name: "AWS Services", level: t('skills.levels.intermediate') },
        { name: "Docker", level: t('skills.levels.advanced') },
        { name: "CI/CD", level: t('skills.levels.intermediate') },
        { name: "Kubernetes", level: t('skills.levels.beginner') }
      ]
    },
    {
      icon: Code2,
      title: t('skills.categories.tools'),
      color: "text-red-500",
      skills: [
        { name: "Git & GitHub", level: t('skills.levels.advanced') },
        { name: "REST & GraphQL", level: t('skills.levels.intermediate') },
        { name: "Jest & Testing", level: t('skills.levels.beginner') },
        { name: "Webpack & Vite", level: t('skills.levels.beginner') }
      ]
    },
    {
      icon: Palette,
      title: t('skills.categories.design'),
      color: "text-pink-500",
      skills: [
        { name: "ROS1 & ROS2", level: t('skills.levels.beginner') },
        { name: "OpenCV", level: t('skills.levels.beginner') },
        { name: "ev3", level: t('skills.levels.beginner') },
        { name: "Gazebo", level: t('skills.levels.beginner') },
      ]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case t('skills.levels.expert'):
        return "bg-green-500/10 text-green-700 dark:text-green-400";
      case t('skills.levels.advanced'):
        return "bg-blue-500/10 text-blue-700 dark:text-blue-400";
      case t('skills.levels.intermediate'):
        return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400";
      case t('skills.levels.beginner'):
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
      default:
        return "bg-gray-500/10 text-gray-700 dark:text-gray-400";
    }
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">{t('skills.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('skills.description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-professional p-6 hover:scale-[1.02] transition-transform group cursor-pointer relative">
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 rounded-lg bg-secondary ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className={getLevelColor(skill.level)}>
                        {skill.level}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <h3 className="heading-md mb-8">{t('skills.otherSkills')}</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Agile/Scrum", "Jira", "Slack", "Notion", "Postman", 
              "Linux/Unix", "Shell Scripting", "API Design", "Microservices",
              "PWA", "SEO", "Analytics", "A/B Testing"
            ].map((skill, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1 hover:scale-105 transition-transform">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;