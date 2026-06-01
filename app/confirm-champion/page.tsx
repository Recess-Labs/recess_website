"use client"

import { Suspense, useEffect, useMemo } from "react"
import { AnalyticsBrowser } from "@customerio/cdp-analytics-browser"
import { useRouter, useSearchParams } from "next/navigation"

const customerIoWriteKey = process.env.NEXT_PUBLIC_CUSTOMER_IO_WRITE_KEY
let customerIoAnalyticsInstance: ReturnType<typeof AnalyticsBrowser.load> | null = null

function getCustomerIoAnalytics() {
  if (typeof window === "undefined" || !customerIoWriteKey) {
    return null
  }

  if (!customerIoAnalyticsInstance) {
    customerIoAnalyticsInstance = AnalyticsBrowser.load({ writeKey: customerIoWriteKey })
  }

  return customerIoAnalyticsInstance
}

function ConfirmChampionPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const userId = useMemo(() => {
    const rawUserId = searchParams.get("user")
    if (!rawUserId) return null
    const trimmed = rawUserId.trim()
    return trimmed.length > 0 ? trimmed : null
  }, [searchParams])

  useEffect(() => {
    if (!userId) {
      router.replace("/champions")
      return
    }

    const sendChampionAttribute = async () => {
      const customerIoAnalytics = getCustomerIoAnalytics()
      if (!customerIoAnalytics) {
        router.replace("/champions?applied=1")
        return
      }

      try {
        await customerIoAnalytics.identify(userId, { champion: true })
      } catch {
      } finally {
        router.replace("/champions?applied=1")
      }
    }

    sendChampionAttribute()
  }, [router, userId])

  return null
}

export default function ConfirmChampionPage() {
  return (
    <Suspense fallback={null}>
      <ConfirmChampionPageContent />
    </Suspense>
  )
}
