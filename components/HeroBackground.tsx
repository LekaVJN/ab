'use client';

import { useEffect, useRef, useState } from 'react';

export default function HeroBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPref.matches) return;
    if (window.innerWidth < 768) return;

    const handlePointerMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 12;
      const y = (event.clientY / window.innerHeight - 0.5) * 10;
      target.current = { x, y };
      if (frame.current === null) {
        frame.current = window.requestAnimationFrame(() => {
          setOffset(target.current);
          frame.current = null;
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div className="hero-visual" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
      <div className="hero-bg-grid" aria-hidden="true" />
      <svg className="hero-visual-svg" viewBox="0 0 780 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <radialGradient id="heroSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(81, 215, 214, 0.22)" />
            <stop offset="100%" stopColor="rgba(81, 215, 214, 0)" />
          </radialGradient>
          <radialGradient id="heroGlowSpot" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(92, 208, 218, 0.16)" />
            <stop offset="100%" stopColor="rgba(92, 208, 218, 0)" />
          </radialGradient>
          <filter id="heroGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="280" cy="200" r="180" fill="url(#heroGlowSpot)" />
        <circle cx="520" cy="180" r="120" fill="url(#heroGlowSpot)" />
        <circle cx="470" cy="430" r="140" fill="url(#heroGlowSpot)" />
        <circle cx="320" cy="520" r="90" fill="url(#heroGlowSpot)" />
        <circle cx="160" cy="420" r="72" fill="url(#heroGlowSpot)" />

        <g className="hero-floating-dots">
          <circle className="hero-floating-dot dot-1" cx="150" cy="110" r="4.5" />
          <circle className="hero-floating-dot dot-2" cx="620" cy="130" r="3.5" />
          <circle className="hero-floating-dot dot-3" cx="430" cy="470" r="5" />
          <circle className="hero-floating-dot dot-4" cx="160" cy="510" r="4" />
          <circle className="hero-floating-dot dot-5" cx="520" cy="300" r="3.5" />
        </g>

        <g className="hero-city-cluster">
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="240" cy="240" r="42" />
            <circle className="hero-city-core" cx="240" cy="240" r="12" />
            <text x="240" y="295" textAnchor="middle">Кемерово</text>
          </g>
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="160" cy="320" r="36" />
            <circle className="hero-city-core" cx="160" cy="320" r="12" />
            <text x="160" y="370" textAnchor="middle">Омск</text>
          </g>
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="290" cy="150" r="34" />
            <circle className="hero-city-core" cx="290" cy="150" r="12" />
            <text x="290" y="195" textAnchor="middle">Томск</text>
          </g>
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="430" cy="300" r="44" />
            <circle className="hero-city-core" cx="430" cy="300" r="12" />
            <text x="430" y="355" textAnchor="middle">Новосибирск</text>
          </g>
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="400" cy="480" r="36" />
            <circle className="hero-city-core" cx="400" cy="480" r="12" />
            <text x="400" y="535" textAnchor="middle">Барнаул</text>
          </g>
          <g className="hero-city-marker">
            <circle className="hero-city-ring" cx="560" cy="200" r="40" />
            <circle className="hero-city-core" cx="560" cy="200" r="12" />
            <text x="560" y="255" textAnchor="middle">Красноярск</text>
          </g>
        </g>
      </svg>
    </div>
  );
}
