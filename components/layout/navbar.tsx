'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';

const LANGUAGES = ['EN', 'FR', 'AR', 'SP', 'IT', 'DE', 'PT', 'TR', 'NL'];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-outline-variant/30 ${isScrolled ? 'py-2 bg-surface/90 shadow-md' : 'py-4 bg-surface/80 shadow-sm'}`}>
        <div className="flex justify-between items-center w-full px-6 md:px-20 max-w-7xl mx-auto">
          <a href="#" className="font-display-lg text-[1.5rem] md:text-[2rem] text-primary tracking-tighter">
            Riad Rafaele et SPA
          </a>
          
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="font-body text-base text-on-surface-variant hover:text-primary transition-colors">About</a>
            <a href="#services" className="font-body text-base text-on-surface-variant hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="font-body text-base text-on-surface-variant hover:text-primary transition-colors">Gallery</a>
            <a href="#testimonials" className="font-body text-base text-on-surface-variant hover:text-primary transition-colors">Testimonials</a>
            
            <div className="flex items-center gap-4 border-l border-outline-variant pl-6 ml-2">
              {/* Theme Toggle */}
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-on-surface-variant hover:text-primary transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Language Switcher */}
              <div className="relative">
                <button 
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1 text-[12px] font-bold text-primary tracking-widest uppercase"
                >
                  {currentLang} <ChevronDown size={14} />
                </button>
                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-24 bg-surface dark:bg-surface-container border border-outline-variant rounded-md shadow-lg flex flex-col overflow-hidden">
                    {LANGUAGES.map(lang => (
                      <button 
                        key={lang}
                        onClick={() => { setCurrentLang(lang); setLangDropdownOpen(false); }}
                        className={`text-left px-4 py-3 text-[12px] font-bold tracking-widest border-b border-outline-variant/30 last:border-b-0 hover:bg-surface-variant/50 transition-colors ${currentLang === lang ? 'text-primary' : 'text-on-surface-variant'}`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <a href="#book" className="bg-primary text-on-primary px-6 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest hover:bg-primary-container transition-all scale-100 active:scale-95 duration-200">
              Book Now
            </a>
          </div>

          <button className="md:hidden text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[72px] left-0 w-full z-40 bg-surface-bright dark:bg-surface-container-high border-b border-outline-variant p-6 flex flex-col gap-6 shadow-xl md:hidden">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-2xl text-primary">About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-2xl text-primary">Services</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="font-display-lg text-2xl text-primary">Gallery</a>
          <a href="#book" onClick={() => setMobileMenuOpen(false)} className="bg-primary text-on-primary text-center py-4 rounded-lg text-[12px] font-bold tracking-widest">BOOK NOW</a>
        </div>
      )}
    </>
  );
}
