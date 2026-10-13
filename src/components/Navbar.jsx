import React, { useState, useEffect } from 'react';
import { personalData } from '../data/portfolioData';
import { Menu, X, FileDown, ArrowUpRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    scrollToSection(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-[#0B0F17]/70 backdrop-blur-sm py-4 border-b border-slate-900/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-lg p-1"
            aria-label={`${personalData.name} - Back to top`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <span className="text-sm font-black tracking-tight">{personalData.initials}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors tracking-tight">
                {personalData.name}
              </span>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider hidden sm:block">
                Python Full Stack Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-300 bg-indigo-500/15 shadow-sm shadow-indigo-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Compact links for medium screens (lg) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1" aria-label="Main Navigation Compact">
            {NAV_ITEMS.slice(0, 6).map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-indigo-300 bg-indigo-500/15'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Button: Download Resume */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="px-3.5 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:text-white transition-all"
            >
              <span>View Resume</span>
            </button>

            <a
              href={personalData.resumePath}
              download="M_S_Mohammad_Abbas_Resume.pdf"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs xl:text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5"
              aria-label="Download Resume PDF"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[61px] bottom-0 bg-[#0B0F17]/98 backdrop-blur-xl border-b border-slate-800 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in duration-200">
          <nav className="flex flex-col space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-200 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-slate-800/80 mt-6 flex flex-col gap-3">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '#resume')}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
            >
              <span>View On-Page Resume Section</span>
            </button>

            <a
              href={personalData.resumePath}
              download="M_S_Mohammad_Abbas_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg shadow-indigo-600/30 transition-all text-sm"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </a>

            <div className="flex items-center justify-center gap-4 pt-2 text-xs text-slate-400">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
              <span>•</span>
              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-1"
              >
                LinkedIn <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
