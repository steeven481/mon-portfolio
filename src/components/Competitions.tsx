import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Trophy, Calendar, MapPin, Users, Award, Code2, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Competitions = () => {
    const { t } = useTranslation();
    const [selectedCompetition, setSelectedCompetition] = useState<any>(null);
    const [sectionRef, isSectionVisible] = useScrollAnimation({ triggerOnce: true });

    const competitions = [
        {
            id: 1,
            title: "HackVerse 2025",
            category: "National Hackathon",
            event: "École Nationale Supérieure Polytechnique de Yaoundé",
            location: "Yaoundé, Cameroun",
            date: "2025-05-15",
            duration: "24 heures",
            participants: "15+ équipes nationales",
            rank: "1ère Place (Vainqueur)",
            prize: "Prix d'Excellence + Programme de Mentorat",
            theme: "Solutions IA & Tech pour l'Afrique",
            description: "Compétition nationale de développement axée sur des solutions innovantes à fort impact. Notre équipe a conçu et déployé NeoChat, une application de messagerie instantanée résiliente fonctionnant totalement hors ligne.",
            project: {
                name: "NeoChat",
                description: "Application PWA de messagerie instantanée fonctionnant hors-ligne avec synchronisation automatique et notifications push.",
                technologies: ["React", "Node.js", "PWA", "Service Workers", "Web Push API", "IndexedDB"],
                features: [
                    "Messagerie instantanée offline-first",
                    "Synchronisation bidirectionnelle automatique à la reconnexion",
                    "Notifications push web en temps réel",
                    "Stockage local sécurisé et optimisé"
                ]
            },
            team: [
                { name: "Steeven Forester", role: "Lead Developer & Architecte" },
                { name: "Lamensi Pokan", role: "UX/UI Designer" },
                { name: "Jary Davis", role: "Backend Developer" }
            ],
            achievements: [
                "1ère place sur plus de 15 équipes nationales",
                "Prix spécial de l'innovation technologique",
                "Accompagnement et mentorat professionnel",
                "Couverture médiatique dans les forums de l'ENSP"
            ],
            skills_learned: [
                "Architecture offline-first pour marchés émergents",
                "Leadership technique sous contrainte de temps (24h)",
                "Pitch devant un jury d'experts industriels",
                "Gestion avancée des Service Workers et de la synchronisation en arrière-plan"
            ],
            images: [
                "/competition/competition1.png",
                "/competition/competition2.png",
                "/competition/competition3.png",
                "/competition/competition4.png"
            ]
        },
        {
            id: 2,
            title: "Hackathon CONIA 2025",
            category: "AI Hackathon",
            event: "Concertations Nationales sur l'Intelligence Artificielle (2ème Édition)",
            location: "Yaoundé, Cameroun",
            date: "2025-07-07",
            duration: "3 jours",
            participants: "10+ équipes sélectionnées",
            rank: "Lauréat & Prix Spécial",
            prize: "Financement + Accompagnement",
            theme: "IA pour la Mobilité Urbaine Intelligente",
            description: "Participation au hackathon national d'intelligence artificielle avec le projet trafAlert : un système innovant couplant vision par ordinateur pour la détection en temps réel des encombrements et agent conversationnel pour l'optimisation des flux de transport.",
            project: {
                name: "TrafAlert",
                description: "Application intelligente de détection de trafic routier et de recommandation d'itinéraires basée sur la vision par ordinateur et une IA conversationnelle.",
                technologies: ["Ionic", "Computer Vision (OpenCV)", "Chatbot IA", "Python", "Angular", "Node.js"],
                features: [
                    "Détection automatisée des embouteillages par analyse vidéo",
                    "Agent conversationnel guidant les usagers",
                    "Calcul dynamique d'itinéraires alternatifs optimaux",
                    "Architecture intelligente multi-agents"
                ]
            },
            team: [
                { name: "Steeven Yiemtsa", role: "Full-Stack Developer & IA" },
                { name: "Chrit Evrad", role: "Smart Contract Developer" },
                { name: "Waffeu Mbe", role: "Product Manager" },
                { name: "Dolly", role: "Data Specialist" }
            ],
            achievements: [
                "Prix spécial pour la 'Meilleure Innovation en Mobilité Urbaine'",
                "Reconnaissance du jury pour l'architecture multi-agents",
                "Opportunité d'incubation pour le développement du MVP"
            ],
            skills_learned: [
                "Déploiement de modèles de vision par ordinateur sur flux vidéo",
                "Coordination agile multidisciplinaire (IA, Dev, Produit)",
                "Stratégie de mise sur le marché d'une solution d'IA civique"
            ],
            images: [
                "/competition/competition5.png",
                "/competition/competition7.png",
                "/competition/competition6.png",
            ]
        }
    ];

    return (
        <section id="competitions" className="section-padding relative overflow-hidden bg-secondary/30 px-4 sm:px-6 lg:px-8">
            {/* Background lighting */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide relative z-10">
                <div
                    ref={sectionRef}
                    className={`transition-all duration-1000 ${
                        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-4">
                            <Trophy className="w-3.5 h-3.5" />
                            <span>{t('competitions.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-4">{t('competitions.subtitle')}</h2>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('competitions.description')}
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {competitions.map((competition) => (
                            <Card
                                key={competition.id}
                                onClick={() => setSelectedCompetition(competition)}
                                className="card-professional p-5 sm:p-7 cursor-pointer hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 group border-border/60 hover:border-primary/50 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    {/* Icon & Rank */}
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 group-hover:scale-110 transition-transform">
                                            <Trophy className="w-6 h-6" />
                                        </div>
                                        <Badge 
                                            variant="secondary"
                                            className="font-bold text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                                        >
                                            {competition.rank}
                                        </Badge>
                                    </div>

                                    {/* Title & Event */}
                                    <div>
                                        <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                                            {competition.title}
                                        </h3>
                                        <p className="text-primary font-semibold text-sm mt-1">
                                            {competition.event}
                                        </p>
                                        <p className="text-xs font-semibold text-accent mt-0.5">
                                            {competition.theme}
                                        </p>
                                    </div>

                                    {/* Meta */}
                                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5 text-primary" />
                                            <span>{new Date(competition.date).toLocaleDateString('fr-FR')} • {competition.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5 text-accent" />
                                            <span>{competition.location}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-3.5 h-3.5 text-foreground/60" />
                                            <span>{competition.participants}</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                                        {competition.description}
                                    </p>

                                    {/* Prize pill */}
                                    <div className="p-2.5 rounded-xl bg-secondary/60 flex items-center gap-2 text-xs font-semibold text-foreground">
                                        <Award className="w-4 h-4 text-amber-500 shrink-0" />
                                        <span>{competition.prize}</span>
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                    <span>Découvrir la compétition & le projet</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Competition Detail Dialog */}
                <Dialog open={!!selectedCompetition} onOpenChange={() => setSelectedCompetition(null)}>
                    <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass border-border/70 p-5 sm:p-8">
                        <DialogTitle className="sr-only">
                            {selectedCompetition?.title}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Détails de la compétition et du projet récompensé
                        </DialogDescription>

                        {selectedCompetition && (
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                        <Badge 
                                            variant="secondary" 
                                            className="font-bold text-xs px-3 py-1 rounded-full bg-amber-500/15 text-amber-700 dark:text-amber-400 border border-amber-500/30"
                                        >
                                            {selectedCompetition.rank}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground font-medium">
                                            {selectedCompetition.location} • {new Date(selectedCompetition.date).toLocaleDateString('fr-FR')}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                        {selectedCompetition.title}
                                    </h3>
                                    <p className="text-base font-bold text-primary mt-1">
                                        {selectedCompetition.event}
                                    </p>
                                    <p className="text-sm font-medium text-accent mt-0.5">
                                        Thème : {selectedCompetition.theme}
                                    </p>
                                </div>

                                {/* Carousel */}
                                {selectedCompetition.images?.length > 0 && (
                                    <div className="pt-2">
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {selectedCompetition.images.map((img: string, idx: number) => (
                                                    <CarouselItem key={idx}>
                                                        <div className="aspect-video rounded-xl overflow-hidden border border-border/60 bg-muted/20">
                                                            <img 
                                                                src={img} 
                                                                alt={`${selectedCompetition.title} photo ${idx + 1}`}
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

                                {/* Context */}
                                <div className="space-y-2">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        Contexte du Hackathon
                                    </h4>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {selectedCompetition.description}
                                    </p>
                                </div>

                                {/* Developed Project */}
                                <div className="p-5 rounded-2xl glass border border-primary/20 space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Code2 className="w-5 h-5 text-primary" />
                                        <h4 className="font-bold text-base text-foreground">
                                            Projet Primé : <span className="text-primary">{selectedCompetition.project.name}</span>
                                        </h4>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {selectedCompetition.project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {selectedCompetition.project.technologies.map((tech: string) => (
                                            <Badge key={tech} variant="outline" className="text-xs">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                {/* Key Features */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        Fonctionnalités Clés Implémentées
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedCompetition.project.features.map((feature: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Achievements */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        {t('competitions.awards')}
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedCompetition.achievements.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <Trophy className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Skills */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        {t('competitions.skillsGained')}
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedCompetition.skills_learned.map((skill: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
};

export default Competitions;
