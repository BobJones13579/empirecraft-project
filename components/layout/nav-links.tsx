"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Target, Archive } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavLinksProps {
  mobile?: boolean
  onItemClick?: () => void
}

export function NavLinks({ mobile = false, onItemClick }: NavLinksProps) {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/",
      label: "Home",
      icon: Home,
    },
    {
      href: "/entry",
      label: "Entry",
      icon: Target,
    },
    {
      href: "/vault",
      label: "Vault",
      icon: Archive,
    },
  ]

  return (
    <>
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onItemClick}
            className={cn(
              "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
              mobile ? "w-full justify-start" : "",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-accent",
            )}
          >
            <Icon className="h-4 w-4" />
            <span>{item.label}</span>
          </Link>
        )
      })}
    </>
  )
}
