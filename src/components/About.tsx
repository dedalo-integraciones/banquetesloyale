import { useScrollReveal } from './useScrollReveal'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="bg-white py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="animate-on-scroll grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Image side */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
              alt="Mesa de banquete elegante"
              className="w-full h-[500px] object-cover rounded-sm"
            />
            {/* Decorative frame offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-blush-300 -z-10 rounded-sm" />
          </div>

          {/* Text side */}
          <div>
            <p className="text-blush-500 text-xs tracking-[0.3em] uppercase mb-3">Sobre nosotros</p>
            <h2 className="font-serif text-4xl text-charcoal mb-6 leading-snug">
              Bienvenido a Banquetes Loyale
            </h2>
            <div className="section-divider mx-0 mb-6" />
            <p className="text-charcoal/70 text-base leading-relaxed mb-4">
              Somos especialistas en producción de eventos exclusivos, bodas impresionantes,
              celebraciones con estilo y diseño de experiencias a medida en la región de Cuyo,
              ofreciendo un servicio integral de excelencia.
            </p>
            <p className="text-charcoal/70 text-base leading-relaxed mb-8">
              Junto con un equipo confiable de colaboradores profesionales, nos
              encanta apoyar a quienes deciden celebrar sus momentos más importantes,
              cuidando cada detalle desde la planificación hasta la decoración y el exclusivo servicio gastronómico.
            </p>
            <a href="#services" className="btn-secondary">
              Ver servicios
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
