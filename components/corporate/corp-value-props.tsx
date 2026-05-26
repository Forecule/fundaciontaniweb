import { Award, Package, Leaf } from "lucide-react"

const values = [
  {
    icon: Award,
    label: "Propósito Social",
    description:
      "Cada pedido incluye un certificado RSE oficial y una carta de impacto con el nombre de tu empresa, ideal para reportes de sostenibilidad y comunicación interna.",
    detail: "Certificado RSE incluido",
  },
  {
    icon: Package,
    label: "Personalización Total",
    description:
      "Tu marca en el packaging: caja personalizada, tarjeta con mensaje corporativo, y cintas con tus colores. Identidad de marca impecable en cada detalle.",
    detail: "Branding y packaging a medida",
  },
  {
    icon: Leaf,
    label: "Productos Artesanales",
    description:
      "Suculentas, jabones naturales y galletas artesanales. Cada pieza elaborada a mano por adultos con discapacidad intelectual en nuestros talleres.",
    detail: "100% hecho a mano en Chile",
  },
]

export function CorpValueProps() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--tani-bg)" }}
      id="propuestas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-teal)" }} />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--tani-teal)" }}
          >
            Por qué elegirnos
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
              <div
                key={v.label}
                className="group relative"
              >
                {/* Number */}
                <span
                  className="font-serif text-8xl font-bold select-none absolute -top-4 -left-2 leading-none pointer-events-none"
                  style={{ color: "var(--tani-teal)", opacity: 0.07 }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(46,125,107,0.1)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "var(--tani-teal)" }}
                    aria-hidden="true"
                  />
                </div>

                <h3
                  className="font-serif text-2xl font-bold mb-3"
                  style={{ color: "var(--tani-text)" }}
                >
                  {v.label}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: "var(--tani-text-muted)" }}
                >
                  {v.description}
                </p>

                {/* Detail pill */}
                <span
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(46,125,107,0.08)",
                    color: "var(--tani-teal)",
                  }}
                >
                  {v.detail}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
