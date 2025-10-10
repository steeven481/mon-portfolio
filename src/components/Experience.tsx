import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, MapPin, Target, MousePointerClick } from 'lucide-react';

const Experience = () => {
    const { t } = useTranslation();
    const [selectedExperience, setSelectedExperience] = useState<any>(null);
    const [showClickHint, setShowClickHint] = useState(true);

    const experiences = [
        {
            id: 1,
            title: " Full-Stack Developer",
            company: "LEVEGI CONSULTING",
            location: "Douala, Cameroun",
            startDate: "2025-05",
            endDate: "2025-08",
            description: "Developer of a progressive web application (PWA) called Lenjo, serving over 100,000 users, with an advanced architecture using Angular, Node.js, MongoDB, Keycloak, and cloud technologies.",
            objectives: [
                "Develop and maintain the production application",
                "Ensure the application, payments, and user management are implemented in a secure and centralized way",
                "Optimize application performance by 40%",
                "Implement CI/CD pipelines and automated testing"
            ],
            technologies: ["Angular(rxJs)", "Node.js", "TypeScript", "Keycloak", "MongoDB"],
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

    // Masquer l'indice après 5 secondes ou après le premier clic
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowClickHint(false);
        }, 300000);

        return () => clearTimeout(timer);
    }, []);

    const handleCardClick = (experience: any) => {
        setSelectedExperience(experience);
        setShowClickHint(false); // Masquer l'indice après le premier clic
    };

    return (
        <section id="experience" className="section-padding bg-secondary/20">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-6">{t('experience.title')}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('experience.description')}
                    </p>
                </div>

                <div className="relative">
                    {/* Indice de clic animé */}
                    {showClickHint && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20 animate-bounce">
                                <MousePointerClick className="w-4 h-4 text-primary" />
                                <span className="text-sm font-medium text-primary">
                  {t('information.title')}
                </span>
                                <div className="flex space-x-1">
                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse"></div>
                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experiences.map((experience, index) => (
                            <div key={experience.id} className="relative">
                                {/* Animation d'apparition pour chaque carte */}
                                <Card
                                    className="card-professional p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group animate-in fade-in slide-in-from-bottom-4"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                    onClick={() => handleCardClick(experience)}
                                >
                                    {/* Indicateur de clic sur la carte */}
                                    {showClickHint && (
                                        <div className="absolute -top-2 -right-2">
                                            <div className="relative">
                                                <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-ping opacity-75">
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="absolute top-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                                                    <MousePointerClick className="w-3 h-3 text-white" />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div className="flex items-start justify-between">
                                            <div className="space-y-1">
                                                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                    {experience.title}
                                                </h3>
                                                <p className="text-primary font-medium">{experience.company}</p>
                                            </div>
                                            <Badge variant="secondary" className="shrink-0">
                                                {experience.endDate === "Present" ? "Actuel" : experience.endDate.slice(0, 4)}
                                            </Badge>
                                        </div>

                                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                <span>{experience.startDate.slice(0, 4)} - {experience.endDate === "Present" ? "Présent" : experience.endDate.slice(0, 4)}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{experience.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {experience.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {experience.technologies.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {experience.technologies.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{experience.technologies.length - 3}
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Indicateur subtil au survol */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <MousePointerClick className="w-3 h-3" />
                                                <span>Voir l'expérience détaillée</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Detail Modal */}
                <Dialog open={!!selectedExperience} onOpenChange={() => setSelectedExperience(null)}>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogTitle className="sr-only">
                            {selectedExperience?.title}
                        </DialogTitle>
                        {selectedExperience && (
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left: Image Carousel */}
                                <div className="space-y-4">
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {selectedExperience.images.map((image: string, index: number) => (
                                                <CarouselItem key={index}>
                                                    <div className="aspect-video rounded-lg overflow-hidden">
                                                        <img
                                                            src={image}
                                                            alt={`${selectedExperience.title} - Image ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>
                                </div>

                                {/* Right: Details */}
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{selectedExperience.title}</h3>
                                        <p className="text-primary font-semibold text-lg">{selectedExperience.company}</p>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{selectedExperience.startDate} - {selectedExperience.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{selectedExperience.location}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                                            <Target className="w-4 h-4" />
                                            {t('description')}
                                        </h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedExperience.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('objectives')}</h4>
                                        <ul className="space-y-2">
                                            {selectedExperience.objectives.map((objective: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                                    <span className="text-muted-foreground text-sm">{objective}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('technologies')}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedExperience.technologies.map((tech: string) => (
                                                <Badge key={tech} variant="secondary">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
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