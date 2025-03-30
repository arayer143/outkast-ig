"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Separator } from "@/components/ui/separator"

const services = [
  {
    title: "Above Ground Storage Tank Cleaning",
    description:
      "We offer turnkey solutions whether the tank requires to be cleaned for maintenance, API inspection, or product change.",
    image: "/container-cleaning-2.webp",
    link: "/services/storage-tank-cleaning",
  },
  {
    title: "Complete System Turnkey Cleaning",
    description: "Our experienced professionals can assist in the cleaning of oil components in your systems.",
    image: "/Pressure_Washing_of_Tank_Exterior.webp",
    link: "/services",
  },
  {
    title: "Pipeline Systems Cleaning",
    description:
      "From a complex multi-system cleaning to a simple pump pad Outkast can return your pipes clean and ready for its next service.",
    image: "/outkast-banner.webp",
    link: "/services/pipeline-system-cleaning",
  },
  {
    title: "Hazardous Material Cleaning",
    description:
      "We use specialized chemicals, equipment, and techniques to maintain cleanliness and sanitation in industrial facilities.",
    image: "/hazmat.webp",
    link: "/services/hazardous-material-cleaning",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">What We Offer</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Professional Services</h3>
            <Separator className="mx-auto w-24 mb-6 bg-primary/30" />
            <p className="text-muted-foreground text-lg">
              We provide comprehensive industrial cleaning solutions tailored to meet the specific needs of your
              facility.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/services" passHref>
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              Explore All Services
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white dark:bg-slate-800/80 rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:shadow-black/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Overlay with gradient that works in both modes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-300" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full border-t-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>

        <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{service.description}</p>

        <div className="flex justify-between items-center">
          <Link href={service.link}>
            <Button
              variant="outline"
              className="group/button border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300 dark:text-white dark:border-slate-700 dark:hover:border-primary/50"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
            </Button>
          </Link>

          {/* Subtle indicator */}
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

