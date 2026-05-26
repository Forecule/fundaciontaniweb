import { ArrowRight, Gift, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

const benefits = [
  {
    icon: Gift,
    title: "Regalos únicos",
    description: "Productos artesanales que sorprenden y conectan emocionalmente con quien los recibe.",
  },
  {
    icon: Award,
    title: "Impacto certificado",
    description: "Recibe un informe detallado del impacto social generado con tu compra corporativa.",
  },
  {
    icon: Users,
    title: "RSE con propósito",
    description: "Fortalece la imagen corporativa de tu empresa apoyando la inclusión laboral real.",
  },
]

export function CorporateSection() {
  return (
    <section
      id="corporativo"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "var(--tani-orange)" }}
            >
              Para Empresas
            </span>

            <h2
              className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
              style={{ color: "var(--tani-text)" }}
            >
              Regalos Corporativos con Impacto Social
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tani-text-muted)" }}>
              Transforma tus regalos empresariales en una declaración de valores. Nuestros
              kits corporativos combinan productos artesanales de alta calidad con el poderoso
              mensaje de inclusión y dignidad que representa Fundación TAÑI.
            </p>

            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--tani-text-muted)" }}>
              Personalizamos cada pedido para tu empresa: branding, packaging premium, tarjetas
              de impacto social y entrega a domicilio a nivel nacional.
            </p>

            <Button
              asChild
              size="lg"
              className="flex items-center gap-2 font-semibold text-white rounded-full px-8 transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "var(--tani-teal)" }}
            >
              <a href="/corporativo">
                Contáctanos <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>

          {/* Right: Benefit cards */}
          <div className="flex flex-col gap-5">
            {benefits.map((benefit) => {
              const Icon = benefit.icon
              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-5 p-6 rounded-2xl border transition-all hover:shadow-md"
                  style={{
                    backgroundColor: "var(--tani-card-bg)",
                    borderColor: "var(--tani-border)",
                  }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "rgba(46,125,107,0.1)" }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: "var(--tani-teal)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base mb-1"
                      style={{ color: "var(--tani-text)" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
