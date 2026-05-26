import type { Metadata } from "next"
import { Heart, Star, Sparkles, type LucideIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Nuestra Historia | Fundación TAÑI",
  description:
    "Conoce la historia, misión, visión y el equipo detrás de Fundación TAÑI. Más de 20 años acompañando a adultos con discapacidad intelectual en Chile.",
}

const milestones = [
  {
    year: "2004",
    title: "Nuestros primeros pasos",
    description:
      "Un pequeño grupo de familias y profesionales se une con una visión compartida: crear espacios de desarrollo y trabajo digno para adultos con discapacidad intelectual en Santiago.",
  },
  {
    year: "2014",
    title: "Constitución oficial de la Fundación",
    description:
      "Tras una década de trabajo comunitario, Fundación TAÑI se constituye legalmente y formaliza sus programas de talleres productivos con apoyo profesional permanente.",
  },
  {
    year: "2018",
    title: "Expansión de talleres y alcance",
    description:
      "Abrimos nuevos talleres —jabones y galletas— sumándolos al histórico taller de suculentas, y lanzamos nuestra línea de regalos corporativos personalizados.",
  },
  {
    year: "2024",
    title: "Veinte años de impacto",
    description:
      "Celebramos dos décadas acompañando a más de 120 personas con discapacidad intelectual, con más de 15.000 productos elaborados y 35 empresas que nos eligen cada año.",
  },
]

const mvv: {
  Icon: LucideIcon
  title: string
  text: string
  accentColor: string
  accentBg: string
}[] = [
  {
    Icon: Heart,
    title: "Misión",
    text: "Acompañar a adultos con discapacidad intelectual en el desarrollo de habilidades productivas y el florecimiento de su potencial a través de talleres especializados y un entorno de afecto genuino.",
    accentColor: "var(--tani-teal)",
    accentBg: "rgba(46,125,107,0.08)",
  },
  {
    Icon: Star,
    title: "Visión",
    text: "Un Chile donde cada persona, sin importar sus capacidades, encuentre su lugar en el mundo y contribuya a la comunidad desde sus talentos únicos, con dignidad y autonomía.",
    accentColor: "var(--tani-orange)",
    accentBg: "rgba(244,162,97,0.10)",
  },
  {
    Icon: Sparkles,
    title: "Valores",
    text: "Inclusión, dignidad, respeto, amor, autosustentabilidad y comunidad guían cada una de nuestras acciones y la relación con las personas que acompañamos y quienes nos apoyan.",
    accentColor: "#8B5CF6",
    accentBg: "rgba(139,92,246,0.08)",
  },
]

const team = [
  {
    name: "María José González",
    role: "Directora Ejecutiva",
    type: "Administrativo",
    initials: "MJ",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
  },
  {
    name: "Carlos Mendoza",
    role: "Administración y Finanzas",
    type: "Administrativo",
    initials: "CM",
    color: "var(--tani-orange)",
    bg: "rgba(244,162,97,0.10)",
  },
  {
    name: "Valentina Rojas",
    role: "Terapeuta Ocupacional",
    type: "Terapeuta Ocupacional",
    initials: "VR",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
  },
  {
    name: "Felipe Soto",
    role: "Terapeuta Ocupacional",
    type: "Terapeuta Ocupacional",
    initials: "FS",
    color: "var(--tani-orange)",
    bg: "rgba(244,162,97,0.10)",
  },
]

const stats = [
  {
    value: "120+",
    label: "Beneficiarios atendidos",
    sub: "personas acompañadas desde 2004",
  },
  {
    value: "15.000+",
    label: "Productos elaborados",
    sub: "artesanías creadas en nuestros talleres",
  },
  {
    value: "35+",
    label: "Empresas aliadas",
    sub: "que confían en nuestros productos",
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-4">
      <div className="w-8 h-px" style={{ backgroundColor: light ? "var(--tani-orange)" : "var(--tani-teal)" }} />
      <span
        className="text-xs font-semibold uppercase tracking-[0.2em]"
        style={{ color: light ? "var(--tani-orange)" : "var(--tani-teal)" }}
      >
        {children}
      </span>
      <div className="w-8 h-px" style={{ backgroundColor: light ? "var(--tani-orange)" : "var(--tani-teal)" }} />
    </div>
  )
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--tani-bg)" }}>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div
        className="pt-24 pb-20 lg:pt-32 lg:pb-28"
        style={{ backgroundColor: "var(--tani-teal)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Quiénes Somos
            </span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white text-balance leading-tight mb-6">
            Nuestra Historia
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Más de veinte años acompañando a adultos con discapacidad intelectual en el
            desarrollo de habilidades productivas, vínculos comunitarios y el florecimiento
            de su potencial único.
          </p>
        </div>
      </div>

      <main id="main-content">
        {/* ── Timeline ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Eyebrow>Nuestra Trayectoria</Eyebrow>
              <h2
                className="font-serif text-4xl lg:text-5xl font-bold text-balance"
                style={{ color: "var(--tani-text)" }}
              >
                Veinte años de historia
              </h2>
            </div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex">
                  {/* Year column */}
                  <div className="w-14 sm:w-20 pt-0.5 flex-shrink-0 text-right pr-5">
                    <span
                      className="text-sm font-bold tabular-nums"
                      style={{ color: "var(--tani-teal)" }}
                    >
                      {m.year}
                    </span>
                  </div>

                  {/* Dot + connector */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-3.5 h-3.5 rounded-full mt-0.5 flex-shrink-0"
                      style={{
                        backgroundColor: "var(--tani-teal)",
                        boxShadow: "0 0 0 4px rgba(46,125,107,0.15)",
                      }}
                    />
                    {i < milestones.length - 1 && (
                      <div
                        className="w-0.5 flex-1 min-h-[72px] mt-2"
                        style={{ backgroundColor: "var(--tani-border)" }}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-5 ${i < milestones.length - 1 ? "pb-12" : ""}`}>
                    <h3
                      className="font-serif text-xl font-bold mb-2 leading-snug"
                      style={{ color: "var(--tani-text)" }}
                    >
                      {m.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--tani-text-muted)" }}
                    >
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission / Vision / Values ─────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#f0f4f3" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Eyebrow light>Lo que nos mueve</Eyebrow>
              <h2
                className="font-serif text-4xl lg:text-5xl font-bold text-balance"
                style={{ color: "var(--tani-text)" }}
              >
                Misión, Visión y Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mvv.map(({ Icon, title, text, accentColor, accentBg }) => (
                <div
                  key={title}
                  className="rounded-2xl p-8 border transition-shadow hover:shadow-md"
                  style={{
                    backgroundColor: "var(--tani-card-bg)",
                    borderColor: "var(--tani-border)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: accentBg }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: accentColor }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="font-serif text-xl font-bold mb-3"
                    style={{ color: "var(--tani-text)" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--tani-text-muted)" }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Eyebrow>Nuestro Equipo</Eyebrow>
              <h2
                className="font-serif text-4xl lg:text-5xl font-bold text-balance"
                style={{ color: "var(--tani-text)" }}
              >
                Las personas detrás de TAÑI
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-6 border text-center transition-all hover:shadow-md hover:-translate-y-1"
                  style={{
                    backgroundColor: "var(--tani-card-bg)",
                    borderColor: "var(--tani-border)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 select-none"
                    style={{ backgroundColor: member.color }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <h3
                    className="font-semibold text-base leading-snug mb-1"
                    style={{ color: "var(--tani-text)" }}
                  >
                    {member.name}
                  </h3>
                  <p
                    className="text-sm mb-3"
                    style={{ color: "var(--tani-text-muted)" }}
                  >
                    {member.role}
                  </p>
                  <span
                    className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full inline-block"
                    style={{
                      backgroundColor: member.bg,
                      color: member.color,
                    }}
                  >
                    {member.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Impact numbers ───────────────────────────────────── */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--tani-text)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-orange)" }} />
                <span
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "var(--tani-orange)" }}
                >
                  Nuestro Impacto
                </span>
                <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-orange)" }} />
              </div>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white text-balance">
                Veinte años en números
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold leading-none mb-3 tabular-nums"
                    style={{ color: "var(--tani-orange)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="font-semibold text-white text-lg mb-1">{stat.label}</p>
                  <p className="text-white/50 text-sm">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
