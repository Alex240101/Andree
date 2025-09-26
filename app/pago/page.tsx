"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, CreditCard, Smartphone, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function PagoPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [paymentData, setPaymentData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      const nombre = searchParams.get("nombre")
      const sede = searchParams.get("sede")
      const paquete = searchParams.get("paquete")
      const precio = searchParams.get("precio")
      const metodo = searchParams.get("metodo")

      console.log("[v0] Payment data received:", { nombre, sede, paquete, precio, metodo })

      if (nombre && sede && paquete && precio && metodo) {
        setPaymentData({ nombre, sede, paquete, precio, metodo })
      } else {
        // Si no hay datos, redirigir a inscripción
        console.log("[v0] Missing payment data, redirecting to inscription")
        router.push("/inscripcion")
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchParams, router])

  const handleWhatsAppRedirect = () => {
    const message = `Hola! Soy ${paymentData.nombre}. He completado mi inscripción para Master Sport FC:

📍 Sede: ${paymentData.sede}
📦 Paquete: ${paymentData.paquete}
💰 Monto: S/${paymentData.precio}
💳 Método de pago: ${paymentData.metodo}

Adjunto mi comprobante de pago.`

    const whatsappUrl = `https://wa.me/51934498803?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando información de pago...</p>
        </div>
      </div>
    )
  }

  if (!paymentData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-6">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-primary mb-4">Información de pago no encontrada</h2>
          <p className="text-muted-foreground mb-6">
            No se encontraron los datos de inscripción. Por favor, vuelve a completar el formulario de inscripción.
          </p>
          <Button onClick={() => router.push("/inscripcion")} className="w-full">
            Volver a Inscripción
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <Button variant="ghost" onClick={() => router.back()} className="mb-6 hover:bg-primary/10">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>

        <Card className="shadow-xl border-0">
          <CardHeader className="bg-primary text-white text-center">
            <CardTitle className="text-2xl font-bold">Completar Pago</CardTitle>
            <p className="text-primary-foreground/90">Master Sport FC - {paymentData.sede}</p>
          </CardHeader>
          <CardContent className="p-8">
            {/* Resumen del pedido */}
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg mb-4 text-center">Resumen de Inscripción</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nombre:</span>
                  <span className="font-medium">{paymentData.nombre}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sede:</span>
                  <span className="font-medium">{paymentData.sede}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Paquete:</span>
                  <span className="font-medium">{paymentData.paquete}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total a pagar:</span>
                    <span className="text-primary">S/ {paymentData.precio}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Método de pago */}
            {paymentData.metodo === "yape" ? (
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Pago con Yape
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-dashed border-primary/30 max-w-sm mx-auto">
                  <Image
                    src="/qr-code-for-yape-payment.jpg"
                    alt="Código QR para pago con Yape"
                    width={200}
                    height={200}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground text-center">Escanea este código QR con tu app Yape</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Instrucciones para pagar:</h4>
                  <ol className="text-sm text-blue-800 space-y-1 text-left">
                    <li>1. Abre tu aplicación Yape</li>
                    <li>2. Escanea el código QR de arriba</li>
                    <li>3. Verifica que el monto sea S/ {paymentData.precio}</li>
                    <li>4. Completa el pago</li>
                    <li>5. Toma captura del comprobante</li>
                    <li>6. Envía tu comprobante usando el botón de abajo</li>
                  </ol>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                  <CreditCard className="h-5 w-5 text-primary" />
                  Pago en Efectivo
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                  <h4 className="font-semibold text-amber-900 mb-4">Instrucciones para pago en efectivo:</h4>
                  <div className="text-left space-y-3 text-amber-800">
                    <p>
                      <strong>Monto a pagar:</strong> S/ {paymentData.precio}
                    </p>
                    <p>
                      <strong>Dónde pagar:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      {paymentData.sede === "Santa Anita" ? (
                        <>
                          <li>Sede Santa Anita - Canchas Sport Plaza</li>
                          <li>Referencia: Frente al Mall</li>
                          <li>Horarios: Martes y Jueves 9:00 PM - 11:00 PM</li>
                        </>
                      ) : (
                        <>
                          <li>Sede La Molina - Con Javier Prado</li>
                          <li>Referencia: Al costado de Metro</li>
                          <li>Horarios: Lunes y Miércoles 8:00 PM - 9:00 PM</li>
                        </>
                      )}
                    </ul>
                    <p className="mt-4">
                      <strong>Importante:</strong>
                    </p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>Lleva el monto exacto</li>
                      <li>Solicita tu recibo de pago</li>
                      <li>Toma foto del recibo</li>
                      <li>Envía la foto usando el botón de abajo</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Botón de WhatsApp */}
            <div className="mt-8 text-center">
              <Button
                onClick={handleWhatsAppRedirect}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg font-bold"
                size="lg"
              >
                <ExternalLink className="h-5 w-5 mr-2" />
                ENVIAR COMPROBANTE DE PAGO
              </Button>
              <p className="text-sm text-muted-foreground mt-2">Te redirigirá a WhatsApp para enviar tu comprobante</p>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                <strong>Número de WhatsApp:</strong> +51 934 498 803
                <br />
                Una vez enviado tu comprobante, nos pondremos en contacto contigo para confirmar tu inscripción.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
