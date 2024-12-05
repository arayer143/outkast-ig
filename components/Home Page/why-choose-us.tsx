'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Badge, Cog, Wrench, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: <Badge className="h-8 w-8 text-primary" />,
    title: "Experience",
    description: "We understand the complexities of industrial cleaning and are equipped to handle any challenge."
  },
  {
    icon: <Cog className="h-8 w-8 text-primary" />,
    title: "Customized Solutions",
    description: "We tailor our services to meet the specific needs of each client, ensuring optimal results."
  },
  {
    icon: <Wrench className="h-8 w-8 text-primary" />,
    title: "Advanced Equipment",
    description: "We utilize state-of-the-art equipment and the latest cleaning techniques to achieve superior cleanliness."
  },
  {
    icon: <ThumbsUp className="h-8 w-8 text-primary" />,
    title: "Customer Satisfaction",
    description: "Our clients are at the heart of everything we do. We are committed to providing exceptional service and building long-term partnerships."
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-primary">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our success is built on the dedication and expertise of our team. Each member of our staff is trained to the highest standards, equipped with the knowledge and skills to handle the most challenging cleaning tasks. From our management team to our on-site technicians, we work collaboratively to deliver outstanding results.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <Image
                src="/Transfer_of_Leaking_Tanker.webp"
                alt="Storage container image"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm p-4 rounded">
                <p className="text-sm font-semibold">State-of-the-art equipment for superior cleaning results</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ feature, index }: { feature: typeof features[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-2 bg-primary/10 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

