import type * as React from "react"
import Link from "next/link"
import { Facebook, Linkedin, Mail, Phone, ExternalLink, MapPin, ChevronRight } from "lucide-react"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

function ContactButton({
  href,
  icon: Icon,
  children,
}: { href: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <Button
      variant="outline"
      asChild
      className="flex items-center gap-2 border-primary/20 bg-white/80 dark:bg-midnight-800/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm"
    >
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
      className="p-3 rounded-full bg-white dark:bg-midnight-800 shadow-md text-primary hover:bg-primary hover:text-white transform hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
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
    <footer className="relative bg-slate-100 dark:bg-midnight-900 border-t border-border/30">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-primary/30 to-primary/80"></div>

      {/* Main content */}
      <div className="container px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start lg:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-primary/30 shadow-lg mb-6 bg-white dark:bg-midnight-800">
                <Image src="/outkast-logo.webp" alt="OutKast Industrial Group Logo" fill className="object-cover" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight mb-3">
                <span className="text-primary">OutKast</span> Industrial Group
              </h2>
              <p className="text-sm text-foreground/70 dark:text-slate-300/90 max-w-xs text-center md:text-left leading-relaxed">
                Providing innovative industrial solutions with a commitment to safety, quality, and environmental
                responsibility.
              </p>
            </div>

            <div className="mt-8 flex flex-col space-y-5 w-full">
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm text-foreground/80 dark:text-slate-300/90 group-hover:text-primary dark:group-hover:text-primary transition-colors">
                  Baton Rouge, LA
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <a
                  href="tel:2252788330"
                  className="text-sm text-foreground/80 dark:text-slate-300/90 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                >
                  (225) 278-8330
                </a>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-2 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <a
                  href="mailto:services@outkastig.com"
                  className="text-sm text-foreground/80 dark:text-slate-300/90 group-hover:text-primary dark:group-hover:text-primary transition-colors"
                >
                  services@outkastig.com
                </a>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <SocialButton href="https://www.facebook.com/outkastig/" icon={Facebook} label="Facebook" />
              <SocialButton href="https://www.linkedin.com/company/outkastig/" icon={Linkedin} label="LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8 lg:pl-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white mb-8 text-center md:text-left relative">
              <span className="relative z-10">Quick Links</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary/30 hidden md:block"></span>
            </h3>
            <FooterLinks links={navigationItems.filter((item) => !item.content)} />
          </div>

          {/* Services */}
          <div className="md:pl-8 lg:pl-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white mb-8 text-center md:text-left relative">
              <span className="relative z-10">Our Services</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary/30 hidden md:block"></span>
            </h3>
            <FooterLinks links={navigationItems.find((item) => item.title === "Services")?.content || []} />
          </div>

          {/* Contact */}
          <div className="md:pl-8 lg:pl-16">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary dark:text-white mb-8 text-center md:text-left relative">
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-primary/30 hidden md:block"></span>
            </h3>
            <div className="flex flex-col space-y-6 items-center md:items-start">
              <p className="text-sm text-foreground/70 dark:text-slate-300/90 max-w-xs text-center md:text-left leading-relaxed">
                Have questions or need a quote? Contact us today for professional industrial services.
              </p>
              <div className="flex flex-col space-y-3 w-full">
                <ContactButton href="tel:2252788330" icon={Phone}>
                  Call Us
                </ContactButton>
                <ContactButton href="mailto:services@outkastig.com" icon={Mail}>
                  Email Us
                </ContactButton>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-border/50" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          <div className="text-sm text-foreground/60 dark:text-slate-400">
            © {new Date().getFullYear()} OutKast Industrial Group. All rights reserved.
          </div>
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="group flex items-center gap-2 text-xs px-4 py-2 rounded-full border border-border/30 dark:border-slate-700/50 text-foreground/70 dark:text-slate-400 hover:border-primary/30 dark:hover:border-primary/30 hover:bg-white/80 dark:hover:bg-midnight-800/80 transition-all duration-300"
          >
            <a
              href="https://www.raydunnsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <span className="mr-1.5">Website by</span>
              <span className="font-semibold text-primary/40 dark:text-primary/100 group-hover:text-primary transition-colors">
                RayDunn Solutions
              </span>
              <div className="ml-1.5 p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <ExternalLink className="h-3 w-3 text-primary" />
              </div>
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ links }: { links: Array<{ href: string; title: string }> }) {
  return (
    <ul className="space-y-4 flex flex-col items-center md:items-start">
      {links.map((link) => (
        <li key={link.href} className="group">
          <Link
            href={link.href}
            className="text-sm text-foreground/70 dark:text-slate-300/90 transition-colors hover:text-primary dark:hover:text-primary flex items-center"
          >
            <ChevronRight className="h-3 w-3 mr-1 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-primary" />
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

