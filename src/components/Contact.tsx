import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";
import {
    MapPin,
    Github,
    Linkedin,
    Send,
    MessageSquare,
    Gitlab,
    CheckCircle2,
    ShieldCheck
} from "lucide-react";

const Contact = () => {
    const { t } = useTranslation();
    const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactHighlights = [
        {
            icon: MapPin,
            title: t('contact.locationLabel'),
            value: t('contact.locationValue'),
            href: "#"
        },
        {
            icon: Linkedin,
            title: t('contact.linkedinLabel'),
            value: t('contact.linkedinValue'),
            href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310"
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310",
            label: "Connecter sur LinkedIn",
            color: "hover:text-blue-600 hover:border-blue-500/40"
        },
        {
            icon: Github,
            name: "GitHub",
            href: "https://github.com/steeven481",
            label: "Consulter GitHub",
            color: "hover:text-foreground hover:border-primary/40"
        },
        {
            icon: Gitlab,
            name: "GitLab",
            href: "https://gitlab.com/yiemtsa1",
            label: "Consulter GitLab",
            color: "hover:text-orange-500 hover:border-orange-500/40"
        }
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message envoyé avec succès !", {
                description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais directement par email."
            });
            (e.target as HTMLFormElement).reset();
        }, 700);
    };

    return (
        <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Ambient glow */}
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-wide relative z-10">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-3 sm:mb-4">
                            <MessageSquare className="w-3.5 h-3.5" />
                            <span>{t('contact.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{t('contact.subtitle')}</h2>
                        <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Left Column (5 cols on desktop, full on mobile) */}
                        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                            {/* Contact Info Highlights */}
                            <div className="space-y-3">
                                {contactHighlights.map((info, index) => (
                                    <Card 
                                        key={index} 
                                        className="card-professional p-4 hover:scale-[1.02] active:scale-[0.99] transition-all group border-border/60"
                                    >
                                        <a
                                            href={info.href}
                                            target={info.href.startsWith('http') ? '_blank' : undefined}
                                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="flex items-center gap-3.5 no-underline"
                                            onClick={(e) => info.href === '#' ? e.preventDefault() : null}
                                        >
                                            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div className="min-w-0">
                                                <div className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                                                    {info.title}
                                                </div>
                                                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors truncate">
                                                    {info.value}
                                                </div>
                                            </div>
                                        </a>
                                    </Card>
                                ))}
                            </div>

                            {/* Status & Availability Card */}
                            <Card className="card-professional p-5 sm:p-6 border-border/60 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-2.5">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                        {t('contact.availableNow')}
                                    </span>
                                </div>
                                <h3 className="font-bold text-sm sm:text-base text-foreground mb-1.5">
                                    {t('contact.availability')}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {t('contact.availabilityText')}
                                </p>
                                <div className="mt-3 pt-3 border-t border-border/40 flex items-center gap-2 text-xs text-muted-foreground">
                                    <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                                    <span>Échanges confidentiels et réponses rapides</span>
                                </div>
                            </Card>

                            {/* Professional Profiles */}
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                    {t('contact.followMe')}
                                </h3>
                                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            aria-label={link.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`h-12 rounded-xl glass border border-border/60 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm text-xs font-semibold ${link.color}`}
                                        >
                                            <link.icon className="w-4 h-4" />
                                            <span>{link.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form (7 cols on desktop, full on mobile) */}
                        <div className="lg:col-span-7">
                            <Card className="card-professional p-5 sm:p-8 border-border/60 shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                                    {t('contact.form.title')}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-5 sm:mb-6">
                                    {t('contact.form.response')}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="firstName" className="text-xs font-semibold">
                                                {t('contact.form.firstName')} *
                                            </Label>
                                            <Input
                                                id="firstName"
                                                placeholder={t('contact.form.placeholders.firstName')}
                                                required
                                                className="rounded-xl glass border-border/70 focus:border-primary text-base sm:text-sm h-11"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="lastName" className="text-xs font-semibold">
                                                {t('contact.form.lastName')} *
                                            </Label>
                                            <Input
                                                id="lastName"
                                                placeholder={t('contact.form.placeholders.lastName')}
                                                required
                                                className="rounded-xl glass border-border/70 focus:border-primary text-base sm:text-sm h-11"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="email" className="text-xs font-semibold">
                                            {t('contact.form.email')} *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder={t('contact.form.placeholders.email')}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary text-base sm:text-sm h-11"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="subject" className="text-xs font-semibold">
                                            {t('contact.form.subject')} *
                                        </Label>
                                        <Input
                                            id="subject"
                                            placeholder={t('contact.form.placeholders.subject')}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary text-base sm:text-sm h-11"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="message" className="text-xs font-semibold">
                                            {t('contact.form.message')} *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder={t('contact.form.placeholders.message')}
                                            rows={4}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary resize-none text-base sm:text-sm p-3"
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        size="lg" 
                                        disabled={isSubmitting}
                                        className="w-full h-12 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all gap-2"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>{isSubmitting ? "Envoi en cours..." : t('contact.form.send')}</span>
                                    </Button>
                                </form>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
