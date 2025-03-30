"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Mail, Phone, ArrowUpRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-slate-100 dark:bg-background/80 border-y border-border/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            {/* Left side - Heading */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:w-1/3"
            >
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">Get in touch</h2>
              <div className="h-px w-12 bg-primary mt-4 mb-4 md:mb-0"></div>
            </motion.div>

            {/* Right side - Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
            >
              <ContactButton
                icon={<Phone className="h-5 w-5" />}
                method="Call"
                value="(225) 278-8330"
                href="tel:2252788330"
              />

              <ContactButton
                icon={<Mail className="h-5 w-5" />}
                method="Email"
                value="services@outkastig.com"
                href="mailto:services@outkastig.com"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactButton({
  icon,
  method,
  value,
  href,
}: {
  icon: React.ReactNode
  method: string
  value: string
  href: string
}) {
  return (
    <a
      href={href}
      className="group block p-5 border border-border rounded-lg hover:border-primary transition-colors duration-300 relative bg-white dark:bg-card shadow-sm hover:shadow-md"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center">
          <div className="mr-3 text-primary/70 group-hover:text-primary transition-colors duration-300">{icon}</div>
          <span className="text-sm font-medium text-foreground/60 uppercase tracking-wider">{method}</span>
        </div>
        <ArrowUpRight className="h-4 w-4 text-foreground/40 group-hover:text-primary transition-colors duration-300" />
      </div>

      <span className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{value}</span>

      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-colors duration-300 pointer-events-none"></div>
    </a>
  )
}

