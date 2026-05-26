"use client"

import { Users, Leaf, Heart, TrendingUp } from "lucide-react"

const IMPACT_ITEMS = [
  {
    icon: Users,
    stat: "47",
    label: "beneficiarios activos en talleres",
  },
  {
    icon: Leaf,
    stat: "3",
    label: "talleres productivos en operación",
  },
  {
    icon: Heart,
    stat: "8 años",
    label: "transformando vidas en Chile",
  },
]

const DONOR_AVATARS = [
  { initials: "AM", color: "#2E7D6B" },
  { initials: "JR", color: "#3d9980" },
  { initials: "CP", color: "#F4A261" },
  { initials: "LV", color: "#e07c3a" },
  { initials: "MG", color: "#2E7D6B" },
]

export function ImpactPanel() {
  const GOAL_PCT = 67

  return (
    <aside className="flex flex-col gap-5" aria-label="Tu impacto este mes">

      {/* Main impact card */}
      <div
        className="rounded-3xl p-7 text-white relative overflow-hidden"
        style={{ backgroundColor: "var(--tani-teal)" }}
      >
        {/* Decorative ring */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 rounded-full opacity-10"
          style={{ backgroundColor: "#fff" }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full opacity-[0.07]"
          style={{ backgroundColor: "#fff" }}
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">
            Tu impacto este mes
          </p>
          <h2 className="font-serif text-3xl font-bold mb-5 leading-tight text-balance">
            Cada peso abre una puerta
          </h2>

          {/* Progress bar */}
          <div className="mb-2">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-semibold">Meta mensual</span>
              <span className="font-bold text-white">{GOAL_PCT}% completada</span>
            </div>
            <div
              className="w-full rounded-full h-3 overflow-hidden"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              role="progressbar"
              aria-valuenow={GOAL_PCT}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Meta mensual ${GOAL_PCT}% completada`}
            >
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${GOAL_PCT}%`,
                  backgroundColor: "var(--tani-orange)",
                }}
              />
            </div>
          </div>

          {/* Donor avatars + count */}
          <div className="flex items-center gap-3 mt-5">
            <div className="flex -space-x-2" aria-hidden="true">
              {DONOR_AVATARS.map((a, i) => (
                <span
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0"
                  style={{ backgroundColor: a.color }}
                >
                  {a.initials}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/90 leading-snug">
              <strong className="font-bold text-white">38 personas</strong> ya donaron este mes
            </p>
          </div>
        </div>
      </div>

      {/* Impact numbers */}
      <div
        className="rounded-3xl border p-6"
        style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
      >
        <p
          className="text-xs font-bold uppercase tracking-widest mb-5"
          style={{ color: "var(--tani-text-muted)" }}
        >
          Lo que hacemos posible
        </p>
        <ul className="space-y-5" role="list">
          {IMPACT_ITEMS.map(({ icon: Icon, stat, label }) => (
            <li key={stat} className="flex items-center gap-4">
              <span
                className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(46,125,107,0.1)" }}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" style={{ color: "var(--tani-teal)" }} />
              </span>
              <div>
                <p className="font-bold text-lg leading-none" style={{ color: "var(--tani-text)" }}>
                  {stat}
                </p>
                <p className="text-xs mt-0.5 leading-snug" style={{ color: "var(--tani-text-muted)" }}>
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Trending callout */}
      <div
        className="rounded-2xl p-5 flex items-start gap-4"
        style={{ backgroundColor: "rgba(244,162,97,0.1)", border: "1px solid rgba(244,162,97,0.3)" }}
      >
        <span
          className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ backgroundColor: "var(--tani-orange)" }}
          aria-hidden="true"
        >
          <TrendingUp className="w-4 h-4 text-white" />
        </span>
        <div>
          <p className="font-bold text-sm mb-1" style={{ color: "var(--tani-text)" }}>
            Las donaciones crecieron un 42%
          </p>
          <p className="text-xs leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
            Este año más personas se unieron a la causa. Tu donación nos ayuda a mantener
            el impulso y abrir nuevos talleres.
          </p>
        </div>
      </div>

      {/* Tax deductible note */}
      <p className="text-xs text-center px-2 leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
        Fundación TAÑI es una organización sin fines de lucro. Las donaciones pueden ser
        deducibles de impuestos según la Ley 19.885.
      </p>
    </aside>
  )
}
