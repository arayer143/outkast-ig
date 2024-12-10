import { ContactSection } from '@/components/contact-form'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Outkast Industrial Group',
  description: 'Get in touch with Outkast Industrial Group for all your industrial needs. We\'re here to help and answer any questions you may have.',
  openGraph: {
    title: 'Contact Outkast Industrial Group',
    description: 'Reach out to us for industrial solutions and support.',
    type: 'website',
    url: 'https://www.outkastindustrial.com/contact',
    siteName: 'Outkast Industrial Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Outkast Industrial Group',
    description: 'Get in touch with us for all your industrial needs.',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

