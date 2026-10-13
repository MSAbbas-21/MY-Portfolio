import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Specialized Training
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Rigorous undergraduate studies in computer applications combined with professional full-stack engineering bootcamps.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-[#0F1626] border border-slate-800 hover:border-indigo-500/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header Icon & Score Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    {index === 0 ? (
                      <GraduationCap className="w-5 h-5" />
                    ) : index === 1 ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <BookOpen className="w-5 h-5" />
                    )}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    {edu.score}
                  </span>
                </div>

                {/* Degree / Program */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-sm font-semibold text-indigo-300 mt-1">
                  {edu.institution}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-4">
                  {edu.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  {edu.badge}
                </span>
                <span className="font-mono text-[11px] text-slate-400">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
