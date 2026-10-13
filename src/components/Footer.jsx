import React from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#080B12] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center font-bold text-white shadow-md shadow-indigo-500/20">
                <span className="text-xs font-black">{personalData.initials}</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-base tracking-tight">
                  {personalData.name}
                </h3>
                <p className="text-xs text-indigo-400 font-mono">
                  {personalData.title}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Passionate about building dependable backend systems, well-structured REST APIs, and efficient database architectures with Python and Django.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-indigo-400 transition-colors py-1 text-slate-400 hover:translate-x-0.5 transform duration-150 inline-block"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Direct & Back to top */}
          <div className="md:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold mb-2">
                Direct Contact
              </h4>
              <p className="text-xs text-slate-300">
                <a href={`mailto:${personalData.email}`} className="hover:text-indigo-400 transition-colors break-all">
                  {personalData.email}
                </a>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {personalData.phone}
              </p>
              <p className="text-xs text-slate-400 mt-1">
                {personalData.location}
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all shadow-sm"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & closing statement */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {CURRENT_YEAR} {personalData.name}. All rights reserved.
          </p>
          <p className="text-center sm:text-right text-slate-400">
            Engineered with React, Vite & Tailwind CSS. Designed for high performance & clean semantics.
          </p>
        </div>

      </div>
    </footer>
  );
}
