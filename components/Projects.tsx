import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, Cpu, Gamepad2, Coffee } from 'lucide-react';

const projects: Project[] = [
  {
    id: 1,
    title: "Task Scheduler",
    description: "A robust backend utility featuring a menu-driven interface, priority handling, dependency management, and cyclic dependency detection. Built to demonstrate advanced memory management and custom iterator implementation.",
    tags: ["C++", "Data Structures", "Memory Management", "OOP"],
    githubUrl: "#",
    icon: <Cpu className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Web Checkers",
    description: "A fully interactive Checkers game rendered in the browser. Implements complex game state management, valid move logic, and capture chains using vanilla JavaScript and HTML5 Canvas API.",
    tags: ["HTML5 Canvas", "JavaScript", "Game Logic", "DOM"],
    githubUrl: "#",
    liveUrl: "#",
    icon: <Gamepad2 className="h-6 w-6" />
  },
  {
    id: 3,
    title: "JavaJam Coffee",
    description: "A responsive, accessible website for a coffee bar designed with a mobile-first approach. Focuses on semantic HTML structure, clean CSS styling, and engaging user experience design.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    githubUrl: "#",
    liveUrl: "#",
    icon: <Coffee className="h-6 w-6" />
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Featured Projects
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            A selection of my recent work spanning systems programming and web development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col border border-slate-100">
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-primary-50 rounded-lg text-primary-600">
                        {project.icon}
                    </div>
                    <div className="flex space-x-3">
                        {project.githubUrl && (
                            <a href={project.githubUrl} className="text-slate-400 hover:text-slate-900 transition-colors" title="View Source">
                                <Github className="h-5 w-5" />
                            </a>
                        )}
                        {project.liveUrl && (
                             <a href={project.liveUrl} className="text-slate-400 hover:text-primary-600 transition-colors" title="Live Demo">
                                <ExternalLink className="h-5 w-5" />
                            </a>
                        )}
                    </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;