import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Sun, CheckIcon, ShellIcon as OilCanIcon, LucideBiohazard } from 'lucide-react'

export default function HazardousMaterialCleaning() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/assets/img/Response_to_Leaking_Railcar_Valve.webp"
              alt="Response to Leaking Railcar Valve"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Hazardous Material Cleaning</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Outkast Industrial Group, we understand the critical importance of safely managing hazardous materials. Our comprehensive Hazardous Materials Handling and Disposal Services are designed to protect your employees, the public, and the environment. We ensure that all hazardous materials are handled, transported, and disposed of in compliance with stringent regulations.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <AlertTriangle className="w-6 h-6 mr-2 text-yellow-500 dark:text-yellow-400" />
                Hazardous Waste Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We provide end-to-end hazardous waste management services, including identification, collection, transportation, and disposal of hazardous materials. Our team ensures that all processes comply with local, state, and federal regulations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500 dark:text-green-400" />
                Emergency Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Our trained professionals are ready to respond to hazardous material spills and incidents. We use advanced containment and cleanup techniques to mitigate risks and minimize environmental impact.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <LucideBiohazard className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Chemical Handling
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Safe handling of hazardous chemicals is crucial for maintaining a safe workplace. We offer specialized services for the safe storage, handling, and transport of hazardous chemicals, ensuring compliance with safety standards.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Sun className="w-6 h-6 mr-2 text-orange-500 dark:text-orange-400" />
                Hazardous Waste Disposal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We ensure the safe and compliant disposal of hazardous waste through methods such as incineration, chemical treatment, and secure landfill. Our disposal methods are environmentally responsible and adhere to all regulatory requirements.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Process</h3>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 text-left">
              <li>Initial hazard assessment</li>
              <li>Development of a tailored handling plan</li>
              <li>Implementation of safety protocols</li>
              <li>Secure containment and packaging</li>
              <li>Safe transportation to disposal facility</li>
              <li>Proper disposal or treatment</li>
              <li>Decontamination of affected areas</li>
              <li>Comprehensive documentation and reporting</li>
            </ol>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Industries Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Chemical Manufacturing", icon: <LucideBiohazard className="w-8 h-8" /> },
              { name: "Oil and Gas", icon: <OilCanIcon className="w-8 h-8" /> },
             

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
                Why Choose Our Hazardous Material Cleaning Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  "Experienced and certified hazardous materials specialists",
                  "State-of-the-art equipment and technologies",
                  "Strict adherence to safety protocols and regulations",
                  "24/7 emergency response capabilities",
                  "Comprehensive documentation and reporting",
                  "Environmentally responsible disposal methods"
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
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Need Expert Hazardous Material Handling?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today to discuss your hazardous material cleaning and disposal needs. Our team of experts is ready to provide you with safe, compliant, and efficient solutions.</p>
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

