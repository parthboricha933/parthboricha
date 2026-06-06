'use client';

import { useEffect, useRef } from 'react';
import { useSpring, useMotionValue } from 'framer-motion';

export default function GoldenBlob() {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const pos1X = useSpring(mouseX, { stiffness: 1300, damping: 30 });
  const pos1Y = useSpring(mouseY, { stiffness: 1300, damping: 30 });

  const pos2X = useSpring(pos1X, { mass: 9, stiffness: 260, damping: 40 });
  const pos2Y = useSpring(pos1Y, { mass: 9, stiffness: 260, damping: 40 });

  const pos3X = useSpring(pos2X, { mass: 9, stiffness: 260, damping: 40 });
  const pos3Y = useSpring(pos2Y, { mass: 9, stiffness: 260, damping: 40 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 136);
      mouseY.set(e.clientY - 136);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const unsubscribe1X = pos1X.on('change', (v) => {
      if (containerRef.current) {
        const blob1 = containerRef.current.querySelector('[data-blob="1"]') as HTMLElement;
        if (blob1) blob1.style.transform = `translate(${v}px, ${pos1Y.get()}px)`;
      }
    });
    const unsubscribe1Y = pos1Y.on('change', (v) => {
      if (containerRef.current) {
        const blob1 = containerRef.current.querySelector('[data-blob="1"]') as HTMLElement;
        if (blob1) blob1.style.transform = `translate(${pos1X.get()}px, ${v}px)`;
      }
    });
    const unsubscribe2X = pos2X.on('change', (v) => {
      if (containerRef.current) {
        const blob2 = containerRef.current.querySelector('[data-blob="2"]') as HTMLElement;
        if (blob2) blob2.style.transform = `translate(${v}px, ${pos2Y.get()}px)`;
      }
    });
    const unsubscribe2Y = pos2Y.on('change', (v) => {
      if (containerRef.current) {
        const blob2 = containerRef.current.querySelector('[data-blob="2"]') as HTMLElement;
        if (blob2) blob2.style.transform = `translate(${pos2X.get()}px, ${v}px)`;
      }
    });
    const unsubscribe3X = pos3X.on('change', (v) => {
      if (containerRef.current) {
        const blob3 = containerRef.current.querySelector('[data-blob="3"]') as HTMLElement;
        if (blob3) blob3.style.transform = `translate(${v}px, ${pos3Y.get()}px)`;
      }
    });
    const unsubscribe3Y = pos3Y.on('change', (v) => {
      if (containerRef.current) {
        const blob3 = containerRef.current.querySelector('[data-blob="3"]') as HTMLElement;
        if (blob3) blob3.style.transform = `translate(${pos3X.get()}px, ${v}px)`;
      }
    });

    return () => {
      unsubscribe1X();
      unsubscribe1Y();
      unsubscribe2X();
      unsubscribe2Y();
      unsubscribe3X();
      unsubscribe3Y();
    };
  }, [pos1X, pos1Y, pos2X, pos2Y, pos3X, pos3Y]);

  return (
    <>
      {/* SVG Goo filter */}
      <svg className="goo-filter" aria-hidden="true">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -7"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      <div ref={containerRef} className="golden-blob-container">
        <div
          data-blob="1"
          className="golden-blob"
          style={{ width: 272, height: 272 }}
        />
        <div
          data-blob="2"
          className="golden-blob"
          style={{ width: 560, height: 560 }}
        />
        <div
          data-blob="3"
          className="golden-blob"
          style={{ width: 320, height: 320 }}
        />
      </div>
    </>
  );
}
