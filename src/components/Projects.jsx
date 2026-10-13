import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, 
  ExternalLink, 
  ChevronRight 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative border-t border-slate-800/80 bg-[#0A0E16]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Practical full-stack web applications built with Python, Django, REST APIs, and relational databases.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="group bg-[#0F1626] hover:bg-[#121B2F] border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-indigo-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Top Card Bar with Index & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-105 transition-transform">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded-md border border-slate-800">
                    Project 0{index + 1}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-slate-300/90 text-sm mt-3 leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-slate-900 border border-slate-800/90 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600/90 hover:bg-indigo-600 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-600/20 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* GitHub Button - only if URL provided */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      title="View GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  ) : null}

                  {/* Live Demo Button - only if URL provided */}
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors border border-slate-700"
                      title="View Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : null}
                </div>

                {/* Configurable note when links are not provided yet */}
                {!project.githubUrl && !project.demoUrl && (
                  <span className="text-[11px] text-slate-400 text-center">
                    Detailed specs & architecture available in details view
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Details View */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
