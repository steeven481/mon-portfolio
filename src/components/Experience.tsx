import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  Calendar, 
  MapPin, 
  Target, 
  Briefcase, 
  ArrowRight, 
  Building2, 
  CheckCircle2, 
  Bot,
  Layers,
  Code2
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ExperienceItem {
  id: string;
  category: 'pm' | 'ai' | 'dev';
  titleKey: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  type: string;
  summaryKey: string;
  descriptionKey: string;
  achievementsKey: string;
  technologies: string[];
  icon: typeof Briefcase;
  images: string[];
}

const Experience = () => {
    const { t } = useTranslation();
    const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
    const [activeFilter, setActiveFilter] = useState<'all' | 'pm' | 'ai' | 'dev'>('all');
    const [sectionRef, isSectionVisible] = useScrollAnimation({ triggerOnce: true });

    const experiences: ExperienceItem[] = [
        {
            id: "naos",
            category: "pm",
            titleKey: "experience.naos.role",
            company: "NAOS",
            location: "France",
            startDate: "2026-09",
            endDate: "Present",
            type: t('experience.naos.type'),
            summaryKey: "experience.naos.summary",
            descriptionKey: "experience.naos.description",
            achievementsKey: "experience.naos.achievements",
            technologies: ["SAP", "Product Management", "SI Governance", "Jira", "Agile / Scrum", "UAT & Recette", "ERP Lifecycle"],
            icon: Building2,
            images: []
        },
        {
            id: "stellantis",
            category: "pm",
            titleKey: "experience.stellantis.role",
            company: "STELLANTIS",
            location: "France",
            startDate: "2026-03",
            endDate: "2026-08",
            type: t('experience.stellantis.type'),
            summaryKey: "experience.stellantis.summary",
            descriptionKey: "experience.stellantis.description",
            achievementsKey: "experience.stellantis.achievements",
            technologies: ["Manufacturing Software", "Gestion de Projet SI", "Cahier des Charges", "KPI Usines", "Lean Management", "MS Project"],
            icon: Layers,
            images: []
        },
        {
            id: "capgemini",
            category: "ai",
            titleKey: "experience.capgemini.role",
            company: "CAPGEMINI",
            location: "France",
            startDate: "2025-09",
            endDate: "2026-02",
            type: t('experience.capgemini.type'),
            summaryKey: "experience.capgemini.summary",
            descriptionKey: "experience.capgemini.description",
            achievementsKey: "experience.capgemini.achievements",
            technologies: ["Système RAG", "Python", "LangChain / LlamaIndex", "LLM", "Vector DB (Chroma/FAISS)", "FastAPI", "Fact-Checking", "NLP"],
            icon: Bot,
            images: []
        },
        {
            id: "levegi",
            category: "dev",
            titleKey: "experience.levegi.role",
            company: "LEVEGI CONSULTING",
            location: "Douala, Cameroun",
            startDate: "2025-05",
            endDate: "2025-08",
            type: t('experience.levegi.type'),
            summaryKey: "experience.levegi.summary",
            descriptionKey: "experience.levegi.description",
            achievementsKey: "experience.levegi.achievements",
            technologies: ["Angular (RxJS)", "Node.js", "TypeScript", "Keycloak", "MongoDB", "PWA", "CI/CD"],
            icon: Code2,
            images: [
                "/experience/1.png",
                "/experience/2.png",
                "/experience/3.png",
                "/experience/4.png",
                "/experience/5.png",
                "/experience/6.png",
                "/experience/7.png",
                "/experience/8.png"
            ]
        }
    ];

    const filteredExperiences = experiences.filter(exp => {
        if (activeFilter === 'all') return true;
        return exp.category === activeFilter;
    });

    const getTypeColor = (type: string) => {
        if (type.toLowerCase().includes('alternance') || type.toLowerCase().includes('apprenticeship') || type.toLowerCase().includes('studium')) {
            return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20';
        }
        return 'bg-primary/10 text-primary border-primary/20';
    };

    return (
        <section id="experience" className="section-padding relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background ambient lighting */}
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide relative z-10">
                <div
                    ref={sectionRef}
                    className={`transition-all duration-1000 ${
                        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-3 sm:mb-4">
                            <Briefcase className="w-3.5 h-3.5" />
                            <span>{t('experience.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t('experience.subtitle')}</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('experience.description')}
                        </p>

                        {/* Filter Tabs - Mobile Touch Friendly */}
                        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
                            {[
                                { key: 'all', label: t('experience.filterAll') },
                                { key: 'pm', label: t('experience.filterPM') },
                                { key: 'ai', label: t('experience.filterAI') },
                                { key: 'dev', label: t('experience.filterDev') }
                            ].map(tab => (
                                <Button
                                    key={tab.key}
                                    variant={activeFilter === tab.key ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setActiveFilter(tab.key as any)}
                                    className={`rounded-xl text-xs sm:text-sm font-medium transition-all ${
                                        activeFilter === tab.key 
                                          ? 'shadow-md shadow-primary/20 scale-105' 
                                          : 'glass border-border/60 hover:border-primary/40'
                                    }`}
                                >
                                    {tab.label}
                                </Button>
                            ))}
                        </div>
                    </div>

                    {/* Timeline List */}
                    <div className="relative max-w-4xl mx-auto mt-8 sm:mt-12">
                        {/* Center Timeline Spine on Desktop */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-px top-2 bottom-6 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent pointer-events-none opacity-40" />
                        
                        {/* Left Timeline Spine on Mobile */}
                        <div className="md:hidden absolute left-4 top-2 bottom-6 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent pointer-events-none opacity-40" />

                        <div className="space-y-6 sm:space-y-12">
                            {filteredExperiences.map((exp, index) => {
                                const isEven = index % 2 === 0;

                                return (
                                    <div 
                                        key={exp.id}
                                        className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 md:gap-10 ${
                                            isEven ? 'md:flex-row-reverse' : ''
                                        }`}
                                    >
                                        {/* Timeline Node - Desktop */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 border-primary items-center justify-center z-10 shadow-lg shadow-primary/20 group">
                                            <exp.icon className="w-4 h-4 text-primary" />
                                        </div>

                                        {/* Timeline Node - Mobile */}
                                        <div className="md:hidden absolute left-4 -translate-x-1/2 top-6 w-7 h-7 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-md">
                                            <exp.icon className="w-3.5 h-3.5 text-primary" />
                                        </div>

                                        {/* Card Half */}
                                        <div className="w-full pl-9 sm:pl-10 md:pl-0 md:w-[calc(50%-2.5rem)]">
                                            <Card
                                                onClick={() => setSelectedExperience(exp)}
                                                className="card-professional p-5 sm:p-7 cursor-pointer hover:scale-[1.02] active:scale-[0.99] hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-xl group border-border/60"
                                            >
                                                {/* Card Header */}
                                                <div className="flex items-start justify-between gap-2 mb-2 sm:mb-3">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <span className="font-bold text-base sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                                                                {t(exp.titleKey)}
                                                            </span>
                                                        </div>
                                                        <div className="text-sm sm:text-base font-semibold text-primary flex items-center gap-2">
                                                            <span>{exp.company}</span>
                                                        </div>
                                                    </div>
                                                    <Badge 
                                                        variant="outline" 
                                                        className={`shrink-0 font-semibold text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 rounded-full ${getTypeColor(exp.type)}`}
                                                    >
                                                        {exp.type}
                                                    </Badge>
                                                </div>

                                                {/* Meta: Period & Location */}
                                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-medium text-muted-foreground mb-3">
                                                    <div className="flex items-center gap-1.5">
                                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                                        <span>{exp.startDate} → {exp.endDate === 'Present' ? t('experience.badgePresent') : exp.endDate}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1.5">
                                                        <MapPin className="w-3.5 h-3.5 text-accent" />
                                                        <span>{exp.location}</span>
                                                    </div>
                                                </div>

                                                {/* Summary Description */}
                                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 line-clamp-3">
                                                    {t(exp.summaryKey)}
                                                </p>

                                                {/* Tech Tags */}
                                                <div className="flex flex-wrap gap-1.5 mb-3 sm:mb-4">
                                                    {exp.technologies.slice(0, 4).map(tech => (
                                                        <Badge 
                                                            key={tech} 
                                                            variant="secondary" 
                                                            className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md bg-secondary/80 text-foreground/80"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                    {exp.technologies.length > 4 && (
                                                        <Badge variant="outline" className="text-[10px] sm:text-[11px] font-medium text-muted-foreground">
                                                            +{exp.technologies.length - 4}
                                                        </Badge>
                                                    )}
                                                </div>

                                                {/* Card Footer Callout */}
                                                <div className="flex items-center justify-between pt-2 border-t border-border/40 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                                    <span>{t('experience.viewDetails')}</span>
                                                    <ArrowRight className="w-3.5 h-3.5" />
                                                </div>
                                            </Card>
                                        </div>

                                        {/* Spacer for other side on Desktop */}
                                        <div className="hidden md:block w-full md:w-[calc(50%-2.5rem)]" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Experience Detail Modal */}
                <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
                    <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass border-border/70 p-5 sm:p-8">
                        <DialogTitle className="sr-only">
                            {selectedExperience ? t(selectedExperience.titleKey) : "Détails"}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Détails de l'expérience professionnelle
                        </DialogDescription>

                        {selectedExperience && (
                            <div className="space-y-5 sm:space-y-6">
                                {/* Header */}
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-2">
                                        <Badge 
                                            variant="outline" 
                                            className={`font-semibold text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full ${getTypeColor(selectedExperience.type)}`}
                                        >
                                            {selectedExperience.type}
                                        </Badge>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                                            <span className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                {selectedExperience.startDate} → {selectedExperience.endDate === 'Present' ? t('experience.badgePresent') : selectedExperience.endDate}
                                            </span>
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-accent" />
                                                {selectedExperience.location}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="text-xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                        {t(selectedExperience.titleKey)}
                                    </h3>
                                    <p className="text-base sm:text-lg font-bold text-primary mt-1">
                                        {selectedExperience.company}
                                    </p>
                                </div>

                                {/* Carousel if images exist */}
                                {selectedExperience.images.length > 0 && (
                                    <div className="pt-1 sm:pt-2">
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {selectedExperience.images.map((img, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <div className="aspect-video rounded-xl overflow-hidden border border-border/60 bg-muted/20">
                                                            <img 
                                                                src={img} 
                                                                alt={`${selectedExperience.company} preview ${idx + 1}`}
                                                                className="w-full h-full object-cover" 
                                                            />
                                                        </div>
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="left-2" />
                                            <CarouselNext className="right-2" />
                                        </Carousel>
                                    </div>
                                )}

                                {/* Context & Description */}
                                <div className="space-y-1.5 sm:space-y-2">
                                    <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                                        <Target className="w-4 h-4 text-primary" />
                                        <span>Contexte & Rôle</span>
                                    </h4>
                                    <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                                        {t(selectedExperience.descriptionKey)}
                                    </p>
                                </div>

                                {/* Key Missions & Achievements */}
                                <div className="space-y-2 sm:space-y-3">
                                    <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>{t('experience.missions')}</span>
                                    </h4>
                                    <ul className="space-y-2 sm:space-y-2.5">
                                        {((t(selectedExperience.achievementsKey, { returnObjects: true }) as string[]) || []).map((achievement, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 sm:mt-2 shrink-0" />
                                                <span>{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies & Tools */}
                                <div className="space-y-2 pt-1 sm:pt-2">
                                    <h4 className="text-xs sm:text-sm uppercase tracking-wider font-bold text-foreground">
                                        {t('experience.techUsed')}
                                    </h4>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {selectedExperience.technologies.map(tech => (
                                            <Badge 
                                                key={tech} 
                                                variant="secondary" 
                                                className="text-[11px] sm:text-xs font-semibold px-2.5 py-0.5 sm:py-1 rounded-lg"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Experience;
