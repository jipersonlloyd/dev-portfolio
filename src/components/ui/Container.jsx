export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}