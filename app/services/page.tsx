import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Banner } from '@/components/Services Pages/banner'
import { Metadata } from 'next'

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

        {/* Add more detailed information about the Outkast service here */}
      </main>
      <Footer />
    </>
  )
}
