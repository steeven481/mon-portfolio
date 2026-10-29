import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      nav: {
        home: 'Accueil',
        about: 'À propos',
        experience: 'Expérience',
        education: 'Formation',
        projects: 'Projets',
        competitions: 'Compétitions',
        skills: 'Compétences',
        contact: 'Contact'
      },
      hero: {
        name: 'STEEVEN YIEMTSA',
        badge: 'SAP IT Product Manager @ NAOS • Master GEM',
        status: 'En poste chez NAOS • Étudiant Master à GEM',
        title: 'SAP IT Product Manager & Ingénieur SI',
        subtitle: 'Master Management de Projet Numérique & SI (Grenoble Ecole de Management)',
        description: 'Alliant expertise technique de pointe (IA, RAG, développement full-stack) et pilotage stratégique de projets SI d\'envergure (SAP, ERP, manufacturing industriel).',
        location: 'France',
        contactViaForm: 'Contact via formulaire & LinkedIn',
        imageAlt: 'Photo de profil - Steeven Yiemtsa',
        scrollText: 'Découvrir mon univers',
        scrollLabel: 'Faire défiler vers le bas',
        cta: {
          projects: 'Explorer mes projets',
          contact: 'Me contacter',
          download: 'Télécharger mon CV'
        }
      },
      about: {
        title: 'À propos de moi',
        subtitle: 'Une vision 360° du numérique : de la ligne de code au pilotage produit',
        description: 'Ingénieur en informatique passionné et étudiant en Master Management de Projet Numérique et Systèmes d\'Information à Grenoble Ecole de Management (GEM). Actuellement SAP IT Product Manager chez NAOS, j\'ai développé une double compétence unique : la rigueur de l\'ingénierie logicielle et de l\'intelligence artificielle (RAG politique chez Capgemini, manufacturing chez Stellantis) couplée à la vision stratégique du management de produit et de la gouvernance des SI.',
        stats: {
          experience: { label: 'Années d\'expérience', description: 'En SI, IA & Développement' },
          projects: { label: 'Projets majeurs', description: 'IA, RAG, PWA & Industrie 4.0' },
          satisfaction: { label: 'Rigueur & Impact', description: 'Engagement et excellence' }
        },
        pillars: {
          pm: {
            title: 'Product Management & SAP',
            description: 'Pilotage de roadmap, gouvernance SI, cadrage des besoins métiers et optimisation des processus ERP chez NAOS.'
          },
          ai: {
            title: 'Intelligence Artificielle & RAG',
            description: 'Conception de pipelines RAG avancés chez Capgemini garantissant des informations vérifiées et fiables.'
          },
          industry: {
            title: 'Manufacturing & Tech',
            description: 'Gestion de projet chez Stellantis sur logiciel propriétaire manufacturing et architecture logicielle moderne.'
          }
        },
        values: {
          collaboration: { title: 'Leadership & Collaboration', description: 'Fédération des équipes techniques et métiers autour d\'une vision claire' },
          precision: { title: 'Rigueur & Fiabilité', description: 'Précision dans la conception logicielle, les données et la gestion du SI' },
          innovation: { title: 'Innovation Technologique', description: 'Intégration pragmatique de l\'IA générative et des technologies modernes' }
        },
        specialties: 'Domaines d\'expertise',
        methodologies: 'Méthodologies & Gouvernance'
      },
      experience: {
        title: 'Expériences Professionnelles',
        subtitle: 'Un parcours d\'excellence combinant grands groupes, IA de pointe et pilotage produit',
        description: 'De la gestion de produit SAP chez NAOS au déploiement de solutions RAG chez Capgemini et au manufacturing chez Stellantis.',
        filterAll: 'Toutes',
        filterPM: 'Product Management & SI',
        filterAI: 'IA & RAG',
        filterDev: 'Ingénierie & Tech',
        viewDetails: 'Détails de la mission',
        missions: 'Missions & Réalisations',
        techUsed: 'Technologies & Outils',
        badgePresent: 'Actuel',
        naos: {
          role: 'SAP IT Product Manager',
          company: 'NAOS',
          type: 'Alternance',
          location: 'France',
          period: '2026 - Présent',
          summary: 'Pilotage produit et gouvernance du SI SAP pour le groupe NAOS (Bioderma, Institut Esthederm, Etat Pur).',
          description: 'En charge du pilotage de la roadmap et des évolutions des solutions SAP IT au sein de la DSI de NAOS. Interface clé entre les directions métiers et les équipes techniques.',
          achievements: [
            'Définition et pilotage de la roadmap produit SAP en alignement avec les enjeux stratégiques du groupe',
            'Animation des comités de priorisation du backlog produit et cadrage des besoins métiers',
            'Coordination transversale entre développeurs, consultants fonctionnels et utilisateurs clés',
            'Supervision des phases de recette, de déploiement et de conduite du changement',
            'Optimisation continue des processus métiers intégrés à l\'écosystème SAP'
          ]
        },
        stellantis: {
          role: 'Assistant Chef de Projet Manufacturing',
          company: 'STELLANTIS',
          type: 'Stage',
          location: 'France',
          period: '2026',
          summary: 'Gestion de projet digital manufacturing sur logiciel propriétaire au sein d\'un des leaders mondiaux de l\'automobile.',
          description: 'Accompagnement du déploiement et de l\'optimisation d\'un logiciel propriétaire dédié à la gestion et au pilotage de la production industrielle.',
          achievements: [
            'Participation au pilotage opérationnel du déploiement d\'un logiciel propriétaire manufacturing',
            'Coordination étroite entre les équipes de développement informatique et les équipes opérationnelles en usine',
            'Rédaction des cahiers des charges fonctionnels et suivi des plannings de livraison',
            'Gestion des risques, suivi des indicateurs de performance (KPI) et amélioration continue',
            'Support aux utilisateurs industriels et facilitation de l\'adoption de la solution'
          ]
        },
        capgemini: {
          role: 'Stagiaire Ingénieur IA – Système RAG Politique',
          company: 'CAPGEMINI',
          type: 'Stage',
          location: 'France',
          period: '2025 - 2026',
          summary: 'Conception et déploiement d\'un système RAG (Retrieval-Augmented Generation) politique pour garantir des informations fiables.',
          description: 'Mise en place d\'un système d\'intelligence artificielle générative de pointe capable de sourcer, vérifier et restituer des informations politiques fiables et certifiées, limitant les hallucinations.',
          achievements: [
            'Conception complète de l\'architecture RAG (Retrieval-Augmented Generation) pour l\'analyse politique',
            'Implémentation de pipelines de vectorisation et indexation sur bases de données vectorielles (Vector DB)',
            'Intégration de modèles de langage (LLMs) avec mécanismes avancés de vérification des sources et fact-checking',
            'Développement d\'APIs robustes en Python (FastAPI, LangChain, LlamaIndex) pour requêter le corpus politique',
            'Évaluation rigoureuse des réponses (fidélité aux sources, neutralité, complétude et pertinence)'
          ]
        },
        levegi: {
          role: 'Développeur Full-Stack PWA',
          company: 'LEVEGI CONSULTING',
          type: 'Stage',
          location: 'Douala, Cameroun',
          period: '2025',
          summary: 'Développement de l\'application progressive web (PWA) Lenjo (+100 000 utilisateurs).',
          description: 'Conception et maintenance d\'une plateforme web performante et sécurisée utilisant Angular, Node.js, MongoDB et Keycloak.',
          achievements: [
            'Développement d\'une architecture évolutive servant plus de 100 000 utilisateurs actifs',
            'Intégration d\'un système d\'authentification et d\'autorisation centralisé avec Keycloak',
            'Optimisation des performances de l\'application de plus de 40%',
            'Mise en place de tests automatisés et de pipelines d\'intégration continue (CI/CD)'
          ]
        }
      },
      education: {
        title: 'Formation & Diplômes',
        subtitle: 'Un double cursus d\'excellence : Ingénierie Informatique & Management de Projet',
        description: 'Une trajectoire académique solide alliant sciences fondamentales, ingénierie logicielle / IA et management stratégique des SI.',
        viewDetails: 'Détails du cursus',
        learnedTitle: 'Compétences acquises & Domaines clés',
        distinctionsTitle: 'Distinctions & Points forts',
        gem: {
          degree: 'Master en Management de Projet Numérique et Systèmes d\'Information',
          institution: 'Grenoble Ecole de Management (GEM)',
          location: 'Grenoble / Paris, France',
          period: '2026 - Présent',
          specialty: 'Management de Projet SI, Product Management & Stratégie Digitale',
          description: 'Formation de premier rang formant aux méthodes avancées de gestion de projets numériques complexes, gouvernance des SI, management de produit et transformation digitale.',
          learned: [
            'Gouvernance des Systèmes d\'Information et architecture d\'entreprise',
            'Product Management, gestion du backlog et roadmap stratégique',
            'Méthodologies Agiles à l\'échelle (Scrum, Kanban, SAFe)',
            'Conduite du changement et alignement stratégique IT / Métiers',
            'Pilotage budgétaire, gestion des risques et audit de projets SI'
          ],
          achievements: ['Admission au programme sélectif GEM', 'Alternance SAP IT Product Manager chez NAOS']
        },
        utbm: {
          degree: 'Diplôme d\'Ingénieur en Informatique (Dernière année)',
          institution: 'Université de Technologie de Belfort-Montbéliard (UTBM)',
          location: 'Belfort, France',
          period: '2023 - 2026',
          specialty: 'Intelligence Artificielle & Vision par Ordinateur',
          description: 'Formation d\'ingénieur habilitée CTI axée sur l\'ingénierie logicielle avancée, la robotique mobile et l\'intelligence artificielle appliquée.',
          learned: [
            'Vision par ordinateur et traitement d\'image avancé (OpenCV)',
            'Robotique mobile, commande et simulation (ROS, Gazebo)',
            'Intelligence artificielle appliquée et machine learning',
            'Conception de systèmes logiciels complexes et architectures distribuées'
          ],
          achievements: ['Projet majeur Tiago Robot (réarrangement autonome d\'objets)', 'Parcours international']
        },
        saintjean: {
          degree: 'Cycle Ingénieur Informatique (3ème et 4ème années)',
          institution: 'Institut Universitaire Saint Jean',
          location: 'Yaoundé, Cameroun',
          period: '2023 - 2025',
          specialty: 'Systèmes d\'Information et Réseaux',
          description: 'Solide formation en génie logiciel, bases de données, sécurité des réseaux et développement applicatif.',
          learned: [
            'Programmation orientée objet avancée (Java, C++, Python)',
            'Bases de données relationnelles et SQL optimisé',
            'Architecture logicielle, Design Patterns et microservices',
            'Gestion de projet technique et méthodologies agiles'
          ],
          achievements: ['Excellence académique', 'Lauréat de concours de programmation et hackathons nationaux']
        },
        dschang: {
          degree: 'Licence en Sciences Physiques & EEA',
          institution: 'Université de Dschang',
          location: 'Dschang, Cameroun',
          period: '2020 - 2023',
          specialty: 'Mathématiques, Physique, Électronique & Automatique',
          description: 'Socle scientifique rigoureux en modélisation mathématique, traitement du signal, électronique et automatique.',
          learned: [
            'Mathématiques appliquées, analyse numérique et statistiques',
            'Automatique, modélisation des systèmes et asservissement',
            'Démarche scientifique rigoureuse et résolution de problèmes complexes',
            'Fondements de l\'algorithmie et modélisation'
          ],
          achievements: ['Mention d\'excellence', 'Major de promotion sur les projets pratiques']
        }
      },
      projects: {
        title: 'Projets Réalisés',
        subtitle: 'Des solutions innovantes et concrètes à fort impact',
        description: 'Une sélection de mes réalisations techniques en IA générative, architectures web/mobile et robotique.',
        introvideo: 'Démonstrations & Vidéos',
        descriptionVideo: 'Aperçu dynamique de projets en action',
        liveDemo: 'Démo en ligne',
        viewCode: 'Consulter le code',
        keyFeatures: 'Fonctionnalités clés',
        techChallenges: 'Défis techniques relevés'
      },
      competitions: {
        title: 'Compétitions & Hackathons',
        subtitle: 'L\'esprit de défi, l\'innovation rapide et le travail d\'équipe',
        description: 'Participation et victoires à des hackathons nationaux d\'intelligence artificielle et de développement technologique.',
        developedProject: 'Projet Développé',
        awards: 'Prix & Reconnaissances',
        skillsGained: 'Compétences Clés Démontrées'
      },
      skills: {
        title: 'Compétences Techniques & Managériales',
        subtitle: 'Une expertise complète, du management produit à l\'ingénierie logicielle',
        description: 'Profil hybride combinant gouvernance des SI, intelligence artificielle et développement full-stack moderne.',
        categories: {
          pm: 'Product Management & SI',
          ai: 'Intelligence Artificielle & RAG',
          web: 'Développement Web & Backend',
          mobile: 'Développement Mobile',
          database: 'Bases de Données & Cloud',
          tools: 'DevOps & Méthodes'
        },
        levels: {
          expert: 'Expert',
          advanced: 'Avancé',
          intermediate: 'Intermédiaire',
          beginner: 'En pratique'
        },
        otherSkills: 'Méthodes, Outils & Savoir-Être'
      },
      contact: {
        title: 'Me Contacter',
        subtitle: 'Échangeons autour de vos projets ou d\'opportunités professionnelles',
        description: 'Disponible pour échanger sur le product management SI, l\'IA appliquée et les initiatives technologiques innovantes.',
        info: 'Informations clés',
        followMe: 'Réseaux professionnels',
        availability: 'Statut professionnel',
        availabilityText: 'En poste chez NAOS (SAP IT Product Manager) & Master à GEM. Ouvert au networking et aux échanges professionnels via le formulaire ci-dessous ou sur LinkedIn.',
        availableNow: 'Actif & Ouvert aux échanges',
        locationLabel: 'Localisation',
        locationValue: 'France (Mobilité nationale)',
        linkedinLabel: 'Profil LinkedIn',
        linkedinValue: 'Steeven Yiemtsa',
        form: {
          title: 'Envoyez-moi un message',
          firstName: 'Prénom',
          lastName: 'Nom',
          email: 'Votre Email',
          subject: 'Sujet de votre message',
          message: 'Votre message',
          send: 'Transmettre le message',
          response: 'Je vous réponds directement par retour de mail sous 24 à 48 heures.',
          placeholders: {
            firstName: 'Jean',
            lastName: 'Dupont',
            email: 'jean.dupont@entreprise.com',
            subject: 'Opportunité / Collaboration / Échange',
            message: 'Bonjour Steeven, j\'aimerais échanger avec vous concernant...'
          }
        }
      },
      information: {
        title: 'Cliquer pour voir les détails'
      }
    }
  },
  en: {
    translation: {
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
      hero: {
        name: 'STEEVEN YIEMTSA',
        badge: 'SAP IT Product Manager @ NAOS • Master GEM',
        status: 'At NAOS • Master Student at GEM',
        title: 'SAP IT Product Manager & IS Engineer',
        subtitle: 'Master in Digital Project Management & IS (Grenoble Ecole de Management)',
        description: 'Bridging cutting-edge technical expertise (AI, RAG, full-stack architecture) with strategic enterprise IT leadership (SAP, ERP, manufacturing).',
        location: 'France',
        contactViaForm: 'Reach out via Form & LinkedIn',
        imageAlt: 'Profile photo - Steeven Yiemtsa',
        scrollText: 'Explore my journey',
        scrollLabel: 'Scroll down',
        cta: {
          projects: 'Explore my projects',
          contact: 'Contact me',
          download: 'Download Resume'
        }
      },
      about: {
        title: 'About Me',
        subtitle: 'A 360° digital perspective: from lines of code to product steering',
        description: 'Passionate computer science engineer and Master student in Digital Project Management and Information Systems at Grenoble Ecole de Management (GEM). Currently SAP IT Product Manager at NAOS, I cultivate a distinctive dual profile: solid engineering foundations in software and artificial intelligence (Political RAG at Capgemini, manufacturing at Stellantis) combined with high-impact product management and IT governance.',
        stats: {
          experience: { label: 'Years of Experience', description: 'In IS, AI & Software Engineering' },
          projects: { label: 'Flagship Projects', description: 'AI, RAG, PWA & Industry 4.0' },
          satisfaction: { label: 'Rigor & Impact', description: 'Commitment to excellence' }
        },
        pillars: {
          pm: {
            title: 'Product Management & SAP',
            description: 'Roadmap definition, IS governance, business requirements scoping, and ERP process optimization at NAOS.'
          },
          ai: {
            title: 'Artificial Intelligence & RAG',
            description: 'Design of high-precision RAG pipelines at Capgemini ensuring verified, hallucination-free political information.'
          },
          industry: {
            title: 'Manufacturing & Tech',
            description: 'Project steering at Stellantis on proprietary manufacturing software and cutting-edge software architecture.'
          }
        },
        values: {
          collaboration: { title: 'Leadership & Alignment', description: 'Uniting business and technical teams around an actionable roadmap' },
          precision: { title: 'Engineering Rigor', description: 'Uncompromising attention to data integrity, code quality and system architecture' },
          innovation: { title: 'Pragmatic Innovation', description: 'Leveraging generative AI and cloud tech for real-world enterprise value' }
        },
        specialties: 'Core Expertise',
        methodologies: 'Frameworks & Governance'
      },
      experience: {
        title: 'Professional Experience',
        subtitle: 'A track record combining global enterprises, advanced AI, and strategic product steering',
        description: 'From SAP IT Product Management at NAOS to cutting-edge political RAG pipelines at Capgemini and manufacturing systems at Stellantis.',
        filterAll: 'All',
        filterPM: 'Product Management & IS',
        filterAI: 'AI & RAG',
        filterDev: 'Engineering & Tech',
        viewDetails: 'View mission details',
        missions: 'Key Missions & Achievements',
        techUsed: 'Technologies & Tools',
        badgePresent: 'Present',
        naos: {
          role: 'SAP IT Product Manager',
          company: 'NAOS',
          type: 'Apprenticeship',
          location: 'France',
          period: '2026 - Present',
          summary: 'Product steering and SAP IT governance for the NAOS skincare group (Bioderma, Institut Esthederm, Etat Pur).',
          description: 'Leading product roadmaps and lifecycle enhancements for SAP IT solutions across NAOS international operations, serving as the bridge between business units and IT teams.',
          achievements: [
            'Defining and executing the SAP product roadmap aligned with strategic business priorities',
            'Facilitating product backlog grooming and business requirements prioritization',
            'Coordinating cross-functional engineering and consulting teams across multiple sites',
            'Managing User Acceptance Testing (UAT), rollouts, and change management initiatives',
            'Streamlining enterprise processes integrated with the central SAP landscape'
          ]
        },
        stellantis: {
          role: 'Assistant Project Manager – Manufacturing',
          company: 'STELLANTIS',
          type: 'Internship',
          location: 'France',
          period: '2026',
          summary: 'Digital manufacturing project management on proprietary industrial software for a top global automotive leader.',
          description: 'Steering the deployment and operational enhancement of proprietary software dedicated to automotive production line optimization and manufacturing operations.',
          achievements: [
            'Participating in operational rollout management for proprietary manufacturing software',
            'Bridging software engineering teams and plant floor manufacturing leaders',
            'Drafting functional specification documents and tracking milestone deliveries',
            'Managing delivery risks, KPI dashboards, and continuous improvement loops',
            'Providing end-user training and fostering user adoption in industrial plants'
          ]
        },
        capgemini: {
          role: 'AI Engineer Intern – Political RAG System',
          company: 'CAPGEMINI',
          type: 'Internship',
          location: 'France',
          period: '2025 - 2026',
          summary: 'Architecting and deploying a Political RAG (Retrieval-Augmented Generation) system for verifiable, trusted insights.',
          description: 'Implemented an advanced generative AI architecture designed to query, cross-verify, and synthesize political information with strict factual accuracy, source traceability, and hallucination reduction.',
          achievements: [
            'End-to-end design of a Retrieval-Augmented Generation (RAG) architecture for political analytics',
            'Built vectorization pipelines and indexed knowledge bases using Vector DBs',
            'Orchestrated Large Language Models (LLMs) with strict multi-source verification and fact-checking layers',
            'Developed high-performance Python microservices (FastAPI, LangChain, LlamaIndex)',
            'Formulated objective evaluation frameworks measuring source faithfulness and neutrality'
          ]
        },
        levegi: {
          role: 'Full-Stack PWA Developer',
          company: 'LEVEGI CONSULTING',
          type: 'Internship',
          location: 'Douala, Cameroon',
          period: '2025',
          summary: 'Engineering the "Lenjo" Progressive Web App serving 100,000+ users.',
          description: 'Developed and scaled a performant, secure multi-tenant platform utilizing Angular, Node.js, MongoDB, and Keycloak.',
          achievements: [
            'Engineered an extensible architecture supporting 100k+ active users',
            'Integrated centralized identity and payment gateways via Keycloak and microservices',
            'Boosted application performance by over 40%',
            'Instituted automated test coverage and robust CI/CD deployment pipelines'
          ]
        }
      },
      education: {
        title: 'Education & Academic Degrees',
        subtitle: 'A dual-excellence track: Computer Engineering & Strategic Project Management',
        description: 'A solid academic trajectory combining fundamental science, software engineering, robotics, AI, and strategic business school education.',
        viewDetails: 'View academic details',
        learnedTitle: 'Core Competencies & Key Areas',
        distinctionsTitle: 'Honors & Highlights',
        gem: {
          degree: 'Master in Digital Project Management & Information Systems',
          institution: 'Grenoble Ecole de Management (GEM)',
          location: 'Grenoble / Paris, France',
          period: '2026 - Present',
          specialty: 'IS Project Management, Product Ownership & Digital Transformation',
          description: 'Premier business school Master program focusing on complex digital project steering, enterprise architecture, agile leadership, and IT strategy.',
          learned: [
            'Information Systems Governance and Enterprise Architecture',
            'Product Management, backlog prioritization, and strategic roadmaps',
            'Agile frameworks at scale (Scrum, Kanban, SAFe)',
            'Change management and strategic IT/Business alignment',
            'Budgeting, risk management, and IS project audits'
          ],
          achievements: ['Accepted into selective GEM master program', 'Concurrent SAP IT Product Manager at NAOS']
        },
        utbm: {
          degree: 'Master of Engineering in Computer Science (Final Year)',
          institution: 'Belfort-Montbéliard University of Technology (UTBM)',
          location: 'Belfort, France',
          period: '2023 - 2026',
          specialty: 'Artificial Intelligence & Computer Vision',
          description: 'CTI-accredited engineering program specializing in advanced software engineering, mobile robotics, and applied AI.',
          learned: [
            'Computer Vision and advanced image processing (OpenCV)',
            'Autonomous robotics control and simulation (ROS, Gazebo)',
            'Applied Artificial Intelligence and Machine Learning',
            'Complex software system design and distributed architectures'
          ],
          achievements: ['Tiago Robot capstone project (autonomous object rearrangement)', 'International mobility']
        },
        saintjean: {
          degree: 'Computer Engineering (3rd & 4th Years)',
          institution: 'Saint Jean University Institute',
          location: 'Yaoundé, Cameroon',
          period: '2023 - 2025',
          specialty: 'Information Systems and Networks',
          description: 'Rigorous foundation in software engineering, relational databases, network security, and application development.',
          learned: [
            'Object-Oriented Programming (Java, C++, Python)',
            'Relational databases and high-performance SQL',
            'Software architecture patterns and microservices',
            'Technical project management and agile methodologies'
          ],
          achievements: ['High academic standing', 'Winner of regional hackathons and code challenges']
        },
        dschang: {
          degree: 'Bachelor of Science in Physics & Automation (EEA)',
          institution: 'University of Dschang',
          location: 'Dschang, Cameroon',
          period: '2020 - 2023',
          specialty: 'Mathematics, Physics, Electronics & Automatic Control',
          description: 'Solid scientific foundation in mathematical modeling, signal processing, electronics, and feedback control systems.',
          learned: [
            'Applied mathematics, numerical analysis, and statistics',
            'Automatic control theory and dynamic system modeling',
            'Rigorous problem solving and scientific reasoning',
            'Algorithm design and data structures fundamentals'
          ],
          achievements: ['Graduated with distinction', 'Recognized for top laboratory project']
        }
      },
      projects: {
        title: 'Featured Projects',
        subtitle: 'Concrete, high-impact innovations across AI and software',
        description: 'A curated selection of technical solutions spanning generative AI, web/mobile architectures, and robotics.',
        introvideo: 'Video Demonstrations',
        descriptionVideo: 'See interactive projects in action',
        liveDemo: 'Live Demo',
        viewCode: 'Source Code',
        keyFeatures: 'Key Capabilities',
        techChallenges: 'Engineering Challenges Solved'
      },
      competitions: {
        title: 'Competitions & Hackathons',
        subtitle: 'Challenging limits, rapid prototyping, and collaborative victory',
        description: 'Participation and top honors in national hackathons covering artificial intelligence and digital innovation.',
        developedProject: 'Developed Solution',
        awards: 'Awards & Recognition',
        skillsGained: 'Key Skills Demonstrated'
      },
      skills: {
        title: 'Technical & Management Skills',
        subtitle: 'A versatile toolkit connecting product steering with deep technical engineering',
        description: 'A hybrid skill set spanning IS governance, enterprise ERP, generative AI, and modern full-stack development.',
        categories: {
          pm: 'Product Management & IS',
          ai: 'Artificial Intelligence & RAG',
          web: 'Web & Backend Development',
          mobile: 'Mobile Development',
          database: 'Databases & Cloud',
          tools: 'DevOps & Tooling'
        },
        levels: {
          expert: 'Expert',
          advanced: 'Advanced',
          intermediate: 'Intermediate',
          beginner: 'Hands-on'
        },
        otherSkills: 'Methodologies, Tools & Soft Skills'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s discuss projects, collaborations, or tech opportunities',
        description: 'Open to connecting on enterprise IS product management, applied AI systems, and digital transformation.',
        info: 'Key Info',
        followMe: 'Professional Profiles',
        availability: 'Current Status',
        availabilityText: 'Currently SAP IT Product Manager at NAOS & Master student at GEM. Open to networking and professional inquiries via the form below or on LinkedIn.',
        availableNow: 'Active & Open to dialogue',
        locationLabel: 'Location',
        locationValue: 'France (Nationwide mobility)',
        linkedinLabel: 'LinkedIn Profile',
        linkedinValue: 'Steeven Yiemtsa',
        form: {
          title: 'Send a Message',
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Your Email',
          subject: 'Subject',
          message: 'Your Message',
          send: 'Send Message',
          response: 'I will reply directly to your email within 24 to 48 hours.',
          placeholders: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@company.com',
            subject: 'Opportunity / Inquiry / Networking',
            message: 'Hello Steeven, I would like to discuss...'
          }
        }
      },
      information: {
        title: 'Click to explore details'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        about: 'Über mich',
        experience: 'Erfahrung',
        education: 'Ausbildung',
        projects: 'Projekte',
        competitions: 'Wettbewerbe',
        skills: 'Fähigkeiten',
        contact: 'Kontakt'
      },
      hero: {
        name: 'STEEVEN YIEMTSA',
        badge: 'SAP IT Product Manager @ NAOS • Master GEM',
        status: 'Bei NAOS • Master-Student an der GEM',
        title: 'SAP IT Product Manager & IS-Ingenieur',
        subtitle: 'Master in Digitalem Projektmanagement & IS (Grenoble Ecole de Management)',
        description: 'Kombination aus technischer Spitzenkompetenz (KI, RAG, Full-Stack) und strategischer IT-Projektsteuerung (SAP, ERP, Fertigung).',
        location: 'Frankreich',
        contactViaForm: 'Kontakt über Formular & LinkedIn',
        imageAlt: 'Profilbild - Steeven Yiemtsa',
        scrollText: 'Entdecken',
        scrollLabel: 'Nach unten scrollen',
        cta: {
          projects: 'Projekte ansehen',
          contact: 'Kontaktieren',
          download: 'Lebenslauf herunterladen'
        }
      },
      about: {
        title: 'Über mich',
        subtitle: 'Eine 360°-Perspektive: Vom Code zum Produktmanagement',
        description: 'IT-Ingenieur und Master-Student an der Grenoble Ecole de Management (GEM). Derzeit als SAP IT Product Manager bei NAOS tätig, verbinde ich Software-Engineering & KI (RAG bei Capgemini, Fertigung bei Stellantis) mit strategischem Produktmanagement.',
        stats: {
          experience: { label: 'Jahre Erfahrung', description: 'In IS, KI & Entwicklung' },
          projects: { label: 'Hauptprojekte', description: 'KI, RAG, PWA & Industrie 4.0' },
          satisfaction: { label: 'Präzision & Wirkung', description: 'Engagement für Exzellenz' }
        },
        pillars: {
          pm: {
            title: 'Product Management & SAP',
            description: 'Roadmap-Steuerung, IS-Governance und ERP-Prozessoptimierung bei NAOS.'
          },
          ai: {
            title: 'Künstliche Intelligenz & RAG',
            description: 'Entwicklung von RAG-Pipelines bei Capgemini für verifizierte politische Informationen.'
          },
          industry: {
            title: 'Fertigung & Industrie',
            description: 'Projektleitung bei Stellantis auf proprietärer Fertigungssoftware.'
          }
        },
        values: {
          collaboration: { title: 'Führung & Teamarbeit', description: 'Verbindung von Business und Tech' },
          precision: { title: 'Präzision & Zuverlässigkeit', description: 'Höchste Code- und Systemqualität' },
          innovation: { title: 'Pragmatische Innovation', description: 'Praxisnaher Einsatz moderner KI' }
        },
        specialties: 'Kernkompetenzen',
        methodologies: 'Methoden & Governance'
      },
      experience: {
        title: 'Berufserfahrung',
        subtitle: 'Ein fundierter Werdegang in Großkonzernen, KI und Produktsteuerung',
        description: 'Vom SAP-Produktmanagement bei NAOS bis zu RAG-Pipelines bei Capgemini und Fertigungslösungen bei Stellantis.',
        filterAll: 'Alle',
        filterPM: 'Product Management & IS',
        filterAI: 'KI & RAG',
        filterDev: 'Engineering & Tech',
        viewDetails: 'Details anzeigen',
        missions: 'Hauptaufgaben & Erfolge',
        techUsed: 'Technologien & Tools',
        badgePresent: 'Gegenwart',
        naos: {
          role: 'SAP IT Product Manager',
          company: 'NAOS',
          type: 'Duales Studium',
          location: 'Frankreich',
          period: '2026 - Heute',
          summary: 'Produktsteuerung und SAP-IT-Governance für den NAOS-Konzern (Bioderma, Institut Esthederm, Etat Pur).',
          description: 'Verantwortlich für die SAP-Produkt-Roadmap und Abstimmung zwischen Fachbereichen und Entwicklungsteams.',
          achievements: [
            'Definition der SAP-Produkt-Roadmap nach strategischen Unternehmenszielen',
            'Priorisierung des Product Backlogs und Erfassung fachlicher Anforderungen',
            'Standortübergreifende Koordination von Entwicklern und Beratern',
            'Steuerung von Abnahmetests, Rollouts und Change Management',
            'Kontinuierliche Optimierung von SAP-Geschäftsprozessen'
          ]
        },
        stellantis: {
          role: 'Assistant Project Manager – Manufacturing',
          company: 'STELLANTIS',
          type: 'Praktikum',
          location: 'Frankreich',
          period: '2026',
          summary: 'Digitales Fertigungsprojektmanagement auf proprietärer Software bei einem weltweit führenden Automobilhersteller.',
          description: 'Begleitung des Rollouts und der Optimierung proprietärer Fertigungssoftware für Automobilproduktionslinien.',
          achievements: [
            'Beteiligung an der operativen Steuerung des Software-Rollouts',
            'Schnittstelle zwischen Entwicklungsteams und Werksleitungen',
            'Erstellung funktionaler Spezifikationen und Terminüberwachung',
            'Risikomanagement und kontinuierliche Prozessoptimierung'
          ]
        },
        capgemini: {
          role: 'KI-Ingenieur Praktikant – Politisches RAG-System',
          company: 'CAPGEMINI',
          type: 'Praktikum',
          location: 'Frankreich',
          period: '2025 - 2026',
          summary: 'Entwicklung eines zuverlässigen RAG-Systems für verifizierte politische Informationen.',
          description: 'Aufbau einer RAG-Architektur (Retrieval-Augmented Generation) zur verifizierten Bereitstellung politischer Daten ohne Halluzinationen.',
          achievements: [
            'End-to-End-Entwicklung einer RAG-Pipeline für politische Analysen',
            'Vektorisierung und Indizierung auf Vector-Datenbanken',
            'Integration von LLMs mit Faktenprüfung und Quellenverifikation',
            'Entwicklung von Microservices mit Python (FastAPI, LangChain)'
          ]
        },
        levegi: {
          role: 'Full-Stack PWA Entwickler',
          company: 'LEVEGI CONSULTING',
          type: 'Praktikum',
          location: 'Douala, Kamerun',
          period: '2025',
          summary: 'Entwicklung der PWA Lenjo für mehr als 100.000 Nutzer.',
          description: 'Skalierbare Plattform mit Angular, Node.js, MongoDB und Keycloak.',
          achievements: [
            'Entwicklung einer Architektur für über 100.000 aktive Nutzer',
            'Zentralisierte Authentifizierung mit Keycloak',
            'Leistungssteigerung um mehr als 40%',
            'Automatisierte Tests und CI/CD-Pipelines'
          ]
        }
      },
      education: {
        title: 'Ausbildung & Abschlüsse',
        subtitle: 'Doppelkompetenz: Informatik-Ingenieurwesen & Strategisches Projektmanagement',
        description: 'Ein exzellenter Bildungsweg über Naturwissenschaften, Software-Engineering, KI und Management.',
        viewDetails: 'Details anzeigen',
        learnedTitle: 'Kernkompetenzen',
        distinctionsTitle: 'Auszeichnungen & Meilensteine',
        gem: {
          degree: 'Master in Digitalem Projektmanagement & Informationssystemen',
          institution: 'Grenoble Ecole de Management (GEM)',
          location: 'Grenoble / Paris, Frankreich',
          period: '2026 - Heute',
          specialty: 'IS-Projektmanagement, Product Ownership & Digitale Transformation',
          description: 'Hochrangiges Masterprogramm für komplexe digitale Projekte, IS-Governance und agile Führung.',
          learned: [
            'IS-Governance und Enterprise-Architektur',
            'Produktmanagement und strategische Roadmaps',
            'Agile Methoden (Scrum, Kanban, SAFe)',
            'Change Management und IT-Business-Alignment'
          ],
          achievements: ['Aufnahme in das selektive GEM-Programm', 'Duales Studium als SAP IT Product Manager bei NAOS']
        },
        utbm: {
          degree: 'Diplom-Ingenieur Informatik (Abschlussjahr)',
          institution: 'Universität für Technologie Belfort-Montbéliard (UTBM)',
          location: 'Belfort, Frankreich',
          period: '2023 - 2026',
          specialty: 'Künstliche Intelligenz & Computer Vision',
          description: 'Staatlich anerkannte Ingenieurausbildung (CTI) mit Schwerpunkt auf Robotik und angewandter KI.',
          learned: [
            'Computer Vision mit OpenCV',
            'Mobile Robotik und Simulation (ROS, Gazebo)',
            'Angewandte KI und Machine Learning'
          ],
          achievements: ['Tiago Robot Capstone-Projekt', 'Internationale Mobilität']
        },
        saintjean: {
          degree: 'Informatik-Ingenieurstudium (3. & 4. Studienjahr)',
          institution: 'Universitätsinstitut Saint Jean',
          location: 'Yaoundé, Kamerun',
          period: '2023 - 2025',
          specialty: 'Informationssysteme und Netzwerke',
          description: 'Fundierte Ausbildung in Software-Engineering, Datenbanken und Netzwerksicherheit.',
          learned: [
            'Objektorientierte Programmierung (Java, C++, Python)',
            'Relationale Datenbanken und SQL',
            'Softwarearchitektur und Microservices'
          ],
          achievements: ['Akademische Spitzenleistungen', 'Sieger bei nationalen Hackathons']
        },
        dschang: {
          degree: 'Bachelor in Physik & Automatisierung (EEA)',
          institution: 'Universität Dschang',
          location: 'Dschang, Kamerun',
          period: '2020 - 2023',
          specialty: 'Mathematik, Physik, Elektronik & Regelungstechnik',
          description: 'Naturwissenschaftliches Fundament in Modellierung, Signalverarbeitung und Regelung.',
          learned: [
            'Angewandte Mathematik und numerische Analyse',
            'Regelungstechnik und Modellierung dynamischer Systeme'
          ],
          achievements: ['Mit Auszeichnung bestanden']
        }
      },
      projects: {
        title: 'Ausgewählte Projekte',
        subtitle: 'Wirkungsvolle Innovationen in KI und Software',
        description: 'Eine Auswahl technischer Arbeiten in generativer KI, Web-/Mobile-Architekturen und Robotik.',
        introvideo: 'Video-Demonstrationen',
        descriptionVideo: 'Projekte in Aktion erleben',
        liveDemo: 'Live-Demo',
        viewCode: 'Code ansehen',
        keyFeatures: 'Wichtige Funktionen',
        techChallenges: 'Gelöste technische Herausforderungen'
      },
      competitions: {
        title: 'Wettbewerbe & Hackathons',
        subtitle: 'Herausforderungen meistern und Innovationen schaffen',
        description: 'Teilnahme und Auszeichnungen bei nationalen KI- und Tech-Hackathons.',
        developedProject: 'Entwickelte Lösung',
        awards: 'Preise & Ehrungen',
        skillsGained: 'Nachgewiesene Kernkompetenzen'
      },
      skills: {
        title: 'Technische & Führungskompetenzen',
        subtitle: 'Ganzheitliche Expertise von Produktsteuerung bis Software-Engineering',
        description: 'Hybrides Profil aus IS-Governance, Unternehmens-ERP, KI und modernem Full-Stack.',
        categories: {
          pm: 'Product Management & IS',
          ai: 'Künstliche Intelligenz & RAG',
          web: 'Web & Backend',
          mobile: 'Mobile Entwicklung',
          database: 'Datenbanken & Cloud',
          tools: 'DevOps & Methoden'
        },
        levels: {
          expert: 'Experte',
          advanced: 'Fortgeschritten',
          intermediate: 'Mittelstufe',
          beginner: 'Praxisnah'
        },
        otherSkills: 'Methoden, Tools & Soft Skills'
      },
      contact: {
        title: 'Kontakt',
        subtitle: 'Lassen Sie uns über Ihre Projekte sprechen',
        description: 'Offen für Austausch über IS-Produktmanagement, angewandte KI und digitale Transformation.',
        info: 'Wichtige Informationen',
        followMe: 'Berufliche Netzwerke',
        availability: 'Beruflicher Status',
        availabilityText: 'Aktuell SAP IT Product Manager bei NAOS & Master-Student an der GEM. Erreichbar über das Kontaktformular oder auf LinkedIn.',
        availableNow: 'Aktiv & Offen für Austausch',
        locationLabel: 'Standort',
        locationValue: 'Frankreich (Bundesweite Mobilität)',
        linkedinLabel: 'LinkedIn-Profil',
        linkedinValue: 'Steeven Yiemtsa',
        form: {
          title: 'Nachricht senden',
          firstName: 'Vorname',
          lastName: 'Nachname',
          email: 'Ihre E-Mail',
          subject: 'Betreff',
          message: 'Ihre Nachricht',
          send: 'Absenden',
          response: 'Ich antworte in der Regel innerhalb von 24-48 Stunden per E-Mail.',
          placeholders: {
            firstName: 'Max',
            lastName: 'Mustermann',
            email: 'max@beispiel.de',
            subject: 'Projekt / Austausch',
            message: 'Hallo Steeven, ich möchte mich gerne austauschen...'
          }
        }
      },
      information: {
        title: 'Klicken für Details'
      }
    }
  }
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
