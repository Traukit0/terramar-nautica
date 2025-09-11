"use client"

import { motion } from "framer-motion"
import { Anchor, Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { siteData, navigation } from "@/lib/data"

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <Anchor className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">{siteData.company.name}</span>
              </div>

              <p className="text-secondary-foreground/80 text-pretty leading-relaxed mb-6 max-w-md">
                Especialistas en mantenimiento, reparación y traslado profesional de embarcaciones. Técnicos
                certificados con experiencia en las principales marcas náuticas.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm">{siteData.company.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-sm">{siteData.company.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-sm">{siteData.company.address}</span>
                </div>
              </div>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Navegación</h3>
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-secondary-foreground/80 hover:text-accent transition-colors duration-200 text-sm"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services & Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-6">Servicios</h3>
              <ul className="space-y-3 mb-8">
                <li>
                  <span className="text-secondary-foreground/80 text-sm">Mantenimiento Preventivo</span>
                </li>
                <li>
                  <span className="text-secondary-foreground/80 text-sm">Reparaciones Motores</span>
                </li>
                <li>
                  <span className="text-secondary-foreground/80 text-sm">Traslados Náuticos</span>
                </li>
                <li>
                  <span className="text-secondary-foreground/80 text-sm">Inspecciones Técnicas</span>
                </li>
              </ul>

              <h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                    Términos y Condiciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-secondary-foreground/80 hover:text-accent transition-colors text-sm">
                    Política de Privacidad
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator className="bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-sm text-secondary-foreground/60"
            >
              © 2024 {siteData.company.name}. Todos los derechos reservados.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center space-x-4"
            >
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 text-secondary-foreground/60 hover:text-accent hover:bg-accent/10"
                onClick={() => window.open("https://instagram.com/terramar-nautica", "_blank")}
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 text-secondary-foreground/60 hover:text-accent hover:bg-accent/10"
                onClick={() => window.open("https://linkedin.com/company/terramar-nautica", "_blank")}
              >
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0 text-secondary-foreground/60 hover:text-accent hover:bg-accent/10"
                onClick={() => window.open("https://facebook.com/terramar-nautica", "_blank")}
              >
                <Facebook className="w-4 h-4" />
              </Button>
            </motion.div>

            {/* Back to Top */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="border-secondary-foreground/20 text-secondary-foreground/80 hover:text-accent hover:border-accent bg-transparent"
              >
                Volver Arriba
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
