import { useEffect, useRef, useState } from 'react';

export default function Projects() {
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

  const projects = [
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive personal portfolio website with dark mode, smooth animations, and clean design showcasing my skills, projects, and experience.',
      image: '/assets/generated/portfolio-project.dim_400x300.jpg',
    },
    {
      title: 'GGU Chatbot',
      description: 'An intelligent chatbot for Godavari Global University that helps students and visitors get information about courses, admissions, campus facilities, and more.',
      image: '/assets/generated/ggu-chatbot-project.dim_400x300.jpg',
    },
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
            Some of my recent work
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-card border border-border rounded-lg hover:shadow-md transition-all duration-300 overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{project.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
