"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowLeft, ChevronDown, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    ORGANIZATION_FACTS,
    CHAT_RESPONSES,
    INPUT_PLACEHOLDERS,
    ROOT_OPTIONS,
    Option
} from "@/lib/chat-facts"
import { ORGANIZATION_CONTEXT, FALLBACK_RESPONSE } from "@/lib/knowledge-base"

type FlowStep = "SELECTION" | "INFO" | "NAME" | "CONTACT" | "REDIRECT"

export function GiveRiseCoreDemo() {
    const [isOpen, setIsOpen] = useState(false)
    const [flowStep, setFlowStep] = useState<FlowStep>("SELECTION")
    const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([])
    const [inputValue, setInputValue] = useState("")
    const [selectedOption, setSelectedOption] = useState<Option | null>(null)
    const [userName, setUserName] = useState("")

    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, flowStep])

    const findRelevantFact = (label: string) => {
        const sentences = ORGANIZATION_CONTEXT
            .split(/[.\n]+/)
            .map(s => s.trim())
            .filter(s => s.length > 0)

        const keywords = label.toLowerCase().split(' ')

        let bestMatch = { sentence: "", score: 0 }

        sentences.forEach(sentence => {
            const lowerSentence = sentence.toLowerCase()
            let score = 0
            keywords.forEach(word => {
                if (word.length > 3 && lowerSentence.includes(word)) {
                    score += 1
                }
            })
            // Boost exact matches or strong keyword matches
            if (lowerSentence.includes(label.toLowerCase())) score += 2

            if (score > bestMatch.score) {
                bestMatch = { sentence, score }
            }
        })

        return bestMatch.score > 0 ? bestMatch.sentence : CHAT_RESPONSES.default_reply(label)
    }

    const handleOptionSelect = (option: Option) => {
        setSelectedOption(option)
        setFlowStep("INFO")

        // Add User Selection as message
        setMessages(prev => [...prev, { role: "user", content: `I'm interested in ${option.label}` }])

        // 1. Provide Fact
        const fact = findRelevantFact(option.label)

        setTimeout(() => {
            setMessages(prev => [...prev, { role: "bot", content: fact }])

            // 2. Ask for Name (Lead Gen Start)
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", content: CHAT_RESPONSES.lead_gen_intro }])
                setFlowStep("NAME")
            }, 800)

        }, 600)
    }

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const userText = inputValue
        setInputValue("")
        setMessages(prev => [...prev, { role: "user", content: userText }])

        if (flowStep === "NAME") {
            setUserName(userText)
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    role: "bot",
                    content: CHAT_RESPONSES.lead_gen_contact.replace("Thanks!", `Thanks ${userText}!`)
                }])
                setFlowStep("CONTACT")
            }, 600)
        } else if (flowStep === "CONTACT") {
            // Here we would save the contact info to state or backend
            setTimeout(() => {
                setMessages(prev => [...prev, { role: "bot", content: CHAT_RESPONSES.lead_gen_success }])
                setFlowStep("REDIRECT")

                // Simulate Redirect
                setTimeout(() => {
                    if (selectedOption?.redirectUrl) {
                        // In a real app: router.push(selectedOption.redirectUrl)
                        setMessages(prev => [...prev, { role: "bot", content: `(Simulating navigation to ${selectedOption.redirectUrl}...)` }])
                    }
                }, 1500)
            }, 600)
        }
    }

    const resetDemo = () => {
        setFlowStep("SELECTION")
        setMessages([])
        setInputValue("")
        setSelectedOption(null)
        setUserName("")
    }

    const getInputPlaceholder = () => {
        if (flowStep === "NAME") return INPUT_PLACEHOLDERS.name
        if (flowStep === "CONTACT") return INPUT_PLACEHOLDERS.contact
        return INPUT_PLACEHOLDERS.default
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative min-h-[600px] flex items-start justify-center">

            {/* Background Elements to simulate a site header */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center px-8 justify-between z-10 rounded-t-3xl">
                <div className="font-bold text-xl tracking-tight flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-emerald-600 dark:text-emerald-400 fill-current" />
                    </div>
                    <span>{ORGANIZATION_FACTS.name}<span className="text-emerald-500">.org</span></span>
                </div>

                {/* Header Action / Interaction Trigger */}
                <div className="relative">
                    <Button
                        variant={isOpen ? "secondary" : "ghost"}
                        size="sm"
                        onClick={() => setIsOpen(!isOpen)}
                        className="gap-2 text-sm h-10 px-5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-medium text-slate-600 dark:text-slate-300 border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                    >
                        Ways to Get Involved
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", isOpen && "rotate-180")} />
                    </Button>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full right-0 mt-2 w-[380px] md:w-[450px] max-h-[600px] flex flex-col bg-white dark:bg-slate-950 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50 origin-top-right"
                            >

                                {/* Header */}
                                <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50">
                                    <span className="font-semibold text-sm px-2">
                                        {flowStep === "SELECTION" ? "Select an option" : "Chat with us"}
                                    </span>
                                    <Button variant="ghost" size="sm" onClick={resetDemo} className="h-6 text-[10px] text-slate-400 hover:text-red-500 px-2">
                                        Reset
                                    </Button>
                                </div>

                                {/* Scrollable Content Area */}
                                <div
                                    ref={scrollRef}
                                    className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]"
                                >
                                    {/* Messages History */}
                                    {messages.map((msg, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={cn("flex w-full", msg.role === "user" ? "justify-end" : "justify-start")}
                                        >
                                            <div className={cn(
                                                "max-w-[85%] p-3 text-sm rounded-2xl",
                                                msg.role === "user"
                                                    ? "bg-emerald-600 text-white rounded-br-none"
                                                    : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-none"
                                            )}>
                                                {msg.content}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {/* Options (Multi-Select Grid) */}
                                    {flowStep === "SELECTION" && (
                                        <div className="grid grid-cols-2 gap-2 pt-2">
                                            <AnimatePresence mode="popLayout">
                                                {ROOT_OPTIONS.map((option) => (
                                                    <motion.button
                                                        key={option.id}
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.98 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        onClick={() => handleOptionSelect(option)}
                                                        className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 dark:border-slate-800 transition-all text-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:shadow-md"
                                                    >
                                                        <div className="w-8 h-8 rounded-full flex items-center justify-center transition-colors bg-slate-100 dark:bg-slate-800 text-emerald-600 dark:text-emerald-400">
                                                            <option.icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-medium">
                                                            {option.label}
                                                        </span>
                                                    </motion.button>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    )}
                                </div>

                                {/* Input Area */}
                                {flowStep !== "SELECTION" && flowStep !== "REDIRECT" && (
                                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                                        <form onSubmit={handleInputSubmit} className="relative">
                                            <input
                                                type="text"
                                                value={inputValue}
                                                onChange={(e) => setInputValue(e.target.value)}
                                                placeholder={getInputPlaceholder()}
                                                autoFocus
                                                className="w-full pl-4 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-950 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none shadow-sm transition-all"
                                            />
                                            <button
                                                type="submit"
                                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center text-white transition-colors"
                                            >
                                                <ArrowLeft className="w-4 h-4 rotate-180" />
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Main Content Area - Impact Statement */}
            <div className="relative z-0 mt-32 flex flex-col items-center justify-center text-center max-w-2xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Live Engagement Demo
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                        Transforming Visitor Engagement
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                        Experience how <span className="font-semibold text-slate-900 dark:text-slate-200">GiveRise AI</span> seamlessly connects donors, volunteers, and advocates to your mission.
                        Our intelligent tools personalize every interaction, ensuring your community feels heard and valued from the very first click.
                    </p>
                </motion.div>
            </div>

            {/* Visual cues connecting the idea */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-slate-400 text-sm">
                <p>Try selecting <strong>Volunteer</strong> or <strong>Donate</strong> to see the path adapt.</p>
            </div>
        </div>
    )
}
