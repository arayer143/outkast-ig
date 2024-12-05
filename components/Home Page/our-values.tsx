'use client'

import { motion } from 'framer-motion'
import { Shield, Star, Globe } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function OurValues() {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-semibold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard
            icon={<Shield className="h-8 w-8" />}
            title="Safety"
            description="Ensuring the safety of employees, clients, and the environment is always our top priority."
          />
          <ValueCard
            icon={<Star className="h-8 w-8" />}
            title="Quality"
            description="We pride ourselves on dependability, punctuality, and consistency in service delivery."
          />
          <ValueCard
            icon={<Globe className="h-8 w-8" />}
            title="Environmental Responsibility"
            description="We make extensive efforts to ensure recycling of generated waste to reduce negative impact on the planet."
          />
        </div>
      </div>
    </section>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {icon}
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}