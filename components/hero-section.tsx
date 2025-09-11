"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, CheckCircle, Wrench, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NauticalButton } from "@/components/nautical-button"
import { siteData } from "@/lib/data"
import Image from "next/image"

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/50 to-accent/20 z-10" />
        <Image
          src="/aerial-view-of-marina-with-luxury-yachts-and-boats.jpg"
          alt="Marina con embarcaciones al atardecer"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Terramar Náutica
            </span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl lg:text-5xl font-semibold">
              Mantenimiento y traslado profesional de embarcaciones
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {siteData.company.description}
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
          >
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#servicios")}
              className="group glass border-primary/30 hover:bg-primary/10 text-lg px-8 py-6"
            >
              Ver Servicios
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <NauticalButton>Solicita Cotización</NauticalButton>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-8"
          >
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Técnicos Certificados</span>
              </div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Wrench className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Yanmar · Volvo · Cummins</span>
              </div>
              <div className="flex items-center space-x-2 glass px-4 py-2 rounded-full">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Servicio Integral</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
