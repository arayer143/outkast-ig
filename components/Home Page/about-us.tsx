"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Facebook, Linkedin, Mail, Phone, Target, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Separator } from "@/components/ui/separator"

export function AboutUs() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center max-w-3xl"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Our Company</h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              About OutKast Industrial Group
            </h1>
            <Separator className="mx-auto w-24 mb-6 bg-primary/30" />
            <p className="text-muted-foreground text-lg">
              Providing innovative industrial solutions with a commitment to safety, quality, and environmental
              responsibility.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/employee.webp"
                alt="OutKast Industrial Group Team"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg hidden md:block">
              <p className="text-xl font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </motion.div>

          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mb-6">Excellence in Industrial Services</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                OutKast Industrial Group specializes in providing comprehensive industrial cleaning and maintenance
                solutions. Our team of highly trained professionals is committed to delivering exceptional service while
                maintaining the highest standards of safety and environmental responsibility.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <InfoCard
                  icon={<Target className="h-6 w-6 text-primary" />}
                  title="Our Mission"
                  description="To offer turnkey solutions of decontamination processes for above ground storage tanks, pipeline systems, and process units."
                  delay={0.2}
                />
                <InfoCard
                  icon={<Eye className="h-6 w-6 text-primary" />}
                  title="Our Vision"
                  description="To accelerate the industry in innovation, affordability, and green solutions."
                  delay={0.3}
                />
              </div>

              <div className="mt-10">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-3">
                  <SocialButton
                    href="https://www.facebook.com/outkastig/"
                    icon={<Facebook size={18} />}
                    label="Facebook"
                  />
                  <SocialButton
                    href="https://www.linkedin.com/company/outkastig/"
                    icon={<Linkedin size={18} />}
                    label="LinkedIn"
                  />
                  <SocialButton href="mailto:services@outkastig.com" icon={<Mail size={18} />} label="Email" />
                  <SocialButton href="tel:2252788330" icon={<Phone size={18} />} label="Phone" />
                </div>
              </div>

              <div className="mt-8">
                <Button className="group" size="lg">
                  Learn More About Our Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full border-t-4 border-t-primary shadow-sm hover:shadow-md transition-shadow">
        <CardHeader className="pb-2">
          <div className="mb-2">{icon}</div>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-foreground/70">{description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full border-muted-foreground/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <a href={href} aria-label={label} className="flex items-center justify-center">
              {icon}
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

