import React from 'react';
import { certificationsData } from '../data/portfolioData';
import { Award, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative border-t border-slate-800/80 bg-[#0A0E16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>VERIFIED PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Credentialed courses reinforcing Python programming fundamentals and Generative AI concepts.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="bg-[#0F1626] border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Header with Issuer & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-indigo-300 mt-1">
                  <span className="font-semibold">{cert.issuer}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {cert.date}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mt-3.5">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button - Only renders if credentialUrl is not empty */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs font-semibold transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">
                    Completed & Validated
                  </span>
                )}
                <span className="text-[11px] text-slate-400">Simplilearn SkillUp</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
