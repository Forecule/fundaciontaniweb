import Image from "next/image"
import { getCorporateProducts } from "@/lib/products"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { BLUR_DATA_URL } from "@/lib/utils"

const categoryImages: Record<string, string> = {
  suculentas: "/images/succulents.jpg",
  jabones:    "/images/soaps.jpg",
  galletas:   "/images/cookies.jpg",
}

const categoryAlts: Record<string, string> = {
  suculentas: "Kit corporativo de suculentas artesanales elaboradas por Fundación TAÑI",
  jabones:    "Set de jabones naturales corporativos elaborados por Fundación TAÑI",
  galletas:   "Galletas corporativas personalizadas elaboradas por Fundación TAÑI",
}

const categoryLabels: Record<string, string> = {
  suculentas: "Suculentas",
  jabones:    "Jabones",
  galletas:   "Galletas",
}

export function CorpProducts() {
  const products = getCorporateProducts()

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(value)

  return (
    <section
      className="py-28 lg:py-36"
      id="productos"
      style={{ backgroundColor: "#f0f4f3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-teal)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--tani-teal)" }}
              >
                Catálogo Corporativo
              </span>
            </div>
            <h2
              className="font-serif text-4xl lg:text-5xl font-bold text-balance"
              style={{ color: "var(--tani-text)" }}
            >
              Productos para tu empresa
            </h2>
          </div>
          <a
            href="/tienda"
            className="inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-60 whitespace-nowrap"
            style={{ color: "var(--tani-teal)" }}
          >
            Ver catálogo completo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={categoryImages[p.category]}
                  alt={categoryAlts[p.category]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <Badge
                  className="absolute top-3 left-3 text-xs font-medium text-white border-0 z-10"
                  style={{ backgroundColor: "var(--tani-teal)" }}
                >
                  {categoryLabels[p.category]}
                </Badge>
                <Badge
                  className="absolute top-3 right-3 text-xs font-semibold text-white border-0 z-10"
                  style={{ backgroundColor: "var(--tani-orange)" }}
                >
                  Mín. {p.minOrder} und.
                </Badge>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="font-semibold text-base leading-snug mb-2 group-hover:text-[var(--tani-teal)] transition-colors"
                  style={{ color: "var(--tani-text)" }}
                >
                  {p.name}
                </h3>
                <p
                  className="text-sm leading-relaxed line-clamp-2 flex-1 mb-5"
                  style={{ color: "var(--tani-text-muted)" }}
                >
                  {p.description}
                </p>
                <div
                  className="flex items-center justify-between pt-4"
                  style={{ borderTop: "1px solid var(--tani-border)" }}
                >
                  <div>
                    <p
                      className="text-xs uppercase tracking-wide mb-0.5"
                      style={{ color: "var(--tani-text-muted)" }}
                    >
                      Precio por unidad
                    </p>
                    <p
                      className="font-bold text-xl"
                      style={{ color: "var(--tani-text)" }}
                    >
                      {formatPrice(p.price)}
                    </p>
                  </div>
                  <a
                    href="#cotizacion"
                    className="text-xs font-semibold px-4 py-2 rounded-full text-white transition-all hover:scale-105"
                    style={{ backgroundColor: "var(--tani-teal)" }}
                  >
                    Cotizar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
