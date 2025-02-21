import { Metadata } from 'next'



import { CTASection } from '@/components/cta-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import CareersPage from '@/components/Careers Page/careers-page'


export const metadata: Metadata = {
  title: 'About Us | Outkastig',
  description: 'Learn more about our company goals and values.',
}

export default function ApplyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
<CareersPage />
   
          <CTASection />
        </section>
      </main>
      <Footer />
    </>
  )
}
