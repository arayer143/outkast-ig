import { Navbar as Navbar } from '@/components/navbar'
import { Footer as Footer } from '@/components/footer'
import { Banner } from '@/components/Services Pages/banner'
import { Metadata } from 'next'
import PipelineSystemCleaning from '@/components/Services Pages/pipeline-system-cleaning'

export const metadata: Metadata = {
  title: 'Outkast Service | Outkast Industrial Group',
  description: 'Learn about our specialized Outkast industrial service and how it can benefit your operations',
}

export default function OutkastServicePage() {
  return (
    <>
      <Navbar />

      <Banner 
        title="Pipeline System Cleaning" 
        imageSrc="/pipeline-2.webp"
      />

      <main className="container mx-auto px-4 py-8">
      <PipelineSystemCleaning />
      </main>
      <Footer />
    </>
  )
}

