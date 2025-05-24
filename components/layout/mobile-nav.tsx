"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Brain } from "lucide-react"
import { NavLinks } from "./nav-links"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden h-9 w-9 px-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-6">
          <div className="flex items-center space-x-3 pb-4 border-b">
            <Brain className="h-6 w-6 text-primary" />
            <div>
              <div className="font-semibold">Empirecraft</div>
              <div className="text-sm text-muted-foreground">Your Mental Gym</div>
            </div>
          </div>
          <nav className="flex flex-col space-y-2">
            <NavLinks mobile onItemClick={() => setIsOpen(false)} />
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
