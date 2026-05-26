import Image from "next/image"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BLUR_DATA_URL } from "@/lib/utils"

const values = [
  "Inclusión laboral con dignidad",
  "Talleres especializados con apoyo profesional",
  "Vínculos comunitarios y afecto genuino",
  "Autosustentabilidad a través del trabajo",
]

export function Mission() {
  return (
    <section
      id="nosotros"
      className="py-28 lg:py-36"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div
              className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
              style={{ backgroundColor: "var(--tani-teal)", opacity: 0.12 }}
              aria-hidden="true"
            />
            {/* Image wrapper — overflow-hidden clips the shadow-xl outline properly */}
            <div className="relative z-10 w-full h-64 sm:h-80 lg:h-[480px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/mission.jpg"
                alt="Beneficiarios de Fundación TAÑI trabajando con alegría en sus talleres productivos"
                fill
                className="object-cover"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating badge — kept inside relative parent, safe on all viewports */}
            <div
              className="absolute z-20 bottom-0 right-0 sm:-bottom-5 sm:-right-5 rounded-2xl p-5 shadow-lg"
              style={{ backgroundColor: "var(--tani-orange)" }}
            >
              <p className="text-white font-serif font-bold text-3xl leading-none">20</p>
              <p className="text-white/90 text-xs font-medium uppercase tracking-wide mt-1">
                años de<br />trayectoria
              </p>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest mb-4 block"
              style={{ color: "var(--tani-orange)" }}
            >
              Quiénes Somos
            </span>

            <h2
              className="font-serif text-4xl lg:text-5xl font-bold mb-6 leading-tight text-balance"
              style={{ color: "var(--tani-text)" }}
            >
              Una fundación construida sobre dignidad y amor
            </h2>

            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--tani-text-muted)" }}>
              Fundación TAÑI nació con la convicción de que toda persona, sin importar
              sus capacidades, merece ser valorada y encontrar su lugar en el mundo. Durante
              más de 20 años hemos acompañado a adultos con discapacidad intelectual en el
              desarrollo de habilidades productivas a través de talleres especializados.
            </p>

            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tani-text-muted)" }}>
              Nuestros talleres de suculentas, jabones y galletas artesanales son
              espacios de aprendizaje, creatividad y orgullo personal, donde cada beneficiario
              aporta su sello único.
            </p>

            <ul className="space-y-3 mb-10" role="list">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    style={{ color: "var(--tani-teal)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm" style={{ color: "var(--tani-text)" }}>
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="flex items-center gap-2 font-semibold text-white rounded-full px-8 transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "var(--tani-teal)" }}
            >
              <a href="/nosotros">
                Conocer más <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
