import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ABOUT } from '../data/portfolio.jsx';
import { CERT_ICONS } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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
        trigger: leftRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            leftRef.current.querySelectorAll('p, .about-tags'),
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.12 }
          );
        },
        once: true,
      });

      ScrollTrigger.create({
        trigger: rightRef.current,
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            rightRef.current.querySelectorAll('.cert-item'),
            { x: -20, opacity: 0, scale: 0.95 },
            { x: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.08, ease: 'back.out(1.2)' }
          );
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = CERT_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="about" ref={sectionRef}>
      <div className="about-orb" />
      <div className="section-header">
        <div>
          <div className="section-tag">{ABOUT.tag}</div>
          <h2 className="section-title">{ABOUT.title}</h2>
        </div>
        <p className="section-desc">{ABOUT.desc}</p>
      </div>

      <div className="about-grid">
        <div className="about-text" ref={leftRef}>
          <p className="about-highlight">{ABOUT.highlight}</p>
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
          <div className="about-tags">
            {ABOUT.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>

        <div className="about-certs" ref={rightRef}>
          <div className="about-certs-header">
            Formação & certificados
          </div>
          {ABOUT.certs.map((cert, i) => (
            <div className="cert-item" key={i}>
              <div className="cert-item-icon">
                {getIcon(cert.icon)}
              </div>
              <div className="cert-item-info">
                <div className="cert-name">{cert.name}</div>
                <div className="cert-provider">{cert.provider}</div>
              </div>
              <div className="cert-year">{cert.year}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
