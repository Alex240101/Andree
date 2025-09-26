import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InscripcionPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">¡Inscríbete Ahora!</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Elige tu sede preferida y únete a la familia Master Sport FC. Inscripciones abiertas - Cupos limitados.
          </p>
        </div>
      </section>

      {/* Selección de Sedes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Selecciona tu Sede</h2>
            <p className="text-xl text-muted-foreground">Tenemos dos ubicaciones estratégicas para tu comodidad</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sede Santa Anita */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image src="/images/flyer-santa-anita.jpg" alt="Sede Santa Anita" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-3xl font-bold">SANTA ANITA</h3>
                  <p className="text-lg">Canchas Sport Plaza</p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Canchas Sport Plaza - Referencia frente al Mall</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Martes y Jueves: 9:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CreditCard className="w-5 h-5 mr-3 text-primary" />
                    <span>Aceptamos tarjetas de crédito y Yape</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-center">Precios Promocionales</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">1 Mes</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 180</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 200</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">2 Meses</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 320</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 400</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">3 Meses</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 480</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 540</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full text-lg">
                  <Link href="/inscripcion/santa-anita">Inscribirme en Santa Anita</Link>
                </Button>
              </div>
            </div>

            {/* Sede La Molina */}
            <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow">
              <div className="relative h-80">
                <Image src="/images/flyer-la-molina.jpg" alt="Sede La Molina" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-3xl font-bold">LA MOLINA</h3>
                  <p className="text-lg">Canchas Deportop</p>
                </div>
              </div>

              <div className="p-8">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>Javier Prado - Canchas Deportop - Al costado del Metro</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-5 h-5 mr-3 text-primary" />
                    <span>Lunes y Miércoles: 8:00 PM - 9:00 PM</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <CreditCard className="w-5 h-5 mr-3 text-primary" />
                    <span>Aceptamos tarjetas de crédito y Yape</span>
                  </div>
                </div>

                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h4 className="text-xl font-bold mb-4 text-center">Precios Promocionales</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">1 Mes</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 150</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 170</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">2 Meses</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 250</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 300</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">3 Meses</span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-primary">S/ 300</span>
                        <div className="text-sm text-muted-foreground line-through">S/ 450</div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full text-lg">
                  <Link href="/inscripcion/la-molina">Inscribirme en La Molina</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información adicional */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Qué incluye tu inscripción?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚽</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Entrenamiento Profesional</h3>
              <p className="text-white/80">Técnicos especializados y metodología de alto nivel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Equipamiento</h3>
              <p className="text-white/80">Balones profesionales y material de entrenamiento</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Ambiente Familiar</h3>
              <p className="text-white/80">Compañerismo y desarrollo personal</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
