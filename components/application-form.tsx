'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Upload } from 'lucide-react'
import emailjs from '@emailjs/browser'

export function ApplicationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState('')
  const { toast } = useToast()

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    try {
      const form = event.currentTarget;
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_APPLICATION!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_APPLICATION!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_APPLICATION!
      )

      toast({
        title: "Application submitted!",
        description: "We'll review your application and get back to you soon.",
      })
      form.reset()
      setFileName('')
    } catch (error) {
      console.error('Error sending application:', error)
      toast({
        title: "Something went wrong.",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply to Join Our Team</CardTitle>
        <CardDescription>Fill out the form below to submit your application. We&apos;ll review it and get back to you soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.form
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="(123) 456-7890" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="position">Position Applied For</Label>
            <Input id="position" name="position" placeholder="e.g. Tank Cleaner, Safety Specialist" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="experience">Years of Experience</Label>
            <Input id="experience" name="experience" type="number" min="0" placeholder="5" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Why do you want to join our team?</Label>
            <Textarea id="message" name="message" placeholder="Tell us about your motivation and qualifications..." required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume</Label>
            <div className="flex items-center space-x-2">
              <Input id="resume" name="resume" type="file" className="hidden" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
              <Button type="button" variant="outline" onClick={() => document.getElementById('resume')?.click()}>
                <Upload className="w-4 h-4 mr-2" />
                Choose File
              </Button>
              <span className="text-sm text-gray-500">{fileName || 'No file chosen'}</span>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </Button>
        </motion.form>
      </CardContent>
    </Card>
  )
}
