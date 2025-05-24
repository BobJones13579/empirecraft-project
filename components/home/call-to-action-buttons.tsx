"use client"

import { Button } from "@/components/ui/button"
import { Target, Archive, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CallToActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-in fade-in-0 slide-in-from-bottom-4 duration-700 delay-800">
      <Link href="/entry">
        <Button size="lg" className="text-lg px-8 py-4 h-auto group transition-all duration-200 hover:scale-105">
          <Target className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform" />
          Start New Session
          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      <Link href="/vault">
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-8 py-4 h-auto group transition-all duration-200 hover:scale-105"
        >
          <Archive className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          View My Vault
        </Button>
      </Link>
    </div>
  )
}
