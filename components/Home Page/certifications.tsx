'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    name: "Pro Board Certification",
    image: "/pro-board-cert.webp",
  },
  {
    name: "Fire Service Certification",
    image: "/fire-service-cert.webp",
  },
  {
    name: "HAZWOPER Certification",
    image: "/hazwoper cert.webp",
  },
  {
    name: "ISN RAVS Plus Certification",
    image: "/ISN_RAVS_Plus_Logo.webp",
  },
]

export function CertificationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re proud to maintain the highest industry standards through our professional certifications.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function CertificationCard({ certification, index }: { certification: typeof certifications[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-xl group">
        <CardContent className="p-6 flex flex-col items-center justify-center h-full">
          <div className="relative w-full h-48 mb-4">
            <Image
              src={certification.image}
              alt={`${certification.name} logo`}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-lg font-semibold text-center mt-4 group-hover:text-primary transition-colors duration-300">
            {certification.name}
          </h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}

