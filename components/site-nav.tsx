"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const solutions = [
  { label: "Recess Foundation\u2122", href: "/solutions/workforce-system" },
  { label: "Recess Frontline Ally\u2122", href: "/solutions/ally-app" },
  { label: "Recess Signal\u2122", href: "/solutions/dashboard" },
  { label: "divider", href: "" },
  { label: "Full System & Implementation", href: "/solutions" },
]

const industries = [
  { label: "Healthcare & Behavioral Health", href: "/industries/healthcare" },
  { label: "Education", href: "/industries/education" },
  { label: "Public Safety", href: "/industries/public-safety" },
]

const resources = [
  { label: "See Your Risk", href: "https://pulse.withrecess.com", external: true },
  { label: "Flow With Recess Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
  { label: "White Papers", href: "/white-papers" },
  { label: "divider", href: "" },
  { label: "Become a Recess Champion", href: "/champions" },
]

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-6 h-16">
        {/* Logo - clickable to home */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/recess-logo-colour.png"
            alt="Recess"
            width={160}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          <DropdownNavItem label="Solutions" items={solutions} active={pathname.startsWith("/solutions")} />
          <DropdownNavItem label="Industries" items={industries} active={pathname.startsWith("/industries")} />
          <NavItem label="Our Science" href="/science" active={pathname === "/science"} />
          <NavItem label="About" href="/about" active={pathname === "/about"} />
          <DropdownNavItem label="Resources" items={resources} active={false} />
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button asChild size="sm" className="rounded-full font-serif font-semibold px-5 bg-foreground text-background hover:bg-foreground/90">
            <Link href="/get-started">Schedule Free Strategy Call</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border/60 bg-background px-6 py-6 flex flex-col gap-4">
          <MobileGroup title="Solutions">
            {solutions.filter(s => s.label !== "divider").map(s => (
              <Link key={s.href} href={s.href} className="block text-sm text-muted-foreground py-1 hover:text-foreground" onClick={() => setMobileOpen(false)}>{s.label}</Link>
            ))}
          </MobileGroup>
          <MobileGroup title="Industries">
            {industries.map(i => (
              <Link key={i.href} href={i.href} className="block text-sm text-muted-foreground py-1 hover:text-foreground" onClick={() => setMobileOpen(false)}>{i.label}</Link>
            ))}
          </MobileGroup>
          <Link href="/science" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>Our Science</Link>
          <Link href="/about" className="text-sm font-medium text-foreground" onClick={() => setMobileOpen(false)}>About</Link>
          <MobileGroup title="Resources">
            {resources.filter(r => r.label !== "divider").map(r => (
              r.external ? (
                <a key={r.href} href={r.href} target="_blank" rel="noopener noreferrer" className="block text-sm text-muted-foreground py-1 hover:text-foreground" onClick={() => setMobileOpen(false)}>{r.label}</a>
              ) : (
                <Link key={r.href} href={r.href} className="block text-sm text-muted-foreground py-1 hover:text-foreground" onClick={() => setMobileOpen(false)}>{r.label}</Link>
              )
            ))}
          </MobileGroup>
          <Button asChild size="sm" className="rounded-full font-serif font-semibold mt-2 bg-foreground text-background">
            <Link href="/get-started" onClick={() => setMobileOpen(false)}>Schedule Free Strategy Call</Link>
          </Button>
        </div>
      )}
    </header>
  )
}

function NavItem({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link href={href} className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active ? "text-foreground bg-[#F5F5FF]" : "text-muted-foreground hover:text-foreground hover:bg-[#F5F5FF]"}`}>
      {label}
    </Link>
  )
}

function DropdownNavItem({ label, href, items, active }: { label: string; href?: string; items: { label: string; href: string; note?: string; external?: boolean }[]; active: boolean }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {href ? (
        <Link href={href} className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active ? "text-foreground bg-[#F5F5FF]" : "text-muted-foreground hover:text-foreground hover:bg-[#F5F5FF]"}`}>
          {label} <ChevronDown className="w-3 h-3" />
        </Link>
      ) : (
        <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${active ? "text-foreground bg-[#F5F5FF]" : "text-muted-foreground hover:text-foreground hover:bg-[#F5F5FF]"}`}>
          {label} <ChevronDown className="w-3 h-3" />
        </button>
      )}
      {open && (
        <div className="absolute top-full left-0 pt-1 z-50">
          <div className="bg-background border border-border rounded-xl shadow-lg p-2 min-w-[260px]">
            {items.map((item, i) =>
              item.label === "divider" ? (
                <div key={i} className="my-1 border-t border-border" />
              ) : (
                <div key={item.href}>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[#F5F5FF] rounded-lg transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-[#F5F5FF] rounded-lg transition-colors" onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  )}
                </div>
              )
            )}
            {label === "Resources" && (
              <div className="mt-1 mx-2 p-3 bg-[#F5F5FF] rounded-lg border border-border/40">
                <p className="text-xs font-serif font-semibold text-foreground">In Good Company</p>
                <p className="text-xs text-muted-foreground mt-0.5">Writing by our founder</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileGroup({ title, href, children }: { title: string; href?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-1 text-sm font-medium text-foreground">
        {href ? <Link href={href}>{title}</Link> : title}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pl-3 mt-2 flex flex-col gap-1">{children}</div>}
    </div>
  )
}
