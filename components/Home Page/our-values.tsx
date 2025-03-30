"use client"

import React from "react"

import { motion } from "framer-motion"
import { Shield, Star, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function OurValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">What Drives Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Core Values</h3>
            <Separator className="mx-auto w-24 mb-6 bg-primary/30" />
            <p className="text-muted-foreground">
              These principles guide our decisions, shape our culture, and define how we deliver value to our clients
              and community.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <ValueCard
            icon={<Shield />}
            title="Safety"
            description="Ensuring the safety of employees, clients, and the environment is always our top priority."
            color="bg-primary/10 text-primary"
            borderColor="border-primary/70"
          />
          <ValueCard
            icon={<Star />}
            title="Quality"
            description="We pride ourselves on dependability, punctuality, and consistency in service delivery."
            color="bg-primary/10 text-primary"
            borderColor="border-primary/70"
          />
          <ValueCard
            icon={<Globe />}
            title="Environmental Responsibility"
            description="We make extensive efforts to ensure recycling of generated waste to reduce negative impact on the planet."
            color="bg-primary/10 text-primary"
            borderColor="border-primary/70"
          />
        </motion.div>
      </div>
    </section>
  )
}

function ValueCard({
  icon,
  title,
  description,
  color,
  borderColor,
}: {
  icon: React.ReactNode
  title: string
  description: string
  color: string
  borderColor: string
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className={`h-full border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-all duration-300`}>
        <CardHeader className="pb-2">
          <div className={`w-14 h-14 rounded-full ${color} flex items-center justify-center mb-4`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: "h-7 w-7",
            })}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-foreground/70 leading-relaxed">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

