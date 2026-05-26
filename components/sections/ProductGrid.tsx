import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BLUR_DATA_URL } from "@/lib/utils"

const featuredProducts = [
  {
    id: 1,
    name: "Suculentas",
    description: "Plantas artesanales en macetas únicas, cultivadas con cariño en nuestro taller verde.",
    price: "CLP $4.500",
    image: "/images/succulents.jpg",
    alt: "Suculentas artesanales en macetas pintadas a mano elaboradas por Fundación TAÑI",
    tag: "Taller Verde",
  },
  {
    id: 2,
    name: "Velas Aromáticas",
    description: "Velas de soya con flores secas naturales y aromas relajantes, elaboradas a mano.",
    price: "CLP $7.900",
    image: "/images/candles.jpg",
    alt: "Velas aromáticas artesanales de cera de soja elaboradas por Fundación TAÑI",
    tag: "Taller de Velas",
  },
  {
    id: 3,
    name: "Jabones Naturales",
    description: "Jabones artesanales con ingredientes botánicos, libres de químicos agresivos.",
    price: "CLP $3.500",
    image: "/images/soaps.jpg",
    alt: "Jabones naturales artesanales con ingredientes botánicos elaborados por Fundación TAÑI",
    tag: "Taller Natural",
  },
  {
    id: 4,
    name: "Galletas Artesanales",
    description: "Galletas decoradas con amor, elaboradas con recetas tradicionales y mucho talento.",
    price: "CLP $6.200",
    image: "/images/cookies.jpg",
    alt: "Galletas artesanales decoradas a mano por los talleristas de Fundación TAÑI",
    tag: "Taller Dulce",
  },
]

export function ProductGrid() {
  return (
    <section
      id="productos"
      style={{ backgroundColor: "var(--tani-bg)" }}
      className="py-28 lg:py-36"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "var(--tani-orange)" }}
          >
            Hechos con Amor
          </span>
          <h2
            className="font-serif text-4xl lg:text-5xl font-bold mb-4 text-balance"
            style={{ color: "var(--tani-text)" }}
          >
            Nuestros Productos
          </h2>
          <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "var(--tani-text-muted)" }}>
            Cada producto es único, elaborado por nuestros talentosos beneficiarios en sus talleres productivos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer"
              style={{ backgroundColor: "var(--tani-card-bg)" }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full z-10"
                  style={{ backgroundColor: "var(--tani-teal)", color: "#fff" }}
                >
                  {product.tag}
                </span>
              </div>

              <CardContent className="p-5">
                <h3
                  className="font-serif text-xl font-semibold mb-2"
                  style={{ color: "var(--tani-text)" }}
                >
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--tani-text-muted)" }}>
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold" style={{ color: "var(--tani-teal)" }}>
                    {product.price}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all"
                    style={{ color: "var(--tani-teal)" }}
                  >
                    Ver más <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* See all */}
        <div className="text-center mt-12">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-semibold border-2 transition-all hover:scale-105"
            style={{ borderColor: "var(--tani-teal)", color: "var(--tani-teal)" }}
          >
            <a href="/productos">Ver todos los productos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
