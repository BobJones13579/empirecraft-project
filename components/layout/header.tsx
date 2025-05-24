"use client"

import Link from "next/link"
import { Brain } from "lucide-react"

export function Header() {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative">
        <Brain className="h-7 w-7 text-primary transition-transform group-hover:scale-110" />
        <div className="absolute -inset-1 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
      </div>
      <Link href="/" className="flex flex-col">
        <span className="font-bold text-lg leading-none">Empirecraft</span>
        <span className="text-xs text-muted-foreground leading-none">Mental Gym</span>
      </Link>
    </div>
  )
}
