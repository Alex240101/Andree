"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play } from "lucide-react"

const videos = [
  {
    id: 1,
    videoUrl: "/videos/video-1.mp4",
  },
  {
    id: 2,
    videoUrl: "/videos/video-2.mp4",
  },
  {
    id: 3,
    videoUrl: "/videos/video-3.mp4",
  },
  {
    id: 4,
    videoUrl: "/videos/video-4.mp4",
  },
  {
    id: 5,
    videoUrl: "/videos/video-5.mp4",
  },
  {
    id: 6,
    videoUrl: "/videos/video-6.mp4",
  },
  {
    id: 7,
    videoUrl: "/videos/video-7.mp4",
  },
  {
    id: 8,
    videoUrl: "/videos/video-8.mp4",
  },
  {
    id: 9,
    videoUrl: "/videos/video-9.mp4",
  },
]

export default function GaleriaPage() {
  const [selectedVideo, setSelectedVideo] = useState<(typeof videos)[0] | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const thumbnailRefs = useRef<(HTMLVideoElement | null)[]>([])

  useEffect(() => {
    thumbnailRefs.current.forEach((video) => {
      if (video) {
        video.currentTime = 0.1
      }
    })
  }, [])

  const handleVideoClick = (video: (typeof videos)[0]) => {
    setSelectedVideo(video)
  }

  const handleCloseModal = () => {
    setSelectedVideo(null)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

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
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group relative bg-[#7a1034] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer border border-white/10 aspect-video"
                onClick={() => handleVideoClick(video)}
              >
                <video
                  ref={(el) => {
                    thumbnailRefs.current[index] = el
                  }}
                  src={video.videoUrl}
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
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

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6"
          onClick={handleCloseModal}
        >
          <div className="relative flex items-center justify-center w-full h-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </button>

            <div className="relative max-w-full max-h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="max-w-full max-h-[85vh] sm:max-h-[90vh] w-auto h-auto rounded-lg shadow-2xl border-2 border-white/20"
                controls
                autoPlay
                src={selectedVideo.videoUrl}
                style={{
                  objectFit: "contain",
                }}
              >
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
