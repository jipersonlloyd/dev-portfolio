const base =
  'inline-block font-semibold rounded-full transition-all duration-200 text-sm tracking-wide cursor-pointer';

const variants = {
  primary:
    'bg-gradient-to-br from-blue-600 to-indigo-600 text-white px-7 py-3 shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30',
  outline:
    'border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-6 py-2.5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-white hover:-translate-y-0.5',
};

export default function Button({
  children,
  variant = 'primary',
  href = '#',
  className = '',
  ...props
}) {
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}