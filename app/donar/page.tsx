"use client"

import { DonationForm } from "@/components/donation/donation-form"
import { ImpactPanel } from "@/components/donation/impact-panel"

export default function DonarPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--tani-bg)" }}>
      <main className="flex-1" id="main-content">

        {/* Subtle top stripe */}
        <div
          className="w-full h-1"
          style={{ backgroundColor: "var(--tani-teal)" }}
          aria-hidden="true"
        />

        {/* Page header */}
        <div
          className="border-b"
          style={{ borderColor: "var(--tani-border)", backgroundColor: "var(--tani-card-bg)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-3">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm" style={{ color: "var(--tani-text-muted)" }} role="list">
                <li>
                  <a href="/" className="hover:underline" style={{ color: "var(--tani-text-muted)" }}>
                    Inicio
                  </a>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold" style={{ color: "var(--tani-teal)" }} aria-current="page">
                  Donar
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-start">

            {/* Left — Donation form */}
            <div
              className="rounded-3xl p-7 sm:p-10 shadow-sm"
              style={{
                backgroundColor: "var(--tani-card-bg)",
                border: "1px solid var(--tani-border)",
              }}
            >
              <DonationForm />
            </div>

            {/* Right — Impact panel (desktop only) */}
            <div className="hidden lg:block">
              <ImpactPanel />
            </div>
          </div>

          {/* Mobile-only impact teaser */}
          <div
            className="lg:hidden mt-8 rounded-2xl p-5 flex items-center gap-4 text-white"
            style={{ backgroundColor: "var(--tani-teal)" }}
          >
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              aria-hidden="true"
            >
              38
            </span>
            <div>
              <p className="font-bold text-sm">38 personas ya donaron este mes</p>
              <p className="text-xs text-white/70 mt-0.5">Meta mensual 67% completada</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
