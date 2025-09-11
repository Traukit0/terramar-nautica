"use client"

import { motion } from "framer-motion"
import { MessageCircle, Calendar, Wrench, FileText, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteData } from "@/lib/data"

const processIcons = [MessageCircle, Calendar, Wrench, FileText]

export function ProcessSection() {
  return (
    <section id="proceso" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Cómo{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">trabajamos</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Nuestro proceso estructurado garantiza la máxima calidad y transparencia en cada intervención técnica.
          </p>
        </motion.div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary transform -translate-y-1/2" />

            {/* Process Steps */}
            <div className="grid grid-cols-4 gap-8">
              {siteData.process.map((step, index) => {
                const IconComponent = processIcons[index]
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative"
                  >
                    {/* Step Number Circle */}
                    <div className="relative z-10 mx-auto w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>

                    {/* Step Content */}
                    <Card className="glass border-border/50 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 text-center">
                        <div className="text-sm font-semibold text-primary mb-2">Paso {step.step}</div>
                        <h3 className="text-lg font-semibold mb-3 text-balance">{step.title}</h3>
                        <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>

                    {/* Arrow (except for last step) */}
                    {index < siteData.process.length - 1 && (
                      <div className="absolute top-8 -right-4 z-20">
                        <ArrowRight className="w-6 h-6 text-primary" />
                      </div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Process Timeline - Mobile */}
        <div className="lg:hidden space-y-8">
          {siteData.process.map((step, index) => {
            const IconComponent = processIcons[index]
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start space-x-4">
                  {/* Step Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Step Content */}
                  <Card className="flex-1 glass border-border/50">
                    <CardContent className="p-6">
                      <div className="text-sm font-semibold text-primary mb-2">Paso {step.step}</div>
                      <h3 className="text-lg font-semibold mb-3 text-balance">{step.title}</h3>
                      <p className="text-muted-foreground text-sm text-pretty leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Connecting Line (except for last step) */}
                {index < siteData.process.length - 1 && (
                  <div className="ml-6 mt-4 mb-4 w-0.5 h-8 bg-gradient-to-b from-primary to-accent" />
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Técnicos certificados y experiencia en marcas líderes",
              "Repuestos y logística propia",
              "Informes técnicos y transparencia",
              "Servicio de emergencia y traslado seguro",
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <Card className="h-full text-center glass border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="w-6 h-6 bg-white rounded-full" />
                    </div>
                    <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
