import type { NextApiRequest, NextApiResponse } from 'next'
import { getSupabaseServerClient } from '../../lib/db/supabase'

// Define the shape of a new entry (adjust fields as needed)
type NewEntry = {
  title: string
  content: string
  excerpt?: string
  tags?: string[]
  wordCount?: number
  // Add other fields as needed
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // MCP: Get user context from Supabase session
  const supabase = getSupabaseServerClient(req, res)
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) {
    return res.status(401).json({ error: 'Unauthorized: No user session' })
  }
  const userId = user.id

  const { title, content, excerpt, tags, wordCount } = req.body as NewEntry
  if (!title || !content) {
    return res.status(400).json({ error: 'Missing required fields: title, content' })
  }

  try {
    // MCP: Insert new entry with user_id and timestamps (RLS compliance)
    const { data, error } = await supabase
      .from('entries')
      .insert([
        {
          title,
          content,
          excerpt: excerpt || '',
          tags: tags || [],
          wordCount: wordCount || content.split(/\s+/).length,
          user_id: userId,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        },
      ])
      .select()
      .single()

    if (error) {
      // Handle database errors
      return res.status(500).json({ error: error.message })
    }

    // Success: return the new entry
    return res.status(201).json({ entry: data })
  } catch (err: any) {
    // Handle unexpected errors
    return res.status(500).json({ error: err.message || 'Internal Server Error' })
  }
} 