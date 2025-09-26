"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50">
      <div className="animate-bounce-custom mb-8">
        <div className="w-32 h-32 relative">
          <Image src="/images/logo.jpg" alt="Master Sport FC" fill className="object-contain rounded-full" />
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">MASTER SPORT FC</h1>
        <p className="text-white/80 text-lg">Academia de Fútbol desde 2023</p>
      </div>

      <div className="w-64 bg-white/20 rounded-full h-2 mb-4">
        <div
          className="bg-white h-2 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="text-white/60 text-sm">Cargando... {progress}%</p>
    </div>
  )
}
