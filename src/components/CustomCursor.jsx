import { useEffect, useState, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const [particles, setParticles] = useState([]);
  const cursorRef = useRef(null);
  const particleId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      // Add new particle
      const newParticle = {
        id: particleId.current++,
        x: clientX,
        y: clientY,
        size: Math.random() * 8 + 4,
        life: 1,
      };

      setParticles((prev) => [...prev.slice(-25), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((prev) => 
        prev
          .map(p => ({ ...p, life: p.life - 0.05, y: p.y - 1 }))
          .filter(p => p.life > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fire-cursor-head">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="var(--accent)">
          <path d="M7 2l12 10-4.5.5L18 22l-3 1-3.5-9L7 18V2z"/>
        </svg>
      </div>
      {particles.map((p) => (
        <div 
          key={p.id}
          className="fire-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            opacity: p.life,
            transform: `scale(${p.life})`
          }}
        />
      ))}
    </>
  );
}
