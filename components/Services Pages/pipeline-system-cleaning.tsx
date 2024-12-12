import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { Droplet, Atom, Search } from 'lucide-react'

export default function PipelineSystemCleaning() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/outkast-banner.webp"
              alt="Pipeline System"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Pipeline System Cleaning</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ensuring the cleanliness and integrity of your pipeline systems is crucial for maintaining optimal performance and preventing costly downtime. At Outkast Industrial Group, we offer specialized pipeline system cleaning services designed to meet the needs of various industries.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Droplet className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Hydro Blasting
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                For pipelines transporting organic materials, we use biodegradable cleaning agents that break down organic deposits without harming the environment or the integrity of the pipeline.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Atom className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Biological Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We apply safe and effective chemical solutions to dissolve deposits and contaminants that mechanical cleaning might miss. Our chemical cleaning processes are designed to be thorough while minimizing any potential impact on the environment.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Search className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Inspection and Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                After cleaning, we conduct detailed inspections using advanced techniques to ensure the pipeline is free from defects and fully operational.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Benefits of Our Pipeline System Cleaning</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {[
              "Improved flow efficiency",
              "Extended pipeline lifespan",
              "Reduced risk of contamination",
              "Minimized downtime for maintenance",
              "Compliance with industry regulations",
              "Cost-effective preventive maintenance"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ready to Optimize Your Pipeline System?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today to discuss your pipeline cleaning needs. Our team of experts is ready to provide you with a tailored solution for your industry.</p>
          <Link href="/contact" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
              Request a Consultation
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
