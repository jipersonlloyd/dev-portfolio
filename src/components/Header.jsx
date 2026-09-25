import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';
import { navLinks } from '../data/portfolioData';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md
                       shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300">
      <Container>
        <nav className="flex justify-between items-center py-4">
          <a
            href="#home"
            className="text-2xl md:text-3xl font-bold tracking-tight
                       bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            lloyd.dev
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            <ul className="flex gap-4 md:gap-10 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300
                               hover:text-blue-600 dark:hover:text-blue-400
                               font-medium transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}