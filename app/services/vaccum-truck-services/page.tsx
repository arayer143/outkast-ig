import { Navbar as Navbar } from '@/components/navbar'
import { Footer as Footer } from '@/components/footer'
import { Banner } from '@/components/Services Pages/banner'
import { Metadata } from 'next'
import VacuumTruckServices from '@/components/Services Pages/vaccum-truck-services'

export const metadata: Metadata = {
  title: 'Outkast Service | Outkast Industrial Group',
  description: 'Learn about our specialized Outkast industrial service and how it can benefit your operations',
}

export default function OutkastServicePage() {
  return (
    <>
      <Navbar />

      <Banner 
        title="Vaccum Truck Services" 
        imageSrc="/container-cleaning.webp"
      />


      <main className="container mx-auto px-4 py-8">
        <VacuumTruckServices />
      </main>
      <Footer />
    </>
  )
}

