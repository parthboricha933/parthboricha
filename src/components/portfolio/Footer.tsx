'use client';

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        borderTop: '1px solid rgba(248,246,246,0.05)',
      }}
    >
      <a
        href="https://github.com/parthboricha"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition-colors duration-300"
        style={{
          color: '#a8b2d1',
          fontFamily: 'var(--font-quicksand)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#FFD369';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = '#a8b2d1';
        }}
      >
        Designed & Built By Parth Boricha
      </a>
    </footer>
  );
}
