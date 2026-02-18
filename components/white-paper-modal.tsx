"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2, Download } from "lucide-react"

export function WhitePaperModal() {
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [organization, setOrganization] = useState("")

  const isFormValid = firstName.trim() !== "" && lastName.trim() !== "" && email.trim() !== "" && organization.trim() !== ""

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/recess-white-paper.pdf'
    link.download = 'Recess-White-Paper.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Dialog onOpenChange={() => {
      setSubmitted(false)
      setFirstName("")
      setLastName("")
      setEmail("")
      setOrganization("")
    }}>
      <DialogTrigger asChild>
        <Button className="rounded-full font-serif font-semibold px-8 bg-foreground text-background hover:bg-foreground/90">
          <Download className="w-4 h-4 mr-2" />
          Download the White Paper
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-xl text-foreground">Download the Full White Paper</DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground mb-4">
              Access the full research citations, REPAIR&#8482; architecture, and early outcomes.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
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
                disabled={!isFormValid}
              >
                Download White Paper
              </Button>
            </form>
          </>
        ) : (
          <div className="py-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle2 className="w-12 h-12 text-accent" />
            </div>
            <h3 className="font-serif text-lg font-bold text-foreground mb-2">Thank you!</h3>
            <p className="text-sm text-muted-foreground mb-6">Your white paper is ready to download.</p>
            <Button 
              onClick={handleDownload}
              className="rounded-full font-serif font-semibold bg-foreground text-background hover:bg-foreground/90"
            >
              <Download className="w-4 h-4 mr-2" />
              Download White Paper (PDF)
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
