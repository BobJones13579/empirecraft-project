"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Sparkles, ArrowRight, RefreshCw, Copy } from "lucide-react"

interface ProdsPlaceholderProps {
  showProds: boolean
  focusTopic: string
  synthesis: string
}

export function ProdsPlaceholder({ showProds, focusTopic, synthesis }: ProdsPlaceholderProps) {
  if (!showProds) return null

  // Generate placeholder prods based on the topic
  const placeholderProds = [
    {
      type: "challenge",
      prompt: `What assumptions are you making about "${focusTopic}" that might not be true?`,
      description: "Challenge your foundational beliefs",
    },
    {
      type: "expand",
      prompt: `How might "${focusTopic}" look completely different in 10 years?`,
      description: "Explore future possibilities",
    },
    {
      type: "connect",
      prompt: `What unexpected connections exist between "${focusTopic}" and other fields?`,
      description: "Find cross-domain insights",
    },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "challenge":
        return "destructive"
      case "expand":
        return "default"
      case "connect":
        return "secondary"
      default:
        return "outline"
    }
  }

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
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
            🚀 <strong>Coming Soon:</strong> These prods will be dynamically generated based on your writing using
            GPT-4. For now, enjoy these sample prompts!
          </div>

          <div className="space-y-4">
            {placeholderProds.map((prod, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={getTypeColor(prod.type) as any} className="text-xs">
                        {prod.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">{prod.description}</span>
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

          <Separator />

          <div className="flex justify-between items-center">
            <div className="text-sm text-muted-foreground">3 prods generated • Based on your synthesis</div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" />
              Generate More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
