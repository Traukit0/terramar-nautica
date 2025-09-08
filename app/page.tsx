import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, Anchor } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/aerial-drone-shot-of-luxury-sailboat-on-calm-blue-.jpg')",
        }}
      />

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="p-6 md:p-8">
          <div className="flex items-center gap-2">
            <Anchor className="h-8 w-8 text-white" />
            <h1 className="text-2xl md:text-3xl font-bold text-slate-50 border-0">Terramar Náutica</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Card className="bg-background/95 backdrop-blur-sm border-border/50 p-8 md:p-12 shadow-2xl opacity-75">
              <div className="space-y-8">
                {/* Coming Soon Message */}
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary text-balance">Próximamente</h2>
                  <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                    Especialistas en mantenimiento y reparaciones navales
                  </p>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                    Estamos preparando una experiencia excepcional para el cuidado de su embarcación. Veleros, yates y
                    artefactos navales en las mejores manos.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-foreground">Contáctanos</h3>

                  <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                    {/* Phone */}
                    <a
                      href="tel:+56964869316"
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-accent/10 transition-colors group opacity-100 shadow-md bg-sky-50 font-medium"
                    >
                      <Phone className="h-5 w-5 text-accent group-hover:text-accent/80" />
                      <div className="text-left">
                        <p className="font-medium text-card-foreground">Teléfono</p>
                        <p className="text-sm text-muted-foreground">+56 9 6486 9316</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:terramar@surnet.cl"
                      className="flex items-center gap-3 p-4 rounded-lg hover:bg-accent/10 transition-colors group shadow-md bg-sky-50 font-medium"
                    >
                      <Mail className="h-5 w-5 text-accent group-hover:text-accent/80" />
                      <div className="text-left">
                        <p className="font-medium text-card-foreground">Email</p>
                        <p className="text-sm text-muted-foreground">terramar@surnet.cl</p>
                      </div>
                    </a>
                  </div>

                  {/* Contact Person */}
                  <div className="pt-4 border-t border-border/50 font-medium">
                    <p className="text-lg font-medium text-foreground">Victor Hugo Canales Reyes</p>
                    <p className="text-muted-foreground">Director General</p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
                    asChild
                  >
                    <a href="mailto:terramar@surnet.cl">Contáctanos Ahora</a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-6 md:p-8 text-center">
          <Card className="bg-background/90 backdrop-blur-sm border-border/50 p-4">
            <p className="text-sm text-muted-foreground">© 2025 Terramar Náutica. Todos los derechos reservados.</p>
          </Card>
        </footer>
      </div>
    </div>
  )
}
