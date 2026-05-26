"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

export type Filters = {
  categories: string[]
  priceRange: [number, number]
  inStockOnly: boolean
  corporateOnly: boolean
}

interface FilterSidebarProps {
  filters: Filters
  onFiltersChange: (filters: Filters) => void
}

const categories = [
  { id: "suculentas", label: "Suculentas" },
  { id: "jabones", label: "Jabones" },
  { id: "galletas", label: "Galletas" },
]

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const handleCategoryChange = (categoryId: string, checked: boolean) => {
    const newCategories = checked
      ? [...filters.categories, categoryId]
      : filters.categories.filter((c) => c !== categoryId)
    onFiltersChange({ ...filters, categories: newCategories })
  }

  const handlePriceChange = (value: number[]) => {
    onFiltersChange({ ...filters, priceRange: [value[0], value[1]] })
  }

  const handleReset = () => {
    onFiltersChange({
      categories: [],
      priceRange: [0, 5000],
      inStockOnly: false,
      corporateOnly: false,
    })
  }

  const formatPrice = (value: number) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(value)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          className="font-serif text-xl font-semibold"
          style={{ color: "var(--tani-text)" }}
        >
          Filtros
        </h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleReset}
          className="text-xs gap-1.5 hover:bg-transparent"
          style={{ color: "var(--tani-text-muted)" }}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Limpiar
        </Button>
      </div>

      {/* Category filters */}
      <div className="space-y-4">
        <h3
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "var(--tani-text-muted)" }}
        >
          Categoría
        </h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-3">
              <Checkbox
                id={category.id}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) =>
                  handleCategoryChange(category.id, checked as boolean)
                }
                className="data-[state=checked]:bg-[var(--tani-teal)] data-[state=checked]:border-[var(--tani-teal)]"
              />
              <Label
                htmlFor={category.id}
                className="text-sm font-medium cursor-pointer"
                style={{ color: "var(--tani-text)" }}
              >
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="space-y-4">
        <h3
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "var(--tani-text-muted)" }}
        >
          Rango de precio
        </h3>
        <Slider
          min={0}
          max={5000}
          step={250}
          value={[filters.priceRange[0], filters.priceRange[1]]}
          onValueChange={handlePriceChange}
          className="[&_[role=slider]]:bg-[var(--tani-teal)] [&_[role=slider]]:border-[var(--tani-teal)] [&_.relative>div:first-child]:bg-[var(--tani-teal)]"
        />
        <div className="flex justify-between text-sm" style={{ color: "var(--tani-text-muted)" }}>
          <span>{formatPrice(filters.priceRange[0])}</span>
          <span>{formatPrice(filters.priceRange[1])}</span>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-4">
        <h3
          className="text-sm font-semibold uppercase tracking-wider"
          style={{ color: "var(--tani-text-muted)" }}
        >
          Opciones
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label
              htmlFor="in-stock"
              className="text-sm font-medium cursor-pointer"
              style={{ color: "var(--tani-text)" }}
            >
              Solo en stock
            </Label>
            <Switch
              id="in-stock"
              checked={filters.inStockOnly}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, inStockOnly: checked })
              }
              className="data-[state=checked]:bg-[var(--tani-teal)]"
            />
          </div>
          <div className="flex items-center justify-between">
            <Label
              htmlFor="corporate"
              className="text-sm font-medium cursor-pointer"
              style={{ color: "var(--tani-text)" }}
            >
              Pedidos corporativos
            </Label>
            <Switch
              id="corporate"
              checked={filters.corporateOnly}
              onCheckedChange={(checked) =>
                onFiltersChange({ ...filters, corporateOnly: checked })
              }
              className="data-[state=checked]:bg-[var(--tani-teal)]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
