"use client"

import { MessageCircleQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ContextualAskProps {
    topic: string
    prompt: string
    onAsk: () => void
}

export function ContextualAsk({ topic, prompt, onAsk }: ContextualAskProps) {
    return (
        <div className="my-8 p-6 bg-slate-50 border border-slate-100 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
                    <MessageCircleQuestion className="h-6 w-6" />
                </div>
                <div>
                    <h4 className="font-serif font-semibold text-slate-900 text-lg">Have questions about {topic}?</h4>
                    <p className="text-slate-600 text-sm">Our digital assistant can provide more details instantly.</p>
                </div>
            </div>
            <Button
                onClick={onAsk}
                className="bg-white hover:bg-slate-50 text-blue-600 border border-blue-200 hover:border-blue-300 shadow-sm whitespace-nowrap"
            >
                {prompt}
            </Button>
        </div>
    )
}
