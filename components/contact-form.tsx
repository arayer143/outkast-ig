"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Mail, Phone, Facebook, Linkedin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const services = [
  { value: "storage-tank-cleaning", label: "Storage Tank Cleaning" },
  { value: "pipeline-system-cleaning", label: "Pipeline System Cleaning" },
  { value: "vaccum-truck-services", label: "Vaccum Truck Services" },
  { value: "chemical-cleaning", label: "Chemical Cleaning" },
  { value: "hazardous-material-cleaning", label: "Hazardous Material Cleaning" },
  { value: "confined-space-rescue", label: "Confined Space Rescue" },
]

const formatPhoneNumber = (value: string) => {
  if (!value) return value
  const phoneNumber = value.replace(/[^\d]/g, "")
  const phoneNumberLength = phoneNumber.length
  if (phoneNumberLength < 4) return phoneNumber
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
}

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value)
    setPhoneNumber(formattedPhoneNumber)
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    if (!formRef.current) return

    const form = formRef.current
    const formData = new FormData(form)

    try {
      const response = await fetch("/api/submit-contact", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        form.reset()
        setPhoneNumber("")
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as
                possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <motion.form
                ref={formRef}
                onSubmit={onSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Your Email" required />
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={phoneNumber}
                  onChange={handlePhoneChange}
                  required
                />
                <Input name="company" placeholder="Company Name" required />
                <Select name="service" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.value} value={service.value}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Textarea name="message" placeholder="Your Message" required />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </motion.form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-4 mt-6">
                  <Button asChild className="flex-1">
                    <a href="tel:2252788330">
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="mailto:services@outkastig.comv">
                      <Mail className="mr-2 h-4 w-4" /> Email Us
                    </a>
                  </Button>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button asChild variant="outline" size="icon">
                    <a
                      href="https://facebook.com/outkastig"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a
                      href="https://linkedin.com/company/outkastig"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

