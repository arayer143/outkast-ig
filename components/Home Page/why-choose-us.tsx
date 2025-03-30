"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Badge, Cog, Wrench, ThumbsUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const features = [
  {
    icon: <Badge className="h-6 w-6" />,
    title: "Experience",
    description: "We understand the complexities of industrial cleaning and are equipped to handle any challenge.",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Customized Solutions",
    description: "We tailor our services to meet the specific needs of each client, ensuring optimal results.",
  },
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Advanced Equipment",
    description:
      "We utilize state-of-the-art equipment and the latest cleaning techniques to achieve superior cleanliness.",
  },
  {
    icon: <ThumbsUp className="h-6 w-6" />,
    title: "Customer Satisfaction",
    description:
      "Our clients are at the heart of everything we do. We are committed to providing exceptional service and building long-term partnerships.",
  },
]

export function WhyChooseUsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-primary mb-3">Our Advantages</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Why Choose Us</h3>
            <Separator className="mx-auto w-24 mb-6 bg-primary/30" />
            <p className="text-muted-foreground text-lg">
              Our success is built on the dedication and expertise of our team. Each member of our staff is trained to
              the highest standards, equipped with the knowledge and skills to handle the most challenging cleaning
              tasks.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} variants={itemVariants} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 order-1 lg:order-2 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/Transfer_of_Leaking_Tanker.webp"
                alt="Industrial cleaning equipment in action"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-white text-lg font-medium">
                  State-of-the-art equipment for superior cleaning results
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Our advanced technology ensures efficiency and effectiveness
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  feature,
  variants,
}: {
  feature: (typeof features)[0]
  variants: {
    hidden: { opacity: number; y: number }
    visible: {
      opacity: number
      y: number
      transition: { duration: number; ease: string }
    }
  }
}) {
  return (
    <motion.div variants={variants} className="h-full">
      <Card className="h-full border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary/10 rounded-full text-primary">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
          </div>
          <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

