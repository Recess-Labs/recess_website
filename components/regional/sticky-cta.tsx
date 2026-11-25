"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BOOK_HREF, BOOK_LABEL } from "@/lib/region-content"

export function StickyCta() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      const nearEnd = window.innerHeight + window.scrollY > document.body.scrollHeight - 900
      setShow(window.scrollY > 700 && !nearEnd)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-background/95 p-3 backdrop-blur transition-transform duration-300 md:hidden ${show ? "translate-y-0" : "translate-y-full"}`}
      aria-hidden={!show}
    >
      <Link
        href={BOOK_HREF}
        tabIndex={show ? 0 : -1}
        className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground font-serif font-semibold text-primary-foreground"
      >
        {BOOK_LABEL}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    </div>
  )
}
