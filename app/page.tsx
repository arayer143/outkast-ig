import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/Home Page/hero-slideshow"
import { AboutUs } from "@/components/Home Page/about-us"
import { OurValues } from "@/components/Home Page/our-values"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlideshow />

        <AboutUs />

        <OurValues />

        
      </main>
      <Footer />
    </>
  )
}

