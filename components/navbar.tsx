"use client"

import { useState, useEffect } from "react"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Corporativo", href: "/corporativo" },
  { label: "Contacto", href: "/#contacto" },
]

export function Navbar({ forceScrolled = false }: { forceScrolled?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(forceScrolled)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (forceScrolled) return
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [forceScrolled])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20" aria-label="Navegación principal">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <span
              className="font-serif text-2xl font-bold tracking-tight"
              style={{ color: "var(--tani-teal)" }}
            >
              TAÑI
            </span>
            <span
              className="hidden sm:block text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--tani-text-muted)" }}
            >
              Fundación
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: isScrolled ? "var(--tani-text)" : "var(--tani-text)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a href="/donar">
              <Button
                className="flex items-center gap-2 font-bold text-white rounded-full px-8 py-3 text-base shadow-lg shadow-orange-200 transition-all hover:scale-105 hover:shadow-xl hover:shadow-orange-300"
                style={{
                  backgroundColor: "var(--tani-orange)",
                  borderColor: "transparent",
                  outline: "3px solid rgba(244,162,97,0.25)",
                  outlineOffset: "2px",
                }}
              >
                <Heart className="w-5 h-5 fill-white" aria-hidden="true" />
                Donar Ahora
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" style={{ color: "var(--tani-text)" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: "var(--tani-text)" }} />
            )}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium py-2"
                style={{ color: "var(--tani-text)" }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="/donar" className="block">
              <Button
                className="w-full flex items-center justify-center gap-2 font-semibold text-white rounded-full py-3 mt-2"
                style={{ backgroundColor: "var(--tani-orange)" }}
              >
                <Heart className="w-4 h-4 fill-white" aria-hidden="true" />
                Donar Ahora
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
