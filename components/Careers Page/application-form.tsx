'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Upload } from 'lucide-react'

export function ApplicationForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [fileName, setFileName] = useState('')
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB in bytes
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 10MB.",
          variant: "destructive",
        })
        event.target.value = '' // Clear the file input
        setFileName('')
      } else {
        setFileName(file.name)
      }
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    if (!formRef.current) return

    const form = formRef.current
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/submit-application', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        toast({
          title: "Application submitted successfully!",
          description: result.message || "We'll review your application and get back to you soon.",
        })
        form.reset()
        setFileName('')
      } else {
        throw new Error(result.error || 'Failed to send application')
      }
    } catch (error) {
      console.error('Error sending application:', error)
      toast({
        title: "Something went wrong.",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full p-5 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Apply to Join Our Team</CardTitle>
        <CardDescription>Fill out the form below to submit your application. We&apos;ll review it and get back to you soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <motion.form
          ref={formRef}
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          encType="multipart/form-data"
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
            <Label htmlFor="resume">Upload Resume (Max 10MB)</Label>
            <div className="flex items-center space-x-2">
              <Input 
                id="resume" 
                name="resume" 
                type="file" 
                className="hidden" 
                onChange={handleFileChange} 
                accept=".pdf,.doc,.docx" 
                required 
              />
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