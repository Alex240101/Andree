"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Trophy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const carouselImages = [
  {
    src: "/jugadores-de-f-tbol-entrenando-en-cancha-profesion.jpg",
    alt: "Entrenamiento profesional",
  },
  {
    src: "/equipo-de-f-tbol-celebrando-victoria.jpg",
    alt: "Celebración del equipo",
  },
  {
    src: "/cancha-de-f-tbol-moderna-con-iluminaci-n-nocturna.jpg",
    alt: "Instalaciones modernas",
  },
  {
    src: "/placeholder-bhjt1.png",
    alt: "Desarrollo de talento",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#5a1428]">
      {/* Hero Section con Carrusel */}
      <section className="relative h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
        <div className="relative h-full w-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex items-center justify-center px-3 sm:px-4 md:px-6 z-20">
          <div className="text-center text-white max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-balance">
                Atención GRAN CONVOCATORIA
              </h1>
              <div className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-5 md:mb-6 space-y-1 sm:space-y-2 md:space-y-3 leading-relaxed">
                <p>¿Eres un apasionado del fútbol?</p>
                <p className="hidden sm:block">
                  ¿Sientes la pasión en cada latido de tu corazón cada vez que el balón toca la red?
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-300">
                  Entonces este es el momento que has estado esperando toda tu vida.
                </p>
                <p className="hidden md:block">
                  ¿Quieres demostrar tu talento? ¿Quieres demostrar que dominas el balón?
                </p>
              </div>

              <div className="bg-[#7a1034]/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-5 lg:p-6 mb-4 sm:mb-5 md:mb-6 inline-block">
                <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
                  Master Sport FC te espera
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3">
                  No lo pienses, ¡ÚNETE A LA FAMILIA!
                </p>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                  ¡Únete a la Academia Master Sport FC y juntos hagamos historia en el mundo del fútbol!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-10 md:mb-12">
                <Link href="/inscripcion" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-4 sm:py-4 md:py-5 h-auto font-bold shadow-2xl bg-yellow-400 hover:bg-yellow-500 text-[#7a1034] w-full"
                  >
                    ¡INSCRÍBETE AHORA!
                  </Button>
                </Link>
                <Link href="/galeria" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-sm sm:text-base md:text-lg px-6 sm:px-7 md:px-8 py-4 sm:py-4 md:py-5 h-auto font-bold bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#7a1034] shadow-2xl w-full"
                  >
                    Ver Galería
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#5a1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              ¿Por qué elegir Master Sport FC?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              Somos más que una academia, somos una familia que forma campeones
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
            <div className="text-center p-6 sm:p-7 md:p-8 bg-[#7a1034] rounded-lg shadow-lg border border-white/10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Trophy className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7a1034]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
                Entrenamiento Profesional
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Metodología de entrenamiento de alto nivel con técnicos especializados
              </p>
            </div>

            <div className="text-center p-6 sm:p-7 md:p-8 bg-[#7a1034] rounded-lg shadow-lg border border-white/10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7a1034]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">Ambiente Familiar</h3>
              <p className="text-sm sm:text-base text-white/90">
                Un ambiente de respeto, compañerismo y crecimiento personal
              </p>
            </div>

            <div className="text-center p-6 sm:p-7 md:p-8 bg-[#7a1034] rounded-lg shadow-lg border border-white/10 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-5 md:mb-6">
                <Star className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#7a1034]" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-white">
                Instalaciones Modernas
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Canchas profesionales en las mejores ubicaciones de Lima
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Sedes */}
      <section className="py-20 bg-[#5a1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nuestras Sedes</h2>
            <p className="text-xl text-white/90">Dos ubicaciones estratégicas para tu comodidad</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sede Santa Anita */}
            <div className="bg-[#7a1034] rounded-lg shadow-xl overflow-hidden border border-white/10">
              <div className="relative h-64">
                <Image src="/images/flyer-santa-anita.jpg" alt="Sede Santa Anita" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">Santa Anita</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-white/90">
                    <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                    Martes y Jueves: 9:00 PM - 11:00 PM
                  </p>
                  <p className="text-white/90">Canchas Sport Plaza - Referencia frente al Mall</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-white">
                    <span>1 Mes</span>
                    <span className="font-bold text-yellow-400">S/ 180</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>2 Meses</span>
                    <span className="font-bold text-yellow-400">S/ 320</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>3 Meses</span>
                    <span className="font-bold text-yellow-400">S/ 480</span>
                  </div>
                </div>
                <Link href="/inscripcion">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#7a1034] font-bold">
                    Inscríbete en Santa Anita
                  </Button>
                </Link>
              </div>
            </div>

            {/* Sede La Molina */}
            <div className="bg-[#7a1034] rounded-lg shadow-xl overflow-hidden border border-white/10">
              <div className="relative h-64">
                <Image src="/images/flyer-la-molina.jpg" alt="Sede La Molina" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-4">La Molina</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-white/90">
                    <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                    Lunes y Miércoles: 8:00 PM - 9:00 PM
                  </p>
                  <p className="text-white/90">Javier Prado - Canchas Deportop - Al costado del Metro</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center text-white">
                    <span>1 Mes</span>
                    <span className="font-bold text-yellow-400">S/ 150</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>2 Meses</span>
                    <span className="font-bold text-yellow-400">S/ 250</span>
                  </div>
                  <div className="flex justify-between items-center text-white">
                    <span>3 Meses</span>
                    <span className="font-bold text-yellow-400">S/ 300</span>
                  </div>
                </div>
                <Link href="/inscripcion">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-[#7a1034] font-bold">
                    Inscríbete en La Molina
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">¡Tu momento es AHORA!</h2>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            No dejes pasar esta oportunidad única de formar parte de la familia Master Sport FC. Inscripciones abiertas
            - Cupos limitados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inscripcion">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                ¡INSCRÍBETE YA!
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
