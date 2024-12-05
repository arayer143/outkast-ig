"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from 'lucide-react'


import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,

} from "@/components/ui/navigation-menu"

const navigationItems = [
  { title: "Home", href: "/" },
  {
    title: "About",
    content: [
      { title: "Our Story", href: "/about/story", description: "Learn about our journey and values" },
      { title: "Team", href: "/about/team", description: "Meet the people behind OutKast Industrial" },
      { title: "Careers", href: "/about/careers", description: "Join our innovative team" },
    ],
  },
  {
    title: "Services",
    content: [
      { title: "Manufacturing", href: "/services/manufacturing", description: "Cutting-edge manufacturing solutions" },
      { title: "Engineering", href: "/services/engineering", description: "Expert engineering services" },
      { title: "Consulting", href: "/services/consulting", description: "Strategic industrial consulting" },
      { title: "Maintenance", href: "/services/maintenance", description: "Reliable maintenance services" },
    ],
  },
  { title: "Projects", href: "/projects" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <OutKastLogo />
            <span className="hidden font-bold sm:inline-block">
              OutKast Industrial Group
            </span>
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.content ? (
                    <>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          {item.content.map((subItem) => (
                            <li key={subItem.title} className="row-span-3">
                              <NavigationMenuLink asChild>
                                <a
                                  className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                  href={subItem.href}
                                >
                                  <div className="mb-2 mt-4 text-lg font-medium">
                                    {subItem.title}
                                  </div>
                                  <p className="text-sm leading-tight text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink> {/* Updated NavigationMenuLink */}
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button className="hidden md:inline-flex">Contact Us</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-3 p-4">
      <Link href="/" className="mb-4 flex items-center space-x-2">
        <OutKastLogo />
        <span className="font-bold">OutKast Industrial Group</span>
      </Link>
      {navigationItems.map((item) => (
        <React.Fragment key={item.title}>
          {item.content ? (
            <>
              <div className="font-medium">{item.title}</div>
              {item.content.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className="pl-4 text-sm text-muted-foreground"
                >
                  {subItem.title}
                </Link>
              ))}
            </>
          ) : (
            <Link
              href={item.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          )}
        </React.Fragment>
      ))}
      <Button className="mt-4">Contact Us</Button>
    </div>
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
      className="h-6 w-6"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  )
}