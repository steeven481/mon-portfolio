import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Download, Eye, ChevronDown, Sparkles, Building2, GraduationCap, ArrowUpRight, MessageSquare, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile-image.jpg";

const Hero = () => {
    const { t } = useTranslation();
    const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });

    const handleScrollToNext = () => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        projectsSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleScrollToContact = () => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
    };

    const handleDownloadCV = () => {
        const cvUrl = '/CV_Forester steeven_yiemtsa.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV_Forester steeven_yiemtsa.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16">
            {/* Mesh gradient background */}
            <div className="absolute inset-0 mesh-gradient pointer-events-none" />
            
            {/* Animated glowing orbs */}
            <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-accent/15 rounded-full blur-3xl animate-float pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide section-padding relative z-10 w-full px-4 sm:px-6 lg:px-8">
                <div
                    ref={elementRef}
                    className={`grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Content Column (7 cols on desktop) */}
                    <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left order-2 lg:order-1">
                        {/* Status Pills */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary shadow-sm hover:scale-105 transition-transform cursor-default">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                <span>{t('hero.badge')}</span>
                            </div>

                            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/80 text-xs font-medium text-muted-foreground border border-border/50">
                                <Building2 className="w-3.5 h-3.5 text-accent" />
                                <span>NAOS</span>
                                <span className="text-border">•</span>
                                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                                <span>GEM</span>
                            </div>
                        </div>

                        {/* Main Headings */}
                        <div className="space-y-2.5 sm:space-y-3">
                            <h1 className="heading-xl tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                                <span className="text-foreground">STEEVEN </span>
                                <span className="text-gradient">YIEMTSA</span>
                            </h1>
                            <div className="space-y-1">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/90 leading-tight">
                                    {t('hero.title')}
                                </h2>
                                <p className="text-sm sm:text-base lg:text-lg text-primary font-medium flex items-center justify-center lg:justify-start gap-2 pt-0.5">
                                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                                    <span>{t('hero.subtitle')}</span>
                                </p>
                            </div>
                            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed pt-1 sm:pt-2 mx-auto lg:mx-0">
                                {t('hero.description')}
                            </p>
                        </div>

                        {/* Trust Badges - Mobile Optimized */}
                        <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-lg mx-auto lg:mx-0 pt-1">
                            <div className="p-2 sm:p-3 rounded-xl glass border border-border/50 text-center hover:border-primary/40 transition-colors">
                                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-semibold">Poste Actuel</div>
                                <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">SAP Product Mgr</div>
                                <div className="text-[10px] sm:text-xs text-primary font-semibold">@ NAOS</div>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl glass border border-border/50 text-center hover:border-primary/40 transition-colors">
                                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-semibold">Formation</div>
                                <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">Master SI & PM</div>
                                <div className="text-[10px] sm:text-xs text-primary font-semibold">@ GEM</div>
                            </div>
                            <div className="p-2 sm:p-3 rounded-xl glass border border-border/50 text-center hover:border-primary/40 transition-colors">
                                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground font-semibold">Track Record</div>
                                <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">IA & Manuf.</div>
                                <div className="text-[10px] sm:text-xs text-primary font-semibold truncate">Capgemini • Stellantis</div>
                            </div>
                        </div>

                        {/* Location / Direct Note (without phone or email) */}
                        <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-muted-foreground pt-1">
                            <MapPin className="w-4 h-4 text-accent shrink-0" />
                            <span>France</span>
                            <span className="text-border">•</span>
                            <span className="text-primary font-medium">{t('hero.contactViaForm')}</span>
                        </div>

                        {/* Action Buttons - Mobile Ergonomic */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-12 rounded-xl bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:bg-right text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] group gap-2 font-semibold"
                                onClick={handleScrollToProjects}
                            >
                                <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>{t('hero.cta.projects')}</span>
                                <Sparkles className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                            </Button>
                            
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto h-12 rounded-xl glass border-border/70 hover:bg-primary/5 hover:border-primary/40 hover:text-primary transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] gap-2 font-medium"
                                onClick={handleScrollToContact}
                            >
                                <MessageSquare className="w-5 h-5 text-primary" />
                                <span>{t('hero.cta.contact')}</span>
                            </Button>

                            <Button
                                variant="ghost"
                                size="lg"
                                className="w-full sm:w-auto h-12 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/60 gap-1.5 font-medium"
                                onClick={handleDownloadCV}
                            >
                                <Download className="w-4 h-4 text-primary" />
                                <span>{t('hero.cta.download')}</span>
                            </Button>
                        </div>
                    </div>

                    {/* Visual / Image Column (5 cols on desktop, top on mobile) */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
                        <div className="relative group max-w-[280px] sm:max-w-sm lg:max-w-md w-full">
                            {/* Ambient gradient glow */}
                            <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-primary/30 via-accent/30 to-primary/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70 group-hover:opacity-100" />
                            
                            {/* Circular profile container */}
                            <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden ring-4 ring-background/80 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
                                <img
                                    src={profileImage}
                                    alt={t('hero.imageAlt')}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-30 group-hover:opacity-10 transition-opacity duration-500" />
                            </div>
                            
                            {/* Floating Micro-Badge Top Right */}
                            <div className="absolute -top-1 right-1 sm:-top-2 sm:right-4 glass px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-lg border border-border/60 animate-float-slow flex items-center gap-2">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-[10px] sm:text-xs">
                                    SAP
                                </div>
                                <div className="text-left">
                                    <div className="text-[9px] sm:text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Product Mgr</div>
                                    <div className="text-[11px] sm:text-xs font-semibold text-foreground">NAOS</div>
                                </div>
                            </div>

                            {/* Floating Micro-Badge Bottom Left */}
                            <div className="absolute -bottom-1 left-1 sm:-bottom-2 sm:left-4 glass px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-2xl shadow-lg border border-border/60 animate-float flex items-center gap-2">
                                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-accent/15 flex items-center justify-center text-accent font-bold text-[10px] sm:text-xs">
                                    GEM
                                </div>
                                <div className="text-left">
                                    <div className="text-[9px] sm:text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Master SI & PM</div>
                                    <div className="text-[11px] sm:text-xs font-semibold text-foreground">Grenoble EM</div>
                                </div>
                            </div>

                            {/* Floating Decorative Dots */}
                            <div className="absolute top-1/2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-primary/40 rounded-full blur-[1px] animate-pulse" />
                            <div className="absolute top-1/4 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent/40 rounded-full blur-[1px] animate-pulse" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator (Hidden on small mobile to save vertical real estate) */}
            <div className="hidden sm:block absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                <button
                    onClick={handleScrollToNext}
                    className="group flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-all duration-300"
                    aria-label={t('hero.scrollLabel')}
                >
                    <span className="text-[11px] font-semibold tracking-wider uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                        {t('hero.scrollText')}
                    </span>
                    <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 group-hover:border-primary/60 transition-colors flex justify-center pt-1.5">
                        <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default Hero;
