"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { ArrowRight, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroUrlInput() {
    const [url, setUrl] = useState("")
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (url) {
            router.push(`/onboarding/configure?url=${encodeURIComponent(url)}`)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-lg mx-auto pt-4 relative z-20">
            <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="url"
                        placeholder="Enter your non-profit's website URL"
                        className="pl-9 h-12 rounded-full border-muted-foreground/20 bg-background/80 backdrop-blur-sm"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </div>
                <Button size="lg" type="submit" className="rounded-full px-8 h-12 text-base shrink-0">
                    Build Your Communications Assistant
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">
                We'll analyze your website to create a continuous custom demo.
            </p>
        </form>
    )
}
