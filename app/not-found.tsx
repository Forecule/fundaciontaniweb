import Link from "next/link"

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <p
        className="font-serif text-[10rem] font-bold leading-none select-none"
        style={{ color: "var(--tani-teal)", opacity: 0.15 }}
        aria-hidden="true"
      >
        404
      </p>
      <div className="-mt-8">
        <h1
          className="font-serif text-3xl sm:text-4xl font-bold mb-3"
          style={{ color: "var(--tani-text)" }}
        >
          Página no encontrada
        </h1>
        <p
          className="text-base max-w-md mb-8 leading-relaxed"
          style={{ color: "var(--tani-text-muted)" }}
        >
          Lo sentimos, la página que buscas no existe o fue movida a otra dirección.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-semibold text-white rounded-full px-8 py-3.5 transition-all hover:scale-105 hover:brightness-110"
          style={{
            backgroundColor: "var(--tani-teal)",
            boxShadow: "0 4px 16px rgba(46,125,107,0.3)",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
