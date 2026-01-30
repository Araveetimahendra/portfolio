import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'mahendraaraveeti2006@gmail.com' },
    { icon: Phone, label: 'Contact', value: '+91 9703194548' },
    { icon: MapPin, label: 'Location', value: 'Rajahmundry, Andhra Pradesh' },
  ];

  const socialLinks = [
    { icon: SiGithub, label: 'GitHub', url: 'https://github.com/Araveetimahendra' },
    { icon: SiLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/' },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 sm:mb-16 max-w-2xl mx-auto text-base sm:text-lg">
            Let's work together on your next project
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-6 sm:space-y-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="bg-card border border-border p-6 sm:p-8 rounded-lg shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">Contact Information</h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div key={info.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-sm sm:text-base font-medium text-foreground">{info.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                          aria-label={social.label}
                        >
                          <Icon className="w-6 h-6 text-foreground" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <form onSubmit={handleSubmit} className="bg-card border border-border p-6 sm:p-8 rounded-lg shadow-sm space-y-4 sm:space-y-6">
                {isSubmitted && (
                  <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-md">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm sm:text-base text-foreground">Message sent successfully!</p>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-background border ${
                      errors.name ? 'border-destructive' : 'border-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-background border ${
                      errors.email ? 'border-destructive' : 'border-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm sm:text-base`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-2.5 sm:py-3 bg-background border ${
                      errors.message ? 'border-destructive' : 'border-border'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none text-sm sm:text-base`}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-destructive text-xs sm:text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
