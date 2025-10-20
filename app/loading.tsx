'use client';

export default function Loading() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A0E27',
      zIndex: 9999
    }}>
      <div style={{ textAlign: 'center' }}>
        {/* Animated Logo/Initials */}
        <div 
          className="loading-logo"
          style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: '2rem',
            animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        >
          AS
        </div>
        
        {/* Loading Bar Container */}
        <div style={{
          width: '200px',
          height: '4px',
          backgroundColor: 'rgba(74, 144, 226, 0.2)',
          borderRadius: '9999px',
          overflow: 'hidden',
          position: 'relative'
        }}>
          {/* Animated Bar */}
          <div 
            className="loading-bar"
            style={{
              position: 'absolute',
              height: '100%',
              background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
              borderRadius: '9999px',
              animation: 'loading 1.5s ease-in-out infinite'
            }}
          ></div>
        </div>

        <p style={{
          color: '#9ca3af',
          marginTop: '1rem',
          fontSize: '0.875rem'
        }}>
          Loading portfolio...
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes loading {
          0% {
            width: 0%;
            left: 0%;
          }
          50% {
            width: 100%;
            left: 0%;
          }
          100% {
            width: 0%;
            left: 100%;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}} />
    </div>
  );
}