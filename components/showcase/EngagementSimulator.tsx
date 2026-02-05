"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Heart, Mic, ArrowRight, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const personas = [
    {
        id: "donor",
        name: "The First-Time Donor",
        icon: Heart,
        color: "bg-rose-100 text-rose-600",
        description: "Hesitant but interested. Needs trust and clarity.",
        chat: {
            greeting: "Hi there! 👋 It's so heartwarming to see new faces here. Are you looking to learn more about our cause?",
            options: ["How is money used?", "I want to donate", "Success stories"],
        },
    },
    {
        id: "volunteer",
        name: "The Eager Volunteer",
        icon: User,
        color: "bg-blue-100 text-blue-600",
        description: "Ready to help. Needs specific opportunities.",
        chat: {
            greeting: "Welcome! 🌟 We can't do this without people like you. Are you looking for ways to get involved?",
            options: ["View openings", "Upcoming events", "Volunteer impact"],
        },
    },
    {
        id: "beneficiary",
        name: "Seeking Support",
        icon: Mic, // Using Mic as a metaphor for "being heard" or "speaking up"
        color: "bg-emerald-100 text-emerald-600",
        description: "In need of assistance. Needs empathy and direct path to help.",
        chat: {
            greeting: "Hello. We're here for you. 💙 If you're looking for support, we can guide you to the right resources privately.",
            options: ["Find programs", "Talk to someone", "Eligibility guide"],
        },
    },
]

export function EngagementSimulator() {
    const [activePersona, setActivePersona] = useState(personas[0])

    return (
        <section className="w-full py-12 md:py-24 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                        Interactive Demo
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                        See Empathy in Action
                    </h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-xl">
                        Select a visitor type to see how GiveRise automatically adapts to offer the right comfort and connection.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center max-w-6xl mx-auto">
                    {/* Left: Persona Selection */}
                    <div className="flex flex-col gap-4">
                        {personas.map((persona) => {
                            const isActive = activePersona.id === persona.id
                            return (
                                <div
                                    key={persona.id}
                                    onClick={() => setActivePersona(persona)}
                                    className={cn(
                                        "relative cursor-pointer rounded-xl border p-4 transition-all duration-300",
                                        isActive
                                            ? "bg-background border-primary shadow-md scale-[1.02]"
                                            : "bg-background/50 border-transparent hover:bg-background hover:scale-[1.01]"
                                    )}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={cn("p-3 rounded-full", persona.color)}>
                                            <persona.icon className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className={cn("font-bold text-lg", isActive ? "text-foreground" : "text-muted-foreground")}>
                                                {persona.name}
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {persona.description}
                                            </p>
                                        </div>
                                        {isActive && (
                                            <div className="ml-auto text-primary">
                                                <ArrowRight className="h-5 w-5" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Right: Chat Simulation */}
                    <div className="relative">
                        {/* Device Frame */}
                        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[500px] w-[300px] shadow-xl flex flex-col overflow-hidden">
                            <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                            <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                            <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

                            {/* Screen Content */}
                            <div className="flex flex-col h-full bg-white w-full overflow-hidden relative">
                                {/* Fake Header/Nav */}
                                <div className="h-14 bg-gray-50 border-b flex items-center justify-between px-4 shrink-0">
                                    <div className="w-20 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                                </div>

                                {/* Fake Content Background */}
                                <div className="flex-1 p-4 bg-gray-50/50 space-y-4 overflow-hidden opacity-50 blur-[1px]">
                                    <div className="w-full h-32 bg-gray-200 rounded-xl"></div>
                                    <div className="w-3/4 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-1/2 h-4 bg-gray-200 rounded"></div>
                                    <div className="w-full h-24 bg-gray-200 rounded-xl"></div>
                                </div>

                                {/* Chat Widget Overlay */}
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activePersona.id}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: 20, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute bottom-4 left-4 right-4"
                                    >
                                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                                            {/* Chat Header */}
                                            <div className="bg-[#0EA5E9] p-4 flex items-center gap-3">
                                                <div className="bg-white/20 p-2 rounded-full">
                                                    <MessageCircle className="text-white h-5 w-5" />
                                                </div>
                                                <div>
                                                    <p className="text-white font-bold text-sm">GiveRise Assistant</p>
                                                    <p className="text-blue-100 text-xs">Online now</p>
                                                </div>
                                            </div>
                                            {/* Chat Body */}
                                            <div className="p-4 space-y-4 bg-gray-50/50">
                                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border shadow-sm text-sm text-gray-700 leading-relaxed">
                                                    {activePersona.chat.greeting}
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {activePersona.chat.options.map((option, i) => (
                                                        <motion.button
                                                            key={option}
                                                            initial={{ scale: 0.9, opacity: 0 }}
                                                            animate={{ scale: 1, opacity: 1 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                            className="bg-[#0EA5E9]/10 text-[#0EA5E9] text-xs font-semibold px-3 py-2 rounded-full hover:bg-[#0EA5E9]/20 transition-colors text-left"
                                                        >
                                                            {option}
                                                        </motion.button>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="absolute top-1/2 -right-12 lg:-right-24 -translate-y-1/2 hidden md:block">
                            <div className="space-y-4">
                                <div className="bg-white p-4 rounded-xl shadow-lg border max-w-[200px]">
                                    <p className="text-xs text-muted-foreground font-bold uppercase mb-1">Attention Analysis</p>
                                    <p className="text-sm font-semibold text-green-600">High Engagement Detected</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
