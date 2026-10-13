import React from 'react';
import { 
  personalData, 
  aboutData, 
  experienceData, 
  projectsData, 
  educationData, 
  certificationsData, 
  languagesData 
} from '../data/portfolioData';
import { 
  FileDown, 
  Printer, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  FolderGit2, 
  Wrench, 
  Award, 
  Globe2, 
  Mail, 
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Resume() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-20 relative border-t border-slate-800/80 bg-[#0A0E16]/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Actions */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <span>CURRICULUM VITAE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Resume & Credentials
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              A comprehensive view of my qualifications, enterprise background, and technical proficiencies.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={personalData.resumePath}
              download="M_S_Mohammad_Abbas_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF</span>
            </a>

            <a
              href={personalData.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs sm:text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-indigo-400" />
              <span>Open PDF</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs sm:text-sm font-medium transition-colors"
              title="Print Resume"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>Print</span>
            </button>
          </div>
        </div>

        {/* Digital Resume Paper / Container */}
        <div className="bg-[#0F1626] border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 text-slate-200">
          
          {/* Resume Header */}
          <div className="text-center pb-8 border-b border-slate-800 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {personalData.name}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-indigo-300">
              {personalData.title}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`tel:${personalData.phone}`} className="hover:text-indigo-300">{personalData.displayPhone}</a>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${personalData.email}`} className="hover:text-indigo-300">{personalData.email}</a>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <GithubIcon className="w-3.5 h-3.5 text-indigo-400" />
                <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">github.com/{personalData.githubUsername}</a>
              </span>
              <span>|</span>
              <span className="flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">linkedin.com/in/{personalData.linkedinUsername}</a>
              </span>
            </div>
          </div>

          {/* 1. PROFESSIONAL SUMMARY */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <span>PROFESSIONAL SUMMARY</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify">
              {aboutData.summary}
            </p>
          </div>

          {/* 2. TECHNICAL SKILLS */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-indigo-400" />
              <span>TECHNICAL SKILLS</span>
            </h4>
            
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-slate-200">Languages:</strong>{' '}
                <span className="text-slate-300">Python, JavaScript, SQL</span>
              </div>
              <div>
                <strong className="text-slate-200">Backend:</strong>{' '}
                <span className="text-slate-300">Django, Django REST Framework (DRF), REST APIs, Backend Development, Django ORM, MVT Architecture</span>
              </div>
              <div>
                <strong className="text-slate-200">Frontend:</strong>{' '}
                <span className="text-slate-300">HTML5, CSS3, JavaScript, Tailwind CSS, GUI Development, Responsive Web Design</span>
              </div>
              <div>
                <strong className="text-slate-200">Database:</strong>{' '}
                <span className="text-slate-300">SQLite, Relational Database Design, CRUD Operations, Oracle Database 19c</span>
              </div>
              <div>
                <strong className="text-slate-200">Core Concepts:</strong>{' '}
                <span className="text-slate-300">OOP, Data Structures & Algorithms, SDLC, Requirement Analysis, Software Design, Authentication & Authorization, Session Management</span>
              </div>
              <div>
                <strong className="text-slate-200">Tools:</strong>{' '}
                <span className="text-slate-300">Git, GitHub, SVN (TortoiseSVN), VS Code, JSON, Debugging, Bug Fixing, Problem Determination, Code Reviews</span>
              </div>
              <div>
                <strong className="text-slate-200">AI & Integration:</strong>{' '}
                <span className="text-slate-300">Generative AI (fundamentals), REST API Integration, Full Stack Development, IBM WebSphere Application Server 9</span>
              </div>
            </div>
          </div>

          {/* 3. PROFESSIONAL EXPERIENCE */}
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-indigo-400" />
              <span>PROFESSIONAL EXPERIENCE</span>
            </h4>

            {experienceData.map((exp) => (
              <div key={exp.id} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="text-white">
                    {exp.title} <span className="text-slate-400 font-normal">|</span> <span className="text-indigo-300">{exp.company}</span>
                  </span>
                  <span className="text-slate-400 font-mono text-xs">{exp.period}</span>
                </div>
                
                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 4. PROJECTS */}
          <div className="space-y-5">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-indigo-400" />
              <span>PROJECTS</span>
            </h4>

            {projectsData.map((project) => (
              <div key={project.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <h5 className="text-xs sm:text-sm font-bold text-white">
                    {project.title}
                  </h5>
                  <span className="text-[11px] font-mono text-indigo-300">
                    {project.technologies.join(' | ')}
                  </span>
                </div>

                <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* 5. CERTIFICATIONS */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <Award className="w-4 h-4 text-indigo-400" />
              <span>CERTIFICATIONS</span>
            </h4>

            <div className="space-y-2 text-xs sm:text-sm">
              {certificationsData.map((cert) => (
                <div key={cert.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-300">
                  <div>
                    <strong className="text-white">{cert.title}</strong> — <span className="text-indigo-300">{cert.issuer}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5 sm:mt-0">
                    {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 6. EDUCATION */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-indigo-400" />
              <span>EDUCATION</span>
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              {educationData.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-center justify-between text-slate-300">
                  <div>
                    <strong className="text-white">{edu.degree}</strong>
                    {edu.score && <span className="text-indigo-300 font-semibold"> — {edu.score}</span>}
                    <div className="text-xs text-slate-400">{edu.institution}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5 sm:mt-0">
                    {edu.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. LANGUAGES */}
          <div className="space-y-3">
            <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider font-mono text-indigo-300 border-b border-slate-800 pb-1.5 flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-indigo-400" />
              <span>LANGUAGES</span>
            </h4>

            <p className="text-xs sm:text-sm text-slate-300">
              {languagesData.map((lang) => lang.name).join(' | ')}
            </p>
          </div>

          {/* Bottom Card Footer Actions */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              * Official document available as PDF download.
            </p>
            <a
              href={personalData.resumePath}
              download="M_S_Mohammad_Abbas_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-600/25 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Official Resume PDF</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
