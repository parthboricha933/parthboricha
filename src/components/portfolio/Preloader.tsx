'use client';

import { useState, useEffect } from 'react';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setVisible(false);
      }, 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-fade" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="preloader-inner">
          <div className="speeder">
            <div className="fazer1" />
            <div className="fazer2" />
            <div className="fazer3" />
            <div className="fazer4" />
            <div className="lf1" />
            <div className="lf2" />
            <div className="lf3" />
            <div className="lf4" />
          </div>
        </div>
        <div className="preloader-smile">:)</div>
      </div>
    </div>
  );
}
