import type { NextApiRequest, NextApiResponse } from 'next'
import { getSupabaseServerClient } from '../../lib/db/supabase'

// Define the shape of an entry (adjust fields as needed)
type Entry = {
  id: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  user_id: string
  // Add other fields as needed
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    // Only allow GET requests
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

  try {
    // MCP: Only fetch entries for the current user (RLS compliance)
    const { data, error } = await supabase
      .from('entries')
      .select('*')
      .eq('user_id', userId)
      .order('createdAt', { ascending: false })

    if (error) {
      // Handle database errors
      return res.status(500).json({ error: error.message })
    }

    if (!data || data.length === 0) {
      // No entries found
      return res.status(404).json({ error: 'No entries found' })
    }

    // Success: return entries as JSON
    return res.status(200).json({ entries: data })
  } catch (err: any) {
    // Handle unexpected errors
    return res.status(500).json({ error: err.message || 'Internal Server Error' })
  }
} 