import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HERO } from '../data/portfolio.jsx';
import { HexIcon } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const linesRef = useRef([]);
  const roleRef = useRef(null);
  const ctaRef = useRef(null);
  const statsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(
      linesRef.current,
      { y: '110%', rotateX: 25 },
      { y: '0%', rotateX: 0, duration: 1, stagger: 0.12 }
    )
    .fromTo(
      roleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.4'
    )
    .fromTo(
      ctaRef.current.children,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
      '-=0.3'
    )
    .fromTo(
      statsRef.current.children,
      { x: 20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
      '-=0.6'
    )
    .fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5 },
      '-=0.2'
    );

    const particles = heroRef.current.querySelector('.hero-particles');
    if (particles) {
      for (let i = 0; i < 40; i++) {
        const dot = document.createElement('div');
        dot.className = 'hero-particle';
        dot.style.left = Math.random() * 100 + '%';
        dot.style.top = Math.random() * 100 + '%';
        const size = 2 + Math.random() * 3;
        dot.style.width = size + 'px';
        dot.style.height = size + 'px';
        dot.style.opacity = 0.1 + Math.random() * 0.3;
        particles.appendChild(dot);

        gsap.to(dot, {
          y: -(50 + Math.random() * 150),
          x: (Math.random() - 0.5) * 80,
          opacity: 0,
          duration: 4 + Math.random() * 8,
          repeat: -1,
          delay: Math.random() * 4,
          ease: 'power1.out',
        });
      }
    }

    return () => tl.kill();
  }, []);

  return (
    <section id="hero" ref={heroRef}>
      <div className="hero-grid-bg" />
      <div className="hero-orb" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />
      <div className="hero-particles" />
      <div className="hero-number">03</div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <HexIcon />
          {HERO.eyebrow}
        </div>

        <h1 className="hero-name">
          {HERO.name.map((word, i) => (
            <span key={i} className="line" ref={(el) => (linesRef.current[i] = el)}>
              {i === 2 ? <span className="accent">{word}</span> : word}
            </span>
          ))}
        </h1>

        <p className="hero-role" ref={roleRef}>{HERO.role}</p>

        <div className="hero-cta" ref={ctaRef}>
          <a href="#experience" className="btn-primary" data-hover>
            Ver experiência &rarr;
          </a>
          <a href="#contact" className="btn-secondary" data-hover>
            Entrar em contato
          </a>
        </div>
      </div>

      <div className="hero-stats" ref={statsRef}>
        {HERO.stats.map((stat, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">{stat.num}<span>{stat.suffix}</span></div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="hero-scroll" ref={scrollRef}>Scroll</div>
    </section>
  );
}
