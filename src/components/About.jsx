import React from 'react';
import { aboutData } from '../data/portfolioData';
import { GraduationCap, GitBranch, Terminal, ShieldCheck, Database } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background & Engineering Mindset
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            A software engineer grounded in computer science fundamentals, enterprise troubleshooting, and modern full-stack development.
          </p>
        </div>

        {/* Two-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {aboutData.paragraphs.map((para, index) => (
              <p key={index} className="text-slate-300/90">
                {para}
              </p>
            ))}

            {/* Practical competencies checklist */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Database className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Database Operations</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Writing & optimizing Oracle SQL queries, designing schemas & Django ORM models.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <Terminal className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Application Troubleshooting</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Investigating issues across UI, server, and database layers at enterprise scale.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <GitBranch className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Version Control Workflows</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Disciplined branching and commit habits using Git/GitHub and SVN/TortoiseSVN.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <ShieldCheck className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">SDLC & Team Collaboration</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Partnering with senior engineers to diagnose bugs, write fixes, and review changes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights & Quick Profile Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-[#101726] border border-slate-800/90 rounded-2xl p-6 shadow-xl space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                <span>Profile Snapshot</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                  <span className="text-sm text-slate-400">Current Role</span>
                  <span className="text-sm font-semibold text-indigo-300">Junior Developer Trainee</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                  <span className="text-sm text-slate-400">Company</span>
                  <span className="text-sm font-semibold text-slate-200">Unique Force</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                  <span className="text-sm text-slate-400">Degree</span>
                  <span className="text-sm font-semibold text-slate-200">BCA (Sri Matha Degree College)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                  <span className="text-sm text-slate-400">Academic CGPA</span>
                  <span className="text-sm font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                    8.5 / 10.0
                  </span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/60">
                  <span className="text-sm text-slate-400">Core Specialty</span>
                  <span className="text-sm font-semibold text-slate-200">Python, Django & SQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Location</span>
                  <span className="text-sm font-semibold text-slate-200">Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40 text-xs text-indigo-200 leading-relaxed">
                  <strong className="text-indigo-300 font-semibold block mb-1">Career Goal:</strong>
                  To build dependable, clean backend services, RESTful APIs, and modern web applications while continuing to expand expertise in cloud and intelligent systems.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
