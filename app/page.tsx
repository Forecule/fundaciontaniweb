import { Hero } from "@/components/sections/Hero"
import { StatsStrip } from "@/components/sections/StatsStrip"
import { ProductGrid } from "@/components/sections/ProductGrid"
import { Mission } from "@/components/sections/Mission"
import { DonationCTA } from "@/components/sections/DonationCTA"
import { CorporateSection } from "@/components/sections/CorporateSection"

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ProductGrid />
      <Mission />
      <DonationCTA />
      <CorporateSection />
    </main>
  )
}
