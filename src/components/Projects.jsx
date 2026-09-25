import * as FaIcons from 'react-icons/fa';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <Container>
      <section id="projects" className="py-16 md:py-20">
        <SectionTitle>Featured projects</SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {projects.map((project) => {
            const Icon = FaIcons[project.icon];

            return (
              <article
                key={project.id}
                className="bg-white dark:bg-slate-800 rounded-[28px] p-7 flex flex-col
                           border border-slate-100 dark:border-slate-700
                           shadow-[0_12px_24px_-12px_rgba(0,0,0,0.08)]
                           transition-all duration-300
                           hover:-translate-y-2 hover:border-blue-100 dark:hover:border-blue-800
                           hover:shadow-[0_28px_36px_-16px_rgba(0,0,0,0.15)]"
              >
                {/* Top icon */}
                <div className="text-3xl text-blue-600 dark:text-blue-400 mb-5">
                  {Icon && <Icon />}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-[0.95rem] mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-indigo-50 dark:bg-indigo-950/60
                                 text-blue-600 dark:text-indigo-300
                                 text-xs font-semibold px-3.5 py-1 rounded-full tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Inline screenshot preview */}
                {project.image && (
                  <a
                    href={project.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mb-4 rounded-2xl overflow-hidden
                               border border-slate-200 dark:border-slate-700
                               hover:border-blue-400 dark:hover:border-blue-500
                               transition-colors"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="w-full h-40 object-cover object-top
                                 hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </a>
                )}

                {/* Actions row */}
                <div className="flex flex-wrap items-center gap-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2
                                 text-blue-600 dark:text-blue-400
                                 font-semibold text-sm hover:underline"
                    >
                      <FaIcons.FaExternalLinkAlt className="text-xs" />
                      {project.linkLabel}
                    </a>
                  )}

                  {project.private && (
                    <span
                      className="inline-flex items-center gap-1.5
                                 text-xs font-semibold px-2.5 py-1 rounded-full
                                 bg-slate-100 dark:bg-slate-700
                                 text-slate-600 dark:text-slate-300"
                      title="Source code and live access are private (owned by the company)"
                    >
                      <FaIcons.FaLock className="text-[10px]" />
                      Private
                    </span>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Container>
  );
}