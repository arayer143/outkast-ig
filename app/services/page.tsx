import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Banner } from '@/components/Services Pages/banner'
import { Metadata } from 'next'
import AllServicesPage from '@/components/Services Pages/all-services'

export const metadata: Metadata = {
  // Metadata for the specific Outkast service page
  title: 'Outkast Service | Outkast Industrial Group',
  description: 'Learn about our specialized Outkast industrial service and how it can benefit your operations',
}

export default function OutkastServicePage() {
  return (
    <>
      <Navbar />

     
      <Banner 
        title="Services Page" 
        imageSrc="/hero-carousel/outkast-banner-3.webp"
      />

      <main className="container mx-auto px-4 py-8">

   <AllServicesPage />
      </main>
      <Footer />
    </>
  )
}
