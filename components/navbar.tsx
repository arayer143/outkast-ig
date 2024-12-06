"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

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
  { title: "About Us", href: "/about" },
  {
    title: "Services",
    content: [
      { title: "Storage Tank Cleaning", href: "/services/storage-tank-cleaning" },
      { title: "Pipeline System Cleaning", href: "/services/pipeline-system-cleaning" },
      { title: "Vaccum Truck Services", href: "/services/vaccum-truck-services" },
      { title: "Chemical Cleaning", href: "/services/chemical-cleaning" },
      { title: "Hazardous Material Cleaning", href: "/services/hazardous-material-cleaning" },
      { title: "Confined Space Rescue", href: "/services/confined-space-rescue" },
    ],
  },
  { title: "Careers", href: "/careers" },
  { title: "Contact", href: "/contact" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container grid grid-cols-3 h-16 items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <OutKastLogo />
            <span className="hidden font-bold text-lg sm:inline-block">
              OutKast Industrial Group
            </span>
          </Link>
        </div>
        
        <div className="flex justify-center">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="space-x-6">
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.content ? (
                    <>
                      <NavigationMenuTrigger className="text-base font-medium">{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                          {item.content.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="text-base font-medium">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        
        <div className="flex justify-end items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="mr-6"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="pr-0">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <Link href="/" className="mb-4 flex items-center space-x-2">
        <OutKastLogo />
        <span className="font-bold text-lg">OutKast Industrial Group</span>
      </Link>
      {navigationItems.map((item) => (
        <React.Fragment key={item.title}>
          {item.content ? (
            <>
              <div className="font-medium text-base">{item.title}</div>
              {item.content.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className="pl-4 text-base text-muted-foreground hover:text-foreground"
                >
                  {subItem.title}
                </Link>
              ))}
            </>
          ) : (
            <Link
              href={item.href}
              className="text-base font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.title}
            </Link>
          )}
        </React.Fragment>
      ))}
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
