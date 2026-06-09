import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SKILLS_SECTION, SKILLS } from '../data/portfolio.jsx';
import { SKILL_ICONS } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
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
        trigger: sectionRef.current.querySelector('.skills-grid'),
        start: 'top 75%',
        onEnter: () => {
          gsap.fromTo(
            cardsRef.current,
            { y: 40, opacity: 0, scale: 0.95 },
            {
              y: 0, opacity: 1, scale: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: 'back.out(1.4)',
            }
          );

          cardsRef.current.forEach((card) => {
            if (!card) return;
            const items = card.querySelectorAll('.skill-list li');
            gsap.fromTo(items, { opacity: 0, x: -10 }, {
              opacity: 1, x: 0, duration: 0.3, stagger: 0.03, delay: 0.4, ease: 'power2.out',
            });
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getIcon = (iconName) => {
    const Icon = SKILL_ICONS[iconName];
    return Icon ? <Icon /> : null;
  };

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{SKILLS_SECTION.tag}</div>
          <h2 className="section-title">{SKILLS_SECTION.title}</h2>
        </div>
        <p className="section-desc">{SKILLS_SECTION.desc}</p>
      </div>

      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <div
            className="skill-card"
            key={skill.id}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <div className="skill-card-icon">
              {getIcon(skill.icon)}
            </div>
            <div className="skill-card-title">{skill.title}</div>
            <ul className="skill-list">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
