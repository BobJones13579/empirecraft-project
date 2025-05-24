"use client"

import { useState } from "react"
import { Target } from "lucide-react"
import { EntryForm } from "@/components/entry/entry-form"
import { SynthesisEditor } from "@/components/entry/synthesis-editor"
import { ProdsPlaceholder } from "@/components/entry/prods-placeholder"

export default function EntryPage() {
  const [focusTopic, setFocusTopic] = useState("")
  const [context, setContext] = useState("")
  const [synthesis, setSynthesis] = useState("")
  const [showProds, setShowProds] = useState(false)
  const [sessionStats, setSessionStats] = useState({
    wordCount: 0,
    timeElapsed: 0,
    prodsUsed: 0,
  })

  const handleExpandThinking = () => {
    if (focusTopic.trim() && synthesis.trim()) {
      setShowProds(true)
      setSessionStats((prev) => ({ ...prev, prodsUsed: prev.prodsUsed + 1 }))
    }
  }

  const canExpandThinking = focusTopic.trim().length > 0 && synthesis.trim().length > 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h1 className="text-3xl font-bold mb-2">Focus & Synthesis</h1>
          <p className="text-muted-foreground">Enter your topic and begin the synthesis process</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <EntryForm
              focusTopic={focusTopic}
              setFocusTopic={setFocusTopic}
              context={context}
              setContext={setContext}
            />

            <SynthesisEditor
              synthesis={synthesis}
              setSynthesis={setSynthesis}
              onExpandThinking={handleExpandThinking}
              canExpandThinking={canExpandThinking}
              sessionStats={sessionStats}
              setSessionStats={setSessionStats}
            />

            <ProdsPlaceholder showProds={showProds} focusTopic={focusTopic} synthesis={synthesis} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SessionSidebar sessionStats={sessionStats} />
          </div>
        </div>
      </div>
    </div>
  )
}

function SessionSidebar({ sessionStats }: { sessionStats: any }) {
  return (
    <div className="space-y-6 sticky top-6">
      {/* Session Info */}
      <div className="bg-card border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Session Info</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Words:</span>
            <span className="font-medium">{sessionStats.wordCount}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Time:</span>
            <span className="font-medium">
              {Math.floor(sessionStats.timeElapsed / 60)}:{(sessionStats.timeElapsed % 60).toString().padStart(2, "0")}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Prods Used:</span>
            <span className="font-medium">{sessionStats.prodsUsed}</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-card border rounded-lg p-4">
        <h3 className="font-semibold mb-4">Tips</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>• Start with what you know</li>
          <li>• Question your assumptions</li>
          <li>• Look for connections</li>
          <li>• Use prods when stuck</li>
          <li>• Write freely, edit later</li>
        </ul>
      </div>
    </div>
  )
}
