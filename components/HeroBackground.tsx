'use client';

import { useEffect, useRef, useState } from 'react';

const stars = [
  { cx: 92, cy: 94, r: 2.3, className: 'star-1' },
  { cx: 214, cy: 140, r: 1.8, className: 'star-2' },
  { cx: 646, cy: 112, r: 2.1, className: 'star-3' },
  { cx: 692, cy: 274, r: 1.7, className: 'star-4' },
  { cx: 138, cy: 540, r: 2.5, className: 'star-5' },
  { cx: 574, cy: 494, r: 2.2, className: 'star-6' },
];

const cities = [
  { name: 'Омск', x: 146, y: 364, r: 32, labelCenterX: 92, labelCenterY: 350, labelWidth: 74 },
  { name: 'Новосибирск', x: 308, y: 342, r: 40, labelCenterX: 308, labelCenterY: 402, labelWidth: 138 },
  { name: 'Томск', x: 384, y: 236, r: 28, labelCenterX: 384, labelCenterY: 186, labelWidth: 78 },
  { name: 'Кемерово', x: 456, y: 286, r: 34, labelCenterX: 526, labelCenterY: 286, labelWidth: 108, hub: true },
  { name: 'Барнаул', x: 334, y: 448, r: 30, labelCenterX: 334, labelCenterY: 506, labelWidth: 92 },
  { name: 'Красноярск', x: 624, y: 222, r: 36, labelCenterX: 688, labelCenterY: 210, labelWidth: 126 },
];

const routes = [
  { id: 'route-west', d: 'M146 364 C 198 356, 252 346, 308 342' },
  { id: 'route-north', d: 'M308 342 C 330 304, 356 270, 384 236' },
  { id: 'route-hub', d: 'M308 342 C 352 326, 400 308, 456 286' },
  { id: 'route-east', d: 'M456 286 C 520 262, 572 240, 624 222' },
  { id: 'route-south', d: 'M308 342 C 318 374, 324 406, 334 448' },
  { id: 'route-link', d: 'M384 236 C 404 246, 426 262, 456 286' },
];

const sparks = [
  { path: routes[0].d, duration: '7.4s', begin: '0s' },
  { path: routes[2].d, duration: '6.2s', begin: '1.1s' },
  { path: routes[3].d, duration: '7.8s', begin: '2.4s' },
  { path: routes[4].d, duration: '6.8s', begin: '3.2s', gold: true },
];

const ambientDots = [
  { left: '6%', top: '18%', size: 4, className: 'drift-1' },
  { left: '12%', top: '52%', size: 5, className: 'drift-2' },
  { left: '18%', top: '28%', size: 3, className: 'drift-3' },
  { left: '24%', top: '72%', size: 4, className: 'drift-4' },
  { left: '33%', top: '14%', size: 5, className: 'drift-5' },
  { left: '39%', top: '58%', size: 3, className: 'drift-6' },
  { left: '46%', top: '34%', size: 4, className: 'drift-1' },
  { left: '53%', top: '78%', size: 5, className: 'drift-2' },
  { left: '61%', top: '18%', size: 4, className: 'drift-3' },
  { left: '68%', top: '48%', size: 3, className: 'drift-4' },
  { left: '74%', top: '24%', size: 5, className: 'drift-5' },
  { left: '81%', top: '66%', size: 4, className: 'drift-6' },
  { left: '88%', top: '16%', size: 3, className: 'drift-2' },
  { left: '91%', top: '56%', size: 5, className: 'drift-4' },
];

export default function HeroBackground() {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionPref = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionPref.matches || window.innerWidth < 768) return;

    const handlePointerMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
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
      if (frame.current !== null) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, []);

  return (
    <div className="hero-visual" style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-drift-dots" aria-hidden="true">
        {ambientDots.map((dot, index) => (
          <span
            key={`${dot.left}-${dot.top}-${index}`}
            className={`hero-drift-dot ${dot.className}`}
            style={{ left: dot.left, top: dot.top, width: `${dot.size}px`, height: `${dot.size}px` }}
          />
        ))}
      </div>
      <div className="hero-edge-fade" aria-hidden="true" />
      <svg className="hero-visual-svg" viewBox="0 0 780 680" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
        <defs>
          <linearGradient id="heroRouteGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(221, 193, 126, 0.24)" />
            <stop offset="45%" stopColor="rgba(146, 238, 232, 0.92)" />
            <stop offset="100%" stopColor="rgba(221, 193, 126, 0.48)" />
          </linearGradient>
          <filter id="heroSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="heroCityRingBlur" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="9" />
          </filter>
          <filter id="heroCityCoreBlur" x="-140%" y="-140%" width="380%" height="380%">
            <feGaussianBlur stdDeviation="7" />
          </filter>
        </defs>

        <path className="hero-ambient-trace trace-1" d="M36 270 C 140 134, 314 112, 476 182 S 740 328, 746 438" />
        <path className="hero-ambient-trace trace-2" d="M94 540 C 238 482, 352 436, 480 388 S 674 266, 732 154" />
        <path className="hero-ambient-trace trace-3" d="M58 152 C 166 214, 244 302, 334 434 S 544 608, 726 576" />

        {stars.map((star) => (
          <g key={`${star.cx}-${star.cy}`} className={`hero-star ${star.className}`}>
            <circle className="hero-star-halo" cx={star.cx} cy={star.cy} r={star.r * 5.2} />
            <circle className="hero-star-core" cx={star.cx} cy={star.cy} r={star.r} />
          </g>
        ))}

        <g className="hero-network-layer">
          <g>
            {routes.map((route) => (
              <path key={route.id} id={route.id} className="hero-route-path" d={route.d} />
            ))}
          </g>

          <g>
            {sparks.map((spark, index) => (
              <circle
                key={`${spark.path}-${spark.begin}`}
                className={`hero-route-spark${spark.gold ? ' hero-route-spark-gold' : ''}`}
                r={index === 1 ? 3.4 : 3}
              >
                <animateMotion dur={spark.duration} repeatCount="indefinite" begin={spark.begin} path={spark.path} />
              </circle>
            ))}
          </g>

          <g className="hero-city-cluster">
            {cities.map((city) => {
              const labelWidth = city.labelWidth - 8;

              return (
                <g key={city.name} className="hero-city-marker">
                  <circle
                    className={`hero-city-halo${city.hub ? ' city-hub-halo' : ''}`}
                    cx={city.x}
                    cy={city.y}
                    r={city.r + 22}
                  />
                  <circle
                    className={`hero-city-pulse${city.hub ? ' city-hub-pulse' : ''}`}
                    cx={city.x}
                    cy={city.y}
                    r={city.r + 14}
                  />
                  <circle
                    className={`hero-city-ring-blur${city.hub ? ' city-hub-ring-blur' : ''}`}
                    cx={city.x}
                    cy={city.y}
                    r={city.r + 2}
                  />
                  <circle className="hero-city-ring" cx={city.x} cy={city.y} r={city.r} />
                  <circle
                    className={`hero-city-core-glow${city.hub ? ' city-hub-core-glow' : ''}`}
                    cx={city.x}
                    cy={city.y}
                    r={15}
                  />
                  <circle className={`hero-city-core${city.hub ? ' city-hub' : ''}`} cx={city.x} cy={city.y} r={11} />
                  <g className="hero-city-label-group">
                    <rect
                      className={`hero-city-label-surface${city.hub ? ' city-hub-label-surface' : ''}`}
                      x={city.labelCenterX - labelWidth / 2}
                      y={city.labelCenterY - 16}
                      width={labelWidth}
                      height={32}
                      rx={16}
                    />
                    <text className="hero-city-label-text" x={city.labelCenterX} y={city.labelCenterY + 4} textAnchor="middle">
                      {city.name}
                    </text>
                  </g>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
