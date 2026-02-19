"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Download, Loader2 } from "lucide-react"

interface WhitePaperModalProps {
  title?: string
  fileName?: string
  downloadName?: string
  buttonLabel?: string
}

export function WhitePaperModal({
  title = "Recess White Paper: Combatting Burnout, Secondary Trauma, and Compassion Fatigue with Brain-Based Science",
  fileName = "/recess_burnout_white_paper.pdf",
  downloadName = "Recess-White-Paper-Combatting-Burnout-Secondary-Trauma.pdf",
  buttonLabel = "Download the White Paper",
}: WhitePaperModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && organization.trim() !== ""

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = fileName
    link.download = downloadName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/pipedrive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          organization: organization.trim(),
          whitePaperTitle: title,
        }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }

      setSubmitted(true)
    } catch (err) {
      console.error("Failed to submit:", err)
      // Still allow download even if Pipedrive fails
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Dialog onOpenChange={() => {
      setSubmitted(false)
      setSubmitting(false)
      setError("")
      setFirstName("")
      setLastName("")
      setEmail("")
      setOrganization("")
    }}>
      <DialogTrigger asChild>
        <Button className="rounded-full font-serif font-semibold px-8 bg-foreground text-background hover:bg-foreground/90">
          <Download className="w-4 h-4 mr-2" />
          {buttonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl text-foreground">{title}</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Access the full research citations, REPAIR&#8482; architecture, and early outcomes.
              </DialogDescription>
            </DialogHeader>
            {error && (
              <p className="text-sm text-red-600 mb-2">{error}</p>
            )}
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="wp-first-name" className="text-xs font-medium text-foreground">First Name *</Label>
                  <Input 
                    id="wp-first-name" 
                    required 
                    placeholder="First name" 
                    className="mt-1"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    disabled={submitting}
                  />
                </div>
                <div>
                  <Label htmlFor="wp-last-name" className="text-xs font-medium text-foreground">Last Name *</Label>
                  <Input 
                    id="wp-last-name" 
                    required 
                    placeholder="Last name" 
                    className="mt-1"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    disabled={submitting}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="wp-email" className="text-xs font-medium text-foreground">Work Email *</Label>
                <Input 
                  id="wp-email" 
                  type="email" 
                  required 
                  placeholder="you@organization.com" 
                  className="mt-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={submitting}
                />
              </div>
              <div>
                <Label htmlFor="wp-org" className="text-xs font-medium text-foreground">Organization *</Label>
                <Input 
                  id="wp-org" 
                  required 
                  placeholder="Your organization" 
                  className="mt-1"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  disabled={submitting}
                />
              </div>
              <div className="bg-secondary rounded-lg p-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Includes:</span> Full research citations (secondary trauma literature, AIP/EMDR foundations, polyvagal, HRV), REPAIR&#8482; architecture, and early outcomes.
                </p>
              </div>
              <Button 
                type="submit" 
                className="w-full rounded-full font-serif font-semibold bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!isFormValid || submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Download White Paper"
                )}
              </Button>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-lg font-bold text-foreground text-center">Thank you!</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground text-center">
                Your white paper is ready to download.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4 text-center">
              <div className="flex justify-center mb-4">
                <CheckCircle2 className="w-12 h-12 text-accent" />
              </div>
              <Button 
                onClick={handleDownload}
                className="rounded-full font-serif font-semibold bg-foreground text-background hover:bg-foreground/90"
              >
                <Download className="w-4 h-4 mr-2" />
                Download White Paper (PDF)
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
