import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InscripcionPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">¡Inscríbete Ahora!</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Elige tu sede preferida y únete a la familia Master Sport FC. Inscripciones abiertas - Cupos limitados.
          </p>
        </div>
      </section>

      {/* Selección de Sedes */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
              Selecciona tu Sede
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/80">
              Tenemos dos ubicaciones estratégicas para tu comodidad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Sede Santa Anita */}
            <div className="bg-card rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-white/10">
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                <Image src="/images/flyer-santa-anita.jpg" alt="Sede Santa Anita" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold">SANTA ANITA</h3>
                  <p className="text-sm sm:text-base md:text-lg">Canchas Sport Plaza</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Canchas Sport Plaza - Referencia frente al Mall</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Martes y Jueves: 9:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Lunes y Miércoles: 8:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Aceptamos tarjetas de crédito y Yape</span>
                  </div>
                </div>

                <div className="bg-primary/50 rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-white/10">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-white">
                    Precios Promocionales
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-medium text-white text-sm sm:text-base">1 Mes</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 180</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 200</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-medium text-white text-sm sm:text-base">2 Meses</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 320</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 400</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-white text-sm sm:text-base">3 Meses</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 480</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 540</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg bg-secondary text-primary hover:bg-secondary/90"
                >
                  <Link href="/inscripcion/santa-anita">Inscribirme en Santa Anita</Link>
                </Button>
              </div>
            </div>

            {/* Sede La Molina */}
            <div className="bg-card rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-white/10">
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                <Image src="/images/flyer-la-molina.jpg" alt="Sede La Molina" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <h3 className="text-2xl sm:text-2xl md:text-3xl font-bold">LA MOLINA</h3>
                  <p className="text-sm sm:text-base md:text-lg">Canchas Deportop</p>
                </div>
              </div>

              <div className="p-5 sm:p-6 md:p-8">
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Javier Prado - Canchas Deportop - Al costado del Metro</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Lunes y Miércoles: 8:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-start text-white text-sm sm:text-base">
                    <CreditCard className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-secondary flex-shrink-0 mt-0.5" />
                    <span>Aceptamos tarjetas de crédito y Yape</span>
                  </div>
                </div>

                <div className="bg-primary/50 rounded-lg p-4 sm:p-5 md:p-6 mb-6 sm:mb-8 border border-white/10">
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center text-white">
                    Precios Promocionales
                  </h4>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-medium text-white text-sm sm:text-base">1 Mes</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 150</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 170</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="font-medium text-white text-sm sm:text-base">2 Meses</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 250</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 300</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium text-white text-sm sm:text-base">3 Meses</span>
                      <div className="text-right">
                        <span className="text-xl sm:text-2xl font-bold text-secondary">S/ 300</span>
                        <div className="text-xs sm:text-sm text-white/60 line-through">S/ 450</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full text-base sm:text-lg bg-secondary text-primary hover:bg-secondary/90"
                >
                  <Link href="/inscripcion/la-molina">Inscribirme en La Molina</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary/80 text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 md:mb-10">
            ¿Qué incluye tu inscripción?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mt-8 sm:mt-10 md:mt-12">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">⚽</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Entrenamiento Profesional</h3>
              <p className="text-sm sm:text-base text-white/80">Técnicos especializados y metodología de alto nivel</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Equipamiento</h3>
              <p className="text-sm sm:text-base text-white/80">Balones profesionales y material de entrenamiento</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl">👥</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Ambiente Familiar</h3>
              <p className="text-sm sm:text-base text-white/80">Compañerismo y desarrollo personal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
