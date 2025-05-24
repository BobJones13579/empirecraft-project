// Core types for the Empirecraft Learning Engine

export interface Topic {
  id: string
  title: string
  context?: string
  createdAt: Date
  updatedAt: Date
}

export interface SynthesisEntry {
  id: string
  topicId: string
  content: string
  wordCount: number
  sessionDuration: number
  prodsUsed: number
  createdAt: Date
  updatedAt: Date
}

export interface VaultEntry {
  id: string
  title: string
  content: string
  excerpt: string
  tags: string[]
  wordCount: number
  createdAt: Date
  updatedAt: Date
}

export interface SessionStats {
  wordCount: number
  timeElapsed: number
  prodsUsed: number
}

// Placeholder types for future GPT integration
export interface ProdRequest {
  type: "challenge" | "expand" | "clarify" | "connect"
  context: string
  currentContent: string
}

export interface ProdResponse {
  id: string
  prompt: string
  type: ProdRequest["type"]
  createdAt: Date
}
