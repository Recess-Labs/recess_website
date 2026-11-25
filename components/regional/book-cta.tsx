import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BOOK_HREF, BOOK_LABEL } from "@/lib/region-content"

export function BookCta({ tone = "dark", size = "lg", className = "" }: { tone?: "dark" | "light"; size?: "md" | "lg"; className?: string }) {
  const palette =
    tone === "dark"
      ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
      : "bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
  const sizing = size === "lg" ? "h-14 px-8 text-base" : "h-11 px-6 text-sm"
  return (
    <span className={`relative inline-flex ${className}`}>
      <Link
        href={BOOK_HREF}
        className={`group relative z-10 inline-flex items-center justify-center gap-2 rounded-full font-serif font-semibold shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl ${palette} ${sizing}`}
      >
        {BOOK_LABEL}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
      <span aria-hidden="true" className={`absolute inset-0 rounded-full animate-pulse-ring ${tone === "dark" ? "bg-foreground/20" : "bg-primary-foreground/20"}`} />
    </span>
  )
}
