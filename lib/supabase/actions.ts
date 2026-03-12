'use server'

import { createClient } from '@/lib/supabase/server'

export async function submitContactForm(
  email: string,
  name: string,
  message: string,
  company?: string
) {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contacts')
      .insert({
        email,
        name,
        message,
        company,
        created_at: new Date().toISOString(),
      })
      .select()

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

export async function getContacts(limit = 50) {
  try {
    const supabase = await createClient()

    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(limit)

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
