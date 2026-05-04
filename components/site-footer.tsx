import Link from "next/link"
import Image from "next/image"
import Script from "next/script"

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <Link href="/">
              <Image
                src="/images/recess-logo-white.png"
                alt="Recess"
                width={160}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/60 leading-relaxed">
              Empowering frontline workers with support and resources to make a difference in the lives they touch.
            </p>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Solutions</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/solutions/workforce-system" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{`Recess Foundation\u2122`}</Link></li>
              <li><Link href="/solutions/ally-app" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{`Recess Frontline Ally\u2122`}</Link></li>
              <li><Link href="/solutions/dashboard" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">{`Recess Signal\u2122`}</Link></li>
              <li><Link href="/solutions/implementation" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Implementation</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Industries</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/industries/healthcare" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/education" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Education</Link></li>
              <li><Link href="/industries/public-safety" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Public Safety</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-serif font-semibold text-sm mb-4 text-primary-foreground/80">Company</p>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/science" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Our Science</Link></li>
              <li><Link href="/about" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">About</Link></li>
              <li><a href="https://pulse.withrecess.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Frontline Emotional Risk Index</a></li>
              <li><Link href="/champions" className="text-sm text-primary-foreground/50 hover:text-primary-foreground transition-colors">Become a Recess Champion</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">&copy; {new Date().getFullYear()} Recess. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.iubenda.com/privacy-policy/50662983"
              className="iubenda-white no-brand iubenda-noiframe iubenda-embed iub-body-embed text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors"
              title="Privacy Policy"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.iubenda.com/terms-and-conditions/50662983"
              className="iubenda-white iubenda-noiframe iubenda-embed iub-body-embed text-xs text-primary-foreground/40 hover:text-primary-foreground/60 transition-colors"
              title="Terms and Conditions"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
        <Script id="iubenda-loader" strategy="afterInteractive">{`
          (function (w, d) {
            var loader = function () {
              var s = d.createElement("script"),
                tag = d.getElementsByTagName("script")[0];
              s.src = "https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s, tag);
            };
            if (w.addEventListener) {
              w.addEventListener("load", loader, false);
            } else if (w.attachEvent) {
              w.attachEvent("onload", loader);
            } else {
              w.onload = loader;
            }
          })(window, document);
        `}</Script>
      </div>
    </footer>
  )
}
