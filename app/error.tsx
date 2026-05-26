"use client"

import { useEffect } from "react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
        style={{ backgroundColor: "rgba(244,162,97,0.12)" }}
      >
        <span
          className="font-serif text-4xl font-bold select-none"
          style={{ color: "var(--tani-orange)" }}
          aria-hidden="true"
        >
          !
        </span>
      </div>

      <h1
        className="font-serif text-3xl sm:text-4xl font-bold mb-3"
        style={{ color: "var(--tani-text)" }}
      >
        Algo salió mal
      </h1>
      <p
        className="text-base max-w-sm mb-8 leading-relaxed"
        style={{ color: "var(--tani-text-muted)" }}
      >
        Ocurrió un error inesperado. Por favor intenta nuevamente o vuelve al inicio.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center gap-2 font-semibold text-white rounded-full px-8 py-3.5 transition-all hover:scale-105 hover:brightness-110"
          style={{
            backgroundColor: "var(--tani-teal)",
            boxShadow: "0 4px 16px rgba(46,125,107,0.3)",
          }}
        >
          Intentar nuevamente
        </button>
        <a
          href="/"
          className="inline-flex items-center justify-center gap-2 font-semibold rounded-full px-8 py-3.5 border-2 transition-all hover:scale-105"
          style={{ borderColor: "var(--tani-teal)", color: "var(--tani-teal)" }}
        >
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
