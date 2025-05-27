console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY)

import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
import { getSupabaseServerClient } from '../../lib/db/supabase';

// Type for the expected request body
interface GenerateProdsRequest {
  topic: string;
  synthesis: string;
  context: string;
  entry_id?: string;
}

// Type for the response
interface GenerateProdsResponse {
  prods: any[];
}

// Initialize OpenAI client (v4+)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GenerateProdsResponse | { error: string }>
) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // MCP: Get user context from Supabase session
  const supabase = getSupabaseServerClient(req, res)
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) {
    return res.status(401).json({ error: 'Unauthorized: No user session' });
  }
  const userId = user.id;

  const { topic, synthesis, context, entry_id } = req.body as GenerateProdsRequest;

  if (!topic || !synthesis || !context) {
    // Validate required fields
    return res.status(400).json({ error: 'Missing required fields: topic, synthesis, context' });
  }

  // System prompt to set GPT's role
  const systemPrompt =
    "You are a relentless sparring partner for deep thinking. Given a user's topic, synthesis, and context, generate a list of 5-7 thought-provoking prods: questions, analogies, or insights that challenge assumptions, reveal blind spots, or push for deeper understanding. Each prod should be concise, specific, and actionable. Format as a plain list (no numbering, no extra commentary).";

  // User prompt with provided data
  const userPrompt = `
Topic: ${topic}
Synthesis: ${synthesis}
Context: ${context}

Generate prods as described.`;

  try {
    // Call OpenAI GPT-3.5-turbo (v4+ syntax)
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      max_tokens: 512,
      temperature: 0.8,
    });

    // Extract the response text
    const content = completion.choices[0]?.message?.content || '';

    // Split the response into prods (one per line, ignoring empty lines)
    const prods = content
      .split('\n')
      .map((line: string) => line.trim())
      .filter((line: string) => line.length > 0);

    // MCP: Save prods to Supabase with user_id and entry_id (if provided)
    const prodRows = prods.map((prompt: string) => ({
      prompt,
      user_id: userId,
      entry_id: entry_id || null,
      context,
      createdAt: new Date().toISOString(),
    }));
    const { data, error } = await supabase
      .from('prods')
      .insert(prodRows)
      .select('*');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    // Return the saved prods as JSON
    return res.status(200).json({ prods: data });
  } catch (error: any) {
    // Handle errors gracefully
    console.error('OpenAI error:', error);
    return res.status(500).json({ error: error.message || 'Failed to generate prods' });
  }
} 