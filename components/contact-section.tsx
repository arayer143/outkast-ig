'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import emailjs from '@emailjs/browser'

const services = [
  { value: "storage-tank-cleaning", label: "Storage Tank Cleaning" },
  { value: "pipeline-system-cleaning", label: "Pipeline System Cleaning" },
  { value: "vaccum-truck-services", label: "Vaccum Truck Services" },
  { value: "chemical-cleaning", label: "Chemical Cleaning" },
  { value: "hazardous-material-cleaning", label: "Hazardous Material Cleaning" },
  { value: "confined-space-rescue", label: "Confined Space Rescue" },
]

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const form = event.currentTarget;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )

      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      })
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
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
              <CardDescription>We&apos;d love to hear from you. Fill out the form below and we&apos;ll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <motion.form
                onSubmit={onSubmit}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Input name="user_name" placeholder="Your Name" required />
                <Input name="user_email" type="email" placeholder="Your Email" required />
                <Input name="phone" type="tel" placeholder="Your Phone Number" required />
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
                    'Send Message'
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
                <div className="flex items-center space-x-2">
                  <Mail className="text-primary" />
                  <span>info@outkastig.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="text-primary" />
                  <span>(225) 278-8330</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="text-primary" />
                  <span>123 Industrial Way, Baton Rouge, LA 70123</span>
                </div>
                <div className="flex space-x-4 mt-6">
                  <Button asChild className="flex-1">
                    <a href="tel:2252788330">
                      <Phone className="mr-2 h-4 w-4" /> Call Us
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <a href="mailto:info@outkastig.com">
                      <Mail className="mr-2 h-4 w-4" /> Email Us
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="icon">
                    <a href="https://facebook.com/outkastig" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://linkedin.com/company/outkastig" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <ExternalLink className="h-4 w-4" />
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

