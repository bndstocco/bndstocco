import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NAV_LINKS } from '../data/portfolio.jsx';
import { HexIcon } from '../data/icons.jsx';

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const progressRef = useRef(null);

  useEffect(() => {
    const nav = document.querySelector('nav');

    ScrollTrigger.create({
      start: 'top -80',
      onToggle: (self) => {
        nav.classList.toggle('scrolled', self.isActive);
      },
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (progressRef.current) {
          progressRef.current.style.width = self.progress * 100 + '%';
        }
      },
    });

    const links = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    const onScroll = () => {
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 200) current = s.id;
      });
      links.forEach((a) => {
        const isActive = a.getAttribute('href') === '#' + current;
        a.style.color = isActive ? 'var(--text)' : '';
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="progress-bar" ref={progressRef} />
      <nav>
        <div className="nav-logo">
          <HexIcon />
          <span>//</span> BSS.dev
        </div>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
