import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_SECTION, EXPERIENCES } from '../data/portfolio.jsx';
import { ZapIcon } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const itemsRef = useRef([]);
  const sidebarRef = useRef(null);

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

      const progress = timelineRef.current.querySelector('.timeline-progress');
      ScrollTrigger.create({
        trigger: timelineRef.current,
        start: 'top 70%',
        end: 'bottom 30%',
        onEnter: () => {
          gsap.to(progress, { height: '100%', duration: 1.5, ease: 'power3.out' });
          gsap.fromTo(
            itemsRef.current,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.7, stagger: 0.2, delay: 0.3, ease: 'power3.out' }
          );
        },
        once: true,
      });

      if (sidebarRef.current) {
        ScrollTrigger.create({
          trigger: sidebarRef.current,
          start: 'top 75%',
          onEnter: () => {
            gsap.fromTo(
              sidebarRef.current.querySelectorAll('.exp-sidebar-card'),
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' }
            );
          },
          once: true,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const totalMonths = EXPERIENCES.reduce((acc, exp) => {
    const months = exp.period.includes('6 meses') ? 6 : 30;
    return acc + months;
  }, 0);
  const totalYears = (totalMonths / 12).toFixed(1);

  const allSkills = [...new Set(EXPERIENCES.flatMap((e) => e.skills))];

  return (
    <section id="experience" ref={sectionRef}>
      <div className="section-header">
        <div>
          <div className="section-tag">{EXPERIENCE_SECTION.tag}</div>
          <h2 className="section-title">{EXPERIENCE_SECTION.title}</h2>
        </div>
        <p className="section-desc">{EXPERIENCE_SECTION.desc}</p>
      </div>

      <div className="experience-layout">
        <div className="timeline" ref={timelineRef}>
          <div className="timeline-progress" />

          {EXPERIENCES.map((exp, i) => (
            <div
              className="timeline-item"
              key={exp.id}
              ref={(el) => (itemsRef.current[i] = el)}
            >
              <div className="timeline-dot" />
              <div className="timeline-meta">
                <span className="timeline-period">{exp.period}</span>
                <span className="timeline-type">{exp.type}</span>
              </div>
              <div className="timeline-company">
                <span className="gradient-text">{exp.company}</span>
              </div>
              <div className="timeline-position">{exp.position}</div>
              <div className="timeline-body">
                {exp.bullets.map((b, j) => (
                  <div className="timeline-item-bullet" key={j}>{b}</div>
                ))}
              </div>
              <div className="timeline-skills">
                {exp.skills.map((s) => (
                  <span className="skill-pill" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="exp-sidebar" ref={sidebarRef}>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> Total
            </div>
            <div className="exp-sidebar-value">
              {totalYears} <span>anos</span>
            </div>
            <div className="exp-sidebar-sub">
              de experiência em desenvolvimento web
            </div>
          </div>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> Empresas
            </div>
            <div className="exp-sidebar-value">
              {EXPERIENCES.length} <span>+</span>
            </div>
            <div className="exp-sidebar-sub">
              Share Media · Arara Resultados
            </div>
          </div>
          <div className="exp-sidebar-card">
            <div className="exp-sidebar-label">
              <ZapIcon /> Stack principal
            </div>
            <div className="exp-sidebar-sub" style={{ marginTop: 0 }}>
              {allSkills.slice(0, 6).join(' · ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
