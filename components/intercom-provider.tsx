'use client'

import { useEffect } from 'react'

export function IntercomProvider() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

    if (!appId) {
      console.warn('[v0] Intercom App ID not configured')
      return
    }

    // Load Intercom messenger
    window.intercomSettings = {
      api_base: 'https://api-iam.intercom.io',
      app_id: appId,
    }

    // Create and load Intercom script
    const script = document.createElement('script')
    script.src = 'https://js.intercom-cdn.com/frame.js'
    script.async = true

    document.head.appendChild(script)

    return () => {
      // Cleanup Intercom if needed
      if (window.Intercom) {
        window.Intercom('shutdown')
      }
    }
  }, [])

  return null
}

// Type definition for window.intercomSettings
declare global {
  interface Window {
    intercomSettings?: {
      api_base?: string
      app_id?: string
      [key: string]: any
    }
    Intercom?: (action: string, ...args: any[]) => void
  }
}
