import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation  
      nav: {
        home: 'Home',
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        competitions: 'Competitions',
        skills: 'Skills',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        name: 'YOUR NAME',
        title: 'Engineering student in computer science',
        description: 'With two years of proven expertise in creating intuitive and high-performance applications for Android and the web, as well as a specialization in artificial intelligence (computer vision).',
        location: '2 Ernest Duvillars Street, Belfort, France (90000)',
        phone: '(+33) 74 54 21 660',
        email: 'steeven.yiemtsa-fopa@utbm.fr',
        imageAlt: 'Profile photo - Web & Mobile Developer',
        scrollText: 'Scroll to discover',
        scrollLabel: 'Scroll down',
        cta: {
          projects: 'View my projects',
          download: 'Download my CV'
        }
      },
      // About Section
      about: {
        title: 'About me',
        description: 'Driven by passion for mobile and web development, I design digital solutions that combine design, innovation and accessibility.',
        stats: {
          experience: { label: 'Years of experience', description: 'In development' },
          projects: { label: 'Completed projects', description: 'Mobile and web applications' },
          satisfaction: { label: 'Client satisfaction', description: 'Delivered projects' }
        },
        values: {
          collaboration: { title: 'Collaboration', description: 'Efficient teamwork with agile methods' },
          precision: { title: 'Precision', description: 'Attention to detail and code quality' },
          innovation: { title: 'Innovation', description: 'Creative solutions and modern technologies' }
        },
        specialties: 'Specialties',
        methodologies: 'Methodologies'
      },
        experience: {
            title:'Professional Experience',
            description:'A career rich in innovative projects and fruitful collaborations',
        },
        education: {
            title:'Education',
            description:'My academic background and obtained degrees'
        },
        projects:{
            title:'My Projects',
            description:'A selection of projects demonstrating my technical expertise and creativity',
            introvideo:' Mobile Application: Quiz Game with Correctio',
            descriptionVideo:'Explore My Projects in Action'
        },
        competitions:{
            title: 'Competitions',
            description: 'Discover all the competitions I have participated in.'

        },
      // Skills Section
      skills: {
        title: 'Technical Skills',
        description: 'Diverse technical expertise covering the entire development cycle',
        categories: {
          mobile: 'Mobile Development',
          web: 'Web Development',
          database: 'Databases',
          cloud: 'Cloud & DevOps',
          tools: 'Tools & Frameworks',
          design: 'Computer Vision'
        },
        levels: {
          expert: 'Expert',
          advanced: 'Advanced',
          intermediate: 'Intermediate',
          beginner: 'Beginner'
        },
        otherSkills: 'Other Skills'
      },
      // Contact Section
      contact: {
        title: 'Contact me',
        description: 'Have a project in mind? Feel free to contact me.',
        info: 'Contact information',
        followMe: 'Follow me',
        availability: 'Availability',
        availabilityText: 'I am currently available for new projects.',
        availableNow: 'Available immediately',
        form: {
          title: 'Send me a message',
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email',
          subject: 'Subject',
          message: 'Message',
          send: 'Send message',
          response: 'I commit to respond within 24 hours.',
          placeholders: {
            firstName: 'Your first name',
            lastName: 'Your last name',
            email: 'your.email@example.com',
            subject: 'Subject of your message',
            message: 'Describe your project...'
          }
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        experience: 'Erfahrung',
        education: 'Bildung',
        projects: 'Projekte',
        competitions: 'Wettbewerbe',
        skills: 'Fähigkeiten',
        contact: 'Kontakt'
      },
      hero: {
        name: 'IHR NAME',
        title: 'Ingenieurstudent in Informatik',
        description: 'Mit zwei Jahren nachgewiesener Expertise in der Erstellung intuitiver und leistungsstarker Anwendungen für Android und das Web sowie einer Spezialisierung in künstlicher Intelligenz (Computer Vision).',
        location: '2 Ernest-Duvillars-Straße, Belfort, Frankreich (90000)',
        phone: '(+33) 74 54 21 660',
        email: 'steeven.yiemtsa-fopa@utbm.fr',
        imageAlt: 'Profilfoto',
        scrollText: 'Scrollen Sie zum Entdecken',
        scrollLabel: 'Nach unten scrollen',
        cta: {
          projects: 'Projekte ansehen',
          download: 'Lebenslauf herunterladen'
        }
      },
      about: {
        title: 'Über mich',
        description: 'Leidenschaft für Entwicklung.',
        stats: {
          experience: { label: 'Jahre Erfahrung', description: 'Entwicklung' },
          projects: { label: 'Projekte', description: 'Anwendungen' },
          satisfaction: { label: 'Zufriedenheit', description: 'Projekte' }
        },
        values: {
          collaboration: { title: 'Zusammenarbeit', description: 'Teamwork' },
          precision: { title: 'Präzision', description: 'Qualität' },
          innovation: { title: 'Innovation', description: 'Lösungen' }
        },
        specialties: 'Spezialisierungen',
        methodologies: 'Methoden'
      },
        experience: {
            title:'Berufserfahrung Ein Werdegang',
            description:'voller innovativer Projekte und erfolgreicher Zusammenarbeit',
        },
        education: {
            title:'Ausbildung',
            description:'Mein akademischer Werdegang und meine erworbenen Abschlüsse'
        },
        projects:{
            title:'Meine Projekte',
            description:'ine Auswahl von Projekten, die mein technisches Fachwissen und meine Kreativität demonstrieren.',
            introvideo:' Mobile Anwendung: Quizspiel mit Korrekturfunktion',
            descriptionVideo:'Entdecken Sie meine Arbeiten in Aktion'
        },
        competitions:{
            title: 'Wettbewerbe',
            description: 'Entdecken Sie alle Wettbewerbe, an denen ich teilgenommen habe.'

        },
      skills: {
        title: 'Fähigkeiten',
        description: 'Technische Expertise',
        categories: {
          mobile: 'Mobile Entwicklung',
          web: 'Web-Entwicklung',
          database: 'Datenbanken',
          cloud: 'Cloud',
          tools: 'Tools',
          design: 'Künstliche Intelligenz'
        },
        levels: {
          expert: 'Experte',
          advanced: 'Fortgeschritten',
          intermediate: 'Mittlere Stufe',
          beginner: 'Anfänger'
        },
        otherSkills: 'Weitere Fähigkeiten'
      },
      contact: {
        title: 'Kontakt',
        description: 'Kontaktieren Sie mich.',
        info: 'Informationen',
        followMe: 'Folgen',
        availability: 'Verfügbarkeit',
        availabilityText: 'Verfügbar.',
        availableNow: 'Verfügbar',
        form: {
          title: 'Nachricht',
          firstName: 'Vorname',
          lastName: 'Nachname',
          email: 'E-Mail',
          subject: 'Betreff',
          message: 'Nachricht',
          send: 'Senden',
          response: 'Antwort in 24h.',
          placeholders: {
            firstName: 'Vorname',
            lastName: 'Nachname',
            email: 'email@beispiel.com',
            subject: 'Betreff',
            message: 'Projekt beschreiben...'
          }
        }
      }
    }
  },
  fr: {
    translation: {
      // Navigation
      nav: {
        home: 'Accueil',
        about: 'À propos',
        experience: 'Expérience',
        education: 'Éducation',
        projects: 'Projets',
        competitions: 'Compétitions',
        skills: 'Compétences',
        contact: 'Contact'
      },
      // Hero Section
      hero: {
        name: 'VOTRE NOM',
        title: 'Étudiant ingénieur en informatique',
        description: 'Avec deux ans d\'expertise avérée dans la création d\'applications intuitives et performantes pour Android et le web, ainsi qu\'une spécialisation en intelligence artificielle (vision artificielle).',
        location: '2 rue Ernest Duvillars, Belfort, France (90000)',
        phone: '(+33) 74 54 21 660',
        email: 'steeven.yiemtsa-fopa@utbm.fr',
        imageAlt: 'Photo de profil - Développeur Web & Mobile',
        scrollText: 'Faites défiler pour découvrir',
        scrollLabel: 'Faire défiler vers le bas',
        cta: {
          projects: 'Voir mes projets',
          download: 'Télécharger mon CV'
        }
      },
      // About Section
      about: {
        title: 'À propos de moi',
        description: 'Animé par la passion du développement mobile et web, je conçois des solutions numériques qui associent design, innovation et accessibilité. Mon objectif est de mettre la technologie au service de l\'humain, en construisant des applications qui répondent réellement aux besoins des utilisateurs.',
        stats: {
          experience: { label: 'Années d\'expérience', description: 'En développement' },
          projects: { label: 'Projets réalisés', description: 'Applications mobiles et web' },
          satisfaction: { label: 'Satisfaction client', description: 'Projets livrés' }
        },
        values: {
          collaboration: { title: 'Collaboration', description: 'Travail d\'équipe efficace avec méthodes agiles' },
          precision: { title: 'Précision', description: 'Attention aux détails et qualité du code' },
          innovation: { title: 'Innovation', description: 'Solutions créatives et technologies modernes' }
        },
        specialties: 'Spécialités',
        methodologies: 'Méthodologies'
      },
        experience: {
          title:'Expérience Professionnelle',
            description:'Un parcours riche en projets innovants et collaborations fructueuses',
        },
        education: {
          title:'Formation',
            description:'Mon parcours académique et les diplômes obtenus'
        },
        projects:{
          title:'Mes Projets',
            description:'Une sélection de projets qui démontrent mon expertise technique et ma créativité',
            introvideo:' application mobile Quizgame',
            descriptionVideo:'Découvrez mes réalisations en action'
        },
        competitions:{
            title: 'Compétitions',
            description: 'Découvrez toutes les compétitions auxquelles j\'ai participé.'

        },
      // Skills Section
      skills: {
        title: 'Compétences Techniques',
        description: 'Une expertise technique diversifiée couvrant l\'ensemble du cycle de développement',
        categories: {
          mobile: 'Développement Mobile',
          web: 'Développement Web',
          database: 'Bases de Données',
          cloud: 'Cloud & DevOps',
          tools: 'Outils & Frameworks',
          design: 'vision artificielle'
        },
        levels: {
          expert: 'Expert',
          advanced: 'Avancé',
          intermediate: 'Intermédiaire',
          beginner: 'Débutant'
        },
        otherSkills: 'Autres Compétences'
      },
      // Contact Section
      contact: {
        title: 'Contactez-moi',
        description: 'Vous avez un projet en tête ? N\'hésitez pas à me contacter pour discuter de vos besoins et voir comment je peux vous aider.',
        info: 'Informations de contact',
        followMe: 'Suivez-moi',
        availability: 'Disponibilité',
        availabilityText: 'Je suis actuellement disponible pour de nouveaux projets.',
        availableNow: 'Disponible immédiatement',
        form: {
          title: 'Envoyez-moi un message',
          firstName: 'Prénom',
          lastName: 'Nom',
          email: 'Email',
          subject: 'Sujet',
          message: 'Message',
          send: 'Envoyer le message',
          response: 'Je m\'engage à répondre dans les 24 heures.',
          placeholders: {
            firstName: 'Votre prénom',
            lastName: 'Votre nom',
            email: 'votre.email@exemple.com',
            subject: 'Sujet de votre message',
            message: 'Décrivez votre projet ou votre demande...'
          }
        }
      }
    }
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    detection: {
      order: ['navigator', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;