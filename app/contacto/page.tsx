"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const message = `Hola! Soy ${formData.nombre}.

📧 Email: ${formData.email}
📱 Teléfono: ${formData.telefono}

Mensaje:
${formData.mensaje}

Enviado desde la página web de Master Sport FC.`

    const whatsappUrl = `https://wa.me/51934498803?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Contáctanos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros entrenamientos? ¡Estamos aquí para ayudarte!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de contacto */}
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <MessageCircle className="h-6 w-6" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                    Nombre completo *
                  </label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre completo"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo electrónico *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+51 999 999 999"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    value={formData.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Información de contacto */}
          <div className="space-y-6">
            {/* Información general */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-xl font-bold">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Teléfono / WhatsApp</p>
                    <p className="text-muted-foreground">+51 934 498 803</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Correo electrónico</p>
                    <p className="text-muted-foreground">info@mastersportfc.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sede Santa Anita */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-xl font-bold">Sede Santa Anita</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">
                      Canchas Sport Plaza
                      <br />
                      Referencia: Frente al Mall
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horarios de entrenamiento</p>
                    <p className="text-muted-foreground">
                      Martes y Jueves
                      <br />
                      9:00 PM - 11:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sede La Molina */}
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-primary text-white">
                <CardTitle className="text-xl font-bold">Sede La Molina</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Ubicación</p>
                    <p className="text-muted-foreground">
                      Con Javier Prado - Canchas Deportop
                      <br />
                      Referencia: Al costado de Metro
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Horarios de entrenamiento</p>
                    <p className="text-muted-foreground">
                      Lunes y Miércoles
                      <br />
                      8:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Llamada a la acción */}
        <div className="mt-12 text-center">
          <Card className="shadow-xl border-0 bg-primary text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">¿Listo para unirte a Master Sport FC?</h3>
              <p className="text-primary-foreground/90 mb-6 text-lg">
                No esperes más. ¡Inscríbete ahora y comienza tu camino hacia el éxito en el fútbol!
              </p>
              <Button
                onClick={() => (window.location.href = "/inscripcion")}
                variant="secondary"
                size="lg"
                className="text-primary hover:bg-white/90"
              >
                Inscríbete Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
