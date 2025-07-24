"use client"




import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

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

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [activeItem, setActiveItem] = React.useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-950/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-950/80 shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3 transition-opacity hover:opacity-90">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
              <Image
                src="/outkast-logo.webp"
                alt="OutKast Industrial Group Logo"
                fill
                className="object-cover"
              />
            </div>
            <span className="hidden font-semibold text-xl tracking-tight text-slate-900 dark:text-white lg:inline-block">
              <span className="text-primary">OutKast</span> Industrial Group
            </span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-1">
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.content ? (
                  <>
                    <NavigationMenuTrigger 
                      className="text-base font-medium px-4 py-2 transition-colors text-slate-700 dark:text-slate-200"
                    >
                      {item.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[500px] p-4 md:grid-cols-2 bg-white dark:bg-slate-900 border dark:border-slate-800">
                        <div className="grid gap-1">
                          {item.content.map((subItem) => (
                            <NavigationMenuLink asChild key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="block select-none rounded-md p-3 text-sm leading-none no-underline outline-none transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-slate-100 focus:bg-slate-100 dark:focus:bg-slate-800 focus:text-slate-900 dark:focus:text-slate-100"
                              >
                                <div className="font-medium text-slate-900 dark:text-slate-100">{subItem.title}</div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link 
                    href={item.href} 
                    className={cn(
                      "inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-base font-medium transition-colors",
                      "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            className="rounded-full text-slate-700 dark:text-slate-200"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-slate-700 dark:text-slate-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm md:hidden">
          <nav className="container flex flex-col space-y-1 p-6 animate-in fade-in duration-200">
            {navigationItems.map((item) => (
              <div key={item.title} className="border-b border-slate-200 dark:border-slate-800/60 py-2 last:border-0">
                {item.content ? (
                  <>
                    <button
                      onClick={() => setActiveItem(activeItem === item.title ? null : item.title)}
                      className="flex w-full items-center justify-between rounded-md py-2 text-left text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                    >
                      {item.title}
                      <ChevronDown 
                        className={cn(
                          "h-4 w-4 text-slate-500 dark:text-slate-400 transition-transform duration-200",
                          activeItem === item.title && "rotate-180"
                        )} 
                      />
                    </button>
                    {activeItem === item.title && (
                      <div className="mt-2 space-y-1 pl-4">
                        {item.content.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            className="block rounded-md py-2 pl-2 text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-md py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
