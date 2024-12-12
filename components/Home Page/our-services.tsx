'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const services = [
  {
    title: "Above Ground Storage Tank Cleaning",
    description: "We offer turnkey solutions whether the tank requires to be cleaned for maintenance, API inspection, or product change.",
    image: "/container-cleaning-2.webp",
    link: "/services/storage-tank-cleaning"
  },
  {
    title: "Complete System Turnkey Cleaning",
    description: "Our experienced professionals can assist in the cleaning of oil components in your systems.",
    image: "/Pressure_Washing_of_Tank_Exterior.webp",
    link: "/services"
  },
  {
    title: "Pipeline Systems Cleaning",
    description: "From a complex multi-system cleaning to a simple pump pad Outkast can return your pipes clean and ready for its next service.",
    image: "/outkast-banner.webp",
    link: "/services/pipeline-system-cleaning"
  },
  {
    title: "Hazardous Material Cleaning",
    description: "We use specialized chemicals, equipment, and techniques to maintain cleanliness and sanitation in industrial facilities.",
    image: "/hazmat.webp",
    link: "/services/hazardous-material-cleaning"
  }
]

export function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/services" passHref>
            <Button size="lg" variant="default" className="group">
              More Services
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <CardHeader className="relative z-10">
          <CardTitle className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm">{service.description}</CardDescription>
        </CardContent>
        <CardFooter className="pt-0">
          <Link href={service.link} passHref>
            <Button 
              variant="outline" 
              className="w-full group/button hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <span className="mr-2">Learn More</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
