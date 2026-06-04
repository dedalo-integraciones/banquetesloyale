export default function QuoteParallax() {
  return (
    <section className="quote-bg py-32 md:py-48 relative">
      <div className="absolute inset-0 bg-charcoal/60"></div>
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <div className="w-px h-12 bg-blush-300 mx-auto mb-8" />
        <blockquote className="font-serif text-white text-2xl md:text-4xl italic leading-relaxed mb-8">
          "Nos esforzamos por crear momentos inolvidables, combinando la excelencia gastronómica con el diseño de eventos memorables."
        </blockquote>
        <div className="w-px h-12 bg-blush-300 mx-auto mt-8" />
      </div>
    </section>
  )
}
