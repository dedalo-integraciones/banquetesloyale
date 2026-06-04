import { ReactNode } from 'react'
import { Heart, MapPin, Camera, Music, Utensils, Plane } from 'lucide-react'
import { useScrollReveal } from './useScrollReveal'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  delay?: string
}

function ServiceCard({ icon, title, description, delay = '0ms' }: ServiceCardProps) {
  const ref = useScrollReveal()
  return (
    <div
      ref={ref}
      className="animate-on-scroll text-center p-8 border border-blush-100 hover:border-blush-300 hover:shadow-lg transition-all duration-300 group bg-white"
      style={{ transitionDelay: delay }}
    >
      <div className="w-12 h-12 mx-auto mb-4 text-blush-500 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-serif text-xl text-charcoal mb-3">{title}</h3>
      <p className="text-charcoal/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

const services = [
  {
    icon: <Heart size={36} />,
    title: 'Planificación Integral',
    description:
      'Gestionamos cada aspecto de tu celebración, desde la recepción hasta el último detalle, para que disfrutes sin preocupaciones.',
  },
  {
    icon: <MapPin size={36} />,
    title: 'Espacios Exclusivos',
    description:
      'Ofrecemos lugares increíbles en la región de Cuyo, desde fincas y bodegas hasta salones de lujo que combinan con tu estilo.',
  },
  {
    icon: <Camera size={36} />,
    title: 'Fotografía & Video',
    description:
      'Coordinamos a los mejores artistas visuales para capturar cada momento irrepetible y crear grandiosos recuerdos.',
  },
  {
    icon: <Music size={36} />,
    title: 'Entretenimiento',
    description:
      'Música en vivo, DJs exclusivos, iluminación y propuestas artísticas para crear una atmósfera inigualable durante el evento.',
  },
  {
    icon: <Utensils size={36} />,
    title: 'Catering de Lujo',
    description:
      'Seleccionamos propuestas gastronómicas de alta gama, desde menús íntimos hasta banquetes abundantes y elegantes.',
  },
  {
    icon: <Plane size={36} />,
    title: 'Logística',
    description:
      'Organización de proveedores, transporte y detalles adicionales para asegurar que tu evento fluya con perfección.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-blush-50 py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blush-500 text-xs tracking-[0.3em] uppercase mb-3">Lo que hacemos</p>
          <h2 className="font-serif text-4xl text-charcoal">
            Experiencias a medida y banquetes de lujo
          </h2>
          <div className="section-divider" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.title}
              icon={s.icon}
              title={s.title}
              description={s.description}
              delay={`${i * 80}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
