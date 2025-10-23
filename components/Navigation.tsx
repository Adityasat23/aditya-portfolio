'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

const navItems = [
  { name: 'About', nameId: 'Tentang', href: '#about', type: 'scroll' },
  { name: 'Experience', nameId: 'Pengalaman', href: '#experience', type: 'scroll' },
  { name: 'Projects', nameId: 'Proyek', href: '#projects', type: 'scroll' },
  { name: 'My Work', nameId: 'Karya Saya', href: '/my-work', type: 'link' },
  { name: 'Skills', nameId: 'Keahlian', href: '#skills', type: 'scroll' },
  { name: 'Contact', nameId: 'Kontak', href: '#contact', type: 'scroll' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'id'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleScrollClose = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleScrollClose);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return; // Skip for external links
    
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navHeight = 64;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
      
      if (window.history.pushState) {
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl shadow-lg border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <motion.div
              className="text-xl font-bold gradient-text cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              AS
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navItems.map((item) => (
              item.type === 'scroll' ? (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  {language === 'en' ? item.name : item.nameId}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer text-sm font-medium"
                >
                  {language === 'en' ? item.name : item.nameId}
                </Link>
              )
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle language={language} onToggle={setLanguage} />
            
            <motion.a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'en' ? "Let's Collaborate" : "Mari Berkolaborasi"}
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
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
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                item.type === 'scroll' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all cursor-pointer"
                  >
                    {language === 'en' ? item.name : item.nameId}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {language === 'en' ? item.name : item.nameId}
                  </Link>
                )
              ))}
              
              <div className="pt-4 flex justify-center">
                <LanguageToggle language={language} onToggle={setLanguage} />
              </div>
              
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="block py-3 text-center bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium mt-4"
              >
                {language === 'en' ? "Let's Collaborate" : "Mari Berkolaborasi"}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}