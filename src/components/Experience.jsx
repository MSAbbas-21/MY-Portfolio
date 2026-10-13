import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle2, Building } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Hands-on enterprise application development, database query execution, and systematic bug troubleshooting.
          </p>
        </div>

        {/* Timeline / Experience List */}
        <div className="max-w-4xl mx-auto">
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="relative pl-6 sm:pl-8 border-l-2 border-indigo-500/40 ml-2 sm:ml-4 pb-4"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-500 border-4 border-[#0B0F17] shadow-md shadow-indigo-500/50" />

              {/* Experience Card */}
              <div className="bg-[#101726] border border-slate-800/90 hover:border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl transition-all">
                
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {exp.title}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        Current Role
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 mt-1.5">
                      <span className="flex items-center gap-1.5 font-semibold text-indigo-300">
                        <Building className="w-4 h-4 text-indigo-400" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        {exp.location}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-400">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-indigo-300 bg-indigo-950/40 px-3 py-1.5 rounded-lg border border-indigo-800/40 self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                  {exp.summary}
                </p>

                {/* Key Responsibilities list */}
                <div className="mt-5 space-y-3">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono">
                    Key Responsibilities & Deliverables:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Environment Tags */}
                <div className="mt-6 pt-5 border-t border-slate-800/80">
                  <span className="text-xs text-slate-400 font-mono block mb-2.5">
                    Tools & Technologies Utilized:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-md bg-slate-900 border border-slate-800 text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
