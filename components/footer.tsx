import * as React from "react"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react'
import Image from 'next/image'

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

function ContactButton({ href, icon: Icon, children }: { href: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Button variant="outline" asChild className="flex items-center gap-2">
      <a href={href}>
        <Icon className="h-4 w-4" />
        {children}
      </a>
    </Button>
  )
}

function SocialButton({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <a
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
      aria-label={label}
    >
      <Icon className="h-6 w-6" />
    </a>
  )
}

const navigationItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  {
    title: "Services",
    content: [
      { title: "All Services", href: "/services" },
      { title: "Storage Tank Cleaning", href: "/services/storage-tank-cleaning" },
      { title: "Pipeline System Cleaning", href: "/services/pipeline-system-cleaning" },
      { title: "Vaccum Truck Services", href: "/services/vaccum-truck-services" },
      { title: "Chemical Cleaning", href: "/services/chemical-cleaning" },
      { title: "Hazardous Material Cleaning", href: "/services/hazardous-material-cleaning" },
      { title: "Confined Space Rescue", href: "/services/confined-space-rescue" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Employees", href: "/employees" },
  { title: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 text-center">
          <div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/outkast-logo.webp"
                alt="OutKast Industrial Group Logo"
                width={100}
                height={100}
                className="mb-2 rounded-full"
              />
              <span className="text-xl font-bold">OutKast Industrial Group</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Innovative industrial solutions for a changing world.
            </p>
            <div className="mt-6 flex flex-col items-center space-y-4">
              <div className="flex space-x-4">
                <ContactButton href="tel:2252788330" icon={Phone}>
                  Call Us
                </ContactButton>
                <ContactButton href="mailto:cory_reis@outkastig.com" icon={Mail}>
                  Email Us
                </ContactButton>
              </div>
              <div className="flex justify-center space-x-4">
                <SocialButton href="https://www.facebook.com/outkastig/" icon={Facebook} label="Facebook" />
                <SocialButton href="https://www.linkedin.com/company/outkastig/" icon={Linkedin} label="LinkedIn" />
                <SocialButton href="mailto:cory_reis@outkastig.com" icon={Mail} label="Email" />
                <SocialButton href="tel:2252788330" icon={Phone} label="Phone" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <FooterLinks
              links={navigationItems.filter(item => !item.content)}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-4">Services</h3>
            <FooterLinks
              links={navigationItems.find(item => item.title === "Services")?.content || []}
            />
          </div>
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} OutKast Industrial Group. All rights reserved.
          </div>
          <Button variant="outline" asChild className="flex items-center gap-2">
            <a href="https://www.raydunnsolutions.com/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Website by Ray Dunn Solutions
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ links }: { links: Array<{ href: string; title: string }> }) {
  return (
    <ul className="space-y-2 flex flex-col items-center">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}