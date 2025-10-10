import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Play, ExternalLink, Github, Calendar, Users, Code2, Target, MousePointerClick } from 'lucide-react';

const Projects = () => {
    const { t } = useTranslation();
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [showClickHint, setShowClickHint] = useState(true);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Démarrer la vidéo automatiquement
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log('Autoplay prevented:', error);
            });
        }

        // Masquer l'indice après 5 secondes
        const timer = setTimeout(() => {
            setShowClickHint(false);
        }, 300000);

        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            id: 1,
            title: "Quiz Game – Trivia App",
            category: "Education Mobile App",
            description: "A mobile application enabling individuals to create quiz sessions, share them with selected users, and provide score viewing and ranking features at the end of each session..",
            technologies: ["Ionic", "Firebase"],
            features: [
                "Organizing quizzes",
                "publishing quizzes",
                "building player communities",
                " finding friends to play with.",
                "Multilingual Interface",
                "Real-Time Push Notifications"
            ],
            challenges: [
                "Game speed",
                "Secure sessions",
                "Optimization for Low-Bandwidth Connections",
                "Secure quiz sharing",
                "Regulatory Compliancee"
            ],
            startDate: "2024-07",
            endDate: "2025-01",
            teamSize: "2 développeurs",
            role: "Full‑Stack Developer",
            status: "School project",
            users: "0",
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
        },
        {
            id: 2,
            title: "NeoChat - Private Message",
            category: "Communication Tech",
            description: "PWA solution allowing organizations to communicate even without internet access.",
            technologies: ["React", "Node.js", "MongoDB", "Web Push API"],
            features: [
                "Enables offline communication",
                "group messaging",
                " photo/video sharing",
            ],
            challenges: [
                "Secure messaging",
                "fast delivery",
                "high reliability",
                "Seamless offline/online synchronization"
            ],
            startDate: "2025-04",
            endDate: "2025-04",
            teamSize: "3 développeurs",
            role: "Full-Stack Developer",
            status: " hackathon project.",
            users: "0",
            images: [
                "/projets/projets7.png",
                "/projets/projets8.png"
            ],
            demoUrl: "",
            githubUrl: "https://gitlab.com/yiemtsa1"
        },
        {
            id: 3,
            title: "Lenjho  - selling products online",
            category: " Marketplace",
            description: "PWA that allows partners to publish promotional products or services, and users to purchase or make reservations.",
            technologies: ["Next.js", "Node.js", "Angular", "MongoDB", "Keycloak"],
            features: [
                "Create a partner account",
                "Publish offers",
                "Manage orders",
                "Invite and manage administrators in the partner account",
                "View the dashboard",
                "Make payments",
                "Make reservations"
            ],
            challenges: [
                "Optimized performance",
                " high speed",
                "secure transactions",
                "verified supplier reliability."
            ],
            startDate: "2025-05",
            endDate: "2025-08",
            teamSize: "3 développeurs",
            role: "Full-Stack Developer",
            status: "Internship project.",
            users: "0",
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
            id: 4,
            title: "trafAlert – Real‑time traffic jam detection",
            category: "Urban Tech Platform",
            description: "Web and mobile application that allows users to detect traffic jams in real-time and describes, through a chatbot, the best possible route to their destination, taking into account traffic congestion.",
            technologies: ["Ionic", "Python", "Angular", "Modele IA", "Node.js"],
            features: [
                "Detect traffic jams in real time",
                "Enter their destination through a chatbot",
                "Get the best possible route based on current traffic conditions",
            ],
            challenges: [
                "Speed of detection",
                "reliability of the results.",
            ],
            startDate: "2025-07",
            endDate: "2025-07",
            teamSize: "4 développeurs",
            role: "Mobile Developer",
            status: "hackathon project.",
            users: "0+",
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
            id: 5,
            title: "Explorateur Mboa - Application for tourists ",
            category: "tourists app",
            description: "A web application that allows tourists to easily find places such as restaurants, hotels, and leisure spots in Cameroon.",
            technologies: ["Angulaar", "Mysql", "Elasticsearch", "Kafka", "SpringBoot"],
            features: [
                "Publish points of interest",
                "manage points of interest",
                "allow tourists to book points of interest",
                "reserve points of interest, contact people to get itineraries to reach these points of interest.",

            ],
            challenges: [
                "Search optimization,",
                "secure transactions",
                "real-time tracking.",
            ],
            startDate: "2025-01",
            endDate: "2022-05",
            teamSize: "5 developers",
            role: "Backend developer",
            status: "School project",
            users: "0",
            images: [
                "/projets/projets16.png",
                "/projets/projets17.png",
                "/projets/projets18.png",
                "/projets/projets19.png",
                "/projets/projets20.png",
                "/projets/projets21.png",
                "/projets/projets22.png",
                "/projets/projets23.png",
            ],
            demoUrl: "https://demo.smartcity.gov",
            githubUrl: "https://github.com/yourname/smartcity"
        },
        {
            id: 6,
            title: "Tiago - Computer Vision",
            category: "IA tech",
            description: "Set up a pipeline allowing the Tiago robot to organize objects without having learned to do so beforehand.",
            technologies: ["Huginface", "Ros1", "Gazebo", "Tiago", "openCV"],
            features: [
                "To detect objects using computer vision",
            ],
            challenges: [
                "Implement robot simulation",
                "deploy the infrastructur",
                "and train the AI models.",
            ],
            startDate: "2025-09",
            endDate: "2026-01",
            teamSize: "3 développeurs",
            role: "Ingénieur Robotique (Simulation/Contrôle)",
            status: "School project",
            users: "0",
            images: [
                "/projets/projets14.webp",
                "/projets/projets15.png",
            ],
            demoUrl: "",
            githubUrl: "https://github.com/steeven481"
        },
    ];

    const handleCardClick = (project: any) => {
        setSelectedProject(project);
        setShowClickHint(false); // Masquer l'indice après le premier clic
    };

    return (
        <section id="projects" className="section-padding bg-secondary/20">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="heading-lg mb-6">{t('projects.title')}</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
                        {t('projects.description')}
                    </p>

                    {/* Hero Project Video */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                            {/* Vidéo de fond */}
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
                                {/* Ajoutez un fallback MP4 si possible */}
                                <source src="/projets/video.mp4" type="video/mp4" />
                                Votre navigateur ne supporte pas la lecture de vidéos.
                            </video>

                            {/* Overlay pour améliorer la lisibilité */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                <div className="text-center space-y-4 text-white">
                                    <h3 className="text-xl font-semibold">{t('projects.introvideo')}</h3>
                                    <p className="text-muted-foreground">{t('projects.descriptionVideo')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
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

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div key={project.id} className="relative">
                                {/* Animation d'apparition pour chaque carte */}
                                <Card
                                    className="card-professional p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group animate-in fade-in slide-in-from-bottom-4"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                    onClick={() => handleCardClick(project)}
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
                                            <Badge variant="secondary" className="shrink-0 text-xs">
                                                {project.category}
                                            </Badge>
                                            <div className="flex gap-1">
                                                <div className={`w-2 h-2 rounded-full ${
                                                    project.status === 'School project' ? 'bg-green-500' :
                                                        project.status === 'hackathon project' ? 'bg-yellow-500' : 'bg-blue-500'
                                                }`}></div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.slice(0, 3).map((tech) => (
                                                <Badge key={tech} variant="outline" className="text-xs">
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.technologies.length > 3 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{project.technologies.length - 3}
                                                </Badge>
                                            )}
                                        </div>

                                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Users className="w-3 h-3" />
                                                <span>{project.users}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{project.endDate.slice(0, 4)}</span>
                                            </div>
                                        </div>

                                        {/* Indicateur subtil au survol */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 pt-2">
                                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                <MousePointerClick className="w-3 h-3" />
                                                <span>Voir les détails du projet</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Project Detail Modal */}
                <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                    <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                        <DialogTitle className="sr-only">
                            {selectedProject?.title}
                        </DialogTitle>
                        {selectedProject && (
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Left: Image Carousel */}
                                <div className="space-y-4">
                                    <Carousel className="w-full">
                                        <CarouselContent>
                                            {selectedProject.images.map((image: string, index: number) => (
                                                <CarouselItem key={index}>
                                                    <div className="aspect-video rounded-lg overflow-hidden">
                                                        <img
                                                            src={image}
                                                            alt={`${selectedProject.title} - Screenshot ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </Carousel>

                                    {/* Action Buttons */}
                                    <div className="flex gap-2">
                                        <Button asChild className="flex-1">
                                            <a target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Demo Live
                                            </a>
                                        </Button>
                                        <Button variant="outline" asChild className="flex-1">
                                            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    </div>
                                </div>

                                {/* Right: Details */}
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                                            <Badge variant="secondary">{selectedProject.status}</Badge>
                                        </div>
                                        <p className="text-accent font-medium">{selectedProject.category}</p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{selectedProject.startDate} - {selectedProject.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Users className="w-4 h-4" />
                                            <span>{selectedProject.teamSize}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Code2 className="w-4 h-4" />
                                            <span>{selectedProject.role}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Target className="w-4 h-4" />
                                            <span>{selectedProject.users}</span>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-2">{t('description')}</h4>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {selectedProject.description}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('features')}</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                                                    <span className="text-muted-foreground text-sm">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('challenges')}</h4>
                                        <ul className="space-y-2">
                                            {selectedProject.challenges.map((challenge: string, index: number) => (
                                                <li key={index} className="flex items-start gap-2">
                                                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0"></div>
                                                    <span className="text-muted-foreground text-sm">{challenge}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold mb-3">{t('technologies')}</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.technologies.map((tech: string) => (
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

export default Projects;