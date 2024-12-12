import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { BiohazardIcon, CheckCircleIcon, DropletIcon, AlertTriangleIcon, CheckIcon, BuildingIcon, FactoryIcon, TruckIcon, ShellIcon as OilCanIcon, FlaskConicalIcon, LeafIcon, ConstructionIcon, WrenchIcon } from 'lucide-react'
import Link from 'next/link'

export default function VacuumTruckServices() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/vac_truck_2.webp"
              alt="Vacuum Truck in Operation"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Vacuum Truck Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Outkast Industrial Group, we offer comprehensive vacuum truck services designed to handle a wide range of industrial cleaning and waste management needs. Our fleet of modern vacuum trucks and highly skilled operators are equipped to tackle even the most challenging tasks, ensuring your facilities remain clean, safe, and compliant with all regulations.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <BiohazardIcon className="w-6 h-6" />,
              title: "Liquid Waste Removal",
              description: "Our vacuum trucks are capable of efficiently removing various types of liquid waste, including hazardous and non-hazardous liquids, sludge, and slurry. We ensure proper disposal according to environmental regulations."
            },
            {
              icon: <CheckCircleIcon className="w-6 h-6" />,
              title: "Septic and Grease Trap Cleaning",
              description: "We provide thorough cleaning and maintenance of septic systems and grease traps, preventing blockages and ensuring optimal performance of your waste management systems."
            },
            {
              icon: <DropletIcon className="w-6 h-6" />,
              title: "Industrial Cleaning",
              description: "Our vacuum trucks are ideal for cleaning large industrial tanks, sumps, pits, and other containment areas, removing accumulated debris and waste materials."
            },
            {
              icon: <AlertTriangleIcon className="w-6 h-6" />,
              title: "Emergency Spill Response",
              description: "We offer rapid response services for emergency spills, utilizing our vacuum trucks to quickly contain and clean up hazardous materials, minimizing environmental impact and downtime."
            }
          ].map((service, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                  <span className="mr-2 text-blue-500 dark:text-blue-400">{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Process</h3>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 text-left">
              <li>Initial assessment and planning</li>
              <li>Safety protocol implementation</li>
              <li>Vacuum truck deployment</li>
              <li>Waste removal and collection</li>
              <li>Proper disposal or treatment</li>
              <li>Site cleanup and verification</li>
              <li>Documentation and reporting</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Industries Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Oil and Gas", icon: <OilCanIcon className="w-8 h-8" /> },
              { name: "Chemical Manufacturing", icon: <FlaskConicalIcon className="w-8 h-8" /> },
              { name: "Construction", icon: <ConstructionIcon className="w-8 h-8" /> },
              { name: "Food Processing", icon: <LeafIcon className="w-8 h-8" /> },
              { name: "Municipalities", icon: <BuildingIcon className="w-8 h-8" /> },
              { name: "Wastewater Treatment", icon: <DropletIcon className="w-8 h-8" /> },
              { name: "Agriculture", icon: <LeafIcon className="w-8 h-8" /> },
              { name: "Transportation", icon: <TruckIcon className="w-8 h-8" /> },
              { name: "Mining", icon: <WrenchIcon className="w-8 h-8" /> },
              { name: "Manufacturing", icon: <FactoryIcon className="w-8 h-8" /> }
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
                Why Choose Our Vacuum Truck Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  "State-of-the-art vacuum truck fleet",
                  "Highly trained and experienced operators",
                  "24/7 emergency response capability",
                  "Environmentally responsible waste disposal",
                  "Customized solutions for your specific needs",
                  "Compliance with all relevant regulations and safety standards"
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
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ready to Schedule Our Vacuum Truck Services?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today to discuss your industrial cleaning and waste management needs. Our team is ready to provide you with efficient and reliable vacuum truck services.</p>
          <Link href="/contact" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
              Request a Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

