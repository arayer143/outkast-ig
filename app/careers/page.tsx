import { Metadata } from 'next'

import { ApplicationForm } from '@/components/application-form'

import { CTASection } from '@/components/cta-section'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'


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

          <ApplicationForm />
          <CTASection />
        </section>
      </main>
      <Footer />
    </>
  )
}
