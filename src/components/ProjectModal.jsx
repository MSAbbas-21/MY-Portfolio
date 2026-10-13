import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Database, 
  ShieldCheck, 
  Monitor,
  Code
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="bg-[#0F1626] border border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 bg-[#0F1626]/95 backdrop-blur-md px-6 py-4 border-b border-slate-800 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-mono text-indigo-300 uppercase tracking-wider">
              Project In-Depth Overview
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Title & Tech stack */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed">
              {project.overview}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-indigo-950/60 border border-indigo-800/60 text-indigo-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Features / Implementation Highlights */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Key Features & Implementation</span>
            </h3>
            <ul className="space-y-2.5 bg-slate-900/70 border border-slate-800/80 rounded-xl p-4">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Architecture & Engineering Design */}
          {project.architecture && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Architecture & Technical Design</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <Code className="w-3.5 h-3.5" />
                    <span>Backend Implementation</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.architecture.backend}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <Database className="w-3.5 h-3.5" />
                    <span>Data & Schema Modeling</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.architecture.database}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Security & Access</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.architecture.security}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                  <div className="text-xs font-semibold text-indigo-300 flex items-center gap-1.5 mb-1">
                    <Monitor className="w-3.5 h-3.5" />
                    <span>User Interface</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {project.architecture.ui}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Links or Repository Note */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : null}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : null}

              {!project.githubUrl && !project.demoUrl && (
                <div className="text-xs text-slate-400 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800">
                  <span className="font-semibold text-slate-300">Repository Link:</span> Available upon request or configurable in <code className="text-indigo-300">src/data/portfolioData.js</code>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-medium transition-colors ml-auto"
            >
              Close Details
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
