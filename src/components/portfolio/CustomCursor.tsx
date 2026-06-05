'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 'ontouchstart' in window;
      setIsMobile(mobile);
      if (!mobile) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    // Detect hoverable elements
    const addHoverListeners = () => {
      const hoverables = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      hoverables.forEach((el) => {
        el.addEventListener('mouseenter', handleHoverStart);
        el.addEventListener('mouseleave', handleHoverEnd);
      });
      return hoverables;
    };

    const hoverables = addHoverListeners();

    // Re-add listeners periodically for dynamically added elements
    const interval = setInterval(() => {
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      addHoverListeners();
    }, 2000);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('resize', checkMobile);
      document.body.classList.remove('custom-cursor-active');
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
      clearInterval(interval);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer circle - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - (isHovering ? 20 : 14),
          y: mousePos.y - (isHovering ? 20 : 14),
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: isHovering ? '40px' : '28px',
            height: isHovering ? '40px' : '28px',
            border: '2px solid',
            borderColor: isHovering ? '#FFD369' : '#CF4647',
            backgroundColor: isHovering ? 'rgba(255, 211, 105, 0.1)' : 'transparent',
            transition: 'width 0.2s, height 0.2s, border-color 0.2s, background-color 0.2s',
          }}
        />
      </motion.div>

      {/* Inner dot - follows immediately */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 2,
          y: mousePos.y - 2,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.1,
        }}
      >
        <div
          className="rounded-full"
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: '#CF4647',
          }}
        />
      </motion.div>
    </>
  );
}
