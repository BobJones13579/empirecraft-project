"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { PenTool, Zap, Save, RotateCcw } from "lucide-react"

interface SynthesisEditorProps {
  synthesis: string
  setSynthesis: (value: string) => void
  onExpandThinking: () => void
  canExpandThinking: boolean
  sessionStats: any
  setSessionStats: (stats: any) => void
}

export function SynthesisEditor({
  synthesis,
  setSynthesis,
  onExpandThinking,
  canExpandThinking,
  sessionStats,
  setSessionStats,
}: SynthesisEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const startTimeRef = useRef<number>(Date.now())

  // Update word count when synthesis changes
  useEffect(() => {
    const wordCount = synthesis.trim() ? synthesis.trim().split(/\s+/).length : 0
    const timeElapsed = Math.floor((Date.now() - startTimeRef.current) / 1000)

    setSessionStats((prev: any) => ({
      ...prev,
      wordCount,
      timeElapsed,
    }))
  }, [synthesis, setSessionStats])

  const handleClear = () => {
    setSynthesis("")
    if (textareaRef.current) {
      textareaRef.current.focus()
    }
  }

  const handleSave = async () => {
    // MCP: Save entry to Supabase via API, passing context
    try {
      const res = await fetch('/api/entry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-user-id': 'demo-user', // TODO: Replace with real user ID from auth context
        },
        body: JSON.stringify({
          title: 'Untitled Entry', // TODO: Replace with actual title from form if available
          content: synthesis,
          wordCount: sessionStats.wordCount,
        }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to save entry')
      alert('Entry saved!')
    } catch (err: any) {
      alert('Error saving entry: ' + (err.message || 'Unknown error'))
    }
  }

  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PenTool className="h-5 w-5 text-primary" />
          Synthesis Space
        </CardTitle>
        <CardDescription>
          Explore, connect ideas, and develop insights. Write freely and let your thoughts flow.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="synthesis" className="text-sm font-medium">
            Your Synthesis
          </Label>
          <Textarea
            ref={textareaRef}
            id="synthesis"
            value={synthesis}
            onChange={(e) => setSynthesis(e.target.value)}
            placeholder="Begin writing your thoughts and synthesis here. This is your space to explore, connect ideas, and develop insights. Don't worry about perfection - focus on getting your ideas down..."
            className="min-h-[300px] text-base leading-relaxed transition-all duration-200 focus:ring-2 focus:ring-primary/20"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{sessionStats.wordCount} words</span>
            <span>Keep writing to unlock thinking expansion</span>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            onClick={onExpandThinking}
            disabled={!canExpandThinking}
            className="flex items-center gap-2 flex-1 transition-all duration-200"
          >
            <Zap className="h-4 w-4" />
            Expand My Thinking
          </Button>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleSave} className="flex items-center gap-2">
              <Save className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm" onClick={handleClear} className="flex items-center gap-2">
              <RotateCcw className="h-4 w-4" />
              Clear
            </Button>
          </div>
        </div>

        {!canExpandThinking && (
          <div className="text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
            💡 Enter a focus topic and start writing to unlock thinking expansion
          </div>
        )}
      </CardContent>
    </Card>
  )
}
