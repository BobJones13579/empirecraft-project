import { Archive, Search, Filter, SortAsc } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function VaultHeader() {
  return (
    <div className="mb-8">
      {/* Main Header */}
      <div className="text-center mb-8">
        <Archive className="h-12 w-12 mx-auto mb-4 text-primary" />
        <h1 className="text-3xl font-bold mb-2">Knowledge Vault</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Your collection of synthesized knowledge and insights. Each entry represents a step in your learning journey.
        </p>
      </div>

      {/* Search and Controls */}
      <div className="bg-card border rounded-lg p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search your knowledge vault..." className="pl-10" disabled />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
              <Filter className="h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2" disabled>
              <SortAsc className="h-4 w-4" />
              Sort
            </Button>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2">🚀 Search and filtering coming soon in the next update</p>
      </div>
    </div>
  )
}
