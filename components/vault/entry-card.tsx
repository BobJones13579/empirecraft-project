import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, MoreHorizontal, Eye } from "lucide-react"
import type { VaultEntry } from "@/lib/types"

interface EntryCardProps {
  entry: VaultEntry
  viewMode: "grid" | "list"
}

export function EntryCard({ entry, viewMode }: EntryCardProps) {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  const readingTime = Math.ceil(entry.wordCount / 200) // 200 words per minute

  if (viewMode === "list") {
    return (
      <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group">
        <CardContent className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-lg truncate">{entry.title}</h3>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  {formatDate(entry.createdAt)}
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{entry.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  {entry.wordCount} words
                </span>
                <span>{readingTime} min read</span>
              </div>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <div className="flex flex-wrap gap-1 max-w-[200px]">
                {entry.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {entry.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{entry.tags.length - 3}
                  </Badge>
                )}
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="hover:shadow-md transition-all duration-200 cursor-pointer group h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {entry.title}
          </CardTitle>
          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription className="flex items-center gap-2 text-xs">
          <Calendar className="h-3 w-3" />
          {formatDate(entry.createdAt)}
          <span className="ml-auto flex items-center gap-1">
            <FileText className="h-3 w-3" />
            {entry.wordCount} words
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{entry.excerpt}</p>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-1">
            {entry.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {entry.tags.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{entry.tags.length - 4}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{readingTime} min read</span>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Eye className="h-3 w-3 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
