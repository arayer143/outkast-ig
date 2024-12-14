import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { CheckIcon, DropletIcon, ShieldIcon, SearchIcon, ShellIcon as OilCanIcon, FlaskConicalIcon, FactoryIcon } from 'lucide-react'
import Link from 'next/link'

export default function StorageTankCleaning() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/Pressure_Washing_of_Tank_Exterior.webp"
              alt="Pressure Washing of Tank Exterior"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Storage Tank Cleaning</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Outkast Industrial Group, we specialize in providing comprehensive storage tank cleaning services tailored to meet the unique requirements of various industries. Our expert team ensures the safety, efficiency, and longevity of your industrial operations through thorough cleaning and maintenance of storage tanks.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <DropletIcon className="w-6 h-6" />,
              title: "Thorough Cleaning",
              description: "Our expert technicians use advanced techniques and equipment to perform thorough cleaning of storage tanks, removing all types of residues, including sludge, scale, and hazardous materials."
            },
            {
              icon: <ShieldIcon className="w-6 h-6" />,
              title: "Confined Space Entry",
              description: "We have highly trained personnel skilled in confined space entry, ensuring that even the most challenging tanks are cleaned safely and efficiently."
            },
            {
              icon: <DropletIcon className="w-6 h-6" />,
              title: "Sludge Removal",
              description: "Our sludge removal process is designed to handle even the toughest accumulations, ensuring that your tanks are free from harmful deposits."
            },
            {
              icon: <SearchIcon className="w-6 h-6" />,
              title: "Tank Inspection",
              description: "Along with cleaning, we conduct detailed inspections to identify any potential issues, such as corrosion or structural damage, providing you with a comprehensive report and recommendations."
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
              <li>Tank isolation and ventilation</li>
              <li>Removal of residual products</li>
              <li>Cleaning using specialized equipment</li>
              <li>Waste management and disposal</li>
              <li>Final inspection and quality assurance</li>
              <li>Detailed reporting and recommendations</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Industries Served</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Oil and Gas", icon: <OilCanIcon className="w-8 h-8" /> },
              { name: "Chemical Manufacturing", icon: <FlaskConicalIcon className="w-8 h-8" /> },
              { name: "Manufacturing", icon: <FactoryIcon className="w-8 h-8" /> },
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
                Why Choose Our Storage Tank Cleaning Services?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {[
                  "Experienced and certified cleaning technicians",
                  "State-of-the-art cleaning equipment and technologies",
                  "Comprehensive safety protocols and procedures",
                  "Environmentally responsible cleaning methods",
                  "Customized cleaning solutions for various tank types",
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
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ready to Schedule Your Storage Tank Cleaning?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today for a consultation and free quote. Our team of experts is ready to provide you with top-notch storage tank cleaning services tailored to your specific needs.</p>
          <Link href="/contact" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}