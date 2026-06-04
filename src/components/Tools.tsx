import { useState, useEffect } from 'react'
import { CheckSquare, PiggyBank, Globe, Star, ChevronLeft, ChevronRight } from 'lucide-react'

const tools = [
  {
    icon: <CheckSquare size={28} />,
    title: 'Lista de planificación',
    description:
      'Una guía integral de pasos previos al evento para asegurar que cada pequeño detalle de tu celebración esté cubierto.',
  },
  {
    icon: <PiggyBank size={28} />,
    title: 'Herramienta de presupuesto',
    description:
      'Gestiona la inversión de manera clara y organizada con nuestra asistencia para garantizar la mejor calidad posible.',
  },
  {
    icon: <Globe size={28} />,
    title: 'Asesoramiento exclusivo',
    description:
      'Te acompañamos en cada decisión, ofreciendo un servicio personalizado que distingue nuestra marca y nuestros eventos.',
  },
  {
    icon: <Star size={28} />,
    title: 'Servicio de primera clase',
    description:
      'Cuidamos nuestra reputación al crear banquetes sofisticados y eventos elegantes con total dedicación.',
  },
]

const images = [
  '/assets/447692789_469468155576818_1631142492691406408_n.jpg',
  '/assets/447697652_469468218910145_1884822756705057762_n.jpg',
  '/assets/470804133_598657442657888_4774280575287335167_n.jpg',
  '/assets/471169021_598654042658228_8469259095639889300_n.jpg',
  '/assets/471281987_598654249324874_3155379918769227345_n.jpg',
  '/assets/476450295_632541955936103_1390918544821608131_n.jpg',
  '/assets/476674463_634822762374689_470524679394719291_n.jpg',
  '/assets/476967476_634822792374686_4285724706482235371_n.jpg',
  '/assets/480042998_638477262009239_9055064964377519426_n.jpg',
  '/assets/480279846_638477415342557_8915205157219988244_n.jpg',
  '/assets/480287611_638477562009209_4984520699621795740_n.jpg',
  '/assets/480414094_638477485342550_7684881888079439876_n.jpg',
  '/assets/480506979_638477278675904_6819310531983167724_n.jpg',
]

export default function Tools() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(handleNext, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="tools" className="bg-charcoal py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Carousel */}
          <div className="relative group overflow-hidden rounded-sm bg-black/20">
            <div className="relative w-full h-[300px] sm:h-[450px]">
              {images.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Galería ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                />
              ))}
            </div>

            {/* Carousel Controls */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-charcoal/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-charcoal/60 hover:text-blush-300 transition-all cursor-pointer"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-charcoal/40 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-charcoal/60 hover:text-blush-300 transition-all cursor-pointer"
                aria-label="Siguiente"
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 inset-x-0 flex justify-center gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentIndex ? 'bg-blush-300 w-4' : 'bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Text + tools list */}
          <div>
            <p className="text-blush-400 text-xs tracking-[0.3em] uppercase mb-3">Soluciones integrales</p>
            <h2 className="font-serif text-4xl text-white mb-2 leading-snug">
              Nos ocupamos de todo para que disfrutes al máximo
            </h2>
            <div className="w-16 h-px bg-blush-500 mb-8" />
            <ul className="space-y-6">
              {tools.map((t) => (
                <li key={t.title} className="flex gap-4">
                  <div className="text-blush-400 flex-shrink-0 mt-1">{t.icon}</div>
                  <div>
                    <h3 className="font-serif text-lg text-white mb-1">{t.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{t.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
