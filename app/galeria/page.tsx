"use client"

import { useState } from "react"
import { X, Play } from "lucide-react"

const videos = [
  {
    id: 1,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-training-video-1.jpg",
  },
  {
    id: 2,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-match-highlights-video-2.jpg",
  },
  {
    id: 3,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-skills-training-video-3.jpg",
  },
  {
    id: 4,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-team-celebration-video-4.jpg",
  },
  {
    id: 5,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-practice-session-video-5.jpg",
  },
  {
    id: 6,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-game-action-video-6.jpg",
  },
  {
    id: 7,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-drills-training-video-7.jpg",
  },
  {
    id: 8,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-tournament-video-8.jpg",
  },
  {
    id: 9,
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "/soccer-academy-training-video-9.jpg",
  },
]

export default function GaleriaPage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)

  return (
    <div className="min-h-screen bg-[#5a1428]">
      {/* Header - Responsive */}
      <section className="bg-[#7a1034] text-white py-12 sm:py-16 md:py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Galería Master Sport FC
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Revive los mejores momentos de nuestra academia
          </p>
        </div>
      </section>

      {/* Galería de Videos - 9 videos responsive en grid */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group relative bg-[#7a1034] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-white/10 aspect-video"
                onClick={() => setSelectedVideo(video)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${video.thumbnail})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 group-hover:bg-white rounded-full flex items-center justify-center transition-all group-hover:scale-110">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#7a1034] ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de Video - Responsive */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 sm:-top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Cerrar video"
            >
              <X className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </button>

            <div className="bg-[#7a1034] rounded-lg overflow-hidden border-2 border-white/20 shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={selectedVideo.embedUrl}
                  title="Video de Master Sport FC"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
