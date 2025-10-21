'use client';

export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      style={{
        position: 'fixed',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 10000,
        padding: '1rem 2rem',
        backgroundColor: '#4A90E2',
        color: 'white',
        borderRadius: '0.5rem',
        fontSize: '1rem',
        fontWeight: '600',
        textDecoration: 'none',
        transition: 'top 0.3s',
      }}
      onFocus={(e) => {
        e.currentTarget.style.top = '1rem';
      }}
      onBlur={(e) => {
        e.currentTarget.style.top = '-100px';
      }}
    >
      Skip to main content
    </a>
  );
}