import { Card, CardContent } from "@/components/ui/card"
import { FileText, Target, Hash, Calendar } from "lucide-react"

interface VaultStatsProps {
  stats: {
    totalEntries: number
    totalWords: number
    uniqueTags: number
    daysActive: number
  }
}

export function VaultStats({ stats }: VaultStatsProps) {
  const statItems = [
    {
      label: "Total Entries",
      value: stats.totalEntries,
      icon: FileText,
      color: "text-blue-600",
    },
    {
      label: "Words Written",
      value: stats.totalWords.toLocaleString(),
      icon: Target,
      color: "text-green-600",
    },
    {
      label: "Unique Tags",
      value: stats.uniqueTags,
      icon: Hash,
      color: "text-purple-600",
    },
    {
      label: "Days Active",
      value: stats.daysActive,
      icon: Calendar,
      color: "text-orange-600",
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => {
        const Icon = item.icon
        return (
          <Card key={index} className="transition-all duration-200 hover:shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
                <Icon className={`h-5 w-5 ${item.color}`} />
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
