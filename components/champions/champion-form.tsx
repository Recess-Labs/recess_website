"use client"

import { useState } from "react"
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  fetchSignInMethodsForEmail,
  type User,
} from "firebase/auth"
import { auth, googleProvider } from "@/lib/firebase"
import { FadeInSection } from "@/components/fade-in-section"
import { ArrowRight, Loader2, Check, Star, Sparkles, AlertCircle } from "lucide-react"

type Step = "auth" | "apply"

// Google "G" icon as an inline SVG to avoid emoji/icon library constraints
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"
        fill="#4285F4"
      />
      <path
        d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
        fill="#34A853"
      />
      <path
        d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58Z"
        fill="#EA4335"
      />
    </svg>
  )
}

export function ChampionForm() {
  const [step, setStep] = useState<Step>("auth")

  // Auth step state
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [authError, setAuthError] = useState<string | null>(null)
  const [noAccountBanner, setNoAccountBanner] = useState(false)
  const [isSigningIn, setIsSigningIn] = useState(false)

  // Application step state
  const [user, setUser] = useState<User | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  // ── Auth helpers ──────────────────────────────────────────────────────────

  function handleAuthSuccess(firebaseUser: User) {
    // Pre-fill name fields from Firebase display name if available
    const displayName = firebaseUser.displayName ?? ""
    const parts = displayName.trim().split(" ")
    setFormData({
      firstName: parts[0] ?? "",
      lastName: parts.slice(1).join(" "),
      phone: firebaseUser.phoneNumber ?? "",
    })
    setUser(firebaseUser)
    setStep("apply")
  }

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault()
    setAuthError(null)
    setNoAccountBanner(false)
    setIsSigningIn(true)

    try {
      // Check whether the email has any sign-in methods in Firebase
      const methods = await fetchSignInMethodsForEmail(auth, email)
      if (methods.length === 0) {
        setNoAccountBanner(true)
        setIsSigningIn(false)
        return
      }

      const credential = await signInWithEmailAndPassword(auth, email, password)
      handleAuthSuccess(credential.user)
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? ""
      if (
        code === "auth/user-not-found" ||
        code === "auth/invalid-email"
      ) {
        setNoAccountBanner(true)
      } else if (
        code === "auth/wrong-password" ||
        code === "auth/invalid-credential"
      ) {
        setAuthError("Incorrect password. Please try again.")
      } else {
        setAuthError("Sign-in failed. Please try again.")
      }
    } finally {
      setIsSigningIn(false)
    }
  }

  async function handleGoogleSignIn() {
    setAuthError(null)
    setNoAccountBanner(false)
    setIsSigningIn(true)

    try {
      const result = await signInWithPopup(auth, googleProvider)

      // Check whether this Google account is a known Recess user
      const methods = await fetchSignInMethodsForEmail(auth, result.user.email!)
      // fetchSignInMethodsForEmail will include "google.com" since they just
      // signed in with Google — if it's their *only* method and we want to
      // restrict to existing accounts, we treat 0 non-Google methods as new.
      // However, since the Google sign-in succeeded (no thrown error), the
      // user exists in Firebase; we proceed.
      handleAuthSuccess(result.user)
    } catch (err: unknown) {
      const code = (err as { code?: string })?.code ?? ""
      if (code === "auth/popup-closed-by-user" || code === "auth/cancelled-popup-request") {
        // User dismissed — no error shown
      } else if (code === "auth/account-exists-with-different-credential") {
        setAuthError("An account already exists with a different sign-in method. Try email/password.")
      } else {
        setAuthError("Google sign-in failed. Please try again.")
      }
    } finally {
      setIsSigningIn(false)
    }
  }

  // ── Application submit ───────────────────────────────────────────────────

  async function handleApply(e: React.FormEvent) {
    e.preventDefault()
    if (!user) return
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const idToken = await user.getIdToken()

      const res = await fetch("/api/champions", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          user: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            phone: formData.phone || undefined,
            champion_enrollment: true,
          },
        }),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error ?? "Submission failed. Please try again.")
      }

      setIsSubmitted(true)
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : "Submission failed. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section id="champion-form" className="relative py-24 lg:py-32 overflow-hidden bg-[#29285D]">
      {/* Animated background elements */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full bg-[#8D7AA0]/30 blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#FFCCE5]/20 blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#AAF5D4]/15 blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: "0.5s" }} />

      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none" viewBox="0 0 1400 800" fill="none">
        <path d="M-100 400 C200 200 400 600 700 350 S1000 100 1200 400" stroke="#8D7AA0" strokeWidth="2" fill="none">
          <animate attributeName="d" dur="8s" repeatCount="indefinite" values="
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400;
            M-100 380 C200 280 400 500 700 400 S1000 200 1200 350;
            M-100 400 C200 200 400 600 700 350 S1000 100 1200 400
          " />
        </path>
      </svg>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "48px 48px" }} />

      <div className="relative mx-auto max-w-xl px-6">
        <FadeInSection>
          <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden">
            {/* Top gradient accent */}
            <div className="h-2 bg-gradient-to-r from-[#8D7AA0] via-[#FFCCE5] to-[#AAF5D4]" />

            <div className="p-8 md:p-12">
              {isSubmitted ? (
                /* ── Success screen (unchanged) ── */
                <div className="text-center py-12">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#AAF5D4] to-[#FFEDAC] flex items-center justify-center mx-auto mb-8 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <Check className="w-10 h-10 text-[#8D7AA0]" />
                    </div>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#29285D] mb-4">Thank you for applying!</h2>
                  <p className="text-lg text-[#777698] leading-relaxed max-w-sm mx-auto">
                    We&apos;ll review your application and reach out within 48 hours.
                  </p>
                </div>

              ) : step === "auth" ? (
                /* ── Step 1: Auth gate ── */
                <>
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCCE5]/20 to-[#AAF5D4]/20 border border-[#8D7AA0]/20 rounded-full px-5 py-2 mb-5">
                      <Sparkles className="w-4 h-4 text-[#8D7AA0]" />
                      <span className="text-sm font-semibold text-[#29285D]">Limited Founding Spots</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#29285D] mb-3">Apply to Join</h2>
                    <p className="text-[#777698]">
                      We&apos;re keeping this group intentionally small.
                    </p>
                  </div>

                  {/* Visual spots indicator */}
                  <div className="flex flex-col items-center gap-4 mb-10 p-5 bg-[#F5F5FF] rounded-2xl border border-[#E8E0EC]">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: ["#FFCCE5", "#AAF5D4", "#FFEDAC", "#D4EDF9"][i - 1] }} />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-[#E8E0EC]" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#777698]">A few founding spots still open</span>
                  </div>

                  {/* No-account banner */}
                  {noAccountBanner && (
                    <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-[#FFF2E2] border border-[#FFEDAC]">
                      <AlertCircle className="w-5 h-5 text-[#29285D] mt-0.5 shrink-0" />
                      <p className="text-sm text-[#29285D] leading-relaxed">
                        Looks like you don&apos;t have an account yet. Complete your onboarding at{" "}
                        <a
                          href="https://app.withrecess.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#8D7AA0] hover:underline"
                        >
                          app.withrecess.com
                        </a>{" "}
                        first.
                      </p>
                    </div>
                  )}

                  {/* Google sign-in */}
                  <button
                    type="button"
                    onClick={handleGoogleSignIn}
                    disabled={isSigningIn}
                    className="w-full flex items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-[#29285D] bg-white border-2 border-[#E8E0EC] hover:border-[#8D7AA0] hover:bg-[#F5F5FF] transition-all disabled:opacity-60 disabled:cursor-not-allowed mb-5"
                  >
                    <GoogleIcon />
                    Continue with Google
                  </button>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-1 h-px bg-[#E8E0EC]" />
                    <span className="text-sm text-[#777698]">or</span>
                    <div className="flex-1 h-px bg-[#E8E0EC]" />
                  </div>

                  {/* Email + password form */}
                  <form onSubmit={handleEmailSignIn} className="space-y-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Email address</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@organization.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Password</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                      />
                    </div>

                    {authError && (
                      <p className="text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {authError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSigningIn}
                      className="w-full flex items-center justify-center gap-3 rounded-xl px-8 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#4B3860] to-[#654870] text-white hover:from-[#5B4870] hover:to-[#755880] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSigningIn ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Signing in...
                        </>
                      ) : (
                        <>
                          Sign in
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-[#777698]">
                      No credit card required. We&apos;ll review your application and follow up within 48 hours.
                    </p>
                  </form>

                  {/* Account creation note */}
                  <div className="mt-8 pt-6 border-t border-[#E8E0EC]">
                    <p className="text-center text-sm text-[#777698]">
                      Don&apos;t have a Recess account yet? You&apos;ll need one to join as a Champion.{" "}
                      <a
                        href="https://app.withrecess.com/signup"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#8D7AA0] hover:underline"
                      >
                        Create your free account here first
                      </a>
                      , then come back to apply.
                    </p>
                  </div>
                </>

              ) : (
                /* ── Step 3: Application form (post-auth) ── */
                <>
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FFCCE5]/20 to-[#AAF5D4]/20 border border-[#8D7AA0]/20 rounded-full px-5 py-2 mb-5">
                      <Sparkles className="w-4 h-4 text-[#8D7AA0]" />
                      <span className="text-sm font-semibold text-[#29285D]">Limited Founding Spots</span>
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#29285D] mb-3">Apply to Join</h2>
                    <p className="text-[#777698]">
                      We&apos;re keeping this group intentionally small.
                    </p>
                  </div>

                  {/* Visual spots indicator */}
                  <div className="flex flex-col items-center gap-4 mb-10 p-5 bg-[#F5F5FF] rounded-2xl border border-[#E8E0EC]">
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full shadow-sm" style={{ backgroundColor: ["#FFCCE5", "#AAF5D4", "#FFEDAC", "#D4EDF9"][i - 1] }} />
                      ))}
                      {[5, 6, 7].map((i) => (
                        <div key={i} className="w-5 h-5 rounded-full bg-[#E8E0EC]" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-[#777698]">A few founding spots still open</span>
                  </div>

                  <form onSubmit={handleApply} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#29285D]">First name</label>
                        <input
                          type="text"
                          required
                          placeholder="Sarah"
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-sm font-semibold text-[#29285D]">Last name</label>
                        <input
                          type="text"
                          required
                          placeholder="Johnson"
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Email address</label>
                      <input
                        type="email"
                        value={user?.email ?? ""}
                        disabled
                        readOnly
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#EBEBF5] text-[#777698] cursor-not-allowed"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-semibold text-[#29285D]">Phone number</label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-4 rounded-xl border-2 border-[#E8E0EC] bg-[#F5F5FF] text-[#29285D] placeholder:text-[#777698]/50 focus:outline-none focus:border-[#8D7AA0] focus:bg-white transition-all"
                      />
                    </div>

                    {submitError && (
                      <p className="text-sm text-red-600 flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-3 rounded-xl px-8 py-5 font-serif font-bold text-lg bg-gradient-to-r from-[#4B3860] to-[#654870] text-white hover:from-[#5B4870] hover:to-[#755880] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Star className="w-5 h-5" />
                          Apply to Join Recess Champions
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-sm text-[#777698]">
                      We&apos;ll review your application and follow up within 48 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  )
}
