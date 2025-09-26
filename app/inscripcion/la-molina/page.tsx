"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, User, CreditCard, Banknote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const packages = [
  { id: "1mes", name: "1 Mes", price: 150, originalPrice: 170 },
  { id: "2meses", name: "2 Meses", price: 250, originalPrice: 300 },
  { id: "3meses", name: "3 Meses", price: 300, originalPrice: 450 },
]

export default function InscripcionLaMolinaPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    paquete: "",
    metodoPago: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.nombreCompleto || !formData.paquete || !formData.metodoPago) {
      alert("Por favor completa todos los campos")
      return
    }

    const selectedPackage = packages.find((p) => p.id === formData.paquete)
    const queryParams = new URLSearchParams({
      sede: "La Molina",
      nombre: formData.nombreCompleto,
      paquete: selectedPackage?.name || "",
      precio: selectedPackage?.price.toString() || "",
      metodo: formData.metodoPago,
    })

    router.push(`/pago?${queryParams.toString()}`)
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" onClick={() => router.back()} className="text-white hover:bg-white/10 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Inscripción - La Molina</h1>
            <p className="text-xl">Canchas Deportop - Lunes y Miércoles 8PM-9PM</p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 relative mr-4">
                <Image src="/images/logo.jpg" alt="Master Sport FC" fill className="object-contain rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">Master Sport FC</h2>
                <p className="text-muted-foreground">Sede La Molina</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Datos Personales */}
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold">Datos Personales</h3>
                </div>

                <div>
                  <Label htmlFor="nombreCompleto">Nombre Completo *</Label>
                  <Input
                    id="nombreCompleto"
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    value={formData.nombreCompleto}
                    onChange={(e) => setFormData({ ...formData, nombreCompleto: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              {/* Selección de Paquete */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Selecciona tu Paquete</h3>
                <RadioGroup
                  value={formData.paquete}
                  onValueChange={(value) => setFormData({ ...formData, paquete: value })}
                >
                  {packages.map((pkg) => (
                    <div key={pkg.id} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                      <RadioGroupItem value={pkg.id} id={pkg.id} />
                      <Label htmlFor={pkg.id} className="flex-1 cursor-pointer">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{pkg.name}</span>
                          <div className="text-right">
                            <span className="text-2xl font-bold text-primary">S/ {pkg.price}</span>
                            <div className="text-sm text-muted-foreground line-through">S/ {pkg.originalPrice}</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Método de Pago */}
              <div className="space-y-4">
                <div className="flex items-center mb-4">
                  <CreditCard className="w-5 h-5 text-primary mr-2" />
                  <h3 className="text-xl font-bold">Método de Pago</h3>
                </div>

                <RadioGroup
                  value={formData.metodoPago}
                  onValueChange={(value) => setFormData({ ...formData, metodoPago: value })}
                >
                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="yape" id="yape" />
                    <Label htmlFor="yape" className="flex items-center cursor-pointer">
                      <div className="w-8 h-8 bg-purple-600 rounded mr-3 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">Y</span>
                      </div>
                      <span className="font-medium">Yape</span>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted/50">
                    <RadioGroupItem value="efectivo" id="efectivo" />
                    <Label htmlFor="efectivo" className="flex items-center cursor-pointer">
                      <Banknote className="w-8 h-8 text-green-600 mr-3" />
                      <span className="font-medium">Efectivo</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              <Button type="submit" size="lg" className="w-full text-lg">
                Continuar al Pago
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
