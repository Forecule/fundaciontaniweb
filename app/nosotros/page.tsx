import type { Metadata } from "next"
import { Heart, Star } from "lucide-react"
import type { LucideIcon } from "lucide-react"

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
      "Fundada como Organización Comunal de la Municipalidad de Lo Barnechea, con el objetivo de acoger a adultos con discapacidad intelectual que no tenían oportunidades laborales.",
  },
  {
    year: "2016",
    title: "Fundación Centro Laboral TAÑI",
    description:
      "Nos constituimos formalmente como Fundación Centro Laboral Tañi, consolidando nuestro modelo de taller protegido con apoyo profesional permanente.",
  },
  {
    year: "2018",
    title: "Expansión de talleres",
    description:
      "Abrimos nuevos talleres —jabones y galletas— sumándolos al histórico taller de suculentas, y lanzamos nuestra línea de regalos corporativos.",
  },
  {
    year: "2024",
    title: "Veinte años de impacto",
    description:
      "Celebramos dos décadas acompañando a más de 50 beneficiarios activos, con productos elaborados y decenas de empresas que nos eligen cada año.",
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
    text: "Dignificar a toda persona con discapacidad a través del trabajo potenciando sus capacidades físicas, cognitivas y emocionales, buscando favorecer su vinculación familiar y reinserción social.",
    accentColor: "var(--tani-teal)",
    accentBg: "rgba(46,125,107,0.08)",
  },
  {
    Icon: Star,
    title: "Visión",
    text: "Ayudar a construir una sociedad más inclusiva con el apoyo de la familia y comunidad.",
    accentColor: "var(--tani-orange)",
    accentBg: "rgba(244,162,97,0.10)",
  },
]

const activities = [
  "Compostaje",
  "Cocina y Repostería",
  "Cultivo de suculentas",
  "Elaboración de jabones artesanales",
  "Activación física",
  "Actividades recreativas",
  "Estimulación cognitiva",
  "Actividades educativas",
  "Expresión artística",
  "Actividades con las familias",
]

const team = [
  {
    name: "Magdalena Ramírez",
    role: "Fundadora · Presidenta del Directorio",
    extra: "Terapeuta Ocupacional",
    initials: "MR",
    color: "var(--tani-orange)",
    bg: "rgba(244,162,97,0.12)",
    featured: true,
  },
  {
    name: "María de los Ángeles Valdés F.",
    role: "Directora Ejecutiva",
    extra: "",
    initials: "MA",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
    featured: false,
  },
  {
    name: "Magdalena Burckhardt",
    role: "Terapeuta Ocupacional",
    extra: "",
    initials: "MB",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
    featured: false,
  },
  {
    name: "Claudia Monterrey",
    role: "Educadora Diferencial",
    extra: "",
    initials: "CM",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
    featured: false,
  },
  {
    name: "Stephania Sahid",
    role: "Terapeuta Ocupacional",
    extra: "",
    initials: "SS",
    color: "var(--tani-teal)",
    bg: "rgba(46,125,107,0.08)",
    featured: false,
  },
  {
    name: "Constanza Courdurier",
    role: "Coordinadora de Administración y Finanzas",
    extra: "",
    initials: "CC",
    color: "var(--tani-orange)",
    bg: "rgba(244,162,97,0.12)",
    featured: false,
  },
]

const board = [
  "Magdalena Ramírez",
  "Margarita Vial",
  "Josefina Matte",
  "Josefina García",
]

const volunteers = [
  "Patricia Zegers",
  "Andrea Valdes",
  "Miriel Nesvadba",
  "Tere Bulnes",
  "Soledad Auger",
  "María Paz Dueñas",
  "Marcela Osses",
  "Mariana Saito",
]

const stats = [
  { value: "20+", label: "Años de trayectoria", sub: "apoyando con constancia" },
  { value: "50+", label: "Beneficiarios activos", sub: "vidas transformadas" },
  { value: "4", label: "Talleres productivos", sub: "suculentas, jabones y galletas" },
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
      {/* Hero */}
      <div className="pt-24 pb-20 lg:pt-32 lg:pb-28" style={{ backgroundColor: "var(--tani-teal)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/40" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Quiénes Somos
            </span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white text-balance leading-tight mb-6">
            Conoce a Fundación TAÑI
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Más de veinte años acompañando a adultos con discapacidad intelectual en el
            desarrollo de habilidades productivas, vínculos comunitarios y el florecimiento
            de su potencial único.
          </p>
        </div>
      </div>

      <main id="main-content">
        {/* About text */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <Eyebrow>Nuestra Historia</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance" style={{ color: "var(--tani-text)" }}>
                Veinte años de historia
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
              <p>
                Fundada en el 2004 como Organización Comunal de la Municipalidad de Lo Barnechea,
                para en el año 2016 pasar a ser Fundación Centro Laboral Tañi, un taller protegido
                cuyo objetivo es acoger a personas con discapacidad intelectual mayores de 18 años
                que no tienen oportunidad ni competencias laborales para trabajar en una empresa.
              </p>
              <p>
                TAÑI proviene del Mapudungun &ldquo;mio&rdquo;, nombre propuesto por un beneficiario
                fundador y que a través del tiempo ha logrado el sentido de pertenencia a la
                comunidad Tañi.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#f0f4f3" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Eyebrow>Nuestra Trayectoria</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance" style={{ color: "var(--tani-text)" }}>
                Hitos que nos definen
              </h2>
            </div>
            <div className="max-w-2xl mx-auto">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex">
                  <div className="w-14 sm:w-20 pt-0.5 flex-shrink-0 text-right pr-5">
                    <span className="text-sm font-bold tabular-nums" style={{ color: "var(--tani-teal)" }}>
                      {m.year}
                    </span>
                  </div>
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div
                      className="w-3.5 h-3.5 rounded-full mt-0.5 flex-shrink-0"
                      style={{ backgroundColor: "var(--tani-teal)", boxShadow: "0 0 0 4px rgba(46,125,107,0.15)" }}
                    />
                    {i < milestones.length - 1 && (
                      <div className="w-0.5 flex-1 min-h-[72px] mt-2" style={{ backgroundColor: "var(--tani-border)" }} />
                    )}
                  </div>
                  <div className={`flex-1 pl-5 ${i < milestones.length - 1 ? "pb-12" : ""}`}>
                    <h3 className="font-serif text-xl font-bold mb-2 leading-snug" style={{ color: "var(--tani-text)" }}>
                      {m.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Eyebrow>Lo que nos mueve</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance" style={{ color: "var(--tani-text)" }}>
                Misión y Visión
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {mvv.map(({ Icon, title, text, accentColor, accentBg }) => (
                <div
                  key={title}
                  className="rounded-2xl p-8 border transition-shadow hover:shadow-md"
                  style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: accentBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: accentColor }} aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3" style={{ color: "var(--tani-text)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--tani-text-muted)" }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#f0f4f3" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Eyebrow>Lo que hacemos</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance" style={{ color: "var(--tani-text)" }}>
                Qué hacemos en Tañi
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {activities.map((act) => (
                <span
                  key={act}
                  className="text-sm font-semibold px-5 py-2.5 rounded-full"
                  style={{ backgroundColor: "var(--tani-teal)", color: "#fff" }}
                >
                  {act}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <Eyebrow>Nuestro Equipo</Eyebrow>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance" style={{ color: "var(--tani-text)" }}>
                Miembros
              </h2>
            </div>

            {/* Featured founder */}
            <div className="flex justify-center mb-10">
              {team.filter((m) => m.featured).map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-8 border text-center w-64 transition-all hover:shadow-md hover:-translate-y-1"
                  style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4 select-none"
                    style={{ backgroundColor: member.color }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-base leading-snug mb-1" style={{ color: "var(--tani-text)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold mb-1" style={{ color: "var(--tani-orange)" }}>
                    Fundadora
                  </p>
                  <p className="text-sm" style={{ color: "var(--tani-text-muted)" }}>
                    Presidenta del Directorio
                  </p>
                  <p className="text-sm" style={{ color: "var(--tani-text-muted)" }}>
                    Terapeuta Ocupacional
                  </p>
                </div>
              ))}
            </div>

            {/* Rest of team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {team.filter((m) => !m.featured).map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl p-6 border text-center transition-all hover:shadow-md hover:-translate-y-1"
                  style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-bold mx-auto mb-4 select-none"
                    style={{ backgroundColor: member.color }}
                    aria-hidden="true"
                  >
                    {member.initials}
                  </div>
                  <h3 className="font-semibold text-base leading-snug mb-1" style={{ color: "var(--tani-text)" }}>
                    {member.name}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--tani-text-muted)" }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board & Volunteers */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#f0f4f3" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {/* Directorio */}
              <div>
                <div className="mb-8">
                  <Eyebrow>Gobierno</Eyebrow>
                  <h2 className="font-serif text-3xl font-bold text-center" style={{ color: "var(--tani-text)" }}>
                    Directorio
                  </h2>
                </div>
                <ul className="space-y-3" role="list">
                  {board.map((name) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl border"
                      style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--tani-teal)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium" style={{ color: "var(--tani-text)" }}>
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Voluntariado */}
              <div>
                <div className="mb-8">
                  <Eyebrow>Comunidad</Eyebrow>
                  <h2 className="font-serif text-3xl font-bold text-center" style={{ color: "var(--tani-text)" }}>
                    Voluntariado
                  </h2>
                </div>
                <ul className="space-y-3" role="list">
                  {volunteers.map((name) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 py-3 px-4 rounded-xl border"
                      style={{ backgroundColor: "var(--tani-card-bg)", borderColor: "var(--tani-border)" }}
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: "var(--tani-orange)" }}
                        aria-hidden="true"
                      />
                      <span className="text-sm font-medium" style={{ color: "var(--tani-text)" }}>
                        {name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact numbers */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "var(--tani-text)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-orange)" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--tani-orange)" }}>
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
