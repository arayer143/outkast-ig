import { Navbar as Navbar } from '@/components/navbar'
import { Footer as Footer } from '@/components/footer'
import { Banner } from '@/components/Services Pages/banner'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Outkast Service | Outkast Industrial Group',
  description: 'Learn about our specialized Outkast industrial service and how it can benefit your operations',
}

export default function OutkastServicePage() {
  return (
    <>
      <Navbar />
      <Banner 
        title="Hazardous Material " 
        imageSrc="/outkast-banner.webp"
      />
      <main className="container mx-auto px-4 py-8">
        {/* Main content area is now blank for you to import your information */}
      </main>
      <Footer />
    </>
  )
}

