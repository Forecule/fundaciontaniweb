"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SearchAndSortProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  sortBy: string
  onSortChange: (value: string) => void
  totalResults: number
}

export function SearchAndSort({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalResults,
}: SearchAndSortProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between mb-8">
      {/* Search bar */}
      <div className="relative flex-1 max-w-md">
        <Search
          className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
          style={{ color: "var(--tani-text-muted)" }}
        />
        <Input
          type="search"
          placeholder="Buscar productos..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11 rounded-full border-gray-200 focus-visible:ring-[var(--tani-teal)] focus-visible:border-[var(--tani-teal)]"
          style={{ backgroundColor: "white" }}
        />
      </div>

      {/* Results count and sort */}
      <div className="flex items-center gap-4">
        <span className="text-sm" style={{ color: "var(--tani-text-muted)" }}>
          {totalResults} {totalResults === 1 ? "producto" : "productos"}
        </span>
        <Select value={sortBy} onValueChange={onSortChange}>
          <SelectTrigger
            className="w-[200px] h-11 rounded-lg border-gray-200 focus:ring-[var(--tani-teal)]"
            style={{ backgroundColor: "white" }}
          >
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="relevancia">Relevancia</SelectItem>
            <SelectItem value="precio-asc">Precio menor a mayor</SelectItem>
            <SelectItem value="precio-desc">Precio mayor a menor</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
