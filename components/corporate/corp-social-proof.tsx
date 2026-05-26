const companies = [
  { name: "Ripley", initials: "RI" },
  { name: "Tánica", initials: "TÁ" },
  { name: "BancoEstado", initials: "BE" },
  { name: "Entel", initials: "EN" },
  { name: "Cencosud", initials: "CE" },
  { name: "Falabella", initials: "FA" },
]

export function CorpSocialProof() {
  return (
    <section
      className="py-28 lg:py-36"
      style={{ backgroundColor: "var(--tani-bg)" }}
      id="clientes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logo grid */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-teal)" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--tani-teal)" }}
            >
              Empresas que confían en nosotros
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-teal)" }} />
          </div>
          <p
            className="text-sm"
            style={{ color: "var(--tani-text-muted)" }}
          >
            Más de 50 empresas en Chile ya eligen TAÑI para sus regalos corporativos
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5 mb-24">
          {companies.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-center w-36 h-16 rounded-2xl border transition-all hover:shadow-md"
              style={{
                backgroundColor: "white",
                borderColor: "var(--tani-border)",
              }}
              aria-label={`Logo de ${c.name}`}
            >
              <span
                className="font-serif text-xl font-bold tracking-tight"
                style={{ color: "var(--tani-text-muted)" }}
              >
                {c.initials}
              </span>
              <span
                className="font-sans text-xs font-semibold ml-1.5"
                style={{ color: "var(--tani-text-muted)" }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="w-12 h-1 rounded-full mx-auto mb-10"
            style={{ backgroundColor: "var(--tani-orange)" }}
          />
          <blockquote>
            <p
              className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-balance mb-8"
              style={{ color: "var(--tani-text)" }}
            >
              &ldquo;El detalle que más valoraron nuestros colaboradores no fue el regalo en sí, sino saber que detrás había una historia real de inclusión y trabajo digno.&rdquo;
            </p>
            <footer className="flex flex-col items-center gap-2">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm"
                style={{ backgroundColor: "var(--tani-teal)" }}
                aria-hidden="true"
              >
                MR
              </div>
              <div>
                <p
                  className="font-semibold text-sm"
                  style={{ color: "var(--tani-text)" }}
                >
                  María Rodríguez
                </p>
                <p
                  className="text-xs"
                  style={{ color: "var(--tani-text-muted)" }}
                >
                  Gerente de RSE, Tánica S.A.
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
