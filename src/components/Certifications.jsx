import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CERTIFICATIONS_SECTION, CERTIFICATIONS } from '../data/portfolio.jsx';
import { CERT_ICONS } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Certifications() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tag = sectionRef.current.querySelector('.section-tag');
      const title = sectionRef.current.querySelector('.section-title');
      const desc = sectionRef.current.querySelector('.section-desc');

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo(tag, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 });
          gsap.fromTo(title, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.15 });
          gsap.fromTo(desc, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: 0.3 });
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current.querySelector('.cert-grid'),
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current,
            { y: 30, opacity: 0, rotateX: -10 },
            { y: 0, opacity: 1, rotateX: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = CERT_ICONS[iconName];
    if (Icon) return <Icon />;
    const fallbacks = {
      analytics: CERT_ICONS.analytics,
      ecommerce: CERT_ICONS.ecommerce,
    };
    const Fallback = fallbacks[iconName];
    return Fallback ? <Fallback /> : null;
  };

  return (
    <section id="certifications" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{CERTIFICATIONS_SECTION.tag}</div>
          <h2 className="section-title">{CERTIFICATIONS_SECTION.title}</h2>
        </div>
        <p className="section-desc">{CERTIFICATIONS_SECTION.desc}</p>
      </div>

      <div className="cert-grid">
        {CERTIFICATIONS.map((cert, i) => (
          <div
            className="cert-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="cert-card-icon">
              {getIcon(cert.icon)}
            </div>
            <div className="cert-card-label">{cert.label}</div>
            <div className="cert-card-name">{cert.name}</div>
            <div className="cert-card-meta">{cert.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
