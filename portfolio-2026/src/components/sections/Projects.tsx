'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'Personal Portfolio Website',
    description:
      'A modern, responsive portfolio website showcasing my design and development work with smooth animations and interactive elements.',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    githubUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://yourportfolio.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Herpathway Platform',
    description:
      'A web platform project developed through ALX Pathway program focusing on user experience and accessibility.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/yourusername/herpathway',
    featured: true,
  },
  {
    id: '3',
    title: 'Brand Design Collection',
    description:
      'A collection of professional flyers and brand materials created for various clients using modern design principles.',
    technologies: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 flex items-center gap-4">
            <span className="text-cyan-primary font-mono text-xl">03.</span>
            Featured Projects
            <div className="h-px bg-dark-lighter flex-1 ml-4 max-w-xs"></div>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl">
            Here are some of my recent projects that showcase my skills in design and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid-3 px-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              {/* Project Icon/Number */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-primary/10 flex items-center justify-center text-cyan-primary font-bold text-xl">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="flex gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-cyan-primary transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-cyan-primary transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-cyan-primary transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-text-secondary mb-4 line-clamp-3">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-cyan-primary bg-cyan-primary/10 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
