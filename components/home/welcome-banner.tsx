"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Sparkles } from "lucide-react"

export function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <Card className="mb-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <CardContent className="pt-4 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-primary" />
            <div>
              <p className="font-medium text-sm">Welcome to your mental gym!</p>
              <p className="text-xs text-muted-foreground">
                Start your first session to begin building your strategic thinking capabilities.
              </p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsVisible(false)} className="h-8 w-8 p-0">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
