import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DonationCTA() {
  return (
    <section
      id="donar"
      style={{ backgroundColor: "var(--tani-orange)" }}
      className="py-28 lg:py-36"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block text-xs font-bold uppercase tracking-widest mb-5 px-4 py-2 rounded-full"
          style={{ backgroundColor: "rgba(255,255,255,0.2)", color: "#fff", border: "1px solid rgba(255,255,255,0.35)" }}
        >
          Con solo $5.000 al mes puedes apoyar a un beneficiario
        </span>

        <div className="flex justify-center gap-3 mb-6" aria-hidden="true">
          {[...Array(3)].map((_, i) => (
            <Heart
              key={i}
              className={`fill-white ${i === 1 ? "w-8 h-8" : "w-5 h-5 opacity-60"}`}
            />
          ))}
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 text-balance leading-tight">
          Tu donación transforma vidas
        </h2>

        <p className="text-white/85 text-lg leading-relaxed mb-10 max-w-2xl mx-auto text-pretty">
          Con tu generosidad seguimos financiando talleres, herramientas, materiales y apoyo
          profesional para que cada beneficiario pueda florecer. Todo aporte es un paso hacia
          una sociedad más inclusiva.
        </p>

        <Button
          asChild
          size="lg"
          className="inline-flex items-center gap-3 font-bold text-lg rounded-full px-10 py-5 shadow-lg transition-all hover:scale-105 hover:brightness-95"
          style={{ backgroundColor: "#fff", color: "var(--tani-orange)" }}
        >
          <a href="/donar">
            <Heart className="w-5 h-5 fill-current" aria-hidden="true" />
            Donar Ahora
          </a>
        </Button>

        <p className="text-white/70 text-sm mt-6">
          100% de las donaciones van directamente a nuestros talleres y beneficiarios.
        </p>
      </div>
    </section>
  )
}
