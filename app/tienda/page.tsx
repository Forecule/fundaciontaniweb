"use client"

import { useState, useMemo } from "react"
import { Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { FilterSidebar, type Filters } from "@/components/catalog/filter-sidebar"
import { SearchAndSort } from "@/components/catalog/search-and-sort"
import { ProductCard } from "@/components/catalog/product-card"
import { getProducts } from "@/lib/products"

const products = getProducts()

export default function CatalogPage() {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    priceRange: [0, 5000],
    inStockOnly: false,
    corporateOnly: false,
  })
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("relevancia")
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    // Filter by categories
    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category))
    }

    // Filter by price range
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    )

    // Filter by in stock
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock)
    }

    // Filter by corporate
    if (filters.corporateOnly) {
      result = result.filter((p) => p.isCorporate)
    }

    // Sort
    switch (sortBy) {
      case "precio-asc":
        result.sort((a, b) => a.price - b.price)
        break
      case "precio-desc":
        result.sort((a, b) => b.price - a.price)
        break
      default:
        // relevancia - keep original order
        break
    }

    return result
  }, [filters, searchQuery, sortBy])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "var(--tani-bg)" }}>
      {/* Page header */}
      <div
        className="pt-24 pb-12 lg:pt-28 lg:pb-16"
        style={{ backgroundColor: "var(--tani-teal)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white text-balance">
            Nuestra Tienda
          </h1>
          <p className="mt-3 text-white/80 text-lg max-w-2xl">
            Productos artesanales hechos con amor y propósito. Cada compra dignifica la vida de un adulto con discapacidad intelectual.
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <FilterSidebar filters={filters} onFiltersChange={setFilters} />
              </div>
            </aside>

            {/* Main area */}
            <div className="flex-1 min-w-0">
              {/* Mobile filter button */}
              <div className="lg:hidden mb-6">
                <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-center gap-2 rounded-full border-gray-200"
                      style={{ color: "var(--tani-text)" }}
                    >
                      <Filter className="w-4 h-4" />
                      Filtros
                      {(filters.categories.length > 0 ||
                        filters.inStockOnly ||
                        filters.corporateOnly) && (
                        <span
                          className="ml-1 w-5 h-5 rounded-full text-xs flex items-center justify-center text-white"
                          style={{ backgroundColor: "var(--tani-teal)" }}
                        >
                          {filters.categories.length +
                            (filters.inStockOnly ? 1 : 0) +
                            (filters.corporateOnly ? 1 : 0)}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80 overflow-y-auto">
                    <SheetHeader>
                      <SheetTitle className="sr-only">Filtros</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterSidebar filters={filters} onFiltersChange={setFilters} />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Search and sort */}
              <SearchAndSort
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                totalResults={filteredProducts.length}
              />

              {/* Product grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div
                    className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--tani-teal)", opacity: 0.1 }}
                  />
                  <h3
                    className="font-serif text-xl font-semibold mb-2"
                    style={{ color: "var(--tani-text)" }}
                  >
                    No encontramos productos
                  </h3>
                  <p style={{ color: "var(--tani-text-muted)" }}>
                    Intenta ajustar los filtros o buscar algo diferente.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
