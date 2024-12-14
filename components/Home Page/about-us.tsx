'use client'

import { motion } from 'framer-motion'
import { Facebook, Linkedin, Mail, Phone, Target, Eye } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function AboutUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About OutKast Industrial Group
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/employee.webp"
              alt="OutKast Industrial Group Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <div className="space-y-8">
            <InfoCard
              icon={<Target className="h-8 w-8" />}
              title="Our Mission"
              description="To offer turnkey solutions of decontamination processes for above ground storage tanks, pipeline systems, and process units."
            />
            <InfoCard
              icon={<Eye className="h-8 w-8" />}
              title="Our Vision"
              description="To accelerate the industry in innovation, affordability, and green solutions."
            />
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <SocialButton href="https://www.facebook.com/outkastig/" icon={<Facebook />} label="Facebook" />
                <SocialButton href="https://www.linkedin.com/company/outkastig/" icon={<Linkedin />} label="LinkedIn" />
                <SocialButton href="mailto:services@outkastig.com" icon={<Mail />} label="Email" />
                <SocialButton href="tel:2252788330" icon={<Phone />} label="Phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
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

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" asChild>
            <a href={href} aria-label={label}>
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
