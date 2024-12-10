'use client'

import { useState, useEffect } from 'react'
import { supabase } from "@/lib/supabase"
import NumberTicker from "@/components/ui/number-ticker"

export function ViewCounter() {
  const [views, setViews] = useState(0)

  useEffect(() => {
    // Fetch current views
    const fetchViews = async () => {
      const { data, error } = await supabase
        .from('page_views')
        .select('views')
        .single()

      if (!error && data) {
        setViews(data.views)
      }
    }

    // Increment views
    const incrementViews = async () => {
      const { data, error } = await supabase.rpc('increment_views')
      if (!error && data) {
        setViews(data)
      }
    }

    fetchViews()
    incrementViews()
  }, [])

  return <NumberTicker value={views} />
}