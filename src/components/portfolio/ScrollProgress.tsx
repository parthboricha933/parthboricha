'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollPercent((scrollTop / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9998] h-[3px]"
      style={{
        width: `${scrollPercent}%`,
        backgroundColor: '#FFD369',
        transition: 'width 0.1s linear',
      }}
    />
  );
}
