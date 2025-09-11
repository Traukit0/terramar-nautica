"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { NauticalButton } from "@/components/nautical-button"
import { siteData } from "@/lib/data"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    boatType: "",
    service: "",
    message: "",
    acceptPolicy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          boatType: "",
          service: "",
          message: "",
          acceptPolicy: false,
        })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contacto" className="py-20 lg:py-32 bg-background">
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
            Contáctanos para una{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">revisión</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Estamos aquí para ayudarte con cualquier consulta sobre tu embarcación. Responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Solicita tu Cotización</CardTitle>
                <CardDescription>
                  Completa el formulario y nos pondremos en contacto contigo para evaluar las necesidades de tu
                  embarcación.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-600">¡Mensaje Enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarnos. Nos pondremos en contacto contigo en las próximas 24 horas.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Enviar Otro Mensaje
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre Completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Tu nombre completo"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+34 XXX XXX XXX"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="boatType">Tipo de Embarcación</Label>
                        <Select
                          value={formData.boatType}
                          onValueChange={(value) => handleInputChange("boatType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="velero">Velero</SelectItem>
                            <SelectItem value="lancha">Lancha Motora</SelectItem>
                            <SelectItem value="catamaran">Catamarán</SelectItem>
                            <SelectItem value="yate">Yate</SelectItem>
                            <SelectItem value="pesquero">Barco Pesquero</SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Servicio Requerido</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                            <SelectItem value="reparacion">Reparación</SelectItem>
                            <SelectItem value="traslado">Traslado</SelectItem>
                            <SelectItem value="inspeccion">Inspección</SelectItem>
                            <SelectItem value="emergencia">Emergencia</SelectItem>
                            <SelectItem value="consulta">Consulta General</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Describe las necesidades de tu embarcación, ubicación, y cualquier detalle relevante..."
                        rows={4}
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="policy"
                        checked={formData.acceptPolicy}
                        onCheckedChange={(checked) => handleInputChange("acceptPolicy", checked as boolean)}
                        required
                      />
                      <Label htmlFor="policy" className="text-sm text-muted-foreground leading-relaxed">
                        Acepto la{" "}
                        <a href="#" className="text-primary hover:underline">
                          política de privacidad
                        </a>{" "}
                        y el tratamiento de mis datos personales para responder a mi consulta.
                      </Label>
                    </div>

                    <NauticalButton disabled={isSubmitting}>
                      {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                      <Send className="ml-2 w-4 h-4" />
                    </NauticalButton>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Teléfono</h4>
                    <p className="text-muted-foreground">{siteData.company.phone}</p>
                    <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">{siteData.company.email}</p>
                    <p className="text-sm text-muted-foreground">Respuesta en 24h</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ubicación</h4>
                    <p className="text-muted-foreground">{siteData.company.address}</p>
                    <p className="text-sm text-muted-foreground">Área de cobertura: Costa Mediterránea</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coverage Map Placeholder */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">Área de Cobertura</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto" />
                    <p className="text-muted-foreground">Mapa de cobertura</p>
                    <p className="text-sm text-muted-foreground">Costa Mediterránea Española</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Button
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          onClick={() => window.open("https://wa.me/34XXXXXXXXX", "_blank")}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </motion.div>
    </section>
  )
}
