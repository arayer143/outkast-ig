import * as React from "react"
import Link from "next/link"
import { Phone, Mail } from 'lucide-react'

import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button";

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

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex items-center">
              <OutKastLogo />
              <span className="ml-2 text-xl font-bold">OutKast Industrial Group</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Innovative industrial solutions for a changing world.
            </p>
            <div className="mt-6 flex flex-col space-y-4">
              <ContactButton href="tel:+11234567890" icon={Phone}>
                Call Us
              </ContactButton>
              <ContactButton href="mailto:info@outkastindustrial.com" icon={Mail}>
                Email Us
              </ContactButton>
              <div className="flex space-x-4">
                <SocialIcon href="#" icon="facebook" />
                <SocialIcon href="#" icon="twitter" />
                <SocialIcon href="#" icon="instagram" />
                <SocialIcon href="#" icon="linkedin" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="text-sm font-semibold">Company</h3>
              <FooterLinks
                links={[
                  { href: "/about", label: "About" },
                  { href: "/team", label: "Our Team" },
                  { href: "/careers", label: "Careers" },
                  { href: "/contact", label: "Contact" },
                ]}
              />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Services</h3>
              <FooterLinks
                links={[
                  { href: "/services/manufacturing", label: "Manufacturing" },
                  { href: "/services/engineering", label: "Engineering" },
                  { href: "/services/consulting", label: "Consulting" },
                  { href: "/services/maintenance", label: "Maintenance" },
                ]}
              />
            </div>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} OutKast Industrial Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterLinks({ links }: { links: Array<{ href: string; label: string }> }) {
  return (
    <ul className="mt-4 space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
  return (
    <a
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      <span className="sr-only">{icon}</span>
      <svg
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  )
}

function OutKastLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
}

