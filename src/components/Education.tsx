import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, MapPin, GraduationCap, BookOpen, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface EducationItem {
  id: string;
  degreeKey: string;
  institutionKey: string;
  locationKey: string;
  startDate: string;
  endDate: string;
  specialtyKey: string;
  descriptionKey: string;
  learnedKey: string;
  achievementsKey: string;
  isCurrent?: boolean;
  images: string[];
}

const Education = () => {
    const { t } = useTranslation();
    const [selectedEducation, setSelectedEducation] = useState<EducationItem | null>(null);
    const [sectionRef, isSectionVisible] = useScrollAnimation({ triggerOnce: true });

    const educations: EducationItem[] = [
        {
            id: "gem",
            degreeKey: "education.gem.degree",
            institutionKey: "education.gem.institution",
            locationKey: "education.gem.location",
            startDate: "2026-09",
            endDate: "Present",
            specialtyKey: "education.gem.specialty",
            descriptionKey: "education.gem.description",
            learnedKey: "education.gem.learned",
            achievementsKey: "education.gem.achievements",
            isCurrent: true,
            images: []
        },
        {
            id: "utbm",
            degreeKey: "education.utbm.degree",
            institutionKey: "education.utbm.institution",
            locationKey: "education.utbm.location",
            startDate: "2023-08",
            endDate: "2026-02",
            specialtyKey: "education.utbm.specialty",
            descriptionKey: "education.utbm.description",
            learnedKey: "education.utbm.learned",
            achievementsKey: "education.utbm.achievements",
            images: [
                "/education/education7.svg",
                "/education/education8.jpeg",
                "/education/education9.jpeg"
            ]
        },
        {
            id: "saintjean",
            degreeKey: "education.saintjean.degree",
            institutionKey: "education.saintjean.institution",
            locationKey: "education.saintjean.location",
            startDate: "2023-09",
            endDate: "2025-05",
            specialtyKey: "education.saintjean.specialty",
            descriptionKey: "education.saintjean.description",
            learnedKey: "education.saintjean.learned",
            achievementsKey: "education.saintjean.achievements",
            images: [
                "/education/education4.jpeg",
                "/education/education6.jpeg",
                "/education/education5.jpeg"
            ]
        },
        {
            id: "dschang",
            degreeKey: "education.dschang.degree",
            institutionKey: "education.dschang.institution",
            locationKey: "education.dschang.location",
            startDate: "2020-10",
            endDate: "2023-08",
            specialtyKey: "education.dschang.specialty",
            descriptionKey: "education.dschang.description",
            learnedKey: "education.dschang.learned",
            achievementsKey: "education.dschang.achievements",
            images: [
                "/education/education1.png",
                "/education/education2.png",
                "/education/education3.jpeg"
            ]
        }
    ];

    return (
        <section id="education" className="section-padding bg-secondary/30 relative overflow-hidden">
            {/* Background lighting */}
            <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide relative z-10">
                <div
                    ref={sectionRef}
                    className={`transition-all duration-1000 ${
                        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-4">
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>{t('education.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-4">{t('education.subtitle')}</h2>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('education.description')}
                        </p>
                    </div>

                    {/* Education Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                        {educations.map((edu, index) => {
                            const achievements = (t(edu.achievementsKey, { returnObjects: true }) as string[]) || [];

                            return (
                                <Card
                                    key={edu.id}
                                    onClick={() => setSelectedEducation(edu)}
                                    className={`card-professional p-6 sm:p-7 cursor-pointer hover:scale-[1.02] transition-all duration-300 group border-border/60 relative overflow-hidden ${
                                        edu.isCurrent ? 'ring-2 ring-primary/40 bg-card/95' : ''
                                    }`}
                                >
                                    {/* Current Badge Glow */}
                                    {edu.isCurrent && (
                                        <div className="absolute top-0 right-0">
                                            <div className="bg-primary text-primary-foreground text-[10px] font-extrabold uppercase px-3 py-1 rounded-bl-xl tracking-wider shadow-sm flex items-center gap-1">
                                                <Sparkles className="w-3 h-3" />
                                                <span>Actuel</span>
                                            </div>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        {/* Icon & Period */}
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                                <GraduationCap className="w-6 h-6" />
                                            </div>
                                            <Badge variant="secondary" className="font-semibold text-xs px-2.5 py-0.5 rounded-full">
                                                {edu.startDate.slice(0, 4)} — {edu.endDate === 'Present' ? 'En cours' : edu.endDate.slice(0, 4)}
                                            </Badge>
                                        </div>

                                        {/* Degree & Institution */}
                                        <div>
                                            <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                                                {t(edu.degreeKey)}
                                            </h3>
                                            <p className="text-primary font-semibold text-sm sm:text-base mt-1">
                                                {t(edu.institutionKey)}
                                            </p>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar className="w-3.5 h-3.5 text-primary" />
                                                <span>{edu.startDate.slice(0, 7)} → {edu.endDate === 'Present' ? 'Présent' : edu.endDate.slice(0, 7)}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-accent" />
                                                <span>{t(edu.locationKey)}</span>
                                            </div>
                                        </div>

                                        {/* Specialty & Description */}
                                        <div className="space-y-2 pt-1">
                                            <div className="inline-block px-2.5 py-1 rounded-md bg-secondary/80 text-xs font-semibold text-primary">
                                                {t(edu.specialtyKey)}
                                            </div>
                                            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                                                {t(edu.descriptionKey)}
                                            </p>
                                        </div>

                                        {/* Achievements pills */}
                                        {achievements.length > 0 && (
                                            <div className="flex flex-wrap gap-1.5 pt-1">
                                                {achievements.slice(0, 2).map((item, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-[11px] font-medium border-border/70">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </div>
                                        )}

                                        {/* Footer action */}
                                        <div className="flex items-center justify-between pt-3 border-t border-border/40 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                            <span>{t('education.viewDetails')}</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Detail Modal */}
                <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
                    <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl glass border-border/70 p-6 sm:p-8">
                        <DialogTitle className="sr-only">
                            {selectedEducation ? t(selectedEducation.degreeKey) : "Formation"}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Détails de la formation académique
                        </DialogDescription>

                        {selectedEducation && (
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                        <Badge variant="secondary" className="font-bold text-xs px-3 py-1 rounded-full">
                                            {selectedEducation.startDate} → {selectedEducation.endDate === 'Present' ? 'Présent' : selectedEducation.endDate}
                                        </Badge>
                                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
                                            <MapPin className="w-4 h-4 text-accent" />
                                            {t(selectedEducation.locationKey)}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                        {t(selectedEducation.degreeKey)}
                                    </h3>
                                    <p className="text-lg font-bold text-primary mt-1">
                                        {t(selectedEducation.institutionKey)}
                                    </p>
                                </div>

                                {/* Image carousel if available */}
                                {selectedEducation.images.length > 0 && (
                                    <div className="pt-2">
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {selectedEducation.images.map((img, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <div className="aspect-video rounded-xl overflow-hidden border border-border/60 bg-muted/20">
                                                            <img 
                                                                src={img} 
                                                                alt={`${t(selectedEducation.institutionKey)} image ${idx + 1}`}
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

                                {/* Specialty & Description */}
                                <div className="space-y-2">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 text-primary" />
                                        <span>Spécialité & Programme</span>
                                    </h4>
                                    <p className="text-sm font-semibold text-primary">
                                        {t(selectedEducation.specialtyKey)}
                                    </p>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {t(selectedEducation.descriptionKey)}
                                    </p>
                                </div>

                                {/* Learned Skills */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                        <span>{t('education.learnedTitle')}</span>
                                    </h4>
                                    <ul className="space-y-2">
                                        {((t(selectedEducation.learnedKey, { returnObjects: true }) as string[]) || []).map((skill, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Achievements */}
                                {((t(selectedEducation.achievementsKey, { returnObjects: true }) as string[]) || []).length > 0 && (
                                    <div className="space-y-2.5 pt-2">
                                        <h4 className="text-sm uppercase tracking-wider font-bold text-foreground flex items-center gap-2">
                                            <Award className="w-4 h-4 text-accent" />
                                            <span>{t('education.distinctionsTitle')}</span>
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {((t(selectedEducation.achievementsKey, { returnObjects: true }) as string[]) || []).map((item, idx) => (
                                                <Badge key={idx} variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-lg">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Education;
