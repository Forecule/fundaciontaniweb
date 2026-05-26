"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { formatCLP, BLUR_DATA_URL } from "@/lib/utils"

export type { Product }

interface ProductCardProps {
  product: Product
}

const categoryImages: Record<string, string> = {
  suculentas: "/images/succulents.jpg",
  jabones:    "/images/soaps.jpg",
  galletas:   "/images/cookies.jpg",
}

const categoryLabels: Record<string, string> = {
  suculentas: "Suculentas",
  jabones:    "Jabones",
  galletas:   "Galletas",
}

const WHATSAPP_NUMBER = "56990712204"

export function ProductCard({ product }: ProductCardProps) {
  const waMessage = encodeURIComponent(`Hola, me interesa el producto: ${product.name}`)
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={categoryImages[product.category]}
          alt={`${product.name} — elaborado por Fundación TAÑI`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />

        {/* Category badge */}
        <Badge
          className="absolute top-3 left-3 text-xs font-medium text-white border-0 z-10"
          style={{ backgroundColor: "var(--tani-teal)" }}
        >
          {categoryLabels[product.category]}
        </Badge>

        {/* Corporate minimum order badge */}
        {product.isCorporate && product.minOrder > 1 && (
          <Badge
            className="absolute top-3 right-3 text-xs font-semibold text-white border-0 z-10"
            style={{ backgroundColor: "var(--tani-orange)" }}
          >
            Mín: {product.minOrder} und.
          </Badge>
        )}

        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
            <span className="text-white font-semibold text-sm bg-black/60 px-4 py-2 rounded-full">
              Agotado
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3
          className="font-semibold text-base leading-tight mb-2 group-hover:text-[var(--tani-teal)] transition-colors"
          style={{ color: "var(--tani-text)" }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
          style={{ color: "var(--tani-text-muted)" }}
        >
          {product.description}
        </p>

        {/* Price and CTA */}
        <div className="flex items-center justify-between gap-3 mt-auto pt-3 border-t border-gray-100">
          <span className="font-bold text-lg" style={{ color: "var(--tani-text)" }}>
            {product.priceFrom ? "desde " : ""}{formatCLP(product.price)}
          </span>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold rounded-full px-4 py-2 text-sm transition-all hover:scale-105"
            style={{ backgroundColor: "var(--tani-teal)" }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
            </svg>
            Pedir
          </a>
        </div>
      </div>
    </article>
  )
}
