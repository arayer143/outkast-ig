import { Metadata } from 'next'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import  LoginPortals  from '@/components/Employee Page/employee-page'


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

     <LoginPortals />
        </section>
      </main>
      <Footer />
    </>
  )
}
