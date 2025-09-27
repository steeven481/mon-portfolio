import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, Eye, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
    const { t } = useTranslation();
    const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });

    const handleScrollToNext = () => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    };

    // Fonction pour scroller vers la section projets
    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    // Fonction pour télécharger le CV
    const handleDownloadCV = () => {
        // Chemin vers le fichier PDF dans le dossier public
        const cvUrl = '/CV_Forester steeven_yiemtsa.pdf';

        // Créer un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV_Forester steeven_yiemtsa.pdf'; // Nom du fichier téléchargé
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background"></div>

            <div className="container-wide section-padding relative z-10">
                <div
                    ref={elementRef}
                    className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <h1 className="heading-xl">
                                <span className="text-gradient">YIEMTSA STEEVEN</span>
                            </h1>
                            <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                                {t('hero.title')}
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-lg">
                                {t('hero.description')}
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{t('hero.location')}</span>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-2 sm:gap-6">
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-primary" />
                                    <span>{t('hero.phone')}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-primary" />
                                    <span>{t('hero.email')}</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                variant="hero"
                                size="lg"
                                className="rounded-xl hover:scale-105 transition-transform"
                                onClick={handleScrollToProjects}
                            >
                                <Eye className="w-5 h-5" />
                                {t('hero.cta.projects')}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="rounded-xl hover:scale-105 transition-transform"
                                onClick={handleDownloadCV}
                            >
                                <Download className="w-5 h-5" />
                                {t('hero.cta.download')}
                            </Button>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden card-professional">
                                <img
                                    src={profileImage}
                                    alt={t('hero.imageAlt')}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse animation-delay-75"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={handleScrollToNext}
                    className="text-muted-foreground hover:text-primary transition-[var(--transition)] animate-bounce"
                    aria-label={t('hero.scrollLabel')}
                >
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-sm">{t('hero.scrollText')}</span>
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;