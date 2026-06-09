import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CONTACT } from '../data/portfolio.jsx';
import { CONTACT_ICONS, ArrowUpRight } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tag = sectionRef.current.querySelector('.section-tag');
      const title = sectionRef.current.querySelector('.contact-title');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(tag, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
          gsap.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.2 });
          gsap.fromTo(
            linksRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4 }
          );
        },
        once: true,
      });

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
        <div className="section-tag">{CONTACT.tag}</div>
        <h2 className="contact-title">{CONTACT.title}<span>.</span></h2>
        <div className="contact-links">
          {CONTACT.links.map((link, i) => (
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
