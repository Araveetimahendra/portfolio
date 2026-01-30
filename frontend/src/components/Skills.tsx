import { useEffect, useRef, useState } from 'react';

export default function Skills() {
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      title: 'Backend',
      skills: ['Java', 'Python', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Tools',
      skills: ['Git/GitHub', 'VS Code', 'Postman'],
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies I work with
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`bg-card border border-border p-6 sm:p-8 rounded-lg shadow-sm ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-primary">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className={`px-3 sm:px-4 py-2 text-sm sm:text-base bg-muted text-foreground rounded-lg border border-border transition-all duration-500 ${
                        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                      }`}
                      style={{ transitionDelay: `${(categoryIndex * 150) + (skillIndex * 100)}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
