'use client'

import Image from "next/image"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckIcon } from "lucide-react"
import { ApplicationForm } from "@/components/Careers Page/application-form"

const carouselImages = [
  "/careers-page.webp",
  "/careers-page-2.webp",
  "/careers-page-3.webp",
  "/careers-page-4.webp",
  "/careers-page-5.webp",
]

const features = [
  "Competitive Wages",
  "Paid Time Off",
  "Medical, Dental, Vision, and Life Insurance",
  "Fully Paid Training",
  "Overtime Opportunities",
  "Per Diem for Travel Days",
]

export default function CareersPage() {
  return (
    <main className="flex flex-col py-5 items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <section className="w-full bg-gray-900 dark:bg-black">
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {carouselImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[60vh]">
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`Careers image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white" />
          <CarouselNext className="text-white" />
        </Carousel>
      </section>

      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-16 dark:text-gray-100">Join our Crew!</h1>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-6 dark:text-gray-300">
              At OutKast Industrial Group, we are dedicated to providing a safe and informed crew to our job sites. We
              have no &quot;truck supervisors&quot; or &quot;just a vac truck driver&quot; here. If you&apos;re
              passionate about joining a team that puts safety first and truly works together to accomplish the goal
              then apply today!
            </p>
            <div className="text-center md:text-left">
              <Link href="tel:2252788330">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600"
                >
                  Contact Us Today
                  <span className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px]">
            <Image src="/Manway.webp" alt="Manway opening picture" fill className="object-cover rounded-lg" />
          </div>
        </div>
      </section>

      <section className="w-full bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">What we can offer</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px]">
              <Image src="/outkast-staff.webp" alt="OutKast Staff Picture" fill className="object-cover rounded-lg" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700">
                  <CardContent className="flex items-center p-4">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
                    <p className="font-semibold dark:text-gray-100">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-gray-100">Apply Now</h2>
        <ApplicationForm />
      </section>
    </main>
  )
}

