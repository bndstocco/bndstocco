import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { STACK } from '../data/portfolio.jsx';

export default function StackMarquee() {
  const marqueeRef = useRef(null);
  const items = [...STACK, ...STACK];

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const width = el.scrollWidth / 2;
    gsap.to(el, {
      x: -width,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    return () => gsap.killTweensOf(el);
  }, []);

  return (
    <section id="stack" style={{ padding: '80px 0' }}>
      <div className="stack-marquee-wrapper">
        <div className="stack-marquee" ref={marqueeRef}>
          {items.map((tech, i) => (
            <div className="stack-item" key={`${tech}-${i}`}>
              <span className="dot" />{tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
