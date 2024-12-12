import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Link from 'next/link'
import { AlertTriangle, CheckCircle, Zap, PenToolIcon as Tool } from 'lucide-react'

export default function ConfinedSpaceRescue() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image
              src="/Opening_of_a_Carbon-Tetrachloride_Tank.webp"
              alt="Opening of a Carbon-Tetrachloride Tank"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">Confined Space Rescue</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              At Outkast Industrial Group, safety is our highest priority. Our Confined Space Rescue Services are designed to ensure the safety and well-being of workers who perform tasks in confined spaces. Our highly trained rescue teams are equipped with the latest technology and adhere to strict safety protocols to provide rapid, effective response in emergency situations.
            </p>
          </div>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <AlertTriangle className="w-6 h-6 mr-2 text-red-500 dark:text-red-400" />
                Emergency Response
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Our teams are trained to perform rescues in all types of confined spaces, including tanks, silos, vaults, pipelines, and tunnels. We are equipped to handle a wide range of rescue scenarios, from high-angle rescues to hazardous material incidents.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500 dark:text-green-400" />
                Safety Planning and Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We work with your team to develop comprehensive safety plans, including risk assessments and emergency response procedures tailored to your specific confined space operations.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Zap className="w-6 h-6 mr-2 text-yellow-500 dark:text-yellow-400" />
                Training and Drills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                We offer training programs to prepare your employees for confined space entry and rescue operations. Our drills ensure that both your team and ours are ready to respond effectively in an emergency.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center text-gray-800 dark:text-gray-100">
                <Tool className="w-6 h-6 mr-2 text-blue-500 dark:text-blue-400" />
                Equipment Inspection and Maintenance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Regular inspection and maintenance of rescue equipment are crucial for safety. We provide thorough checks and maintenance services to ensure all equipment is in optimal condition.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Why Choose Our Confined Space Rescue Services?</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            {[
              "Highly trained and experienced rescue teams",
              "State-of-the-art rescue equipment and technology",
              "Customized safety plans and risk assessments",
              "Comprehensive training programs for your staff",
              "24/7 emergency response capabilities",
              "Compliance with all relevant safety regulations and standards"
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ensure the Safety of Your Confined Space Operations</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today to learn more about our Confined Space Rescue Services and how we can help protect your workers and operations.</p>
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

