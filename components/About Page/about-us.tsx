"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Facebook, Linkedin, Mail, Phone, Award, CheckSquare, Cone, ClipboardList } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState("quality")

  const companyValues = [
    { id: "quality", icon: ClipboardList, title: 'Quality', description: 'We strive for excellence in all our services, ensuring that every project meets the highest standards of performance and reliability.' },
    { id: "safety", icon: CheckSquare, title: 'Safety', description: 'The well-being of our team and clients is our top priority. We maintain rigorous safety protocols in all our operations.' },
    { id: "integrity", icon: Cone, title: 'Integrity', description: 'We conduct our business with honesty and transparency, building trust with our clients and partners through ethical practices.' },
    { id: "innovation", icon: Award, title: 'Innovation', description: 'We continuously seek new and improved solutions, staying at the forefront of industrial decontamination technology and methodologies.' },
  ]

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-br from-background via-background to-primary/10">
      <div className="container px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center space-y-8 text-center mb-16"
        >
          <div className="w-40 h-40 md:w-56 md:h-56 relative">
            <Image
              src="/outkast-logo.webp"
              alt="OutKast Industrial Group Logo"
              layout="fill"
              objectFit="contain"
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              About OutKast Industrial Group
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Family owned and operated, specializing in industrial decontamination
            </p>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <Card className="backdrop-blur-sm bg-card/50 overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground mb-6">
                OutKast Industrial Group specializes in above ground storage tanks (ASTs), pipeline systems, and process units. We also provide emergency response for chemical spills and fixed-facility system releases.
              </p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Learn More About Our Services</AccordionTrigger>
                  <AccordionContent>
                    Our experienced crews are capable of handling a wide range of hazardous chemicals, ensuring safe and efficient decontamination processes. We pride ourselves on our ability to tackle complex industrial cleaning challenges with expertise and precision.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-card/50 overflow-hidden">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At OutKast Industrial Group, our mission is to offer turnkey solutions for decontamination processes in above ground storage tanks, pipeline systems, and process units.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Contact Us Today!</h3>
                <div className="flex space-x-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.facebook.com/outkastig/" aria-label="Visit Outkast Industrial Group's Facebook">
                      <Facebook className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/company/outkastig/" aria-label="Visit Outkast Industrial Group's LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="mailto:cory_reis@outkastig.com" aria-label="Send email to Outkast Industrial Group">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="tel:2252788330" aria-label="Call Outkast Industrial Group">
                      <Phone className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-center mb-8">Our Company Values</h2>
          <Tabs value={activeValue} onValueChange={setActiveValue} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
              {companyValues.map((value) => (
                <TabsTrigger key={value.id} value={value.id} className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <value.icon className="h-5 w-5 mr-2" />
                  {value.title}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="mt-6 h-[200px] rounded-lg bg-card p-6 backdrop-blur-sm bg-card/50">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeValue}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  {companyValues.map((value) => (
                    <TabsContent key={value.id} value={value.id} className="mt-0">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <value.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{value.title}</h3>
                          <p className="text-muted-foreground mt-2">{value.description}</p>
                        </div>
                      </div>
                    </TabsContent>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

