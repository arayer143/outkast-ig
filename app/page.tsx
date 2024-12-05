import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSlideshow } from "@/components/Home Page/hero-slideshow"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlideshow />
      </main>
      <Footer />
    </>
  )
}

