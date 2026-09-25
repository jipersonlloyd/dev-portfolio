import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative w-11 h-11 flex items-center justify-center rounded-full
                 bg-slate-100 text-slate-700
                 dark:bg-slate-800 dark:text-yellow-300
                 hover:bg-blue-600 hover:text-white
                 dark:hover:bg-blue-600 dark:hover:text-white
                 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                 dark:focus:ring-offset-slate-900"
    >
      {/* Sun icon — shown in light mode */}
      <FaSun
        className={`absolute text-lg transition-all duration-300 ${
          isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
        }`}
      />
      {/* Moon icon — shown in dark mode */}
      <FaMoon
        className={`absolute text-lg transition-all duration-300 ${
          isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
        }`}
      />
    </button>
  );
}