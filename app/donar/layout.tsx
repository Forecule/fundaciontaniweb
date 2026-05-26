import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donar | Fundación TAÑI",
  description:
    "Apoya a adultos con discapacidad intelectual con una donación mensual. Tu aporte mantiene nuestros talleres abiertos.",
}

export default function DonarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
