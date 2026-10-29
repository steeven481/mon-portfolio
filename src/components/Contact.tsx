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
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Send,
    MessageCircle,
    Sparkles,
    Gitlab,
    CheckCircle2
} from "lucide-react";

const Contact = () => {
    const { t } = useTranslation();
    const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleWhatsAppClick = () => {
        const phoneNumber = "33745421660";
        const defaultMessage = "Bonjour Steeven ! J'ai consulté votre portfolio et je souhaiterais échanger avec vous.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            value: t('hero.email'),
            href: `mailto:${t('hero.email')}`
        },
        {
            icon: Phone,
            title: 'Téléphone',
            value: t('hero.phone'),
            href: `tel:${t('hero.phone').replace(/\s+/g, '')}`
        },
        {
            icon: MapPin,
            title: 'Localisation',
            value: t('hero.location'),
            href: "#"
        }
    ];

    const socialLinks = [
        {
            icon: Linkedin,
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/steeven-yiemtsa-846515310",
            color: "hover:text-blue-600 hover:border-blue-500/40",
            onClick: null
        },
        {
            icon: Github,
            name: "GitHub",
            href: "https://github.com/steeven481",
            color: "hover:text-foreground hover:border-primary/40",
            onClick: null
        },
        {
            icon: Gitlab,
            name: "GitLab",
            href: "https://gitlab.com/yiemtsa1",
            color: "hover:text-orange-500 hover:border-orange-500/40",
            onClick: null
        },
        {
            icon: MessageCircle,
            name: "WhatsApp",
            href: "#",
            color: "hover:text-emerald-500 hover:border-emerald-500/40",
            onClick: handleWhatsAppClick
        }
    ];

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message envoyé avec succès !", {
                description: "Merci pour votre message. Je vous répondrai dans les plus brefs délais."
            });
            (e.target as HTMLFormElement).reset();
        }, 800);
    };

    return (
        <section id="contact" className="section-padding bg-secondary/30 relative overflow-hidden">
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
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-primary/20 text-xs font-semibold text-primary mb-4">
                            <Mail className="w-3.5 h-3.5" />
                            <span>{t('contact.title')}</span>
                        </div>
                        <h2 className="heading-lg mb-4">{t('contact.subtitle')}</h2>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* Left Column (5 cols) */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Direct Contact Cards */}
                            <div className="space-y-3">
                                {contactInfo.map((info, index) => (
                                    <Card 
                                        key={index} 
                                        className="card-professional p-4 hover:scale-[1.02] transition-all group border-border/60"
                                    >
                                        <a
                                            href={info.href}
                                            className="flex items-center gap-4 no-underline"
                                            onClick={(e) => info.title === 'Localisation' ? e.preventDefault() : null}
                                        >
                                            <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shrink-0">
                                                <info.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                                                    {info.title}
                                                </div>
                                                <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {info.value}
                                                </div>
                                            </div>
                                        </a>
                                    </Card>
                                ))}
                            </div>

                            {/* Status & Availability Card */}
                            <Card className="card-professional p-6 border-border/60 relative overflow-hidden">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                                        {t('contact.availableNow')}
                                    </span>
                                </div>
                                <h3 className="font-bold text-base text-foreground mb-2">
                                    {t('contact.availability')}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {t('contact.availabilityText')}
                                </p>
                            </Card>

                            {/* Social Profiles */}
                            <div>
                                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
                                    {t('contact.followMe')}
                                </h3>
                                <div className="grid grid-cols-4 gap-3">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            aria-label={link.name}
                                            target={link.name !== "WhatsApp" ? "_blank" : undefined}
                                            rel={link.name !== "WhatsApp" ? "noopener noreferrer" : undefined}
                                            onClick={(e) => {
                                                if (link.onClick) {
                                                    e.preventDefault();
                                                    link.onClick();
                                                }
                                            }}
                                            className={`h-12 rounded-xl glass border border-border/60 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 shadow-sm ${link.color}`}
                                        >
                                            <link.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form (7 cols) */}
                        <div className="lg:col-span-7">
                            <Card className="card-professional p-6 sm:p-8 border-border/60 shadow-xl">
                                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                                    {t('contact.form.title')}
                                </h3>
                                <p className="text-xs sm:text-sm text-muted-foreground mb-6">
                                    {t('contact.form.response')}
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName" className="text-xs font-semibold">
                                                {t('contact.form.firstName')} *
                                            </Label>
                                            <Input
                                                id="firstName"
                                                placeholder={t('contact.form.placeholders.firstName')}
                                                required
                                                className="rounded-xl glass border-border/70 focus:border-primary"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName" className="text-xs font-semibold">
                                                {t('contact.form.lastName')} *
                                            </Label>
                                            <Input
                                                id="lastName"
                                                placeholder={t('contact.form.placeholders.lastName')}
                                                required
                                                className="rounded-xl glass border-border/70 focus:border-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-xs font-semibold">
                                            {t('contact.form.email')} *
                                        </Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder={t('contact.form.placeholders.email')}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="subject" className="text-xs font-semibold">
                                            {t('contact.form.subject')} *
                                        </Label>
                                        <Input
                                            id="subject"
                                            placeholder={t('contact.form.placeholders.subject')}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message" className="text-xs font-semibold">
                                            {t('contact.form.message')} *
                                        </Label>
                                        <Textarea
                                            id="message"
                                            placeholder={t('contact.form.placeholders.message')}
                                            rows={5}
                                            required
                                            className="rounded-xl glass border-border/70 focus:border-primary resize-none"
                                        />
                                    </div>

                                    <Button 
                                        type="submit" 
                                        size="lg" 
                                        disabled={isSubmitting}
                                        className="w-full rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all gap-2"
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
