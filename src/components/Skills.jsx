import * as Fa5 from 'react-icons/fa';
import * as Fa6 from 'react-icons/fa6';
import * as Si from 'react-icons/si';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { skillGroups } from '../data/portfolioData';

const IconMap = { ...Fa5, ...Fa6, ...Si };

export default function Skills() {
  return (
    <Container>
      <section id="skills" className="py-16 md:py-20">
        <SectionTitle>Tech &amp; tools</SectionTitle>

        <div className="space-y-10 mt-4">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider
                             text-slate-500 dark:text-slate-400 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {group.skills.map((skill) => {
                  const Icon = IconMap[skill.icon];
                  return (
                    <div
                      key={skill.label}
                      className="bg-white dark:bg-slate-800
                                 flex items-center gap-2.5 px-6 py-2.5 rounded-full
                                 font-medium text-[0.95rem]
                                 border border-slate-200 dark:border-slate-700
                                 text-slate-800 dark:text-slate-200
                                 shadow-[0_6px_14px_rgba(0,0,0,0.02)]
                                 transition-all duration-200
                                 hover:border-blue-600 hover:-translate-y-[3px]
                                 hover:shadow-[0_16px_24px_-12px_rgba(37,99,235,0.2)]"
                    >
                      {Icon && <Icon className="text-blue-600 dark:text-blue-400 text-xl" />}
                      <span>{skill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}