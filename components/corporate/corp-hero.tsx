import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CorpHero() {
  return (
    <section
      className="relative pt-32 pb-0 overflow-hidden"
      style={{ backgroundColor: "var(--tani-bg)" }}
      id="inicio"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-8 h-px"
            style={{ backgroundColor: "var(--tani-teal)" }}
          />
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--tani-teal)" }}
          >
            Programa Corporativo
          </span>
        </div>

        {/* Headline + CTA split layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end pb-16">
          <div>
            <h1
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.0] text-balance"
              style={{ color: "var(--tani-text)" }}
            >
              Regalos Corporativos con Impacto Social{" "}
              <em
                className="not-italic"
                style={{ color: "var(--tani-teal)" }}
              >
                Real
              </em>
            </h1>
          </div>

          <div className="lg:pb-3">
            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: "var(--tani-text-muted)" }}
            >
              Diferencia tu empresa con regalos artesanales que transforman
              vidas. Pedidos desde 20 unidades con packaging personalizado y
              certificado RSE incluido.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#cotizacion"
                className="inline-flex items-center gap-2.5 font-semibold text-white rounded-full px-8 py-4 text-base transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--tani-teal)",
                  boxShadow: "0 8px 32px rgba(46,125,107,0.25)",
                }}
              >
                Solicitar Cotización
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 transition-opacity hover:opacity-60"
                style={{ color: "var(--tani-text)" }}
              >
                Cómo funciona
              </a>
            </div>

            {/* Trust bar */}
            <div
              className="flex flex-wrap gap-6 mt-10 pt-8"
              style={{ borderTop: "1px solid var(--tani-border)" }}
            >
              {[
                { value: "+50", label: "empresas atendidas" },
                { value: "100%", label: "productos artesanales" },
                { value: "48h", label: "respuesta de cotización" },
              ].map((s) => (
                <div key={s.label}>
                  <p
                    className="font-serif text-2xl font-bold"
                    style={{ color: "var(--tani-text)" }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-xs uppercase tracking-wide mt-0.5"
                    style={{ color: "var(--tani-text-muted)" }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-width hero image */}
        <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden">
          <Image
            src="/images/corporate-hero.jpg"
            alt="Cajas de regalos corporativos artesanales de Fundación TAÑI con packaging personalizado"
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(26,26,46,0.35) 0%, transparent 60%)" }}
          />
          <div
            className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4"
          >
            <p
              className="text-xs uppercase tracking-widest font-semibold mb-0.5"
              style={{ color: "var(--tani-teal)" }}
            >
              Incluido en cada pedido
            </p>
            <p
              className="font-serif text-lg font-bold"
              style={{ color: "var(--tani-text)" }}
            >
              Certificado RSE + Carta de Impacto
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
