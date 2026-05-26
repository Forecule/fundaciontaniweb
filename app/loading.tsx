export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--tani-bg)" }}
    >
      <div
        className="w-12 h-12 rounded-full border-4 animate-spin"
        style={{
          borderColor: "var(--tani-teal)",
          borderTopColor: "transparent",
        }}
        role="status"
        aria-label="Cargando…"
      />
    </div>
  )
}
