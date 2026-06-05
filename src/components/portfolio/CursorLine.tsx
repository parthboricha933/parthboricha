'use client';

import { useEffect, useState, useRef } from 'react';

export default function CursorLine() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleMouseDown = () => setIsMouseDown(true);
    const handleMouseUp = () => setIsMouseDown(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={wrapperRef}
      className={`cursor-line-wrapper ${isMouseDown ? 'mouse-down' : ''}`}
      style={{
        left: 0,
        top: 0,
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9997,
      }}
    >
      {/* Horizontal line */}
      <div
        className="line-h"
        style={{
          top: mousePos.y,
          left: 0,
          right: 0,
        }}
      />
      {/* Vertical line */}
      <div
        className="line-v"
        style={{
          left: mousePos.x,
          top: 0,
          bottom: 0,
        }}
      />
    </div>
  );
}
