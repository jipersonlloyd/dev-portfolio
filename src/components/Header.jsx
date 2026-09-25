import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Container from './ui/Container';
import ThemeToggle from './ui/ThemeToggle';
import { navLinks } from '../data/portfolioData';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const handleLinkClick = () => setMenuOpen(false);

  // 1. Lock body scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // 2. Close menu on click outside the header
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Use `mousedown` so it fires before any link click navigation
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // 3. Close menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen]);

  // 4. Close menu if the viewport is resized to desktop width
  useEffect(() => {
    if (!menuOpen) return;

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [menuOpen]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white/85 dark:bg-slate-900/85 backdrop-blur-md
                 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-colors duration-300"
    >
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={handleLinkClick}
            className="text-2xl md:text-3xl font-bold tracking-tight
                       bg-gradient-to-br from-blue-600 to-violet-600 bg-clip-text text-transparent"
          >
            lloyd.dev
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <ul className="flex gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-700 dark:text-slate-300
                               hover:text-blue-600 dark:hover:text-blue-400
                               font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="w-11 h-11 flex items-center justify-center rounded-full
                         bg-slate-100 dark:bg-slate-800
                         text-slate-700 dark:text-slate-200
                         hover:bg-blue-600 hover:text-white
                         dark:hover:bg-blue-600 dark:hover:text-white
                         transition-all duration-300
                         focus:outline-none focus:ring-2 focus:ring-blue-500
                         focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              {menuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
                    ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <Container>
            <ul className="flex flex-col py-4 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block py-3 px-2 text-slate-700 dark:text-slate-300
                               hover:text-blue-600 dark:hover:text-blue-400
                               hover:bg-slate-50 dark:hover:bg-slate-800/60
                               rounded-lg font-medium transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </div>
    </header>
  );
}