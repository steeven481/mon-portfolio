import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Users, Target, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const { t } = useTranslation();
  const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
  
  const stats = [
    {
      number: "2+",
      label: t('about.stats.experience.label'),
      description: t('about.stats.experience.description')
    },
    {
      number: "8+",
      label: t('about.stats.projects.label'),
      description: t('about.stats.projects.description')
    },
    {
      number: "100%",
      label: t('about.stats.satisfaction.label'),
      description: t('about.stats.satisfaction.description')
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
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <div 
          ref={elementRef}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="heading-lg mb-6">{t('about.title')}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-professional p-6 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="font-semibold text-foreground mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </Card>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="card-professional p-6 text-center hover:scale-105 transition-transform">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>

        {/* Specialties */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="heading-md mb-6 text-center md:text-left">{t('about.specialties')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Ionic & React Native</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground"> Angular , Springboot , React.js & Node.js</span>
              </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">MogoDB & Mysql</span>
                </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">TypeScript , java, python & JavaScript</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="heading-md mb-6 text-center md:text-left">{t('about.methodologies')}</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Agile & Scrum</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">Tests automatisés</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-muted-foreground">DevOps & CI/CD</span>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;