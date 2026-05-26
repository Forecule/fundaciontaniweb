import type { Metadata } from "next"
import { CorpHero } from "@/components/corporate/corp-hero"
import { CorpValueProps } from "@/components/corporate/corp-value-props"
import { CorpProducts } from "@/components/corporate/corp-products"
import { CorpHowItWorks } from "@/components/corporate/corp-how-it-works"
import { CorpInquiryForm } from "@/components/corporate/corp-inquiry-form"
import { CorpSocialProof } from "@/components/corporate/corp-social-proof"

export const metadata: Metadata = {
  title: "Ventas Corporativas | Fundación TAÑI",
  description:
    "Regalos corporativos con impacto social. Pedidos desde 20 unidades con packaging personalizado y certificado RSE.",
}

export default function CorporativoPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <main id="main-content">
        <CorpHero />
        <CorpValueProps />
        <CorpProducts />
        <CorpHowItWorks />
        <CorpInquiryForm />
        <CorpSocialProof />
      </main>
    </div>
  )
}
