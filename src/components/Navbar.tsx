import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const isHomePage = location.pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4',
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-brand/5 py-3 shadow-sm'
          : isHomePage
            ? 'bg-transparent py-6'
            : 'bg-white border-b border-brand/5 shadow-sm'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-1 sm:gap-4">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
         
          <span className={cn(
            "text-xl sm:text-2xl font-bold tracking-tighter transition-colors",
            isTransparent ? "text-white" : "text-brand"
          )}>
            Lux<span className={isTransparent ? "text-white/80" : "text-text-main"}>Trip</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  'text-sm font-bold transition-all hover:scale-105',
                  isTransparent
                    ? location.pathname === link.path ? 'text-white underline underline-offset-8 decoration-2' : 'text-white/80 hover:text-white'
                    : location.pathname === link.path ? 'text-brand' : 'text-text-muted hover:text-brand'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className={cn("h-6 w-px transition-colors", isTransparent ? "bg-white/20" : "bg-brand/10")} />
          <LanguageSwitcher isTransparent={isTransparent} />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-1.5 sm:gap-4 shrink-0">
          <div className="scale-90 sm:scale-100 origin-right">
            <LanguageSwitcher isTransparent={isTransparent} />
          </div>
          <button
            className={cn("p-1.5 sm:p-2 transition-colors", isTransparent ? "text-white" : "text-brand")}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-brand/5 p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-bold py-3 border-b border-brand/5',
                  location.pathname === link.path ? 'text-brand' : 'text-text-muted'
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
