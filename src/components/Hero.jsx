import Container from './ui/Container';
import Button from './ui/Button';
import { codeSnippet } from '../data/portfolioData';

export default function Hero() {
  return (
    <Container>
      <section
        id="home"
        className="py-16 md:py-20 flex flex-wrap items-center justify-between gap-12"
      >
        {/* Left column */}
        <div className="flex-1 basis-[380px] animate-fade-in">
          <span className="inline-block bg-indigo-100 text-blue-600 font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wide">
            💻 Software Developer
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.15] tracking-tight mb-5
               text-slate-900 dark:text-white">
            Building{' '}
            <span className="bg-gradient-to-br from-blue-600 to-violet-600
                   dark:from-blue-400 dark:to-violet-400
                   bg-clip-text text-transparent">
              digital experiences
            </span>{' '}
            that matter.
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl mb-8">
            I'm Lloyd Jiperson Diaz - Software Developer with a passion for clean code,
            scalable systems, and intuitive interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="#projects">View my work</Button>
            <Button href="#contact" variant="outline">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Right column */}
        <div className="flex-1 basis-[300px] flex justify-center items-center">
          <div
            className="bg-slate-900 p-7 rounded-[32px] shadow-[0_30px_40px_-20px_rgba(0,0,0,0.4)]
                       w-full max-w-sm rotate-2 hover:rotate-0 hover:scale-[1.02]
                       transition-transform duration-300"
          >
            <pre className="text-slate-200 font-mono text-sm whitespace-pre-wrap leading-relaxed">
              {codeSnippet}
            </pre>
          </div>
        </div>
      </section>
    </Container>
  );
}