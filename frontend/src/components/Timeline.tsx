import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Timeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationItems = [
    {
      icon: GraduationCap,
      title: 'B.Tech in Computer Science',
      organization: 'Godavari Global University',
      period: '2023 - Present',
      description: 'Currently pursuing Bachelor of Technology in Computer Science Engineering with a focus on software development, data structures, algorithms, and modern web technologies. Actively participating in coding competitions, technical workshops, and collaborative projects while maintaining strong academic performance.',
    },
    {
      icon: GraduationCap,
      title: 'Higher Secondary Education',
      organization: 'High School',
      period: '2021 - 2023',
      description: 'Completed higher secondary education with a focus on Science stream, building a strong foundation in mathematics, physics, and computer science. Achieved excellent grades and actively participated in various science and technology competitions.',
    },
    {
      icon: GraduationCap,
      title: 'Secondary Education',
      organization: 'School',
      period: '2019 - 2021',
      description: 'Completed secondary schooling with distinction, developing fundamental skills in academics and extracurricular activities. Demonstrated early interest in technology and problem-solving through participation in science fairs and computer literacy programs.',
    },
  ];

  const experienceItems = [
    {
      icon: Briefcase,
      title: 'Web Development Intern',
      organization: 'Future Interns',
      period: '2026',
      description: 'Completed an internship focused on frontend and backend development, working with modern web technologies including React, Node.js, and TypeScript. Contributed to building responsive web applications, collaborated with team members on code reviews, and gained hands-on experience with industry best practices and agile development methodologies.',
    },
  ];

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Education Section */}
          <div className="mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Education
            </h2>
            <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
              My academic journey
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8 sm:space-y-12">
                {educationItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`relative pl-12 sm:pl-20 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      {/* Icon */}
                      <div className="absolute left-0 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="bg-card border border-border p-4 sm:p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h3>
                          <span className="text-xs sm:text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full w-fit">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-primary font-medium mb-2 sm:mb-3">{item.organization}</p>
                        <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
              Experience
            </h2>
            <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
              My professional journey
            </p>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8 sm:space-y-12">
                {experienceItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className={`relative pl-12 sm:pl-20 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                      }`}
                      style={{ transitionDelay: `${(educationItems.length + index) * 200}ms` }}
                    >
                      {/* Icon */}
                      <div className="absolute left-0 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 bg-primary rounded-full flex items-center justify-center shadow-sm">
                        <Icon className="w-4 h-4 sm:w-6 sm:h-6 text-primary-foreground" />
                      </div>

                      {/* Content */}
                      <div className="bg-card border border-border p-4 sm:p-6 rounded-lg shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground">{item.title}</h3>
                          <span className="text-xs sm:text-sm px-3 py-1 bg-muted text-muted-foreground rounded-full w-fit">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-primary font-medium mb-2 sm:mb-3">{item.organization}</p>
                        <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
