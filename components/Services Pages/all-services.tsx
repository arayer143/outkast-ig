'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from 'lucide-react'

const services = [
  {
    title: "Tank Cleaning",
    description: "Industrial storage tank cleaning services designed to maintain and restore the cleanliness and functionality of storage tanks used in various industries.",
    image: "/container-cleaning-2.webp",
    link: "/services/storage-tank-cleaning"
  },
  {
    title: "Hydro Blasting",
    description: "Efficient, eco-friendly, and versatile cleaning method suitable for various industrial, commercial, and residential applications.",
    image: "/Pressure_Washing_of_Tank_Exterior.webp",
    link: "/services/storage-tank-cleaning"
  },
  {
    title: "Vacuum Truck Services",
    description: "Efficient and reliable solutions for the collection, transportation, and disposal of liquid and semi-liquid waste materials.",
    image: "/vac_truck_2.webp",
    link: "/services/vacuum-truck-services"
  },
  {
    title: "Pipe Cleaning",
    description: "Designed to maintain the efficiency and longevity of piping systems in various industrial settings.",
    image: "/pipeline-2.webp",
    link: "/services/pipeline-system-cleaning"
  },
  {
    title: "Confined Space Rescue",
    description: "Specialized emergency response operation designed to safely extract individuals from confined spaces.",
    image: "/Manway.webp",
    link: "/services/confined-space-rescue"
  },
  {
    title: "Chemical Cleaning and Decontamination",
    description: "Specialized solutions for removing contaminants, residues, and hazardous materials from industrial equipment, facilities, and environments.",
    image: "/hazmat.webp",
    link: "/services/hazardous-material-cleaning"
  },
  {
    title: "Waste Transport and Disposal",
    description: "Comprehensive solutions for the safe, efficient, and compliant handling of various waste materials.",
    image: "/outkast-truck.webp",
    link: "/services/hazardous-material-cleaning"
  },
  {
    title: "Hazardous Material Emergency Response",
    description: "Specialized operations designed to manage and mitigate incidents involving hazardous substances.",
    image: "/Response_to_Leaking_Railcar_Valve.webp",
    link: "/services/hazardous-material-cleaning"
  }
]

export default function AllServicesPage() {
  return (
    <div className="bg-background text-foreground dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">


      {/* Intro Section */}
      <section className="py-16 bg-secondary/10 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 dark:text-gray-100">Comprehensive Industrial Services</h2>
          <p className="text-lg text-center max-w-3xl mx-auto dark:text-gray-300 leading-relaxed font-light">
            At Outkast Industrial Group, we offer a wide range of industrial services designed to meet the diverse needs of our clients. From tank cleaning to hazardous material handling, our expert team is equipped to handle the most challenging industrial tasks with precision and safety.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group bg-white dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold transition-colors duration-300 group-hover:text-primary dark:text-gray-100">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 dark:text-gray-300 leading-relaxed">{service.description}</p>
                    <Link href={service.link} passHref>
                      <Button variant="outline" className="w-full group dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed font-light">
            Contact us today to discuss how we can meet your industrial service needs. Our team of experts is ready to provide tailored solutions for your specific requirements.
          </p>
          <Link href="/contact" passHref>
            <Button size="lg" variant="secondary" className="dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
              Contact Us
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
