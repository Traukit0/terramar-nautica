# Terramar Náutica - Landing Page

Una landing page premium y moderna para servicios integrales de embarcaciones, construida con Next.js, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Efectos Parallax**: En hero y secciones destacadas
- **Glassmorphism**: Efectos de cristal en navegación y tarjetas
- **Modo Oscuro/Claro**: Toggle de tema incluido
- **Formulario de Contacto**: Con validación y API endpoint
- **SEO Optimizado**: Meta tags completas y schema.org
- **Accesibilidad**: Cumple estándares AA+

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 15 con App Router
- **Estilos**: Tailwind CSS v4
- **Componentes**: shadcn/ui
- **Animaciones**: Framer Motion
- **Tipografía**: Inter + Manrope (Google Fonts)
- **Iconos**: Lucide React

## 📁 Estructura del Proyecto

\`\`\`
├── app/
│   ├── api/contact/          # API endpoint para formulario
│   ├── globals.css           # Estilos globales y tema náutico
│   ├── layout.tsx            # Layout principal con SEO
│   └── page.tsx              # Página principal
├── components/
│   ├── ui/                   # Componentes base de shadcn/ui
│   ├── navigation.tsx        # Navegación con glassmorphism
│   ├── hero-section.tsx      # Hero con parallax
│   ├── services-section.tsx  # Grid de servicios
│   ├── cases-section.tsx     # Portfolio con filtros
│   ├── pricing-section.tsx   # Planes y precios
│   ├── process-section.tsx   # Timeline del proceso
│   ├── about-section.tsx     # Sección nosotros
│   ├── testimonials-section.tsx # Slider de testimonios
│   ├── cta-section.tsx       # CTA con parallax
│   ├── contact-section.tsx   # Formulario de contacto
│   ├── footer.tsx            # Footer completo
│   ├── scroll-to-top.tsx     # Botón scroll to top
│   └── nautical-button.tsx   # Botón animado personalizado
├── lib/
│   └── data.ts               # Datos de contenido
└── public/                   # Imágenes y assets
\`\`\`

## 🎨 Paleta de Colores

- **Primario**: #0B63A6 (Azul nave / Deep sea)
- **Secundario**: #08314B (Azul muy oscuro / Casco)
- **Acento**: #3CC1FF (Cian / Agua clara)
- **Neutros**: #FFFFFF, #F2F7FB, #0B1220
- **CTA**: #FFB24A (Ancla / Acento cálido)

## 🚀 Instalación y Desarrollo

1. **Clonar el repositorio**
   \`\`\`bash
   git clone <repository-url>
   cd terramar-nautica
   \`\`\`

2. **Instalar dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Ejecutar en desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Construir para producción**
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

## 📝 Personalización

### Contenido
Edita el archivo `lib/data.ts` para modificar:
- Información de la empresa
- Servicios ofrecidos
- Casos de estudio
- Planes y precios
- Testimonios
- Proceso de trabajo

### Imágenes
Reemplaza las imágenes en la carpeta `public/` con:
- Hero background: imagen aérea de marina
- Casos: fotos antes/después de trabajos
- About: foto del equipo técnico
- CTA: embarcación navegando al atardecer

### Colores
Modifica las variables CSS en `app/globals.css` para cambiar la paleta de colores.

### Formulario de Contacto
El endpoint `/api/contact/route.ts` es un mock. Para producción:
1. Conectar con base de datos
2. Configurar envío de emails
3. Integrar con CRM
4. Añadir captcha si es necesario

## 🌐 Despliegue

### Vercel (Recomendado)
1. Conectar repositorio en Vercel
2. Configurar variables de entorno si es necesario
3. Desplegar automáticamente

### Otros Proveedores
Compatible con cualquier hosting que soporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📱 Integraciones Opcionales

### Calendly
Reemplazar el enlace placeholder en `components/cta-section.tsx`:
\`\`\`tsx
onClick={() => window.open("https://calendly.com/tu-usuario", "_blank")}
\`\`\`

### WhatsApp
Actualizar el número en `components/contact-section.tsx`:
\`\`\`tsx
onClick={() => window.open("https://wa.me/34XXXXXXXXX", "_blank")}
\`\`\`

### Google Maps
Reemplazar el placeholder del mapa en `components/contact-section.tsx` con:
\`\`\`tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  className="w-full h-full rounded-lg"
  allowFullScreen
/>
\`\`\`

## 🔧 Mantenimiento

### Actualizar Contenido
- Editar `lib/data.ts` para cambios de contenido
- Añadir nuevos casos en el array `cases`
- Actualizar testimonios y precios

### Añadir Nuevas Secciones
1. Crear componente en `components/`
2. Importar en `app/page.tsx`
3. Añadir enlace en navegación (`lib/data.ts`)

### SEO
- Actualizar meta tags en `app/layout.tsx`
- Añadir schema.org structured data
- Generar sitemap automático

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Soporte

Para soporte técnico o consultas sobre personalización:
- Email: info@terramar-nautica.com
- Teléfono: +34 XXX XXX XXX

---

**Terramar Náutica** - Mantenimiento y traslado profesional de embarcaciones
