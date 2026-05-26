import { FileText, MessageSquare, CheckCircle, Gift } from "lucide-react"

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Completa el formulario",
    description:
      "Cuéntanos sobre tu empresa, el tipo de producto que te interesa y la cantidad aproximada que necesitas.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Cotización en 48h",
    description:
      "Nuestro equipo te envía una propuesta detallada con precios, opciones de personalización y plazos de entrega.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Confirma y coordina",
    description:
      "Aprobada la cotización, coordinamos los detalles del branding, packaging y fecha de entrega.",
  },
  {
    icon: Gift,
    number: "04",
    title: "Recibe con certificado RSE",
    description:
      "Tu pedido llega puntual con packaging corporativo y el certificado de responsabilidad social para tu empresa.",
  },
]

export function CorpHowItWorks() {
  return (
    <section
      className="py-28 lg:py-36"
      id="como-funciona"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-teal)" }} />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--tani-teal)" }}
          >
            Proceso
          </span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold text-balance max-w-xl"
            style={{ color: "var(--tani-text)" }}
          >
            Cuatro pasos para un regalo con propósito
          </h2>
          <p
            className="text-base leading-relaxed max-w-sm"
            style={{ color: "var(--tani-text-muted)" }}
          >
            Un proceso simple y ágil, diseñado para que los equipos corporativos
            puedan coordinar pedidos sin fricciones.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px"
            style={{ backgroundColor: "var(--tani-border)", zIndex: 0 }}
          />

          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative z-10 flex flex-col gap-5">
                {/* Icon circle */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 border-2 bg-white"
                  style={{ borderColor: "var(--tani-teal)" }}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: "var(--tani-teal)" }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <span
                    className="font-serif text-xs font-bold tracking-widest"
                    style={{ color: "var(--tani-orange)" }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="font-semibold text-lg leading-snug mt-1 mb-2"
                    style={{ color: "var(--tani-text)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--tani-text-muted)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
