export interface Product {
  id: string
  name: string
  category: "suculentas" | "jabones" | "galletas"
  price: number
  priceFrom?: boolean
  description: string
  longDescription: string
  image: string
  inStock: boolean
  minOrder: number
  isCorporate: boolean
  badge?: "Más vendido" | "Nuevo" | "Corporativo"
  tags: string[]
}

export const products: Product[] = [
  // ── Suculentas ─────────────────────────────────────────────────────────────
  {
    id: "suc-01",
    name: "Suculenta TAÑI",
    category: "suculentas",
    price: 2500,
    priceFrom: true,
    description: "Suculenta reproducida y cuidada por nuestros beneficiarios, en variedad de especies.",
    longDescription:
      "Variedad de suculentas reproducidas y cuidadas con dedicación por los beneficiarios de la Fundación TAÑI. Cada planta es única. Disponible en múltiples especies. Para consultar disponibilidad y armarte tu propio pack, contáctanos al +569 9071 2204 o escríbenos a info@fundaciontani.cl.",
    image: "/images/succulents.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    badge: "Más vendido",
    tags: ["suculenta", "planta", "decoración", "interior"],
  },
  {
    id: "suc-02",
    name: "Suculenta + Macetero Artesanal",
    category: "suculentas",
    price: 2500,
    priceFrom: true,
    description: "Suculenta en macetero artesanal hecho a mano. Variedad de formas y tamaños disponibles.",
    longDescription:
      "Combinación de suculentas con maceteros artesanales de cerámica elaborados a mano en el taller de la Fundación. Cada pieza es única. Ideal como regalo o decoración. Consulta disponibilidad y arma tu propio pack escribiéndonos a info@fundaciontani.cl o al +569 9071 2204.",
    image: "/images/succulents.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    badge: "Nuevo",
    tags: ["suculenta", "macetero", "cerámica", "regalo", "decoración"],
  },
  {
    id: "suc-03",
    name: "Pack Corporativo Suculentas",
    category: "suculentas",
    price: 2500,
    priceFrom: true,
    description: "Suculenta en macetero personalizable con tu logo o mensaje. Pedido mínimo 20 unidades.",
    longDescription:
      "Suculentas en maceteros artesanales personalizables con el logo o mensaje de tu empresa. Perfectas para regalar a colaboradores, clientes o en eventos corporativos. Precio por unidad desde pedidos de 20 unidades. Contáctanos al +569 9071 2204 o a info@fundaciontani.cl para cotizar.",
    image: "/images/succulents.jpg",
    inStock: true,
    minOrder: 20,
    isCorporate: true,
    badge: "Corporativo",
    tags: ["corporativo", "regalo empresarial", "personalizable", "suculenta", "evento"],
  },

  // ── Jabones ─────────────────────────────────────────────────────────────────
  {
    id: "jab-01",
    name: "Jabón Artesanal TAÑI",
    category: "jabones",
    price: 2500,
    description: "Jabón artesanal elaborado con productos naturales para el cuidado de la piel.",
    longDescription:
      "Jabones artesanales fabricados con productos naturales para el cuidado de la piel, elaborados por los beneficiarios de la Fundación TAÑI. Disponibles en variedad de fragancias y formatos. Puedes elegir uno o armar tu propio pack. Escríbenos a info@fundaciontani.cl o al +569 9071 2204.",
    image: "/images/soaps.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    badge: "Más vendido",
    tags: ["jabón", "natural", "artesanal", "cuidado de piel"],
  },
  {
    id: "jab-02",
    name: "Pack Jabones TAÑI",
    category: "jabones",
    price: 2500,
    priceFrom: true,
    description: "Arma tu propio pack eligiendo entre nuestra variedad de jabones artesanales.",
    longDescription:
      "Elige entre la variedad de jabones artesanales de la Fundación TAÑI y arma tu propio pack a medida. Ideal para regalar o para uso personal. Contáctanos al +569 9071 2204 o a info@fundaciontani.cl para consultar disponibilidad y cotizar tu pack.",
    image: "/images/soaps.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    tags: ["jabón", "pack", "regalo", "artesanal"],
  },
  {
    id: "jab-03",
    name: "Pack Corporativo Jabones",
    category: "jabones",
    price: 2500,
    priceFrom: true,
    description: "Jabón artesanal con etiqueta personalizada de tu empresa. Pedido mínimo 25 unidades.",
    longDescription:
      "Jabones artesanales con etiqueta personalizada con el logo y mensaje de tu empresa. Ideal para kits de bienvenida, eventos corporativos o regalos institucionales. Precio unitario desde 25 unidades. Escríbenos a info@fundaciontani.cl o al +569 9071 2204 para cotizar.",
    image: "/images/soaps.jpg",
    inStock: true,
    minOrder: 25,
    isCorporate: true,
    badge: "Corporativo",
    tags: ["corporativo", "jabón", "personalizable", "regalo empresarial"],
  },

  // ── Galletas ────────────────────────────────────────────────────────────────
  {
    id: "gal-01",
    name: "Galletón Avena-Nuez o Avena-Chocolate",
    category: "galletas",
    price: 1000,
    description: "Galletón artesanal de avena en versión nuez o chocolate, elaborado por nuestros beneficiarios.",
    longDescription:
      "Galletón artesanal elaborado por los beneficiarios de la Fundación TAÑI. Disponible en sabores Avena-Nuez y Avena-Chocolate. Hecho con ingredientes seleccionados para el cuidado de la nutrición de quienes los elaboran. Contáctanos al +569 9071 2204 o a info@fundaciontani.cl para hacer tu pedido.",
    image: "/images/cookies.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    badge: "Más vendido",
    tags: ["galleta", "avena", "artesanal", "nuez", "chocolate"],
  },
  {
    id: "gal-02",
    name: "Galletas TAÑI 40 grs.",
    category: "galletas",
    price: 2000,
    description: "Bolsa de galletas artesanales de avena de 40 grs. en sabor Avena-Nuez o Avena-Chocolate.",
    longDescription:
      "Galletas artesanales de avena elaboradas por los beneficiarios de la Fundación TAÑI. Bolsa de 40 grs. Disponible en Avena-Nuez y Avena-Chocolate. Para hacer tu pedido contáctanos al +569 9071 2204 o escríbenos a info@fundaciontani.cl.",
    image: "/images/cookies.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    tags: ["galleta", "avena", "artesanal"],
  },
  {
    id: "gal-03",
    name: "Galletas TAÑI 80 grs.",
    category: "galletas",
    price: 2500,
    description: "Bolsa de galletas artesanales de avena de 80 grs. en sabor Avena-Nuez o Avena-Chocolate.",
    longDescription:
      "Galletas artesanales de avena elaboradas por los beneficiarios de la Fundación TAÑI. Bolsa de 80 grs. Disponible en Avena-Nuez y Avena-Chocolate. Para hacer tu pedido contáctanos al +569 9071 2204 o escríbenos a info@fundaciontani.cl.",
    image: "/images/cookies.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    tags: ["galleta", "avena", "artesanal"],
  },
  {
    id: "gal-04",
    name: "Galletas TAÑI 100 grs.",
    category: "galletas",
    price: 3000,
    description: "Bolsa de galletas artesanales de avena de 100 grs. en sabor Avena-Nuez o Avena-Chocolate.",
    longDescription:
      "Galletas artesanales de avena elaboradas por los beneficiarios de la Fundación TAÑI. Bolsa de 100 grs. Disponible en Avena-Nuez y Avena-Chocolate. Para hacer tu pedido contáctanos al +569 9071 2204 o escríbenos a info@fundaciontani.cl.",
    image: "/images/cookies.jpg",
    inStock: true,
    minOrder: 1,
    isCorporate: false,
    tags: ["galleta", "avena", "artesanal"],
  },
  {
    id: "gal-05",
    name: "Pack Corporativo Galletas",
    category: "galletas",
    price: 1000,
    priceFrom: true,
    description: "Pack de galletas artesanales personalizables para tu empresa. Arma tu propio pack.",
    longDescription:
      "Arma un pack corporativo de galletas artesanales TAÑI para regalar a tus colaboradores o clientes. Disponible en Avena-Nuez y Avena-Chocolate en distintos formatos (galletón, 40 grs., 80 grs., 100 grs.). Contáctanos al +569 9071 2204 o a info@fundaciontani.cl para cotizar.",
    image: "/images/cookies.jpg",
    inStock: true,
    minOrder: 10,
    isCorporate: true,
    badge: "Corporativo",
    tags: ["corporativo", "galleta", "pack", "personalizable", "regalo empresarial"],
  },
]

export function getProducts(): Product[] {
  return products
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  const categories: Product["category"][] = ["suculentas", "jabones", "galletas"]
  return categories.map(
    (cat) => products.find((p) => p.category === cat && !p.isCorporate)!
  )
}

export function getCorporateProducts(): Product[] {
  return products.filter((p) => p.isCorporate)
}
