# Fundación TAÑI — Sitio Web

Sitio web de la Fundación TAÑI, construido con **Next.js 14**, **Tailwind CSS v4** y **shadcn/ui**.

---

## Requisitos previos

- Node.js 18 o superior
- npm (incluido con Node.js)

---

## Configuración local

```bash
# 1. Clona el repositorio
git clone https://github.com/tu-usuario/tani-website.git
cd tani-website

# 2. Instala dependencias
npm install

# 3. Inicia el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Build de producción |
| `npm run start` | Inicia el servidor de producción (requiere build previo) |
| `npm run lint` | Linter de código |

---

## Cómo agregar o editar productos

Todos los productos están definidos en **[`lib/products.ts`](lib/products.ts)**. Cada producto sigue esta estructura:

```typescript
{
  id: "suc-04",                        // ID único (prefijo de categoría + número)
  name: "Nombre del producto",
  category: "suculentas",              // suculentas | velas | jabones | galletas
  price: 4500,                         // precio en CLP (número entero)
  description: "Descripción breve.",   // aparece en las tarjetas
  longDescription: "Descripción larga con todos los detalles.",
  image: "/images/products/mi-producto.jpg",  // ruta en /public
  inStock: true,
  minOrder: 1,                         // 1 para retail; 20+ para corporativo
  isCorporate: false,                  // true → aparece en sección corporativa
  badge: "Nuevo",                      // opcional: "Más vendido" | "Nuevo" | "Corporativo"
  tags: ["suculenta", "decoración"],
}
```

### Pasos para agregar un producto

1. Abre `lib/products.ts`.
2. Copia el bloque de un producto existente de la misma categoría.
3. Actualiza todos los campos (especialmente `id` — debe ser único).
4. Si el producto es corporativo (`minOrder >= 20`, `isCorporate: true`), aparecerá automáticamente en `/corporativo`.
5. Agrega la imagen en `public/images/products/` con el nombre que indicaste en el campo `image`.

### Funciones de filtrado disponibles

```typescript
import { getProducts, getCorporateProducts, getFeaturedProducts, getProductsByCategory } from "@/lib/products"

getProducts()                          // todos los productos
getCorporateProducts()                 // minOrder >= 20
getFeaturedProducts()                  // uno por categoría (no corporativo)
getProductsByCategory("suculentas")    // filtra por categoría
```

---

## Cómo actualizar el link de donación (Stripe)

El link de donación de Stripe está en una sola línea en:

**[`components/donation/donation-form.tsx`](components/donation/donation-form.tsx) — línea 7**

```typescript
const STRIPE_LINK = "https://donate.stripe.com/placeholder"
//                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                   Reemplaza esto con tu Payment Link de Stripe
```

### Cómo obtener el link en Stripe

1. Accede a [dashboard.stripe.com](https://dashboard.stripe.com).
2. Ve a **Payment Links** → **Crear link**.
3. Configura el producto como donación recurrente o pago único.
4. Copia la URL generada (formato `https://buy.stripe.com/...` o `https://donate.stripe.com/...`).
5. Pega esa URL en `STRIPE_LINK` y guarda el archivo.

---

## Despliegue en Vercel

### Opción A — Un clic (recomendada)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/tani-website)

1. Haz clic en el botón de arriba.
2. Conecta tu cuenta de GitHub si no lo has hecho.
3. Vercel detecta automáticamente que es Next.js — no necesitas configuración adicional.
4. Haz clic en **Deploy**.

El sitio queda en línea en `https://tani-website.vercel.app` (o en tu dominio personalizado).

### Opción B — Desde la CLI de Vercel

```bash
# Instala Vercel CLI globalmente
npm install -g vercel

# Desde la raíz del proyecto
vercel

# Para producción
vercel --prod
```

### Variables de entorno (si las necesitas)

Si agregas integraciones futuras (p. ej. formulario con envío de email), define las variables en:
- **Vercel Dashboard** → tu proyecto → **Settings → Environment Variables**

No hay variables de entorno requeridas para el sitio base.

### Dominio personalizado

En el Dashboard de Vercel, ve a tu proyecto → **Settings → Domains** → agrega `fundaciontani.cl` y sigue las instrucciones para configurar los registros DNS.

---

## Estructura del proyecto

```
app/
  layout.tsx          — Layout raíz (Navbar + Footer)
  page.tsx            — Homepage
  loading.tsx         — Spinner de carga
  not-found.tsx       — Página 404
  error.tsx           — Página de error
  robots.ts           — Configuración para buscadores
  sitemap.ts          — Sitemap automático
  productos/          — Catálogo completo
  corporativo/        — Ventas corporativas
  donar/              — Página de donaciones
  nosotros/           — Historia y equipo
  contacto/           — Formulario de contacto

components/
  layout/             — Navbar y Footer compartidos
  sections/           — Secciones de la homepage
  catalog/            — Tarjetas y filtros del catálogo
  corporate/          — Secciones de la página corporativa
  donation/           — Formulario de donación
  ui/                 — Primitivos de shadcn/ui

lib/
  products.ts         — Datos y tipos de productos ← EDITAR AQUÍ
  utils.ts            — Utilidades (cn, formatCLP, BLUR_DATA_URL)

public/
  images/             — Imágenes del sitio (hero, mission, categorías)
```

---

## Colores de la marca

Definidos como variables CSS en `app/globals.css`:

| Variable | Hex | Uso |
|----------|-----|-----|
| `--tani-teal` | `#2E7D6B` | Color primario, botones, énfasis |
| `--tani-orange` | `#F4A261` | Acento, CTA de donación |
| `--tani-bg` | `#FAFAF8` | Fondo principal |
| `--tani-text` | `#1A1A2E` | Texto principal |
| `--tani-text-muted` | `#5a5a72` | Texto secundario |
