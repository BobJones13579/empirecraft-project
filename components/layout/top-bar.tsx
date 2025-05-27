"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain, Home, Target, Archive } from "lucide-react"
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'

export function TopBar() {
  const pathname = usePathname()
  const session = useSession()
  const supabase = useSupabaseClient()

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/entry", label: "Entry", icon: Target },
    { href: "/vault", label: "Vault", icon: Archive },
  ]

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center gap-2">
          <Brain className="h-7 w-7 text-primary" />
          <span className="font-bold text-lg leading-none">Empirecraft</span>
          <span className="text-xs text-muted-foreground leading-none ml-1">Mental Gym</span>
        </Link>
        {/* Navigation Links */}
        <nav className="flex gap-2">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>
        {/* User Info / Auth */}
        <div className="flex items-center gap-2">
          {session ? (
            <>
              <span className="text-xs text-muted-foreground">{session.user.email}</span>
              <button
                onClick={handleLogout}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-primary/10 border border-border"
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              href="/auth"
              className="text-xs px-2 py-1 rounded bg-muted hover:bg-primary/10 border border-border"
            >
              Log in / Sign up
            </Link>
          )}
        </div>
      </div>
    </header>
  )
} 