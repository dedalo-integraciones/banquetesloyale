import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from './useScrollReveal';

const images = [
  "/assets/447692789_469468155576818_1631142492691406408_n.webp",
  "/assets/447697652_469468218910145_1884822756705057762_n.webp",
  "/assets/470804133_598657442657888_4774280575287335167_n.webp",
  "/assets/471169021_598654042658228_8469259095639889300_n.webp",
  "/assets/471281987_598654249324874_3155379918769227345_n.webp",
  "/assets/476450295_632541955936103_1390918544821608131_n.webp",
  "/assets/476674463_634822762374689_470524679394719291_n.webp",
  "/assets/476967476_634822792374686_4285724706482235371_n.webp",
  "/assets/480042998_638477262009239_9055064964377519426_n.webp",
  "/assets/480279846_638477415342557_8915205157219988244_n.webp",
  "/assets/480287611_638477562009209_4984520699621795740_n.webp",
  "/assets/480414094_638477485342550_7684881888079439876_n.webp",
  "/assets/480506979_638477278675904_6819310531983167724_n.webp"
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useScrollReveal();

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="portfolio" className="py-24 bg-blush-50 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16 animate-on-scroll">
          <p className="text-blush-500 text-xs tracking-[0.3em] uppercase mb-3">Nuestra Galería</p>
          <h2 className="font-serif text-4xl text-charcoal mb-6 leading-snug">
            Nuestros Eventos
          </h2>
          <div className="section-divider mx-auto mb-6" />
          <p className="text-charcoal/70 max-w-2xl mx-auto text-base leading-relaxed">
            Una selección de nuestros eventos más brillantes y emotivos.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] group rounded-xl overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full object-cover rounded-xl"
              alt="Evento de Banquetes Loyale"
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-blush-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-charcoal/50 hover:bg-blush-500 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-blush-500 w-8' : 'bg-white/50 hover:bg-white'
                }`}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
