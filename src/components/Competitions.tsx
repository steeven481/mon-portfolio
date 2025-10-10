import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Trophy, Calendar, MapPin, Users, Award, Target, Code2, MousePointerClick } from 'lucide-react';

const Competitions = () => {
    const { t } = useTranslation();
    const [selectedCompetition, setSelectedCompetition] = useState<any>(null);
    const [showClickHint, setShowClickHint] = useState(true);

    const competitions = [
        // ... vos données competitions restent les mêmes
        {
            "id": 1,
            "title": "HackVerse 2025",
            "category": "National Hackathon",
            "event": "National Higher Polytechnic School of Yaoundé",
            "location": "Yaoundé, Cameroon",
            "date": "2025-05-15",
            "duration": "24 hours",
            "participants": "15+ teams",
            "rank": "1ère plac",
            "prize": "$200 + Mentoring",
            "theme": "AI Solutions for Africa",
            "description": "National development competition focused on innovative solutions to address African challenges. Our team developed an offline messaging application.",
            "project": {
                "name": "NeoChat",
                "description": "Progressive Web App (PWA) messaging application working offline with push notifications",
                "technologies": ["React", "Node.js", "PWA", "Service Workers", "Web Push API"],
                "features": [
                    "Offline instant messaging",
                    "Automatic synchronization upon reconnection",
                    "Real-time push notifications",
                    "Progressive web app (PWA) interface",
                    "Secure local storage"
                ]
            },
            "team": [
                { "name": "Steeven Forester", "role": "Lead Developer" },
                { "name": "Lamensi Pokan", "role": "UX/UI Designer" },
                { "name": "Jary Davis", "role": "Backend Developer" }
            ],
            "achievements": [
                "1st place among 15+ national teams",
                "Special prize",
                "Mentoring program",
                "Press article in ENSP Forums"
            ],
            "skills_learned": [
                "Application optimization for emerging markets",
                "Intensive team collaboration",
                "Presentation before a jury",
                "Complex API integration",
                "PWA development with React and Node.js",
                "Offline push notification management"
            ],
            "images": [
                "/competition/competition1.png",
                "/competition/competition2.png",
                "/competition/competition3.png",
                "/competition/competition4.png"
            ]
        },
        {
            id: 2,
            title: " Hackathon CONIA 2025",
            category: "AI Hackathon",
            event: "Concertations Nationales sur l'Intelligence Artificielle 2ème Édition",
            location: "Yaounde, Cameroun",
            date: "2025-07-07",
            duration: "3 jours",
            participants: "10+ teams",
            rank: "place",
            prize: "$2000 + Mantora",
            theme: "AI Solutions for Urban Mobility",
            description: "Looking back at CONIA Hackathon 2025! We're thrilled to share our experience following our participation in the CONIA 2025 hackathon. Our mission: design an AI solution capable of detecting traffic jams and optimizing urban mobility.",
            project: {
                name: "TrafAlert",
                description: "Intelligent traffic detection and route optimization mobile application using computer vision and conversational AI ",
                technologies: ["Ionic", "Computer Vision", "Chatbot", "Python", "AI Models", "Angular", "Node.js"],
                features: [
                    "Computer vision-based traffic jam detection",
                    "Conversational AI for user interaction",
                    "Real-time route optimization",
                    "Mobile application with intuitive interface",
                    "Dual-agent intelligent architecture"
                ]
            },
            team: [
                { name: "Steeven Yiemtsa", role: "Full-Stack Developer" },
                { name: "Chrit evrad", role: "Smart Contract Developer" },
                { name: "Waffeu Mbe", role: "Product Manager" },
                { name: "Dolly", role: "Blockchain Specialist" }
            ],
            achievements: [
                "1ère place - Champion Africa Code Week 2022",
                "Prix du public pour 'Meilleure Innovation'",
                "Partenariat avec Microsoft for Startups",
                "Financement de $50K pour développement MVP",
                "Présentation au African Development Bank",
                "Couverture médiatique BBC Africa, CNN International"
            ],
            skills_learned: [
                "Successful prototype development",
                "Special recognition for innovative approach",
                "Real-time traffic detection system",
                "Dual-agent AI architecture implementation"
            ],
            images: [
                "/competition/competition5.png",
                "/competition/competition7.png",
                "/competition/competition6.png",
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

    const handleCardClick = (competition: any) => {
        setSelectedCompetition(competition);
        setShowClickHint(false); // Masquer l'indice après le premier clic
    };

    return (
        <section id="competitions" className="section-padding">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-6">{t('competitions.title')}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        {t('competitions.description')}
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

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {competitions.map((competition, index) => (
                            <div key={competition.id} className="relative">
                                {/* Animation d'apparition pour chaque carte */}
                                <Card
                                    className="card-professional p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group animate-in fade-in slide-in-from-bottom-4"
                                    style={{ animationDelay: `${index * 200}ms` }}
                                    onClick={() => handleCardClick(competition)}
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
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                                <Trophy className="w-6 h-6 text-primary" />
                                            </div>
                                            <Badge
                                                variant="secondary"
                                                className={`shrink-0 ${competition.rank.includes('1ère') ? 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' :
                                                    competition.rank.includes('2ème') ? 'bg-gray-500/10 text-gray-700 dark:text-gray-400' :
                                                        'bg-orange-500/10 text-orange-700 dark:text-orange-400'
                                                }`}
                                            >
                                                {competition.rank}
                                            </Badge>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                {competition.title}
                                            </h3>
                                            <p className="text-primary font-medium">{competition.event}</p>
                                            <p className="text-accent text-sm font-medium">{competition.theme}</p>
                                        </div>

                                        <div className="space-y-2 text-sm text-muted-foreground">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4" />
                                                <span>{new Date(competition.date).toLocaleDateString('fr-FR')} • {competition.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4" />
                                                <span>{competition.location}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Users className="w-4 h-4" />
                                                <span>{competition.participants}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm line-clamp-3">
                                            {competition.description}
                                        </p>

                                        <div className="pt-2">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Award className="w-4 h-4 text-accent" />
                                                <span className="font-medium text-accent">{competition.prize}</span>
                                            </div>
                                        </div>

                                        {/* Indicateur subtil au survol */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <MousePointerClick className="w-3 h-3" />
                                                <span>Cliquer pour les détails</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Competition Detail Modal - reste identique */}
                <Dialog open={!!selectedCompetition} onOpenChange={() => setSelectedCompetition(null)}>
                    <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                        <DialogTitle className="sr-only">
                            {selectedCompetition?.title}
                        </DialogTitle>
                        {selectedCompetition && (
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left: Image Carousel */}
                                <div className="space-y-4">
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {selectedCompetition.images.map((image: string, index: number) => (
                                                <CarouselItem key={index}>
                                                    <div className="aspect-video rounded-lg overflow-hidden">
                                                        <img
                                                            src={image}
                                                            alt={`${selectedCompetition.title} - Photo ${index + 1}`}
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
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3 className="text-2xl font-bold">{selectedCompetition.title}</h3>
                                            <Badge
                                                variant="secondary"
                                                className={
                                                    selectedCompetition.rank.includes('1ère') ? 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400' :
                                                        selectedCompetition.rank.includes('2ème') ? 'bg-gray-500/10 text-gray-700 dark:text-gray-400' :
                                                            'bg-orange-500/10 text-orange-700 dark:text-orange-400'
                                                }
                                            >
                                                {selectedCompetition.rank}
                                            </Badge>
                                        </div>
                                        <p className="text-primary font-semibold text-lg">{selectedCompetition.event}</p>
                                        <p className="text-accent font-medium">{selectedCompetition.theme}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(selectedCompetition.date).toLocaleDateString('fr-FR')}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{selectedCompetition.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{selectedCompetition.participants}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Award className="w-4 h-4" />
                                            <span>{selectedCompetition.duration}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">{t('description')}</h4>
                                        <p className="text-muted-foreground leading-relaxed text-sm">
                                            {selectedCompetition.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Code2 className="w-4 h-4" />
                                            Projet Développé
                                        </h4>
                                        <div className="bg-secondary/50 rounded-lg p-4 space-y-3">
                                            <h5 className="font-medium text-primary">{selectedCompetition.project.name}</h5>
                                            <p className="text-sm text-muted-foreground">{selectedCompetition.project.description}</p>
                                            <div className="flex flex-wrap gap-1">
                                                {selectedCompetition.project.technologies.map((tech: string) => (
                                                    <Badge key={tech} variant="outline" className="text-xs">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('features')}</h4>
                                        <ul className="space-y-2">
                                            {selectedCompetition.project.features.map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">Récompenses & Reconnaissance</h4>
                                        <ul className="space-y-2">
                                            {selectedCompetition.achievements.map((achievement: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <Trophy className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                                                    <span className="text-muted-foreground text-sm">{achievement}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">Compétences Acquises</h4>
                                        <ul className="space-y-2">
                                            {selectedCompetition.skills_learned.map((skill: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                                                    <span className="text-muted-foreground text-sm">{skill}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">Équipe</h4>
                                        <div className="space-y-2">
                                            {selectedCompetition.team.map((member: any, index: number) => (
                                                <div key={index} className="flex items-center justify-between text-sm">
                                                    <span className="font-medium">{member.name}</span>
                                                    <span className="text-muted-foreground">{member.role}</span>
                                                </div>
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

export default Competitions;