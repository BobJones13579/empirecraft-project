"use client"

import { Button } from "@/components/ui/button"
import { Grid, List } from "lucide-react"
import { EntryCard } from "./entry-card"
import type { VaultEntry } from "@/lib/types"

interface VaultListProps {
  entries: VaultEntry[]
  viewMode: "grid" | "list"
  setViewMode: (mode: "grid" | "list") => void
}

export function VaultList({ entries, viewMode, setViewMode }: VaultListProps) {
  return (
    <div>
      {/* View Mode Toggle */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Your Entries ({entries.length})</h2>
        <div className="flex gap-1 bg-muted p-1 rounded-lg">
          <Button
            variant={viewMode === "grid" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("grid")}
            className="h-8 w-8 p-0"
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "ghost"}
            size="sm"
            onClick={() => setViewMode("list")}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Entries Grid/List */}
      <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
        {entries.map((entry, index) => (
          <div
            key={entry.id}
            className="animate-in fade-in-0 slide-in-from-bottom-4"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <EntryCard entry={entry} viewMode={viewMode} />
          </div>
        ))}
      </div>
    </div>
  )
}
