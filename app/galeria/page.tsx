"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Play, ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    type: "image",
    src: "/jugadores-de-f-tbol-entrenando-en-cancha-profesion.jpg",
    alt: "Entrenamiento profesional en Master Sport FC",
    category: "Entrenamientos",
  },
  {
    id: 2,
    type: "image",
    src: "/equipo-de-f-tbol-celebrando-victoria.jpg",
    alt: "Celebración del equipo Master Sport FC",
    category: "Celebraciones",
  },
  {
    id: 3,
    type: "image",
    src: "/cancha-de-f-tbol-moderna-con-iluminaci-n-nocturna.jpg",
    alt: "Instalaciones modernas de Master Sport FC",
    category: "Instalaciones",
  },
  {
    id: 4,
    type: "video",
    src: "/video-de-entrenamiento-de-f-tbol.jpg",
    alt: "Video de entrenamiento técnico",
    category: "Videos",
  },
  {
    id: 5,
    type: "image",
    src: "/placeholder-wyqls.png",
    alt: "Jugadores jóvenes en formación",
    category: "Entrenamientos",
  },
  {
    id: 6,
    type: "image",
    src: "/placeholder-v5017.png",
    alt: "Foto grupal del equipo",
    category: "Equipo",
  },
  {
    id: 7,
    type: "video",
    src: "/highlights-de-partido-de-f-tbol.jpg",
    alt: "Highlights del último partido",
    category: "Videos",
  },
  {
    id: 8,
    type: "image",
    src: "/cancha-de-f-tbol-sede-santa-anita.jpg",
    alt: "Sede Santa Anita",
    category: "Instalaciones",
  },
  {
    id: 9,
    type: "image",
    src: "/cancha-de-f-tbol-sede-la-molina.jpg",
    alt: "Sede La Molina",
    category: "Instalaciones",
  },
]

const categories = ["Todos", "Entrenamientos", "Celebraciones", "Instalaciones", "Videos", "Equipo"]

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems =
    selectedCategory === "Todos" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  const openModal = (item: (typeof galleryItems)[0]) => {
    setSelectedItem(item)
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id))
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setCurrentIndex(nextIndex)
    setSelectedItem(filteredItems[nextIndex])
  }

  const prevItem = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setCurrentIndex(prevIndex)
    setSelectedItem(filteredItems[prevIndex])
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Galería Master Sport FC</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Revive los mejores momentos de nuestra academia. Entrenamientos, celebraciones y la pasión por el fútbol.
          </p>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.src || "/placeholder.svg"}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="w-8 h-8 text-primary ml-1" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-sm">{item.alt}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No hay elementos en esta categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Botón cerrar */}
            <button onClick={closeModal} className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10">
              <X size={32} />
            </button>

            {/* Navegación */}
            {filteredItems.length > 1 && (
              <>
                <button
                  onClick={prevItem}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={nextItem}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            {/* Contenido */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative h-96 md:h-[600px]">
                {selectedItem.type === "video" ? (
                  <div className="w-full h-full bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4" />
                      <p>Video: {selectedItem.alt}</p>
                      <p className="text-sm text-gray-300 mt-2">
                        (Funcionalidad de video se implementará próximamente)
                      </p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={selectedItem.src || "/placeholder.svg"}
                    alt={selectedItem.alt}
                    fill
                    className="object-contain"
                  />
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedItem.category}
                    </span>
                    <h3 className="text-xl font-bold mt-2">{selectedItem.alt}</h3>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {currentIndex + 1} de {filteredItems.length}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
