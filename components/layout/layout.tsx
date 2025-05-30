import type React from "react"
import { Navigation } from "@/components/navigation"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="flex-1">{children}</main>
    </div>
  )
}
