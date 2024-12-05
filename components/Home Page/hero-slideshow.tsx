"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { heroImages } from '@/data/heroImages'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out",
            index === currentSlide ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            style={{ objectFit: "cover" }}
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center">{image.title}</h2>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-center">{image.description}</p>
            <Button size="lg">Learn More</Button>
          </div>
        </div>
      ))}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className={cn(
              "w-3 h-3 rounded-full p-0 bg-white/50",
              index === currentSlide && "bg-white"
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
