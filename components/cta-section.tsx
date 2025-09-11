"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Anchor, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NauticalButton } from "@/components/nautical-button"
import Image from "next/image"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/70 to-accent/60 z-10" />
        <Image
          src="/luxury-yacht-sailing-at-sunset-with-calm-waters.jpg"
          alt="Embarcación navegando al atardecer"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Icon */}
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto">
              <Anchor className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white text-balance leading-tight">
              Mantén tu embarcación lista para navegar
            </h2>

            {/* Subtitle */}
            <p className="text-xl text-white/90 text-pretty leading-relaxed max-w-2xl mx-auto">
              No dejes que los problemas técnicos arruinen tu experiencia en el mar. Confía en nuestros expertos para
              mantener tu embarcación en perfecto estado.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://calendly.com/terramar-nautica", "_blank")}
              className="group bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
            >
              Agenda Inspección
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-1">
              <NauticalButton>Solicita Presupuesto</NauticalButton>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <div className="flex flex-wrap justify-center gap-8 text-white/80 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Respuesta en 24h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Técnicos certificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>Trabajo garantizado</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
