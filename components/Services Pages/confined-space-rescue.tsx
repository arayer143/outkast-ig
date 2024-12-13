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
              src="/assets/img/Opening_of_a_Carbon-Tetrachloride_Tank.webp"
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

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">Our Rescue Process</h3>
          <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300 text-left">
              <li>Immediate alert and team mobilization</li>
              <li>Rapid assessment of the situation</li>
              <li>Establishment of command post</li>
              <li>Atmospheric monitoring and ventilation</li>
              <li>Entry team preparation and equipment check</li>
              <li>Rescue team entry and victim extraction</li>
              <li>Medical assessment and treatment</li>
              <li>Debriefing and incident report compilation</li>
            </ol>
          </div>
        </div>



  

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Ensure the Safety of Your Confined Space Operations</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Contact us today to learn more about our Confined Space Rescue Services and how we can help protect your workers and operations.</p>
          <Link href="/contact" passHref>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded dark:bg-blue-600 dark:hover:bg-blue-700 transition-colors duration-300">
             Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}