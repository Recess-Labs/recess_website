import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
                <rect width="32" height="32" rx="8" fill="#8D7AA0" />
                <path d="M10 16 Q16 8 22 16 Q16 24 10 16Z" fill="#FDF0ED" />
                <circle cx="16" cy="16" r="3" fill="#29285D" />
              </svg>
              <span className="font-serif text-lg font-bold text-primary-foreground">Recess</span>
            </Link>
            <p className="mt-3 text-sm text-primary-foreground/60 leading-relaxed">
              Emotional infrastructure for trauma-exposed workforces.
            </p>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Solutions</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/solutions/workforce-system" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Workforce System</Link></li>
              <li><Link href="/solutions/ally-app" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Frontline Ally App</Link></li>
              <li><Link href="/solutions/dashboard" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Operating Dashboard</Link></li>
              <li><Link href="/solutions/implementation" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Implementation</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Industries</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/industries/healthcare" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/education" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Education</Link></li>
              <li><Link href="/industries/public-safety" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Public Safety</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Company</p>
            <ul className="flex flex-col gap-2">
              <li><Link href="/science" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Our Science</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Risk Assessment</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">&copy; {new Date().getFullYear()} Recess. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
