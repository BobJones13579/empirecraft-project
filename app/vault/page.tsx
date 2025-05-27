"use client"

import { useEffect, useState } from "react"
import { VaultHeader } from "@/components/vault/vault-header"
import { VaultStats } from "@/components/vault/vault-stats"
import { VaultList } from "@/components/vault/vault-list"
import { VaultEmptyState } from "@/components/vault/vault-empty-state"
import type { VaultEntry } from "@/lib/types"

export default function VaultPage() {
  // MCP: State for entries, loading, and error
  const [entries, setEntries] = useState<VaultEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  useEffect(() => {
    // MCP: Fetch entries for the current user from the API (which applies user context)
    async function fetchEntries() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch("/api/entries")
        if (!res.ok) throw new Error((await res.json()).error || "Failed to fetch entries")
        const { entries } = await res.json()
        // Convert date strings to Date objects for UI components
        setEntries(
          entries.map((entry: any) => ({
            ...entry,
            createdAt: new Date(entry.createdAt),
            updatedAt: new Date(entry.updatedAt),
          }))
        )
      } catch (err: any) {
        setError(err.message || "Unknown error")
      } finally {
        setLoading(false)
      }
    }
    fetchEntries()
  }, [])

  // MCP: Calculate stats from live entries
  const stats = {
    totalEntries: entries.length,
    totalWords: entries.reduce((sum, entry) => sum + (entry.wordCount || 0), 0),
    uniqueTags: [...new Set(entries.flatMap((entry) => entry.tags || []))].length,
    daysActive: new Set(entries.map((entry) => entry.createdAt.toDateString())).size,
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <VaultHeader />
        <VaultStats stats={stats} />
        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading your entries...</div>
        ) : error ? (
          <div className="text-center py-12 text-destructive">{error}</div>
        ) : entries.length > 0 ? (
          <VaultList entries={entries} viewMode={viewMode} setViewMode={setViewMode} />
        ) : (
          <VaultEmptyState />
        )}
      </div>
    </div>
  )
}
