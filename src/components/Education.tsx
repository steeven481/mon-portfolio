import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Calendar, MapPin, GraduationCap, BookOpen } from 'lucide-react';

const Education = () => {
  const { t } = useTranslation();
  const [selectedEducation, setSelectedEducation] = useState<any>(null);

  const educations = [
    {
      id: 1,
      degree: "Final year of Computer Engineering program",
      institution: "University of Belfort-Montbéliard (France)",
      location: "Belfort, France",
      startDate: "2023-08",
      endDate: "2026-02",
      specialty: "Computer Vision",
      description: "Comprehensive education in Software Engineering, specialized in Artificial Intelligence (Computer Vision). Final-year capstone project: Autonomous Object Rearrangement with the Tiago Robot (Gazebo Simulation).",
      learned: [
        "Practical experience in Image Processing using OpenCV",
        "Mobile Robotics and Automation Control",
        "Intelligence artificielle et machine learning appliqués",
        "Applied AI and Machine Learning",
        "Shape Recognition and Vision-Based Control"
      ],
      achievements: [],
      images: [
          "/education/education7.svg",
          "/education/education8.jpeg",
          "/education/education9.jpeg"
      ]
    },
    {
      id: 2,
      degree: "Computer Engineering, 3rd and 4th years of study",
      institution: "Institut universitaire saint jean",
      location: "Yaounde, Cameroun",
      startDate: "2023-09",
      endDate: "2025-05",
      specialty: "Information Systems and Networks",
      description: "Comprehensive foundation in computer science, including development, systems, and networking. Strong skills in programming and data management.",
      learned: [
        "Object-Oriented Programming (Java, C++, Python)",
        "Relational Databases and Advanced SQL",
          "Advanced Software Architectures and Design Patterns",
          "Development of Native and Cross-Platform Mobile Applications",
          "Technical Project Management and Agile Methodologies",
        "Computer Networks and Communication Protocols",
        "Algorithms and Optimized Data Structures",
        "System Administration on Linux and Windows Server"
      ],
      achievements: ["Strong academic performance", "International experience / mobility", "Recognized among the best student projects"],
      images: [
          "/education/education4.jpeg",
          "/education/education6.jpeg",
          "/education/education5.jpeg"
      ]
    },
    {
      id: 3,
      degree: "Physics bachelor's degree",
      institution: "University of Dschang",
      location: "Dchang, Cameroun",
      startDate: "2020-10",
      endDate: "2023-08",
      specialty: "Mathematics, Physical Sciences, Electronics and automation",
      description: "I did two years of a common core curriculum where the core subjects were advanced-level mathematics and physics. In my third year, I specialized in EEA (Electronics, Electrical Engineering, and Automation).",
      learned: [
        "Advanced Mathematics and Numerical Analysis",
        "Fundamental Physics and Basic Electronics",
        "Scientific Methodology and Analytical Thinking",
        "Languages: French, English (bilingual)",
        "Basic Algorithms and Introduction to Programming"
      ],
      achievements: ["Distinction", "one of the best projects"],
      images: [
        "/education/education1.png",
          "/education/education2.png",
          "/education/education3.jpeg"
      ]
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">{t('education.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('education.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((education) => (
            <Card
              key={education.id}
              className="card-professional p-6 cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg group"
              onClick={() => setSelectedEducation(education)}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="shrink-0">
                    {education.endDate.slice(0, 4)}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                    {education.degree}
                  </h3>
                  <p className="text-primary font-medium">{education.institution}</p>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{education.startDate.slice(0, 4)} - {education.endDate.slice(0, 4)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-accent">{education.specialty}</p>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {education.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {education.achievements.slice(0, 2).map((achievement) => (
                    <Badge key={achievement} variant="outline" className="text-xs">
                      {achievement}
                    </Badge>
                  ))}
                  {education.achievements.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{education.achievements.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Education Detail Modal */}
        <Dialog open={!!selectedEducation} onOpenChange={() => setSelectedEducation(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogTitle className="sr-only">
              {selectedEducation?.degree}
            </DialogTitle>
            {selectedEducation && (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left: Image Carousel */}
                <div className="space-y-4">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedEducation.images.map((image: string, index: number) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${selectedEducation.institution} - Image ${index + 1}`}
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
                    <h3 className="text-2xl font-bold mb-2">{selectedEducation.degree}</h3>
                    <p className="text-primary font-semibold text-lg">{selectedEducation.institution}</p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedEducation.startDate} - {selectedEducation.endDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{selectedEducation.location}</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      {t('specialty')}
                    </h4>
                    <p className="text-accent font-medium mb-3">{selectedEducation.specialty}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedEducation.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">{t('learned')}</h4>
                    <ul className="space-y-2">
                      {selectedEducation.learned.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Distinctions</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedEducation.achievements.map((achievement: string) => (
                        <Badge key={achievement} variant="secondary">
                          {achievement}
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

export default Education;