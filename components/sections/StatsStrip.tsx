const stats = [
  {
    value: "20",
    unit: "años",
    label: "de trayectoria",
    description: "Apoyando con constancia",
  },
  {
    value: "50+",
    unit: "",
    label: "beneficiarios activos",
    description: "Vidas transformadas",
  },
  {
    value: "4",
    unit: "",
    label: "talleres productivos",
    description: "Suculentas, jabones y galletas",
  },
]

export function StatsStrip() {
  return (
    <section
      aria-label="Nuestros logros"
      style={{ backgroundColor: "var(--tani-teal)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center ${
                i < stats.length - 1 ? "sm:border-r sm:border-white/20" : ""
              }`}
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-5xl lg:text-6xl font-bold text-white">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="text-2xl font-semibold text-white/80">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-white font-semibold text-base mb-1">{stat.label}</p>
              <p className="text-white/65 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
