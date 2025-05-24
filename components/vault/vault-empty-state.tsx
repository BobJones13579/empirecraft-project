import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Archive, Plus, Target } from "lucide-react"
import Link from "next/link"

export function VaultEmptyState() {
  return (
    <div className="text-center py-16">
      <Card className="max-w-md mx-auto">
        <CardContent className="pt-8 pb-8">
          <div className="mb-6">
            <Archive className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
            <h3 className="text-xl font-semibold mb-2">Your vault awaits</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Start your learning journey by creating your first focus entry. Each synthesis you write becomes part of
              your growing knowledge vault.
            </p>
          </div>

          <div className="space-y-3">
            <Link href="/entry">
              <Button className="w-full flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create First Entry
              </Button>
            </Link>

            <div className="text-xs text-muted-foreground">
              <div className="flex items-center justify-center gap-1 mb-2">
                <Target className="h-3 w-3" />
                <span>Quick Start Tips</span>
              </div>
              <ul className="text-left space-y-1 max-w-xs mx-auto">
                <li>• Choose a topic you're curious about</li>
                <li>• Write your initial thoughts freely</li>
                <li>• Use prods to expand your thinking</li>
                <li>• Watch your vault grow over time</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
