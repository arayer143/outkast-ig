import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function StorageTankCleaning() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/assets/img/Pressure_Washing_of_Tank_Exterior.webp"
              alt="Pressure Washing of Tank Exterior"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Expert Storage Tank Cleaning Solutions</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Maintaining clean storage tanks is essential for the safety, efficiency, and longevity of your industrial operations. At Outkast Industrial Group, we specialize in providing comprehensive storage tank cleaning services tailored to meet the unique requirements of various industries.
            </p>
            <Card className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Why Choose Our Storage Tank Cleaning Services?</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">We offer a range of benefits to ensure your tanks are maintained to the highest standards:</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {["Improved operational efficiency", "Extended equipment lifespan", "Compliance with industry regulations", "Minimized risk of contamination"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Thorough Cleaning", description: "Our expert technicians use advanced techniques and equipment to perform thorough cleaning of storage tanks, removing all types of residues, including sludge, scale, and hazardous materials." },
            { title: "Confined Space Entry", description: "We have highly trained personnel skilled in confined space entry, ensuring that even the most challenging tanks are cleaned safely and efficiently." },
            { title: "Sludge Removal", description: "Our sludge removal process is designed to handle even the toughest accumulations, ensuring that your tanks are free from harmful deposits." },
            { title: "Tank Inspection", description: "Along with cleaning, we conduct detailed inspections to identify any potential issues, such as corrosion or structural damage, providing you with a comprehensive report and recommendations." }
          ].map((service, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                  <svg className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Process</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
            {[
              "Initial assessment and planning",
              "Safety protocol implementation",
              "Tank isolation and ventilation",
              "Removal of residual products",
              "Cleaning using specialized equipment",
              "Waste management and disposal",
              "Final inspection and quality assurance",
              "Detailed reporting and recommendations"
            ].map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Industries We Serve</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">Our storage tank cleaning services cater to a wide range of industries, including but not limited to:</p>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300">
            {["Oil and Gas", "Chemical Manufacturing", "Food and Beverage", "Pharmaceuticals", "Water Treatment", "Agriculture"].map((industry, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-500 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                {industry}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ready to Schedule Your Storage Tank Cleaning?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today for a consultation and free quote. Our team of experts is ready to provide you with top-notch storage tank cleaning services tailored to your specific needs.</p>
          <Link href="/contact" passHref>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
