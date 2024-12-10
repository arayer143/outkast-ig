import { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { ApplicationForm } from '@/components/application-form'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Apply to Join Our Team | Outkastig',
  description: 'Join our team of industrial cleaning and safety specialists. Apply now for exciting career opportunities.',
}

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">

          <ApplicationForm />
        </section>
      </main>
      <Footer />
    </>
  )
}
