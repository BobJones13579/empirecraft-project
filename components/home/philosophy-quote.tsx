"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function PhilosophyQuote() {
  const quotes = [
    {
      text: "History is a vast early warning system.",
      author: "Norman Cousins",
    },
    {
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      text: "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat.",
      author: "Sun Tzu",
    },
  ]

  // For now, we'll show the first quote. In the future, this could rotate or be random
  const currentQuote = quotes[0]

  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1600">
      <Card className="bg-gradient-to-br from-primary/5 to-transparent border-primary/20 max-w-4xl mx-auto">
        <CardContent className="pt-8 pb-8">
          <div className="text-center">
            <Quote className="h-8 w-8 text-primary/60 mx-auto mb-4" />
            <blockquote className="text-xl md:text-2xl font-medium text-foreground/90 mb-4 leading-relaxed">
              "{currentQuote.text}"
            </blockquote>
            <cite className="text-muted-foreground font-medium">— {currentQuote.author}</cite>
          </div>
        </CardContent>
      </Card>

      {/* Philosophy Section */}
      <div className="text-center mt-12 max-w-3xl mx-auto animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1800">
        <h3 className="text-xl font-semibold mb-4">The Mental Gym Philosophy</h3>
        <p className="text-muted-foreground leading-relaxed">
          Just as physical exercise strengthens the body, Empirecraft strengthens the mind through deliberate practice
          of synthesis, critical thinking, and knowledge expansion. Every session is designed to push your cognitive
          boundaries and build lasting intellectual muscle.
        </p>
      </div>
    </div>
  )
}
