'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: isScrolled ? 'rgba(10, 14, 39, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ maxWidth: '72rem', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem' }}>
          {/* Logo */}
          <motion.a
            href="#"
            className="gradient-text"
            style={{ fontSize: '1.25rem', fontWeight: 'bold' }}
            whileHover={{ scale: 1.05 }}
          >
            AS
          </motion.a>

          {/* Desktop Menu */}
          <div style={{ display: 'none' }} className="md:flex md:gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ color: '#d1d5db', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            style={{
              display: 'none',
              background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
              padding: '0.5rem 1.5rem',
              borderRadius: '9999px',
              color: 'white',
              fontWeight: '500',
              transition: 'all 0.3s',
            }}
            className="md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
          </motion.a>

          {/* Mobile Menu Button */}
          <button
            style={{ display: 'block', color: 'white' }}
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: '#151B3B' }}
            className="md:hidden"
          >
            <div style={{ padding: '0.5rem 1rem 1rem' }}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  style={{ 
                    display: 'block', 
                    padding: '0.5rem 0', 
                    color: '#d1d5db',
                    transition: 'color 0.2s'
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#4A90E2'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#d1d5db'}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                style={{
                  display: 'block',
                  marginTop: '1rem',
                  padding: '0.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(to right, #4A90E2, #7B68EE)',
                  borderRadius: '9999px',
                  color: 'white',
                  fontWeight: '500',
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}