import Image from "next/image"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BLUR_DATA_URL } from "@/lib/utils"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Beneficiarios de Fundación TAÑI elaborando productos artesanales en sus talleres productivos"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,26,46,0.72) 0%, rgba(26,26,46,0.60) 60%, rgba(26,26,46,0.80) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(105deg, rgba(46,125,107,0.5) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-widest mb-6 px-4 py-2 rounded-full"
            style={{
              backgroundColor: "rgba(244,162,97,0.2)",
              color: "var(--tani-orange)",
              border: "1px solid rgba(244,162,97,0.4)",
            }}
          >
            Talleres Productivos · Chile
          </span>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-8xl font-bold text-white leading-[1.05] text-balance mb-6">
            Productos con{" "}
            <span style={{ color: "var(--tani-orange)" }}>Propósito</span>
          </h1>

          <p className="text-lg sm:text-xl leading-relaxed text-white/85 mb-10 text-pretty max-w-xl">
            Cada compra dignifica la vida de un adulto con discapacidad intelectual.
            Productos artesanales hechos con dedicación, amor y talento genuino.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="flex items-center gap-2 font-semibold text-white rounded-full px-8 py-4 text-base transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "var(--tani-teal)" }}
            >
              <a href="/productos">
                <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                Ver Productos
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="flex items-center gap-2 font-semibold text-white rounded-full px-8 py-4 text-base transition-all hover:scale-105 hover:brightness-110"
              style={{ backgroundColor: "var(--tani-orange)" }}
            >
              <a href="/donar">
                <Heart className="w-5 h-5 fill-white" aria-hidden="true" />
                Donar Ahora
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/60 text-xs tracking-widest uppercase">Descubre</span>
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <div
            className="absolute top-0 left-0 w-full h-1/2 animate-bounce"
            style={{ backgroundColor: "var(--tani-orange)" }}
          />
        </div>
      </div>
    </section>
  )
}
