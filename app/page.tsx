
import { HeroSlideshow } from "@/components/Home Page/hero-slideshow"
import { AboutUs } from "@/components/Home Page/about-us"
import { OurValues } from "@/components/Home Page/our-values"
import { ServicesSection } from "@/components/Home Page/our-services"
import { CertificationSection } from "@/components/Home Page/certifications"
import { CTASection } from "@/components/cta-section"
import { WhyChooseUsSection } from "@/components/Home Page/why-choose-us"
import { ContactSection } from "@/components/contact-form"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"


export default function Home() {
  return (
    <>
 <Navbar />
      <main>
        <HeroSlideshow />

        <AboutUs />

        <OurValues />

        <ServicesSection />

        <CertificationSection />

        <CTASection />

        <WhyChooseUsSection />

        <ContactSection />


      
      </main>
      <Footer />
    </>
  )
}

