import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../contexts/LanguageContext';
import { CONTACT_ICONS, ArrowUpRight } from '../data/icons.jsx';

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bndstocco/', icon: 'linkedin', handle: '@bndstocco' },
  { label: 'E-mail', href: 'mailto:bernardostoccobnd@gmail.com', icon: 'email', handle: 'bernardostoccobnd@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/bndstocco', icon: 'github', handle: '@bndstocco' },
  { label: 'Behance', href: 'https://www.behance.net/bndstocco', icon: 'behance', handle: '@bndstocco' },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const linksRef = useRef([]);
  const { t } = useLanguage();
  const contact = t.contact;

  useEffect(() => {
    const isMobile = window.innerWidth < 900;
    const ctx = gsap.context(() => {
      const tag = sectionRef.current.querySelector('.section-tag');
      const title = sectionRef.current.querySelector('.contact-title');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.fromTo(tag, { y: isMobile ? 15 : 20, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.5 : 0.5, ease: 'power2.out' });
          gsap.fromTo(title, { y: isMobile ? 20 : 40, opacity: 0 }, { y: 0, opacity: 1, duration: isMobile ? 0.6 : 0.7, delay: 0.15, ease: 'power2.out' });
          gsap.fromTo(
            linksRef.current,
            isMobile
              ? { y: 15, opacity: 0 }
              : { y: 40, opacity: 0, scale: 0.95 },
              isMobile
                ? { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
              : { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.3, ease: 'back.out(1.4)' }
          );
        },
        once: true,
      });

      if (!isMobile && !window.matchMedia('(pointer: coarse)').matches) {
        linksRef.current.forEach((link) => {
          if (!link) return;
          link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(link, { x: x * 0.1, y: y * 0.1, duration: 0.3, ease: 'power2.out' });
          });
          link.addEventListener('mouseleave', () => {
            gsap.to(link, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = CONTACT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-bg-text">Contato</div>
      <div className="contact-orb" />
      <div className="contact-inner">
        <div className="section-tag">{contact.tag}</div>
        <h2 className="contact-title">{contact.title}<span>.</span></h2>
        <div className="contact-links">
          {contactLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener"
              className="contact-link"
              ref={(el) => (linksRef.current[i] = el)}
              data-hover
            >
              <div className="contact-link-left">
                <div className="contact-link-icon">
                  {getIcon(link.icon)}
                </div>
                <div>
                  <div className="contact-link-label">{link.label}</div>
                  {link.handle && (
                    <div className="contact-link-handle">{link.handle}</div>
                  )}
                </div>
              </div>
              <div className="contact-link-arrow">
                <ArrowUpRight />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
