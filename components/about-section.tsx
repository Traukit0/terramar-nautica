"use client"

import { motion } from "framer-motion"
import { Award, Users, Clock, Shield, Instagram, Linkedin, Mail } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance mb-6">
                Quiénes{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">somos</span>
              </h2>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed mb-6">
                Somos un equipo de profesionales náuticos con más de 15 años de experiencia en el mantenimiento,
                reparación y traslado de embarcaciones en la región de los Lagos.
              </p>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Nuestra misión es mantener tu embarcación en perfecto estado con la máxima calidad técnica y atención
                personalizada. Trabajamos con las principales marcas del sector y ofrecemos un servicio integral que
                abarca desde el mantenimiento preventivo hasta las reparaciones más complejas.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Embarcaciones Atendidas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-muted-foreground">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfacción Cliente</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Síguenos:</span>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Image & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Team Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/professional-nautical-team-working-on-yacht-engine.jpg"
                alt="Equipo técnico de Terramar Náutica"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Award, title: "Certificados", desc: "Técnicos certificados" },
                { icon: Users, title: "Experiencia", desc: "Equipo especializado" },
                { icon: Clock, title: "Disponibilidad", desc: "Servicio 24/7" },
                { icon: Shield, title: "Garantía", desc: "Trabajo garantizado" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="glass border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-4 text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                        <feature.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
