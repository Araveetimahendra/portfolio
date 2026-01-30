import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  return (
    <section
      id="about"
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
            About Me
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
            Get to know me better
          </p>

          <div className="bg-card border border-border p-6 sm:p-8 lg:p-10 rounded-lg shadow-sm">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed mb-4 sm:mb-6">
              Hello! I'm <span className="text-primary font-semibold">Mahendra Babu</span>, a dedicated{' '}
              <span className="text-primary font-semibold">B.Tech 2nd-year student</span> with a passion for technology
              and software development. Currently working as an{' '}
              <span className="text-primary font-semibold">intern</span>, I'm gaining hands-on experience in web
              development and building real-world applications.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              As a beginner web developer, I'm enthusiastic about learning new technologies and frameworks. I believe in
              writing clean, maintainable code and creating user-friendly applications. Every project is an opportunity
              to grow my skills and contribute to meaningful solutions. I'm eager to collaborate, learn from experienced
              developers, and make a positive impact through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
