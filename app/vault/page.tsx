"use client"

import { useState } from "react"
import { VaultHeader } from "@/components/vault/vault-header"
import { VaultStats } from "@/components/vault/vault-stats"
import { VaultList } from "@/components/vault/vault-list"
import { VaultEmptyState } from "@/components/vault/vault-empty-state"
import { mockEntries } from "@/lib/mock-data"

export default function VaultPage() {
  const [entries] = useState(mockEntries)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  // Calculate stats from entries
  const stats = {
    totalEntries: entries.length,
    totalWords: entries.reduce((sum, entry) => sum + entry.wordCount, 0),
    uniqueTags: [...new Set(entries.flatMap((entry) => entry.tags))].length,
    daysActive: new Set(entries.map((entry) => entry.createdAt.toDateString())).size,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <VaultHeader />

        <VaultStats stats={stats} />

        {entries.length > 0 ? (
          <VaultList entries={entries} viewMode={viewMode} setViewMode={setViewMode} />
        ) : (
          <VaultEmptyState />
        )}
      </div>
    </div>
  )
}
