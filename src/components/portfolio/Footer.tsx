'use client';

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{
        borderTop: '1px solid var(--themeColor2)',
        opacity: 0.8,
        transition: 'border-color 0.3s ease',
      }}
    >
      <a
        href="https://github.com/parthboricha"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm transition-colors duration-300"
        style={{
          color: 'var(--themeColor3)',
          fontFamily: 'var(--font-quicksand)',
          transition: 'color 0.3s ease',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'var(--themeColor4)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.color = 'var(--themeColor3)';
        }}
      >
        Designed & Built By Parth Boricha
      </a>
    </footer>
  );
}
