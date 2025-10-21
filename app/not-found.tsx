import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0A0E27',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '6rem',
        fontWeight: 'bold',
        background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        marginBottom: '1rem'
      }}>
        404
      </h1>

      <h2 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '1rem'
      }}>
        Page Not Found
      </h2>

      <p style={{
        color: '#9ca3af',
        fontSize: '1.125rem',
        marginBottom: '2rem',
        maxWidth: '500px'
      }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '1rem 2rem',
          borderRadius: '0.5rem',
          background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
          color: 'white',
          fontSize: '1rem',
          fontWeight: '500',
          textDecoration: 'none'
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}