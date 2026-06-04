export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center justify-center relative"
    >
      {/* Decorative corner ornament */}
      <div className="absolute top-28 left-10 w-16 h-16 border-l border-t border-white/30 hidden md:block" />
      <div className="absolute top-28 right-10 w-16 h-16 border-r border-t border-white/30 hidden md:block" />
      <div className="absolute bottom-16 left-10 w-16 h-16 border-l border-b border-white/30 hidden md:block" />
      <div className="absolute bottom-16 right-10 w-16 h-16 border-r border-b border-white/30 hidden md:block" />

      <div className="text-center px-6 max-w-3xl mx-auto pt-20">
        <p className="text-blush-300 text-xs tracking-[0.4em] uppercase mb-4 animate-fade-in">
          Banquetes Loyale
        </p>
        <h1 className="font-serif text-white text-4xl md:text-6xl leading-tight mb-6 animate-fade-up">
          Organizadores de{' '}
          <em className="not-italic text-blush-300">eventos premium</em>{' '}
          y servicio de catering exclusivo
        </h1>
        <div className="section-divider animate-fade-in" style={{ animationDelay: '0.3s' }} />
        <a href="#about" className="btn-primary mt-6 inline-block animate-fade-up" style={{ animationDelay: '0.5s' }}>
          Conoce más
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>
    </section>
  )
}
