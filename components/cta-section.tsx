'use client'

import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-8">Contact Us Today!</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = 'mailto:services@outkastig.com'}
            >
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
              onClick={() => window.location.href = 'tel:2252788330'}
            >
              <Phone className="mr-2 h-5 w-5" /> Call Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

