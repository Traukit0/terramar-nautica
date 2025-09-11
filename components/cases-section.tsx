"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, MapPin, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { siteData } from "@/lib/data"
import Image from "next/image"

const categories = ["Todos", "Mantenimiento", "Reparaciones", "Traslados", "Inspecciones", "Logística"]

export function CasesSection() {
  const [activeFilter, setActiveFilter] = useState("Todos")
  const [selectedCase, setSelectedCase] = useState<(typeof siteData.cases)[0] | null>(null)

  const filteredCases =
    activeFilter === "Todos" ? siteData.cases : siteData.cases.filter((case_) => case_.category === activeFilter)

  return (
    <section id="casos" className="py-20 lg:py-32 bg-muted/30">
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
            Proyectos y{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              reparaciones recientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Descubre algunos de nuestros trabajos más destacados y la calidad que ofrecemos en cada proyecto náutico.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => setActiveFilter(category)}
              className={`transition-all duration-300 ${
                activeFilter === category ? "bg-primary text-primary-foreground" : "hover:bg-primary/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Cases Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {filteredCases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={case_.image || "/placeholder.svg"}
                      alt={case_.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <Badge className="absolute top-3 left-3 bg-primary/90 text-white">{case_.category}</Badge>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-balance leading-tight">{case_.title}</h3>

                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {case_.location}
                    </div>

                    <p className="text-muted-foreground text-sm text-pretty leading-relaxed mb-4">
                      {case_.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {case_.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-white transition-colors bg-transparent"
                          onClick={() => setSelectedCase(case_)}
                        >
                          Ver Detalles
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{case_.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Antes</h4>
                              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <Image
                                  src={case_.beforeImage || "/placeholder.svg"}
                                  alt={`${case_.title} - Antes`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Después</h4>
                              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <Image
                                  src={case_.afterImage || "/placeholder.svg"}
                                  alt={`${case_.title} - Después`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold mb-2">Descripción del Proyecto</h4>
                              <p className="text-muted-foreground leading-relaxed">{case_.description}</p>
                            </div>

                            <div className="flex items-center text-muted-foreground">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{case_.location}</span>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {case_.tags.map((tag) => (
                                <Badge key={tag} variant="outline">
                                  <Tag className="w-3 h-3 mr-1" />
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
