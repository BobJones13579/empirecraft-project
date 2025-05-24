"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, Zap, Archive, TrendingUp } from "lucide-react"

export function FeatureHighlights() {
  const features = [
    {
      icon: Lightbulb,
      title: "Focus & Synthesis",
      description: "Enter any topic and write your synthesis through structured exploration",
      color: "text-yellow-600",
    },
    {
      icon: Zap,
      title: "AI-Powered Prods",
      description: "Get dynamic prompts that challenge and expand your thinking patterns",
      color: "text-blue-600",
    },
    {
      icon: Archive,
      title: "Knowledge Vault",
      description: "Build a personal repository of insights that grows with every session",
      color: "text-green-600",
    },
    {
      icon: TrendingUp,
      title: "Strategic Growth",
      description: "Track your intellectual development and see patterns in your thinking",
      color: "text-purple-600",
    },
  ]

  return (
    <div className="mb-16">
      <div className="text-center mb-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-1000">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Your Mental Gym Toolkit</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every great strategist needs the right tools. Empirecraft provides a systematic approach to developing your
          strategic thinking capabilities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-in fade-in-0 slide-in-from-bottom-4"
              style={{ animationDelay: `${1200 + index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex justify-center mb-2">
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
