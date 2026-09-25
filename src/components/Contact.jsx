import { FaEnvelope, FaGithub, FaLinkedin, FaHeart, FaDownload } from 'react-icons/fa';
import Container from './ui/Container';
import { contact } from '../data/portfolioData';

export default function Contact() {
  return (
    <section
      id="contact"
      className="mt-12 rounded-t-[48px] text-white
           bg-gradient-to-br from-slate-900 to-slate-800
           dark:from-black dark:to-slate-900
           px-6 md:px-8 py-16 pb-12 transition-colors duration-300"
    >
      <Container>
        <div className="flex flex-wrap justify-between items-center gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Let's build together
            </h2>
            <p className="text-slate-300 max-w-md">
              I'm currently open to freelance opportunities and full-time roles.
              Let's talk about your next project.
            </p>
          </div>

          {/* Contact links + resume — all inline, wraps on mobile */}
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2.5 text-white font-medium
                         hover:text-violet-300 transition-colors group"
            >
              <FaEnvelope className="text-2xl text-violet-400 group-hover:text-white transition-colors" />
              <span>{contact.email}</span>
            </a>

            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white font-medium
                         hover:text-violet-300 transition-colors group"
            >
              <FaGithub className="text-2xl text-violet-400 group-hover:text-white transition-colors" />
              <span>{contact.github}</span>
            </a>

            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-white font-medium
                         hover:text-violet-300 transition-colors group"
            >
              <FaLinkedin className="text-2xl text-violet-400 group-hover:text-white transition-colors" />
              <span>{contact.linkedin}</span>
            </a>

            {contact.resume && (
              <a
                href={contact.resume}
                download
                className="inline-flex items-center gap-2
                          px-4 py-2 rounded-full
                          border border-white/20 hover:border-violet-400
                          text-white/90 hover:text-white
                          font-medium text-sm
                          transition-all duration-200
                          hover:bg-violet-400/10"
              >
                <FaDownload className="text-xs" />
                Resume
              </a>
            )}
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/10 text-slate-400 text-sm">
          <p>
            © 2026 Lloyd Jiperson Diaz. Crafted with{' '}
            <FaHeart className="inline text-pink-400" /> and clean code.
          </p>
        </div>
      </Container>
    </section>
  );
}