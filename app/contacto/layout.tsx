import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Fundación TAÑI",
  description:
    "Escríbenos para consultas sobre productos, donaciones o pedidos corporativos. Estamos en Santiago, Chile, de lunes a viernes.",
}

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
