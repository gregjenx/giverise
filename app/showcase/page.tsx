"use client"

import { useState } from "react"
import { IntegratedChat, Message } from "@/components/showcase/IntegratedChat"
import { FAQTrigger } from "@/components/showcase/FAQTrigger"
import { Navbar } from "@/components/Navbar"

const FAQ_ITEMS = [
    {
        id: "1",
        question: "How do I make a donation?",
        answer: "Donating is easy! You can click the 'Donate' button in the top right corner, or I can guide you through the process right here. Would you like to make a one-time or monthly gift?"
    },
    {
        id: "2",
        question: "Where does my money go?",
        answer: "We believe in transparency. 85% of every dollar goes directly to our field programs, while 15% covers essential operations and fundraising. You can view our latest annual report for a detailed breakdown."
    },
    {
        id: "3",
        question: "Can I volunteer?",
        answer: "Absolutely! We love our community of volunteers. We have opportunities for event support, administrative help, and field work. Shall I show you the current openings?"
    },
]

export default function ShowcasePage() {
    const [messages, setMessages] = useState<Message[]>([])
    const [isTyping, setIsTyping] = useState(false)

    const handleQuestionSelect = async (item: typeof FAQ_ITEMS[0]) => {
        // Add user question
        const userMsg: Message = {
            id: Date.now().toString(),
            role: "user",
            content: item.question,
        }
        setMessages((prev) => [...prev, userMsg])
        setIsTyping(true)

        // Simulate bot delay
        setTimeout(() => {
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                role: "bot",
                content: item.answer,
            }
            setMessages((prev) => [...prev, botMsg])
            setIsTyping(false)
        }, 1500)
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans">
            <Navbar />

            <main className="container mx-auto px-4 pt-32 pb-20">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div className="text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400">
                            Engage, Don't Just Assist.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Instead of hiding your chatbot in a corner, make it part of the user journey.
                            Let visitors trigger conversations naturally through the content they're interested in.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">

                        {/* Left Column: Context / Content */}
                        <div className="space-y-6">
                            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
                                <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
                                <p className="text-slate-500 text-sm mb-6">
                                    Clicking a question doesn't just expand an answer—it starts a personalized conversation.
                                </p>

                                <FAQTrigger
                                    items={FAQ_ITEMS}
                                    onQuestionSelect={handleQuestionSelect}
                                    disabled={isTyping}
                                />
                            </div>

                            <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-2xl border border-blue-100 dark:border-blue-900/50">
                                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Why this works</h3>
                                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                                    <li>• Reduces friction to start chatting</li>
                                    <li>• Provides immediate context to the AI</li>
                                    <li>• Feels like website content, not a tool</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column: The Integrated Chat */}
                        <div className="relative sticky top-24">
                            {/* Decorative elements */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-20 dark:opacity-40"></div>

                            <IntegratedChat
                                messages={messages}
                                isTyping={isTyping}
                            />
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}
