import { Heart, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react"

const links = {
  foundation: [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Talleres", href: "#nosotros" },
    { label: "Impacto", href: "#nosotros" },
  ],
  products: [
    { label: "Suculentas", href: "#productos" },
    { label: "Jabones Artesanales", href: "#productos" },
    { label: "Galletas Artesanales", href: "#productos" },
  ],
  corporate: [
    { label: "Regalos Corporativos", href: "#corporativo" },
    { label: "RSE", href: "#corporativo" },
    { label: "Donaciones", href: "#donar" },
    { label: "Contacto", href: "#contacto" },
  ],
}

export function Footer() {
  return (
    <footer
      id="contacto"
      style={{ backgroundColor: "var(--tani-text)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-bold" style={{ color: "var(--tani-orange)" }}>
                TAÑI
              </span>
              <span className="text-xs font-medium uppercase tracking-widest text-white/60">
                Fundación
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
              Cada producto que adquieres contribuye a la dignidad y desarrollo de adultos
              con discapacidad intelectual en Chile.
            </p>

            {/* Contact info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white/50 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@fundaciontani.cl"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  info@fundaciontani.cl
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white/50 flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+56990712204"
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  +569 9071 2204
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white/50 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-white/70">Santiago, Chile</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Instagram de Fundación TAÑI"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(244,162,97,0.2)", color: "var(--tani-orange)" }}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook de Fundación TAÑI"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(244,162,97,0.2)", color: "var(--tani-orange)" }}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Fundación
            </h3>
            <ul className="space-y-3" role="list">
              {links.foundation.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Productos
            </h3>
            <ul className="space-y-3" role="list">
              {links.products.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/50 mb-5">
              Corporativo
            </h3>
            <ul className="space-y-3" role="list">
              {links.corporate.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        >
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} Fundación TAÑI · Todos los derechos reservados
          </p>
          <p className="flex items-center gap-1.5 text-white/50 text-xs">
            Hecho con{" "}
            <Heart
              className="w-3 h-3 fill-current"
              style={{ color: "var(--tani-orange)" }}
              aria-hidden="true"
            />{" "}
            para dignificar vidas
          </p>
        </div>
      </div>
    </footer>
  )
}
