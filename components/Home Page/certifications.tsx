"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const certifications = [
  {
    name: "Pro Board Certification",
    image: "/pro-board-cert.webp",
    description: "Internationally recognized certification for fire service professionals",
  },
  {
    name: "Fire Service Certification",
    image: "/fire-service-cert.webp",
    description: "Specialized training in fire prevention and emergency response",
  },
  {
    name: "HAZWOPER Certification",
    image: "/hazwoper cert.webp",
    description: "Hazardous Waste Operations and Emergency Response Standard",
  },
  {
    name: "ISN RAVS Plus Certification",
    image: "/ISN_RAVS_Plus_Logo.webp",
    description: "Review and Verification Services for contractor management",
  },
]

export function CertificationSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
          >
            <Badge className="mb-4 px-4 py-1 bg-primary/10 text-primary hover:bg-primary/20 border-primary/20">
              Industry Standards
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Professional Certifications</h2>
            <Separator className="mx-auto w-24 mb-6 bg-primary/30" />
            <p className="text-muted-foreground text-lg">
              We maintain the highest industry standards through rigorous training and certification programs, ensuring
              our team delivers exceptional service with the utmost safety and expertise.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CertificationCard({ certification }: { certification: (typeof certifications)[0] }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full border border-border/50 bg-card hover:shadow-md transition-all duration-300 group">
        <CardContent className="p-0">
          <div className="p-6 pb-4 border-b border-border/30 bg-muted/30">
            <div className="relative w-full aspect-[4/3] mx-auto flex items-center justify-center">
              <Image
                src={certification.image || "/placeholder.svg"}
                alt={`${certification.name} logo`}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
              {certification.name}
            </h3>
            <p className="text-sm text-foreground/70">{certification.description}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

