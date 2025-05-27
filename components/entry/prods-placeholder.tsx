"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sparkles, ArrowRight, RefreshCw, Copy } from "lucide-react"
import { useEffect, useState } from "react"

interface ProdsPlaceholderProps {
  showProds: boolean
  focusTopic: string
  synthesis: string
}

export function ProdsPlaceholder({ showProds, focusTopic, synthesis }: ProdsPlaceholderProps) {
  // MCP: State for fetched prods
  const [prods, setProds] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!showProds || !focusTopic || !synthesis) return
    setLoading(true)
    setError(null)
    // MCP: Fetch prods from API, passing user context
    fetch("/api/generate-prods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        topic: focusTopic,
        synthesis,
        context: "", // Add context if available
      }),
    })
      .then(async (res) => {
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || "Failed to fetch prods")
        setProds(data.prods)
      })
      .catch((err) => setError(err.message || "Unknown error"))
      .finally(() => setLoading(false))
  }, [showProds, focusTopic, synthesis])

  if (!showProds) return null

  return (
    <div className="animate-in slide-in-from-bottom-4 duration-500">
      <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            Thinking Expansion Prods
          </CardTitle>
          <CardDescription>AI-generated prompts to deepen and expand your synthesis</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {loading ? (
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">Generating prods...</div>
          ) : error ? (
            <div className="text-sm text-destructive bg-muted/50 p-3 rounded-md">{error}</div>
          ) : prods.length > 0 ? (
            <div className="space-y-4">
              {prods.map((prod, index) => (
                <div key={index} className="group">
                  <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="default" className="text-xs">
                          prod
                        </Badge>
                        {/* You can add prod type/description if available */}
                      </div>
                      <p className="text-sm font-medium leading-relaxed">{prod.prompt}</p>
                    </div>
                    <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Copy className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <ArrowRight className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">No prods generated yet.</div>
          )}

          <Separator />

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">{prods.length} prods generated • Based on your synthesis</div>
            <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => setProds([])} disabled={loading}>
              <RefreshCw className="h-4 w-4" />
              Generate More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
