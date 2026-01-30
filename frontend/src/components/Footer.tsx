import { SiFacebook, SiX, SiLinkedin, SiGithub, SiInstagram } from 'react-icons/si';

export default function Footer() {
  const socialLinks = [
    { icon: SiLinkedin, href: 'https://www.linkedin.com/in/', label: 'LinkedIn' },
    { icon: SiGithub, href: 'https://github.com/Araveetimahendra', label: 'GitHub' },
    { icon: SiX, href: 'https://x.com/mahendraar99988', label: 'X' },
    { icon: SiFacebook, href: 'https://www.facebook.com/share/1AZ9qnH7HK/', label: 'Facebook' },
    { icon: SiInstagram, href: 'https://www.instagram.com/mahendraaraveeti?igsh=d3Z1M282NDYycmpw', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6 sm:space-y-8">
          {/* Social Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-xs sm:text-sm text-muted-foreground">
            <p>© 2026 All rights reserved by Mahendra Araveeti.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
