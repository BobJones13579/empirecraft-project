"use client"

import Link from "next/link"
import { Brain } from "lucide-react"
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'

export function Header() {
  const session = useSession()
  const supabase = useSupabaseClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

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
      <div className="ml-auto flex items-center gap-2">
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
  )
}
