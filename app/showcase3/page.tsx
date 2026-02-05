"use client"

import { useState } from "react"
import { ScreenshotDemo } from "@/components/showcase3/ScreenshotDemo"
import { ChatOverlay } from "@/components/showcase3/ChatOverlay"
import { ContextualAsk } from "@/components/showcase3/ContextualAsk"
import { PopularTopics } from "@/components/showcase3/PopularTopics"
import { MobileInteraction } from "@/components/showcase3/MobileInteraction"
import { RelatedTopics } from "@/components/showcase3/RelatedTopics"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Showcase3Page() {
    const [isChatOpen, setIsChatOpen] = useState(false)
    const [chatTopic, setChatTopic] = useState<string | undefined>(undefined)
    const [initialMessage, setInitialMessage] = useState<string | undefined>(undefined)

    const openChat = (topic?: string, message?: string) => {
        setChatTopic(topic)
        setInitialMessage(message)
        setIsChatOpen(true)
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Header */}
            <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b">
                <div className="container flex h-16 items-center justify-between px-4">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <h1 className="font-bold text-slate-900">GiveRise Connect Integration Demo</h1>
                    <Button size="sm">Get Started</Button>
                </div>
            </header>

            <main>
                {/* 1. Mobile Interaction */}
                <ScreenshotDemo
                    title="Mobile-First Engagement"
                    description="On mobile devices, a non-intrusive sticky bar invites interaction without blocking content. Users can ask questions or give feedback instantly."
                    imageSrc="/images/showcase3/mobile_view.png"
                    imageAlt="Non-profit website on mobile"
                    mobile
                    className="bg-white"
                >
                    <MobileInteraction
                        onAsk={() => openChat("Mobile Ask", "I have a question regarding...")}
                        onSuggest={() => openChat("Mobile Suggestion", "I have a suggestion...")}
                    />
                </ScreenshotDemo>

                {/* 2. Contextual Ask */}
                <ScreenshotDemo
                    title="Contextual Assistance"
                    description="Embed support triggers directly within your content. When a reader finishes an article, invite them to dive deeper."
                    imageSrc="/images/showcase3/desktop_article.png"
                    imageAlt="Non-profit article page"
                >
                    <div className="absolute bottom-20 left-12 right-12 md:left-24 md:right-24 bg-white/95 backdrop-blur shadow-lg rounded-lg border border-slate-200">
                        <ContextualAsk
                            topic="Clean Water Initatives"
                            prompt="Ask about this project"
                            onAsk={() => openChat("Clean Water", "I was reading about the Clean Water Initiative and had a question.")}
                        />
                    </div>
                </ScreenshotDemo>

                {/* 3. Discovery / Popular Topics */}
                <ScreenshotDemo
                    title="Guided Discovery"
                    description="Help visitors find what they need with suggested topics. Perfect for homepages or volunteer portals."
                    imageSrc="/images/showcase3/desktop_home.png"
                    imageAlt="Non-profit homepage"
                    className="bg-white"
                >
                    <div className="absolute bottom-8 right-8 w-80 shadow-2xl">
                        <PopularTopics onTopicSelect={(topic) => openChat(topic, topic)} />
                    </div>
                </ScreenshotDemo>

            </main>

            {/* Global Overlay */}
            <ChatOverlay
                isOpen={isChatOpen}
                onClose={() => setIsChatOpen(false)}
                initialMessage={initialMessage}
                topic={chatTopic}
            />
        </div>
    )
}
