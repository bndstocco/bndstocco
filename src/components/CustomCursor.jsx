import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx: 0, my: 0, rx: 0, ry: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    const onMove = (e) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
    };

    const animate = () => {
      const p = pos.current;
      cursor.style.left = p.mx + 'px';
      cursor.style.top = p.my + 'px';
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      ring.style.left = p.rx + 'px';
      ring.style.top = p.ry + 'px';
      raf = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    let raf = requestAnimationFrame(animate);

    const addHover = () => { cursor.classList.add('hover'); ring.classList.add('hover'); };
    const removeHover = () => { cursor.classList.remove('hover'); ring.classList.remove('hover'); };

    document.querySelectorAll('a, button, [data-hover]').forEach((el) => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
