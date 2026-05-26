"use client"

import { useState } from "react"
import { CheckCircle, Send } from "lucide-react"

const PRODUCT_OPTIONS = [
  { id: "suculentas", label: "Suculentas" },
  { id: "jabones",    label: "Jabones" },
  { id: "galletas",   label: "Galletas" },
]

interface FormState {
  companyName: string
  contactName: string
  email: string
  phone: string
  products: string[]
  quantity: string
  deliveryDate: string
  message: string
}

interface Errors {
  companyName?: string
  contactName?: string
  email?: string
  phone?: string
  products?: string
  quantity?: string
  deliveryDate?: string
}

function getMinDeliveryDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toISOString().split("T")[0]
}

function validate(data: FormState): Errors {
  const errors: Errors = {}

  if (data.companyName.trim().length < 2)
    errors.companyName = "El nombre de la empresa debe tener al menos 2 caracteres."

  if (data.contactName.trim().length < 2)
    errors.contactName = "El nombre de contacto debe tener al menos 2 caracteres."

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim()))
    errors.email = "Ingresa un correo electrónico válido."

  const cleanPhone = data.phone.replace(/[\s\-()]/g, "")
  if (!/^(\+56)?9\d{8}$/.test(cleanPhone))
    errors.phone = "Ingresa un teléfono chileno válido (ej: +56 9 1234 5678)."

  if (data.products.length === 0)
    errors.products = "Selecciona al menos un producto."

  const qty = Number(data.quantity)
  if (!data.quantity || isNaN(qty) || qty < 20)
    errors.quantity = "La cantidad mínima es 20 unidades."

  const minDate = getMinDeliveryDate()
  if (!data.deliveryDate)
    errors.deliveryDate = "Selecciona una fecha de entrega."
  else if (data.deliveryDate < minDate)
    errors.deliveryDate = "La fecha de entrega debe ser al menos 2 semanas desde hoy."

  return errors
}

const INITIAL: FormState = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  products: [],
  quantity: "",
  deliveryDate: "",
  message: "",
}

const inputBg = { backgroundColor: "rgba(255,255,255,0.06)" }

export function CorpInquiryForm() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [errors, setErrors] = useState<Errors>({})
  const [attempted, setAttempted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const minDate = getMinDeliveryDate()

  function update(field: keyof Omit<FormState, "products">, value: string) {
    const next = { ...form, [field]: value }
    setForm(next)
    if (attempted) setErrors(validate(next))
  }

  function toggleProduct(id: string) {
    const next = {
      ...form,
      products: form.products.includes(id)
        ? form.products.filter((x) => x !== id)
        : [...form.products, id],
    }
    setForm(next)
    if (attempted) setErrors(validate(next))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAttempted(true)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
    }
  }

  function borderColor(error?: string): string {
    return error ? "rgba(239,68,68,0.7)" : "rgba(255,255,255,0.15)"
  }

  const inputClass =
    "w-full border rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-teal-500 transition-colors"

  return (
    <section
      className="py-28 lg:py-36"
      id="cotizacion"
      style={{ backgroundColor: "var(--tani-text)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16 items-start">

          {/* Left — copy */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ backgroundColor: "var(--tani-orange)" }} />
              <span
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--tani-orange)" }}
              >
                Solicitud de Cotización
              </span>
            </div>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white text-balance mb-6">
              Hablemos de tu proyecto
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-10">
              Completa el formulario y un ejecutivo de nuestro equipo corporativo
              te contactará en menos de 48 horas hábiles con una propuesta personalizada.
            </p>
            <div className="space-y-4">
              {[
                "Cotización sin compromiso",
                "Respuesta en máximo 48 horas",
                "Certificado RSE incluido en todo pedido",
                "Packaging corporativo personalizado",
              ].map((g) => (
                <div key={g} className="flex items-center gap-3">
                  <CheckCircle
                    className="w-4 h-4 flex-shrink-0"
                    style={{ color: "var(--tani-teal)" }}
                    aria-hidden="true"
                  />
                  <span className="text-sm text-white/70">{g}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form / success */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center flex flex-col items-center gap-5">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(46,125,107,0.2)" }}
                >
                  <CheckCircle className="w-8 h-8" style={{ color: "var(--tani-teal)" }} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-white/60 text-sm max-w-sm">
                  Te contactaremos en menos de 48 horas.
                </p>
                <a
                  href="/"
                  className="mt-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ backgroundColor: "var(--tani-teal)" }}
                >
                  Volver al inicio
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 space-y-6"
              >
                {/* Row 1: company + contact */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="companyName"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Empresa *
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={(e) => update("companyName", e.target.value)}
                      placeholder="Nombre de tu empresa"
                      className={inputClass}
                      style={{ ...inputBg, borderColor: borderColor(errors.companyName) }}
                    />
                    {errors.companyName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="contactName"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Nombre de contacto *
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      value={form.contactName}
                      onChange={(e) => update("contactName", e.target.value)}
                      placeholder="Tu nombre completo"
                      className={inputClass}
                      style={{ ...inputBg, borderColor: borderColor(errors.contactName) }}
                    />
                    {errors.contactName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.contactName}</p>
                    )}
                  </div>
                </div>

                {/* Row 2: email + phone */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Correo corporativo *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="nombre@empresa.cl"
                      className={inputClass}
                      style={{ ...inputBg, borderColor: borderColor(errors.email) }}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Teléfono *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+56 9 1234 5678"
                      className={inputClass}
                      style={{ ...inputBg, borderColor: borderColor(errors.phone) }}
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Products: checkboxes */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-3">
                    Productos de interés *
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {PRODUCT_OPTIONS.map((opt) => {
                      const checked = form.products.includes(opt.id)
                      return (
                        <label
                          key={opt.id}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <div className="relative flex-shrink-0">
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleProduct(opt.id)}
                              className="sr-only"
                            />
                            <div
                              className="w-5 h-5 rounded transition-all flex items-center justify-center"
                              style={{
                                backgroundColor: checked
                                  ? "var(--tani-teal)"
                                  : "rgba(255,255,255,0.06)",
                                border: `1px solid ${checked ? "var(--tani-teal)" : "rgba(255,255,255,0.25)"}`,
                              }}
                            >
                              {checked && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth={3}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              )}
                            </div>
                          </div>
                          <span className="text-sm text-white/70 group-hover:text-white transition-colors">
                            {opt.label}
                          </span>
                        </label>
                      )
                    })}
                  </div>
                  {errors.products && (
                    <p className="mt-2 text-xs text-red-400">{errors.products}</p>
                  )}
                </div>

                {/* Row 3: quantity + delivery date */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="quantity"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Cantidad (mínimo 20) *
                    </label>
                    <input
                      id="quantity"
                      type="number"
                      min="20"
                      value={form.quantity}
                      onChange={(e) => update("quantity", e.target.value)}
                      placeholder="Ej: 50"
                      className={inputClass}
                      style={{ ...inputBg, borderColor: borderColor(errors.quantity) }}
                    />
                    {errors.quantity && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.quantity}</p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="deliveryDate"
                      className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                    >
                      Fecha de entrega *
                    </label>
                    <input
                      id="deliveryDate"
                      type="date"
                      min={minDate}
                      value={form.deliveryDate}
                      onChange={(e) => update("deliveryDate", e.target.value)}
                      className={`${inputClass} text-white/60`}
                      style={{
                        ...inputBg,
                        borderColor: borderColor(errors.deliveryDate),
                        colorScheme: "dark",
                      }}
                    />
                    {errors.deliveryDate && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.deliveryDate}</p>
                    )}
                  </div>
                </div>

                {/* Message (optional) */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold uppercase tracking-widest text-white/50 mb-2"
                  >
                    Mensaje adicional
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Cuéntanos más sobre el contexto del pedido, ocasión especial, requerimientos de branding, etc."
                    className="w-full border border-white/15 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-teal-500 transition-colors resize-none"
                    style={inputBg}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 font-semibold text-white rounded-full py-4 text-base transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{
                    backgroundColor: "var(--tani-teal)",
                    boxShadow: "0 8px 32px rgba(46,125,107,0.4)",
                  }}
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  Enviar Solicitud
                </button>

                <p className="text-center text-xs text-white/30">
                  Al enviar este formulario aceptas nuestra política de privacidad.
                  No compartimos tu información con terceros.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
