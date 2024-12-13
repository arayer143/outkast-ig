import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { Droplet, Atom, Search } from 'lucide-react'
import { ShellIcon as OilCanIcon, FlaskConicalIcon, DropletIcon, LeafIcon, FactoryIcon, Zap, BuildingIcon, CheckIcon } from 'lucide-react';

export default function PipelineSystemCleaning() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/assets/img/pipeline-2.webp"
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
                We use high-pressure water jets to remove scale, deposits, and other contaminants from pipeline systems, restoring optimal flow and preventing corrosion.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Atom className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Chemical Cleaning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We apply safe and effective chemical solutions to dissolve deposits and contaminants that mechanical cleaning might miss, ensuring thorough cleaning while minimizing environmental impact.
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

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Process</h3>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 text-left">
              <li>Initial system assessment</li>
              <li>Customized cleaning plan development</li>
              <li>Safety protocol implementation</li>
              <li>Pipeline isolation and preparation</li>
              <li>Cleaning process execution</li>
              <li>Post-cleaning inspection</li>
              <li>System recommissioning</li>
              <li>Documentation and reporting</li>
            </ol>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Industries Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Oil and Gas", icon: <OilCanIcon className="w-8 h-8" /> },
              { name: "Chemical", icon: <FlaskConicalIcon className="w-8 h-8" /> },
              { name: "Water Treatment", icon: <DropletIcon className="w-8 h-8" /> },
              { name: "Food Processing", icon: <LeafIcon className="w-8 h-8" /> },
              { name: "Pharmaceuticals", icon: <FlaskConicalIcon className="w-8 h-8" /> },
              { name: "Manufacturing", icon: <FactoryIcon className="w-8 h-8" /> },
              { name: "Power Generation", icon: <Zap className="w-8 h-8" /> },
              { name: "Municipalities", icon: <BuildingIcon className="w-8 h-8" /> }
            ].map((industry, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center transition-transform hover:scale-105">
                <div className="text-blue-500 dark:text-blue-400 mb-2">{industry.icon}</div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Card className="bg-white dark:bg-gray-800 max-w-3xl w-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100">
                Why Choose Our Pipeline System Cleaning Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  "Experienced and certified cleaning technicians",
                  "State-of-the-art cleaning equipment and technologies",
                  "Customized cleaning solutions for various pipeline types",
                  "Environmentally responsible cleaning methods",
                  "Comprehensive safety protocols and procedures",
                  "Detailed post-cleaning reports and recommendations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
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