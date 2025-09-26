"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Star, Users, Trophy, Clock } from "lucide-react"
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section con Carrusel */}
      <section className="relative h-screen overflow-hidden">
        <div className="carousel-container h-full">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
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
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-7xl font-bold mb-6 text-balance">Atención GRAN CONVOCATORIA</h1>
              <div className="text-xl md:text-2xl mb-8 space-y-4 leading-relaxed">
                <p>¿Eres un apasionado del fútbol?</p>
                <p>¿Sientes la pasión en cada latido de tu corazón cada vez que el balón toca la red?</p>
                <p className="text-2xl md:text-3xl font-bold text-secondary">
                  Entonces este es el momento que has estado esperando toda tu vida.
                </p>
                <p>¿Quieres demostrar tu talento? ¿Quieres demostrar que dominas el balón?</p>
              </div>

              <div className="bg-primary/90 backdrop-blur-sm rounded-lg p-8 mb-8 inline-block">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Master Sport FC te espera</h2>
                <p className="text-xl md:text-2xl mb-4">No lo pienses, ¡ÚNETE A LA FAMILIA!</p>
                <p className="text-lg">
                  ¡Únete a la Academia Master Sport FC y juntos hagamos historia en el mundo del fútbol!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Button asChild size="lg" className="text-lg px-10 py-6 h-auto font-bold shadow-2xl">
                  <Link href="/inscripcion">¡INSCRÍBETE AHORA!</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-10 py-6 h-auto font-bold bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary shadow-2xl"
                >
                  <Link href="/galeria">Ver Galería</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex space-x-3">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Sección de Características */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">¿Por qué elegir Master Sport FC?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos más que una academia, somos una familia que forma campeones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Entrenamiento Profesional</h3>
              <p className="text-muted-foreground">
                Metodología de entrenamiento de alto nivel con técnicos especializados
              </p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ambiente Familiar</h3>
              <p className="text-muted-foreground">Un ambiente de respeto, compañerismo y crecimiento personal</p>
            </div>

            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instalaciones Modernas</h3>
              <p className="text-muted-foreground">Canchas profesionales en las mejores ubicaciones de Lima</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Sedes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Nuestras Sedes</h2>
            <p className="text-xl text-muted-foreground">Dos ubicaciones estratégicas para tu comodidad</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sede Santa Anita */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/flyer-santa-anita.jpg" alt="Sede Santa Anita" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-4">Santa Anita</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Martes y Jueves: 9:00 PM - 11:00 PM
                  </p>
                  <p className="text-muted-foreground">Canchas Sport Plaza - Referencia frente al Mall</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span>1 Mes</span>
                    <span className="font-bold text-primary">S/ 180</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 Meses</span>
                    <span className="font-bold text-primary">S/ 320</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 Meses</span>
                    <span className="font-bold text-primary">S/ 480</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/inscripcion">Inscríbete en Santa Anita</Link>
                </Button>
              </div>
            </div>

            {/* Sede La Molina */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64">
                <Image src="/images/flyer-la-molina.jpg" alt="Sede La Molina" fill className="object-cover" />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-4">La Molina</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Lunes y Miércoles: 8:00 PM - 9:00 PM
                  </p>
                  <p className="text-muted-foreground">Javier Prado - Canchas Deportop - Al costado del Metro</p>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between items-center">
                    <span>1 Mes</span>
                    <span className="font-bold text-primary">S/ 150</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>2 Meses</span>
                    <span className="font-bold text-primary">S/ 250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>3 Meses</span>
                    <span className="font-bold text-primary">S/ 300</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href="/inscripcion">Inscríbete en La Molina</Link>
                </Button>
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
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link href="/inscripcion">¡INSCRÍBETE YA!</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <Link href="/contacto">Más Información</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
