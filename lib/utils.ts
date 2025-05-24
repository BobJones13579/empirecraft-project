import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Utility functions for the learning engine
export function calculateReadingTime(wordCount: number): number {
  // Average reading speed: 200 words per minute
  return Math.ceil(wordCount / 200)
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
  }
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
}

export function generateExcerpt(content: string, maxLength = 150): string {
  if (content.length <= maxLength) return content

  const truncated = content.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(" ")

  return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "..."
}

export function extractTags(content: string): string[] {
  // Simple tag extraction - can be enhanced later
  const words = content.toLowerCase().split(/\s+/)
  const commonWords = new Set(["the", "a", "an", "and", "or", "but", "in", "on", "at", "to", "for", "of", "with", "by"])

  return words.filter((word) => word.length > 3 && !commonWords.has(word)).slice(0, 5) // Limit to 5 tags
}
