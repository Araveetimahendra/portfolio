import { ArrowDown, Download, Briefcase } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8">
            <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-md mb-6 sm:mb-8">
              <img
                src="/assets/suit.jpg"
                alt="Mahendra Babu"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground">
              Mahendra Babu
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg text-muted-foreground mb-6">
              <span className="px-4 py-1.5 bg-muted rounded-full">Student</span>
              <span className="text-primary">•</span>
              <span className="px-4 py-1.5 bg-muted rounded-full">Intern</span>
              <span className="text-primary">•</span>
              <span className="px-4 py-1.5 bg-muted rounded-full">Beginner Web Developer</span>
            </div>
            <p className="text-lg sm:text-xl text-foreground/80 max-w-2xl mx-auto mb-8 sm:mb-10">
              Passionate about technology and innovation. Building modern web applications with clean code and creative solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToProjects}
              className="px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium text-base sm:text-lg hover:bg-primary/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Briefcase className="w-5 h-5" />
              View Projects
            </button>
            <a
              href="/assets/Mahendra_Babu_Resume (3).pdf"
              download="Mahendra_Babu_Resume.pdf"
              className="px-6 sm:px-8 py-3 bg-secondary text-secondary-foreground rounded-md font-medium text-base sm:text-lg hover:bg-secondary/90 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>

          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}
