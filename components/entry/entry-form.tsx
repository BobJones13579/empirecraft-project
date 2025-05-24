"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Lightbulb } from "lucide-react"

interface EntryFormProps {
  focusTopic: string
  setFocusTopic: (value: string) => void
  context: string
  setContext: (value: string) => void
}

export function EntryForm({ focusTopic, setFocusTopic, context, setContext }: EntryFormProps) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-primary" />
          Topic Entry
        </CardTitle>
        <CardDescription>Start by entering a topic or question you want to explore deeply</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="focus-topic" className="text-sm font-medium">
            Focus Topic *
          </Label>
          <Input
            id="focus-topic"
            value={focusTopic}
            onChange={(e) => setFocusTopic(e.target.value)}
            placeholder="e.g., The impact of AI on creative industries..."
            className="text-lg transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-xs text-muted-foreground">{focusTopic.length}/200 characters</p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="context" className="text-sm font-medium">
            Context (Optional)
          </Label>
          <Textarea
            id="context"
            value={context}
            onChange={(e) => setContext(e.target.value)}
            placeholder="Provide any background context, specific angles, or constraints you want to explore..."
            className="min-h-[80px] transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          <p className="text-xs text-muted-foreground">Add context to guide your synthesis direction</p>
        </div>
      </CardContent>
    </Card>
  )
}
