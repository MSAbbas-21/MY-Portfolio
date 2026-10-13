import React from 'react';
import { personalData } from '../data/portfolioData';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Terminal, 
  CheckCircle2
} from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Glows (Tasteful charcoal / dark violet / deep blue) */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-indigo-900/20 via-violet-900/15 to-blue-900/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true"
      />
      <div 
        className="absolute -bottom-10 right-10 w-72 h-72 bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Decorative Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Call-to-Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs sm:text-sm text-slate-300 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-300">Junior Developer Trainee at Unique Force</span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-2">
              <p className="text-indigo-400 font-mono text-base sm:text-lg tracking-wide font-medium">
                {personalData.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {personalData.name}
              </h1>
              <h2 className="text-xl sm:text-2xl xl:text-3xl font-semibold bg-gradient-to-r from-indigo-300 via-violet-200 to-blue-300 bg-clip-text text-transparent pt-1">
                {personalData.headline}
              </h2>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {personalData.summary}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Python', 'Django', 'Django REST Framework', 'Oracle 19c / SQL', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, Download Resume, Contact Me */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                type="button"
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personalData.resumePath}
                download="M_S_Mohammad_Abbas_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-medium text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <FileDown className="w-4 h-4 text-indigo-400" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-transparent hover:bg-slate-800/60 text-slate-300 hover:text-white border border-slate-700/60 font-medium text-sm sm:text-base transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick credentials proof */}
            <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>BCA Graduate (8.5 CGPA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise Trainee Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>REST API & Database Driven</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Developer Card (No fake photo) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-gradient-to-b from-[#131B2E] to-[#0D1322] border border-slate-800/90 rounded-2xl p-5 shadow-2xl shadow-indigo-950/40 relative">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>developer_profile.py</span>
                </div>
                <span className="text-[10px] font-mono text-indigo-400 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800/60">
                  Python 3.12
                </span>
              </div>

              {/* Developer Avatar Badge & Info */}
              <div className="pt-5 pb-4 flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-violet-500 p-0.5 shadow-lg shadow-indigo-500/25">
                    <div className="w-full h-full bg-[#0B0F17] rounded-[14px] flex items-center justify-center font-black text-2xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 via-violet-200 to-blue-200">
                      MA
                    </div>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#0B0F17] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    {personalData.name}
                  </h3>
                  <p className="text-xs text-indigo-300 font-mono">
                    Junior Developer Trainee
                  </p>
                  <p className="text-xs text-slate-400">
                    Unique Force • Bengaluru
                  </p>
                </div>
              </div>

              {/* Syntax Highlighted Code Snippet */}
              <div className="bg-[#080B11] rounded-xl p-4 font-mono text-xs text-slate-300 space-y-1.5 border border-slate-900/90 overflow-x-auto">
                <p className="text-slate-500"># Engineering Profile Definition</p>
                <p>
                  <span className="text-violet-400">class</span>{' '}
                  <span className="text-indigo-300 font-semibold">BackendEngineer</span>
                  <span className="text-slate-400">:</span>
                </p>
                <div className="pl-4 space-y-1 text-slate-300">
                  <p>
                    <span className="text-slate-400">degree</span> ={' '}
                    <span className="text-emerald-300">"BCA (8.5 CGPA)"</span>
                  </p>
                  <p>
                    <span className="text-slate-400">core_stack</span> = [
                    <span className="text-amber-300">"Python"</span>,{' '}
                    <span className="text-amber-300">"Django"</span>,{' '}
                    <span className="text-amber-300">"DRF"</span>]
                  </p>
                  <p>
                    <span className="text-slate-400">databases</span> = [
                    <span className="text-amber-300">"Oracle 19c"</span>,{' '}
                    <span className="text-amber-300">"SQLite"</span>]
                  </p>
                  <p>
                    <span className="text-slate-400">mindset</span> ={' '}
                    <span className="text-emerald-300">"Clean Code & Reliability"</span>
                  </p>
                </div>
                <p className="pt-1">
                  <span className="text-violet-400">def</span>{' '}
                  <span className="text-blue-300">build_api</span>
                  <span className="text-slate-400">(self, request):</span>
                </p>
                <p className="pl-4">
                  <span className="text-violet-400">return</span>{' '}
                  <span className="text-emerald-300">Response</span>
                  <span className="text-slate-400">(status=200, secure=True)</span>
                </p>
              </div>

              {/* Bottom Quick Metric Counters */}
              <div className="grid grid-cols-3 gap-2 pt-4 text-center">
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-base font-bold text-indigo-400">8.5</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">CGPA (BCA)</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-base font-bold text-violet-400">3+</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Web Projects</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <div className="text-base font-bold text-blue-400">Enterprise</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
