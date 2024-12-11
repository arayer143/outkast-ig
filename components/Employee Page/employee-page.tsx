'use client'

import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { User, Clock, Shield } from 'lucide-react'
import React from 'react'

const resources = [
  {
    title: "Employee Portal",
    description: "Access HR information and payroll details",
    url: "https://das.prismhr.com/das/auth/#/login?lang=en",
    icon: User
  },
  {
    title: "Webclock",
    description: "Clock in and out, manage work hours",
    url: "https://clock.payrollservers.us/?wl=deltapeo.payrollservers.us#/clock/web/login",
    icon: Clock
  },
  {
    title: "ISN Login",
    description: "Access safety and compliance information",
    url: "https://www.isnetworld.com/en/login",
    icon: Shield
  }
]

export default function LoginPortals() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24">
              <Image
                src="/outkast-logo.webp"
                alt="TechCorp Logo"
                width={96}
                height={96}
                className="rounded-full bg-primary"
              />
            </div>
          </div>
          <h1 className="text-5xl font-extrabold text-primary mb-4">
            OutKast Industrial Group
          </h1>
          <p className="text-2xl text-muted-foreground">Employee Resources</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card text-card-foreground shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-full">
                      {React.createElement(resource.icon, { size: 24, className: "text-primary-foreground" })}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="default" asChild>
                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                      Access Portal
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
