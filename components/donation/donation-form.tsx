"use client"

import { useState } from "react"
import { ShieldCheck, RefreshCcw, Ban, ChevronDown, ChevronUp } from "lucide-react"
import { formatCLP } from "@/lib/utils"

const DONATION_LINKS = {
  mensual: "https://fundaciontani.donando.cl/",
  unica: "https://fundaciontani.donando.cl/?once=true",
}

const PRESET_AMOUNTS = [
  { value: 2500, label: "$2.500", description: "Cubre materiales para un día" },
  { value: 5000, label: "$5.000", description: "Apoya a un beneficiario por una semana" },
  { value: 10000, label: "$10.000", description: "Financia un taller completo" },
  { value: 0, label: "Otro monto", description: "Elige el monto que prefieras" },
]

export function DonationForm() {
  const [frequency, setFrequency] = useState<"mensual" | "unica">("mensual")
  const [selectedAmount, setSelectedAmount] = useState<number>(5000)
  const [customAmount, setCustomAmount] = useState<string>("")
  const [bankOpen, setBankOpen] = useState(false)

  const isCustom = selectedAmount === 0
  const suffix = frequency === "mensual" ? "/mes" : " una vez"

  const ctaLabel =
    isCustom && customAmount
      ? `Donar ${formatCLP(parseInt(customAmount.replace(/\D/g, ""), 10) || 0)}${suffix} →`
      : selectedAmount > 0
      ? `Donar ${formatCLP(selectedAmount)}${suffix} →`
      : "Elige un monto →"

  return (
    <section className="w-full">
      {/* Headline */}
      <h1
        className="font-serif text-4xl sm:text-5xl font-bold leading-[1.1] text-balance mb-3"
        style={{ color: "var(--tani-text)" }}
      >
        Haz una diferencia hoy
      </h1>
      <p className="text-base leading-relaxed mb-8" style={{ color: "var(--tani-text-muted)" }}>
        Tu aporte mensual mantiene nuestros talleres abiertos y dignifica la vida de adultos
        con discapacidad intelectual.
      </p>

      {/* Frequency toggle */}
      <div
        className="inline-flex rounded-xl p-1 mb-8"
        style={{ backgroundColor: "var(--tani-border)" }}
        role="group"
        aria-label="Frecuencia de donación"
      >
        {(["mensual", "unica"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFrequency(f)}
            className="relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
            style={
              frequency === f
                ? {
                    backgroundColor: "var(--tani-teal)",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(46,125,107,0.35)",
                  }
                : { color: "var(--tani-text-muted)", backgroundColor: "transparent" }
            }
            aria-pressed={frequency === f}
          >
            {f === "mensual" ? "Mensual" : "Única vez"}
            {f === "mensual" && (
              <span
                className="absolute -top-2.5 -right-2.5 text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                style={{ backgroundColor: "var(--tani-orange)", color: "#fff" }}
              >
                Popular
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Amount cards 2x2 grid */}
      <fieldset className="mb-8">
        <legend className="sr-only">Selecciona un monto</legend>
        <div className="grid grid-cols-2 gap-3">
          {PRESET_AMOUNTS.map((option) => {
            const isSelected = selectedAmount === option.value
            return (
              <button
                key={option.value}
                onClick={() => {
                  setSelectedAmount(option.value)
                  if (option.value !== 0) setCustomAmount("")
                }}
                className="relative text-left rounded-2xl p-4 sm:p-5 border-2 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 hover:-translate-y-0.5 hover:shadow-md"
                style={
                  isSelected
                    ? {
                        borderColor: "var(--tani-teal)",
                        backgroundColor: "rgba(46,125,107,0.07)",
                        boxShadow: "0 0 0 1px var(--tani-teal)",
                      }
                    : {
                        borderColor: "var(--tani-border)",
                        backgroundColor: "var(--tani-card-bg)",
                      }
                }
                aria-pressed={isSelected}
              >
                {/* Selected check dot */}
                {isSelected && (
                  <span
                    className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--tani-teal)" }}
                    aria-hidden="true"
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                )}
                <span
                  className="block font-bold text-xl sm:text-2xl mb-1"
                  style={{ color: isSelected ? "var(--tani-teal)" : "var(--tani-text)" }}
                >
                  {option.label}
                </span>
                <span className="block text-xs leading-snug" style={{ color: "var(--tani-text-muted)" }}>
                  {option.description}
                </span>

                {/* Custom amount input */}
                {option.value === 0 && isSelected && (
                  <div className="mt-3" onClick={(e) => e.stopPropagation()}>
                    <div
                      className="flex items-center rounded-lg border overflow-hidden"
                      style={{ borderColor: "var(--tani-teal)", backgroundColor: "#fff" }}
                    >
                      <span
                        className="px-3 text-sm font-semibold flex-shrink-0"
                        style={{ color: "var(--tani-teal)" }}
                      >
                        $
                      </span>
                      <input
                        type="text"
                        inputMode="numeric"
                        placeholder="Ej: 7.500"
                        value={customAmount}
                        onChange={(e) => {
                          const raw = e.target.value.replace(/\D/g, "")
                          setCustomAmount(raw ? parseInt(raw, 10).toLocaleString("es-CL") : "")
                        }}
                        className="flex-1 py-2 pr-3 text-sm bg-transparent focus:outline-none"
                        style={{ color: "var(--tani-text)" }}
                        autoFocus
                        aria-label="Monto personalizado en pesos chilenos"
                      />
                    </div>
                  </div>
                )}
              </button>
            )
          })}
        </div>
      </fieldset>

      {/* CTA Button */}
      <button
        onClick={() => window.open(DONATION_LINKS[frequency], "_blank", "noopener,noreferrer")}
        className="w-full flex items-center justify-center py-4 px-6 rounded-2xl font-bold text-white text-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          backgroundColor: "var(--tani-orange)",
          boxShadow: "0 6px 24px rgba(244,162,97,0.4)",
        }}
      >
        {ctaLabel}
      </button>

      {/* Trust row */}
      <div
        className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-5 text-xs font-medium"
        style={{ color: "var(--tani-text-muted)" }}
      >
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" style={{ color: "var(--tani-teal)" }} />
          Pago seguro
        </span>
        <span className="flex items-center gap-1.5">
          <Ban className="w-3.5 h-3.5" aria-hidden="true" style={{ color: "var(--tani-teal)" }} />
          Sin costo adicional
        </span>
        <span className="flex items-center gap-1.5">
          <RefreshCcw className="w-3.5 h-3.5" aria-hidden="true" style={{ color: "var(--tani-teal)" }} />
          Cancela cuando quieras
        </span>
      </div>

      {/* Bank transfer accordion */}
      <div
        className="mt-6 rounded-2xl border overflow-hidden"
        style={{ borderColor: "var(--tani-border)" }}
      >
        <button
          onClick={() => setBankOpen(!bankOpen)}
          className="w-full flex items-center justify-between px-5 py-4 text-sm font-semibold text-left transition-colors hover:bg-black/[0.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset"
          style={{ color: "var(--tani-text)" }}
          aria-expanded={bankOpen}
        >
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: "var(--tani-teal)" }}>
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Transferencia bancaria directa
          </span>
          {bankOpen
            ? <ChevronUp className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            : <ChevronDown className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          }
        </button>
        {bankOpen && (
          <div
            className="px-5 pb-5 pt-1 text-sm space-y-2 border-t"
            style={{ borderColor: "var(--tani-border)", color: "var(--tani-text-muted)" }}
          >
            <p className="font-semibold" style={{ color: "var(--tani-text)" }}>Datos bancarios</p>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 leading-snug">
              <span className="font-medium" style={{ color: "var(--tani-text)" }}>Banco</span>
              <span>Banco Estado</span>
              <span className="font-medium" style={{ color: "var(--tani-text)" }}>Tipo</span>
              <span>Cuenta Corriente</span>
              <span className="font-medium" style={{ color: "var(--tani-text)" }}>N° Cuenta</span>
              <span>(por confirmar)</span>
              <span className="font-medium" style={{ color: "var(--tani-text)" }}>RUT</span>
              <span>(por confirmar)</span>
              <span className="font-medium" style={{ color: "var(--tani-text)" }}>Email</span>
              <span>donaciones@fundaciontani.cl</span>
            </div>
            <p className="text-xs mt-3 pt-3 border-t" style={{ borderColor: "var(--tani-border)" }}>
              Envía el comprobante a donaciones@fundaciontani.cl con el asunto "Donación + tu nombre" para enviar certificado tributario.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
