"use client"

import { Brain, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <div className="text-center mb-12 animate-in fade-in-0 slide-in-from-bottom-4 duration-700">
      {/* Logo/Icon */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <Brain className="h-20 w-20 text-primary animate-in zoom-in-0 duration-1000 delay-300" />
          <Sparkles className="h-6 w-6 text-primary/60 absolute -top-2 -right-2 animate-pulse" />
        </div>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-200">
        Empirecraft
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-primary font-medium mb-4 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-400">
        Your Strategic Mental Gym
      </p>

      {/* Description */}
      <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-600">
        Explore, reflect, and synthesize ideas from history, business, and power. Transform scattered thoughts into
        strategic insights through deliberate practice and AI-powered expansion.
      </p>
    </div>
  )
}
