"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { heroImages } from "@/data/heroImages"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(timer)
  }, [])

  // Handle manual navigation
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroImages.length) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative w-full aspect-[16/9] max-h-[600px] md:max-h-[700px] lg:max-h-[800px] overflow-hidden">
      {/* Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0",
          )}
        >
          {/* Image */}
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt || "Hero image"}
            fill
            priority={index === 0}
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />

          {/* Subtle gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      ))}

      {/* Navigation arrows - responsive sizing */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3 sm:px-6 lg:px-10 pointer-events-none">
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/40 pointer-events-auto transition-all"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12 rounded-full bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-black/40 pointer-events-auto transition-all"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>

      {/* Slide indicators - responsive sizing */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 inset-x-0">
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-8 sm:w-10 md:w-12 h-1 sm:h-1.5 rounded-full transition-all",
                index === currentSlide ? "bg-white scale-100" : "bg-white/40 hover:bg-white/60 scale-90",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

