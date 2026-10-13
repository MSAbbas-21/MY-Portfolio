import React, { useState } from 'react';
import { skillsCategories } from '../data/portfolioData';
import { 
  Code2, 
  Server, 
  Layout, 
  Database, 
  Cpu, 
  Layers,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

// Icon mapping
const ICON_MAP = {
  Code2: Code2,
  Server: Server,
  Layout: Layout,
  Database: Database,
  Cpu: Cpu,
  Layers: Layers,
  Sparkles: Sparkles,
};

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterOptions = ['All', ...skillsCategories.map((c) => c.title)];

  const filteredCategories =
    selectedFilter === 'All'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className="py-20 relative border-t border-slate-800/80 bg-[#0A0E16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Technical Stack
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            A practical, verified toolkit cultivated through academic training, hands-on full-stack projects, and enterprise debugging experience.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setSelectedFilter(option)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedFilter === option
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/25 border border-indigo-500'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const IconComponent = ICON_MAP[category.icon] || Code2;
            return (
              <div
                key={category.title}
                className="group bg-[#0F1626]/90 hover:bg-[#121B2F] border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-indigo-950/20 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-500/20 transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-slate-400">
                        {category.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-800/90 hover:border-slate-700 text-xs text-slate-200 transition-colors flex items-center gap-1.5"
                        title={skill.tag || skill.name}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/80"></span>
                        <span className="font-medium">{skill.name}</span>
                        {skill.tag && (
                          <span className="text-[10px] text-slate-400 font-mono pl-1 border-l border-slate-800">
                            {skill.tag}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified in projects
                  </span>
                  <span className="font-mono text-slate-400">Production ready</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on skills integrity */}
        <div className="mt-10 text-center">
          <p className="text-xs text-slate-400">
            * All competencies represent genuine academic coursework, project implementations, or active daily enterprise usage.
          </p>
        </div>

      </div>
    </section>
  );
}
