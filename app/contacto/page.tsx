"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock, CheckCircle, Send, type LucideIcon } from "lucide-react"

const SUBJECTS = ["Compras", "Donaciones", "Corporativo", "Otro"] as const

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const INITIAL: FormState = { name: "", email: "", subject: "", message: "" }

const contactItems: {
  Icon: LucideIcon
  label: string
  value: string
  href?: string
}[] = [
  {
    Icon: Mail,
    label: "Correo",
    value: "contacto@fundaciontani.cl",
    href: "mailto:contacto@fundaciontani.cl",
  },
  {
    Icon: Phone,
    label: "Teléfono",
    value: "+56 2 2345 6789",
    href: "tel:+5622345678",
  },
  {
    Icon: MapPin,
    label: "Dirección",
    value: "Santiago, Chile",
  },
  {
    Icon: Clock,
    label: "Horario",
    value: "Lunes a Viernes, 8:30–13:00",
  },
]

const inputStyle = {
  borderColor: "var(--tani-border)",
  color: "var(--tani-text)",
  backgroundColor: "#fff",
}

const inputClass =
  "w-full rounded-md border px-3 py-2.5 text-sm outline-none transition-colors focus:border-teal-600"

export default function ContactoPage() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)

  function setField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

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
              Estamos aquí
            </span>
          </div>
          <h1 className="font-serif text-5xl lg:text-7xl font-bold text-white text-balance leading-tight mb-6">
            Contáctanos
          </h1>
          <p className="text-white/80 text-lg max-w-xl leading-relaxed">
            ¿Tienes preguntas sobre productos, pedidos corporativos o donaciones? Escríbenos
            y te respondemos a la brevedad.
          </p>
        </div>
      </div>

      <main id="main-content" className="flex-1 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-16 items-start">

            {/* ── Form ─────────────────────────────────────────── */}
            <div
              className="rounded-3xl p-8 sm:p-10 shadow-sm"
              style={{
                backgroundColor: "var(--tani-card-bg)",
                border: "1px solid var(--tani-border)",
              }}
            >
              {submitted ? (
                <div className="flex flex-col items-center gap-5 py-12 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "rgba(46,125,107,0.10)" }}
                  >
                    <CheckCircle
                      className="w-8 h-8"
                      style={{ color: "var(--tani-teal)" }}
                    />
                  </div>
                  <h3
                    className="font-serif text-2xl font-bold"
                    style={{ color: "var(--tani-text)" }}
                  >
                    ¡Mensaje recibido!
                  </h3>
                  <p
                    className="text-sm max-w-xs"
                    style={{ color: "var(--tani-text-muted)" }}
                  >
                    Te responderemos pronto.
                  </p>
                  <button
                    onClick={() => { setForm(INITIAL); setSubmitted(false) }}
                    className="mt-1 text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-60"
                    style={{ color: "var(--tani-teal)" }}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="font-serif text-2xl font-bold mb-8"
                    style={{ color: "var(--tani-text)" }}
                  >
                    Envíanos un mensaje
                  </h2>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium"
                          style={{ color: "var(--tani-text)" }}
                        >
                          Nombre *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setField("name", e.target.value)}
                          placeholder="Tu nombre"
                          className={inputClass}
                          style={inputStyle}
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium"
                          style={{ color: "var(--tani-text)" }}
                        >
                          Correo *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setField("email", e.target.value)}
                          placeholder="tu@correo.com"
                          className={inputClass}
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    {/* Subject dropdown */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium"
                        style={{ color: "var(--tani-text)" }}
                      >
                        Asunto *
                      </label>
                      <select
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) => setField("subject", e.target.value)}
                        className={inputClass}
                        style={{
                          ...inputStyle,
                          color: form.subject ? "var(--tani-text)" : "var(--tani-text-muted)",
                        }}
                      >
                        <option value="" disabled>
                          Selecciona un asunto
                        </option>
                        {SUBJECTS.map((s) => (
                          <option key={s} value={s} style={{ color: "var(--tani-text)" }}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium"
                        style={{ color: "var(--tani-text)" }}
                      >
                        Mensaje *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setField("message", e.target.value)}
                        placeholder="Cuéntanos más sobre tu consulta..."
                        className="w-full rounded-md border px-3 py-2.5 text-sm outline-none transition-colors focus:border-teal-600 resize-none"
                        style={inputStyle}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 font-semibold text-white rounded-full py-3.5 text-sm transition-all hover:scale-[1.02] hover:brightness-110"
                      style={{
                        backgroundColor: "var(--tani-teal)",
                        boxShadow: "0 4px 16px rgba(46,125,107,0.30)",
                      }}
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Enviar mensaje
                    </button>
                  </form>
                </>
              )}
            </div>

            {/* ── Contact info ──────────────────────────────── */}
            <div className="space-y-4">
              <h2
                className="font-serif text-2xl font-bold mb-6"
                style={{ color: "var(--tani-text)" }}
              >
                Información de contacto
              </h2>

              {contactItems.map(({ Icon, label, value, href }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-2xl p-4"
                  style={{
                    backgroundColor: "var(--tani-card-bg)",
                    border: "1px solid var(--tani-border)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(46,125,107,0.08)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "var(--tani-teal)" }}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: "var(--tani-text-muted)" }}
                    >
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm font-medium hover:underline"
                        style={{ color: "var(--tani-text)" }}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium" style={{ color: "var(--tani-text)" }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}

              {/* Corporate CTA */}
              <div
                className="rounded-2xl p-6 mt-2"
                style={{
                  backgroundColor: "var(--tani-card-bg)",
                  border: "1px solid var(--tani-border)",
                }}
              >
                <h3
                  className="font-semibold mb-2"
                  style={{ color: "var(--tani-text)" }}
                >
                  ¿Pedido corporativo?
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--tani-text-muted)" }}>
                  Para pedidos desde 20 unidades con packaging personalizado y certificado RSE.
                </p>
                <a
                  href="/corporativo"
                  className="inline-flex items-center gap-2 text-sm font-semibold rounded-full px-5 py-2.5 border transition-all hover:scale-105"
                  style={{
                    borderColor: "var(--tani-teal)",
                    color: "var(--tani-teal)",
                    backgroundColor: "rgba(46,125,107,0.06)",
                  }}
                >
                  Ver opciones corporativas
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
