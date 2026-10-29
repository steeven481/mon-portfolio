import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github, Calendar, Users, Code2, Target, Sparkles, ArrowRight, Bot } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  id: number;
  title: string;
  category: string;
  filterTag: 'ai' | 'web' | 'mobile' | 'robotics';
  description: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  startDate: string;
  endDate: string;
  teamSize: string;
  role: string;
  status: string;
  users?: string;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const Projects = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [sectionRef, isSectionVisible] = useScrollAnimation({ triggerOnce: true });
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        }
    }, []);

    const projects: Project[] = [
        {
            id: 0,
            title: "Système RAG Politique Fiable",
            category: "Intelligence Artificielle & RAG",
            filterTag: "ai",
            description: "Conception et déploiement chez Capgemini d'un système RAG (Retrieval-Augmented Generation) politique garantissant des informations vérifiées, fiables et traçables avec élimination des hallucinations.",
            technologies: ["Python", "LangChain", "Vector DB (Chroma/FAISS)", "LLM", "FastAPI", "Fact-Checking", "NLP"],
            features: [
                "Indexation sémantique avancée de corpus politiques et législatifs volumineux",
                "Mécanismes stricts de fact-checking et de vérification des sources",
                "Restitution synthétique avec citations et preuves documentaires",
                "Pipeline d'orchestration LLM avec garde-fous de neutralité et de véracité",
                "API REST haute performance développée sous FastAPI"
            ],
            challenges: [
                "Élimination des hallucinations sur des données politiques sensibles",
                "Gestion de la granularité des embeddings et scoring de confiance",
                "Garantie de la neutralité et de l'intégrité des réponses fournies",
                "Optimisation du temps de réponse lors du retrieval vectoriel"
            ],
            startDate: "2025-09",
            endDate: "2026-02",
            teamSize: "Équipe IA & Data",
            role: "Ingénieur IA Stagiaire (Capgemini)",
            status: "Projet Capgemini",
            users: "Entreprise",
            images: [],
            githubUrl: "https://github.com/steeven481"
        },
        {
            id: 3,
            title: "Lenjho – Marketplace & Réservations",
            category: "Plateforme PWA & E-commerce",
            filterTag: "web",
            description: "Application PWA permettant aux partenaires de publier des produits promotionnels et aux utilisateurs d'acheter et de réserver en ligne en toute sécurité.",
            technologies: ["Angular (RxJS)", "Node.js", "MongoDB", "Keycloak", "CI/CD"],
            features: [
                "Espace partenaires avec gestion des catalogues et commandes",
                "Authentification et autorisations centralisées via Keycloak",
                "Dashboard analytique en temps réel",
                "Paiements en ligne sécurisés et gestion des réservations",
                "Architecture PWA avec fonctionnement hors-ligne partiel"
            ],
            challenges: [
                "Optimisation des performances avec gain de 40% sur le temps de chargement",
                "Sécurisation des transactions et conformité des paiements",
                "Scalabilité pour supporter plus de 100 000 utilisateurs actifs"
            ],
            startDate: "2025-05",
            endDate: "2025-08",
            teamSize: "3 développeurs",
            role: "Développeur Full-Stack",
            status: "Projet Professionnel",
            users: "100 000+",
            images: [
                "/projets/projets9.jpeg",
                "/projets/projets11.png",
                "/projets/projets12.png",
                "/projets/projets13.png",
            ],
            demoUrl: "",
            githubUrl: "https://gitlab.com/yiemtsa1"
        },
        {
            id: 2,
            title: "NeoChat – Messagerie Sécurisée Offline",
            category: "Communication Tech & PWA",
            filterTag: "web",
            description: "Solution PWA primée permettant aux organisations et communautés de communiquer instantanément même en cas de rupture de connexion Internet.",
            technologies: ["React", "Node.js", "MongoDB", "Web Push API", "Service Workers"],
            features: [
                "Messagerie instantanée fonctionnant hors-ligne (Offline-first)",
                "Synchronisation automatique et transparente dès reconnexion",
                "Partage multimédia (photos, documents) optimisé",
                "Notifications push temps réel via Web Push API"
            ],
            challenges: [
                "Synchronisation bidirectionnelle résiliente sans perte de messages",
                "Chiffrement local et sécurité des données hors ligne",
                "Optimisation de la bande passante pour réseaux émergents"
            ],
            startDate: "2025-04",
            endDate: "2025-04",
            teamSize: "3 développeurs",
            role: "Lead Developer (1ère Place Hackathon)",
            status: "Hackathon Winner",
            users: "Communautaire",
            images: [
                "/projets/projets7.png",
                "/projets/projets8.png"
            ],
            demoUrl: "",
            githubUrl: "https://gitlab.com/yiemtsa1"
        },
        {
            id: 4,
            title: "trafAlert – Détection de Trafic & IA",
            category: "Mobilité Urbaine & IA",
            filterTag: "ai",
            description: "Application intelligente couplant vision par ordinateur et chatbot conversationnel pour détecter les embouteillages en temps réel et recommander le meilleur itinéraire.",
            technologies: ["Computer Vision", "Python", "Chatbot IA", "Angular", "Ionic", "Node.js"],
            features: [
                "Détection des congestions routières par vision artificielle",
                "Agent conversationnel guidant l'utilisateur sur son trajet",
                "Calcul dynamique et optimisation des itinéraires",
                "Application mobile intuitive cross-platform"
            ],
            challenges: [
                "Traitement vidéo en temps réel sur flux distribués",
                "Fiabilité des prédictions d'encombrement",
                "Architecture dual-agent intelligente"
            ],
            startDate: "2025-07",
            endDate: "2025-07",
            teamSize: "4 développeurs",
            role: "Développeur Mobile & IA",
            status: "Hackathon CONIA",
            users: "Public",
            images: [
                "/projets/1.jpeg",
                "/projets/2.jpeg",
                "/projets/3.jpeg",
                "/projets/4.jpeg",
            ],
            demoUrl: "",
            githubUrl: "https://gitlab.com/yiemtsa1"
        },
        {
            id: 6,
            title: "Tiago Robot – Vision & Manipulation",
            category: "Robotique & Computer Vision",
            filterTag: "robotics",
            description: "Pipeline robotique autonome permettant au robot Tiago de reconnaître et de réarranger des objets dans son environnement sans apprentissage préalable spécifique.",
            technologies: ["ROS1", "Gazebo", "OpenCV", "Tiago Robot", "Python", "Hugging Face"],
            features: [
                "Détection et segmentation d'objets 3D par vision par ordinateur",
                "Contrôle asservi et planification de trajectoire du bras manipulateur",
                "Simulation complète et validation sous Gazebo",
                "Pipeline d'inférence temps réel"
            ],
            challenges: [
                "Précision de préhension sur objets aux formes variées",
                "Stabilité de la simulation dynamique sous ROS/Gazebo",
                "Coordination vision-action sans collision"
            ],
            startDate: "2025-09",
            endDate: "2026-01",
            teamSize: "3 ingénieurs",
            role: "Ingénieur Robotique & Simulation (UTBM)",
            status: "Projet de Fin d'Études",
            users: "Recherche / Académique",
            images: [
                "/projets/projets14.webp",
                "/projets/projets15.png",
            ],
            demoUrl: "",
            githubUrl: "https://github.com/steeven481"
        },
        {
            id: 1,
            title: "Quiz Game – Trivia Interactive",
            category: "Mobile App & Éducation",
            filterTag: "mobile",
            description: "Application mobile interactive de quiz avec classement en temps réel, création de sessions personnalisées et mode multijoueur.",
            technologies: ["Ionic", "Firebase", "TypeScript", "Realtime DB"],
            features: [
                "Création, publication et partage instantané de quiz",
                "Gestion de communauté de joueurs et classements en direct",
                "Interface multilingue et notifications push",
                "Correction détaillée à la fin de chaque session"
            ],
            challenges: [
                "Faible latence lors des sessions de jeu simultanées",
                "Sécurisation des réponses et synchronisation temps réel",
                "Optimisation sur connexions mobiles à faible débit"
            ],
            startDate: "2024-07",
            endDate: "2025-01",
            teamSize: "2 développeurs",
            role: "Full-Stack Developer",
            status: "Projet Académique",
            users: "Étudiants",
            images: [
                "/projets/projets1.png",
                "/projets/projet2.jpg",
                "/projets/projets3.png",
                "/projets/projets4.png",
                "/projets/projets5.png",
                "/projets/projets6.png"
            ],
            demoUrl: "",
            githubUrl: "https://gitlab.com/yiemtsa1"
        }
    ];

    const filteredProjects = projects.filter(p => {
        if (activeFilter === 'all') return true;
        return p.filterTag === activeFilter;
    });

    return (
        <section id="projects" className="section-padding relative overflow-hidden">
            {/* Background lighting */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide relative z-10">
                <div
                    ref={sectionRef}
                    className={`transition-all duration-1000 ${
                        isSectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-4">
                            <Code2 className="w-3.5 h-3.5" />
                            <span>{t('projects.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-4">{t('projects.subtitle')}</h2>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('projects.description')}
                        </p>

                        {/* Filter Tabs */}
                        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
                            {[
                                { key: 'all', label: 'Tous les projets' },
                                { key: 'ai', label: 'Intelligence Artificielle & RAG' },
                                { key: 'web', label: 'Web & PWA' },
                                { key: 'mobile', label: 'Mobile' },
                                { key: 'robotics', label: 'Robotique' },
                            ].map(tab => (
                                <Button
                                    key={tab.key}
                                    variant={activeFilter === tab.key ? 'default' : 'outline'}
                                    size="sm"
                                    onClick={() => setActiveFilter(tab.key)}
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

                    {/* Featured Video Showcase */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-border/60 shadow-xl group">
                            <video
                                ref={videoRef}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-cover"
                                preload="auto"
                            >
                                <source src="/projets/video.webm" type="video/webm" />
                                <source src="/projets/video.mp4" type="video/mp4" />
                            </video>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6 sm:p-8">
                                <div className="space-y-2 text-white">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-xs font-semibold">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        <span>Projets en Action</span>
                                    </div>
                                    <h3 className="text-lg sm:text-2xl font-bold">{t('projects.introvideo')}</h3>
                                    <p className="text-sm text-gray-300 max-w-xl">{t('projects.descriptionVideo')}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {filteredProjects.map((project) => (
                            <Card
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                className="card-professional p-6 sm:p-7 cursor-pointer hover:scale-[1.02] transition-all duration-300 group border-border/60 hover:border-primary/50 flex flex-col justify-between"
                            >
                                <div className="space-y-4">
                                    {/* Category & Status */}
                                    <div className="flex items-center justify-between gap-2">
                                        <Badge variant="secondary" className="text-xs font-semibold px-2.5 py-0.5 rounded-full">
                                            {project.category}
                                        </Badge>
                                        <span className="text-[11px] font-semibold text-primary">
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="font-bold text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors leading-snug">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3 mt-2 leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>

                                    {/* Tech badges */}
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {project.technologies.slice(0, 4).map(tech => (
                                            <Badge 
                                                key={tech} 
                                                variant="outline" 
                                                className="text-[11px] font-medium border-border/70"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <Badge variant="outline" className="text-[11px] font-medium text-muted-foreground">
                                                +{project.technologies.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                </div>

                                {/* Card Footer */}
                                <div className="pt-4 mt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                                    <span>Explorer le projet</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Project Detail Dialog */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl glass border-border/70 p-6 sm:p-8">
                        <DialogTitle className="sr-only">
                            {selectedProject?.title}
                        </DialogTitle>
                        <DialogDescription className="sr-only">
                            Détails du projet sélectionné
                        </DialogDescription>

                        {selectedProject && (
                            <div className="space-y-6">
                                {/* Header */}
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                                        <Badge variant="secondary" className="font-bold text-xs px-3 py-1 rounded-full">
                                            {selectedProject.category}
                                        </Badge>
                                        <span className="text-xs font-semibold text-primary">
                                            {selectedProject.status} • {selectedProject.startDate.slice(0, 4)}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-base font-semibold text-primary mt-1">
                                        Rôle : {selectedProject.role}
                                    </p>
                                </div>

                                {/* Carousel if images exist */}
                                {selectedProject.images.length > 0 && (
                                    <div className="pt-2">
                                        <Carousel className="w-full">
                                            <CarouselContent>
                                                {selectedProject.images.map((img, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <div className="aspect-video rounded-xl overflow-hidden border border-border/60 bg-muted/20">
                                                            <img 
                                                                src={img} 
                                                                alt={`${selectedProject.title} screenshot ${idx + 1}`}
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

                                {/* Links */}
                                <div className="flex flex-wrap gap-3 pt-1">
                                    {selectedProject.githubUrl && (
                                        <Button variant="outline" size="sm" asChild className="rounded-xl gap-2">
                                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4" />
                                                <span>{t('projects.viewCode')}</span>
                                            </a>
                                        </Button>
                                    )}
                                    {selectedProject.demoUrl && (
                                        <Button size="sm" asChild className="rounded-xl gap-2">
                                            <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4" />
                                                <span>{t('projects.liveDemo')}</span>
                                            </a>
                                        </Button>
                                    )}
                                </div>

                                {/* Description */}
                                <div className="space-y-2">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        Présentation
                                    </h4>
                                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        {t('projects.keyFeatures')}
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProject.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Challenges */}
                                <div className="space-y-3">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        {t('projects.techChallenges')}
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProject.challenges.map((challenge, idx) => (
                                            <li key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                                                <span>{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div className="space-y-2 pt-2">
                                    <h4 className="text-sm uppercase tracking-wider font-bold text-foreground">
                                        Technologies & Architecture
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.technologies.map(tech => (
                                            <Badge key={tech} variant="secondary" className="text-xs font-semibold px-3 py-1 rounded-lg">
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

export default Projects;
