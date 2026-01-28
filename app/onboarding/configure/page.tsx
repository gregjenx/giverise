"use client"

import { Suspense, useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, CheckCircle2, Globe, FileText, Share2, Youtube, Shield, Settings2, User, ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

function ConfigurePageContent() {
    const searchParams = useSearchParams()
    const initialUrl = searchParams.get("url") || ""

    const [url, setUrl] = useState(initialUrl)
    const [step, setStep] = useState(1)

    // Form State
    const [selectedSources, setSelectedSources] = useState<string[]>(["website"])
    const [creativityLevel, setCreativityLevel] = useState([50])
    const [isPrivate, setIsPrivate] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Basic validation
        const nameInput = (document.getElementById('name') as HTMLInputElement)?.value
        const emailInput = (document.getElementById('email') as HTMLInputElement)?.value

        if (!nameInput || !emailInput) {
            alert("Please fill in all required fields")
            return
        }

        // Simulate API call
        console.log("Submitting configuration...", {
            url,
            sources: selectedSources,
            creativity: creativityLevel[0],
            isPrivate,
            user: { name: nameInput, email: emailInput }
        })

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log("Submitted configuration")

        // Redirect to success/home
        router.push('/?onboarding_success=true')
    }

    useEffect(() => {
        if (initialUrl) setUrl(initialUrl)
    }, [initialUrl])

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center px-4">
                    <Link href="/" className="mr-8 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back
                    </Link>
                    <div className="flex items-center gap-2 font-bold ml-auto">
                        <span className="text-sm text-muted-foreground">step {step} of 3</span>
                    </div>
                </div>
            </header>

            <main className="flex-1 container max-w-3xl py-12 px-4">
                <div className="mb-8 space-y-4">
                    <h1 className="text-3xl font-bold tracking-tight">Configure Your Chatbot</h1>
                    <p className="text-muted-foreground text-lg">
                        Let's set up how your chatbot learns and behaves.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Section 1: Content Sources */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Share2 className="h-5 w-5 text-primary" />
                                Knowledge Sources
                            </CardTitle>
                            <CardDescription>
                                Where should your chatbot learn from? We'll prioritize content from these sources.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4 sm:grid-cols-2">
                            <div className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-primary ${selectedSources.includes('website') ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}
                                onClick={() => setSelectedSources(prev => prev.includes('website') ? prev.filter(s => s !== 'website') : [...prev, 'website'])}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-background p-2 border">
                                        <Globe className="h-4 w-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium leading-none">Website</p>
                                        <p className="text-sm text-muted-foreground break-all">{url || "Your website URL"}</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-primary ${selectedSources.includes('documents') ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}
                                onClick={() => setSelectedSources(prev => prev.includes('documents') ? prev.filter(s => s !== 'documents') : [...prev, 'documents'])}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-background p-2 border">
                                        <FileText className="h-4 w-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium leading-none">Documents</p>
                                        <p className="text-sm text-muted-foreground">Upload existing PDFs/Docs</p>
                                    </div>
                                </div>
                            </div>

                            <div className={`cursor-pointer rounded-lg border p-4 transition-all hover:border-primary ${selectedSources.includes('youtube') ? 'border-primary ring-1 ring-primary bg-primary/5' : ''}`}
                                onClick={() => setSelectedSources(prev => prev.includes('youtube') ? prev.filter(s => s !== 'youtube') : [...prev, 'youtube'])}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="rounded-full bg-background p-2 border">
                                        <Youtube className="h-4 w-4" />
                                    </div>
                                    <div className="space-y-1">
                                        <p className="font-medium leading-none">YouTube</p>
                                        <p className="text-sm text-muted-foreground">Channel or playlists</p>
                                    </div>
                                </div>
                            </div>

                        </CardContent>
                    </Card>

                    {/* Section 2: Data Control */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Settings2 className="h-5 w-5 text-primary" />
                                Behavior & Control
                            </CardTitle>
                            <CardDescription>
                                Fine-tune how your chatbot interacts with users.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="creativity">Response Style</Label>
                                    <span className="text-sm text-muted-foreground">
                                        {creativityLevel[0] < 33 ? "Strict" : creativityLevel[0] > 66 ? "Creative" : "Balanced"}
                                    </span>
                                </div>
                                <Slider
                                    id="creativity"
                                    max={100}
                                    step={1}
                                    value={creativityLevel}
                                    onValueChange={setCreativityLevel}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-xs text-muted-foreground">
                                    <span>Strict (Factual)</span>
                                    <span>Creative (Conversational)</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between space-x-2 rounded-lg border p-4">
                                <div className="space-y-0.5">
                                    <Label className="text-base">Private Knowledge Base</Label>
                                    <p className="text-sm text-muted-foreground">
                                        Only allow answered questions from your verified data sources.
                                    </p>
                                </div>
                                <Switch
                                    checked={isPrivate}
                                    onCheckedChange={setIsPrivate}
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Section 3: Authentication */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                Create Account
                            </CardTitle>
                            <CardDescription>
                                Verify your identity to claim this chatbot.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="Jane Doe" required />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="email">Work Email</Label>
                                <Input id="email" type="email" placeholder="jane@organization.org" required />
                            </div>
                        </CardContent>
                    </Card>

                    <Button size="lg" className="w-full text-lg h-12" type="submit">
                        Create My Chatbot
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                </form>
            </main>
        </div>
    )
}

export default function ConfigurePage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-pulse text-muted-foreground">Loading...</div>
            </div>
        }>
            <ConfigurePageContent />
        </Suspense>
    )
}
