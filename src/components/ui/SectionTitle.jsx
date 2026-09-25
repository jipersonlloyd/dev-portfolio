export default function SectionTitle({ children }) {
  return (
    <h2
        className="relative inline-block text-3xl md:text-4xl font-bold tracking-tight mb-10
                  text-slate-900 dark:text-white
                  after:content-[''] after:absolute after:-bottom-2 after:left-0
                  after:w-3/5 after:h-1 after:rounded-full
                  after:bg-gradient-to-r after:from-blue-600 after:to-violet-400"
      >
      {children}
    </h2>
  );
}