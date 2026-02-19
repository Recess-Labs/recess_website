'use client'

import { useEffect } from 'react'

export function IntercomProvider() {
  useEffect(() => {
    const appId = process.env.NEXT_PUBLIC_INTERCOM_APP_ID

    if (!appId) {
      console.warn('[v0] Intercom App ID not configured')
      return
    }

    // Initialize Intercom function
    ;(function () {
      const w = window as any
      const ic = w.Intercom
      if (typeof ic === 'function') {
        ic('reattach_activator')
        ic('update', w.intercomSettings)
      } else {
        const d = document
        const i: any = function () {
          i.c(arguments)
        }
        i.q = []
        i.c = function (args: any) {
          i.q.push(args)
        }
        w.Intercom = i
        const l = function () {
          const s = d.createElement('script')
          s.type = 'text/javascript'
          s.async = true
          s.src = `https://widget.intercom.io/widget/${appId}`
          const x = d.getElementsByTagName('script')[0]
          x.parentNode?.insertBefore(s, x)
        }
        if (document.readyState === 'complete') {
          l()
        } else if (w.attachEvent) {
          w.attachEvent('onload', l)
        } else {
          w.addEventListener('load', l, false)
        }
      }
    })()

    // Boot Intercom
    if (window.Intercom) {
      window.Intercom('boot', {
        app_id: appId,
      })
    }

    return () => {
      if (window.Intercom) {
        window.Intercom('shutdown')
      }
    }
  }, [])

  return null
}

// Type definition for window
declare global {
  interface Window {
    intercomSettings?: any
    Intercom?: (action: string, ...args: any[]) => void
    attachEvent?: (event: string, listener: EventListener) => void
  }
}
