import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Productos | Fundación TAÑI",
  description:
    "Catálogo de productos artesanales: suculentas, velas, jabones y galletas elaborados en nuestros talleres protegidos.",
}

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
