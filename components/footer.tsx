import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <Image src="/images/logo.jpg" alt="Master Sport FC" fill className="object-contain rounded-full" />
              </div>
              <span className="text-2xl font-bold">MASTER SPORT FC</span>
            </div>
            <p className="text-white/80">
              Academia de fútbol profesional desde 2023. Formamos campeones con pasión y dedicación.
            </p>
          </div>

          {/* Sedes */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Nuestras Sedes</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <div>
                  <p className="font-semibold">Santa Anita</p>
                  <p className="text-sm text-white/80">Canchas Sport Plaza - Frente al Mall</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Martes y Jueves 9PM-11PM</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-1 text-secondary" />
                <div>
                  <p className="font-semibold">La Molina</p>
                  <p className="text-sm text-white/80">Javier Prado - Canchas Deportop</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Lunes y Miércoles 8PM-9PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-secondary" />
                <span>934 498 803</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@mastersportfc.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">© 2023-2025 Master Sport FC. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
