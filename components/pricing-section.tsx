"use client"

import { motion } from "framer-motion"
import { Check, Star, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NauticalButton } from "@/components/nautical-button"
import { siteData } from "@/lib/data"

export function PricingSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="planes" className="py-20 lg:py-32 bg-background">
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
            Paquetes pensados para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              su embarcación
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Selecciona el plan que mejor se adapte a las necesidades de tu embarcación. Todos incluyen técnicos
            certificados y repuestos de calidad.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {siteData.plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-accent to-primary text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Más Popular
                  </Badge>
                </div>
              )}

              <Card
                className={`h-full relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-primary/50 shadow-xl shadow-primary/10 scale-105"
                    : "hover:shadow-xl glass border-border/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 pointer-events-none" />
                )}

                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                    <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    {plan.popular ? (
                      <NauticalButton>Cotizar Ahora</NauticalButton>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-white transition-colors bg-transparent"
                        onClick={() => scrollToSection("#contacto")}
                      >
                        {plan.id === "medida" ? "Solicitar Cotización" : "Seleccionar Plan"}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-muted-foreground">
            Todos los planes incluyen garantía de servicio y soporte técnico post-intervención
          </p>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("#contacto")}
            className="group text-primary hover:text-primary/80"
          >
            ¿Necesitas un presupuesto personalizado?
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
