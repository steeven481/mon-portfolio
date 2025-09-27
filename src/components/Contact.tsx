import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Send,
    MessageCircle,
    Sparkles, Gitlab
} from "lucide-react";

const Contact = () => {
    const { t } = useTranslation();
    const [elementRef, isVisible] = useScrollAnimation({ triggerOnce: true });

    // Fonction pour envoyer un message WhatsApp
    const handleWhatsAppClick = () => {
        // Remplacez par votre numéro de téléphone (format international sans +)
        const phoneNumber = "237653473747"; // Exemple pour Cameroun
        const defaultMessage = "Bonjour Yiemtsa! Je suis intéressé par vos services et je souhaiterais discuter d'un projet.";

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
            href: `tel:${t('hero.phone').replace(/\D/g, '')}`
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
            icon: Github,
            name: "GitHub",
            href: "https://github.com/steeven481",
            color: "hover:text-gray-900 dark:hover:text-white",
            onClick: null // Pas de fonction onClick spéciale
        },
        {
            icon: Gitlab,
            name: "Gitlab",
            href: "https://gitlab.com/yiemtsa1",
            color: "hover:text-gray-900 dark:hover:text-white",
            onClick: null
        },
        {
            icon: Linkedin,
            name: "LinkedIn",
            href: "https://linkedin.com/in/yourprofile", // Remplacez par votre vrai lien LinkedIn
            color: "hover:text-blue-600",
            onClick: null
        },
        {
            icon: MessageCircle,
            name: "WhatsApp",
            href: "#", // Gardez # car nous utilisons onClick
            color: "hover:text-green-600",
            onClick: handleWhatsAppClick // Fonction WhatsApp
        }
    ];

    // Fonction pour gérer les clics sur les liens sociaux
    const handleSocialClick = (link: any, event: React.MouseEvent) => {
        // Si le lien a une fonction onClick personnalisée, l'utiliser
        if (link.onClick) {
            event.preventDefault();
            link.onClick();
        }
        // Sinon, le comportement normal du lien s'appliquera
    };

    return (
        <section id="contact" className="section-padding bg-secondary/30">
            <div className="container-narrow">
                <div
                    ref={elementRef}
                    className={`transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <div className="text-center mb-16">
                        <h2 className="heading-lg mb-6">{t('contact.title')}</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {t('contact.description')}
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="heading-md mb-6">{t('contact.info')}</h3>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <Card key={index} className="card-professional p-4 hover:scale-105 transition-transform group cursor-pointer">
                                            <a
                                                href={info.href}
                                                className="flex items-center gap-4 no-underline"
                                                onClick={(e) => info.title === 'Localisation' ? e.preventDefault() : null}
                                            >
                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center relative">
                                                    <info.icon className="w-5 h-5 text-primary" />
                                                    <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <Sparkles className="w-3 h-3 text-primary" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-medium text-sm text-muted-foreground">
                                                        {info.title}
                                                    </div>
                                                    <div className="text-foreground hover:text-primary transition-[var(--transition)]">
                                                        {info.value}
                                                    </div>
                                                </div>
                                            </a>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h3 className="text-lg font-semibold mb-4">{t('contact.followMe')}</h3>
                                <div className="flex gap-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.href}
                                            aria-label={link.name}
                                            className={`w-12 h-12 bg-card border border-border rounded-lg flex items-center justify-center transition-[var(--transition)] hover:scale-110 ${link.color}`}
                                            onClick={(e) => handleSocialClick(link, e)}
                                            target={link.name !== "WhatsApp" ? "_blank" : undefined}
                                            rel={link.name !== "WhatsApp" ? "noopener noreferrer" : undefined}
                                        >
                                            <link.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Availability */}
                            <Card className="card-professional p-6 hover:scale-105 transition-transform">
                                <h3 className="font-semibold mb-2">{t('contact.availability')}</h3>
                                <p className="text-muted-foreground text-sm mb-3">
                                    {t('contact.availabilityText')}
                                </p>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                    <span className="text-sm text-green-600 font-medium">{t('contact.availableNow')}</span>
                                </div>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card className="card-professional p-8 hover:scale-[1.01] transition-transform">
                            <h3 className="heading-md mb-6">{t('contact.form.title')}</h3>
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">{t('contact.form.firstName')} *</Label>
                                        <Input
                                            id="firstName"
                                            placeholder={t('contact.form.placeholders.firstName')}
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">{t('contact.form.lastName')} *</Label>
                                        <Input
                                            id="lastName"
                                            placeholder={t('contact.form.placeholders.lastName')}
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">{t('contact.form.email')} *</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder={t('contact.form.placeholders.email')}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="subject">{t('contact.form.subject')} *</Label>
                                    <Input
                                        id="subject"
                                        placeholder={t('contact.form.placeholders.subject')}
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">{t('contact.form.message')} *</Label>
                                    <Textarea
                                        id="message"
                                        placeholder={t('contact.form.placeholders.message')}
                                        rows={5}
                                        required
                                    />
                                </div>

                                <Button type="submit" variant="hero" size="lg" className="w-full hover:scale-105 transition-transform">
                                    <Send className="w-5 h-5" />
                                    {t('contact.form.send')}
                                </Button>

                                <p className="text-xs text-muted-foreground text-center">
                                    {t('contact.form.response')}
                                </p>
                            </form>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;