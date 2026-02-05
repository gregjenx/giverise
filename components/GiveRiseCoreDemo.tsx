"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ArrowLeft, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
    ORGANIZATION_FACTS,
    CHAT_RESPONSES,
    INPUT_PLACEHOLDERS,
    ROOT_OPTIONS,
} from "@/lib/chat-facts"

export function GiveRiseCoreDemo() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set())
    const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([])
    const [inputValue, setInputValue] = useState("")

    const toggleOption = (id: string, label: string) => {
        const newSelected = new Set(selectedIds)
        if (newSelected.has(id)) {
            newSelected.delete(id)
        } else {
            newSelected.add(id)
        }
        setSelectedIds(newSelected)
        updateInput(newSelected)
    }

    const updateInput = (selected: Set<string>) => {
        if (selected.size === 0) {
            setInputValue("")
            return
        }

        const labels = Array.from(selected).map(id => {
            return ROOT_OPTIONS.find(opt => opt.id === id)?.label
        }).filter(Boolean)

        if (labels.length > 0) {
            const labelString = labels.join(" and ")
            setInputValue(`I'd like to learn more about ${labelString}`)
        }
    }

    const handleInputSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        const userText = inputValue
        setInputValue("")

        // Add User Message
        setMessages(prev => [...prev, { role: "user", content: userText }])

        // Determine Response
        let response = CHAT_RESPONSES.input_reply
        if (selectedIds.has("volunteer") && selectedIds.has("donate")) {
            response = "That's wonderful! We appreciate your interest in both donating and volunteering. We can certainly help you with both."
        } else if (selectedIds.has("volunteer")) {
            response = CHAT_RESPONSES.volunteer
        } else if (selectedIds.has("donate")) {
            response = CHAT_RESPONSES.donate
        }

        // Simulate Bot Response
        setTimeout(() => {
            setMessages(prev => [...prev, { role: "bot", content: response }])
        }, 600)
    }

    const resetDemo = () => {
        setSelectedIds(new Set())
        setMessages([])
        setInputValue("")
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative min-h-[500px] flex items-start justify-center">

            {/* Background Elements to simulate a site header */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center px-8 justify-between z-10 rounded-t-3xl">
                <div className="font-bold text-xl tracking-tight">{ORGANIZATION_FACTS.name}<span className="text-emerald-500">.org</span></div>
                <div className="text-sm font-medium text-slate-500">Simulated Header</div>
            </div>

            {/* The Interactive Element */}
            <div className="relative z-20 mt-28">
                <Button
                    variant={isOpen ? "secondary" : "default"}
                    size="lg"
                    onClick={() => setIsOpen(!isOpen)}
                    className="gap-2 text-lg h-14 px-8 rounded-full shadow-lg transition-all"
                >
                    Ways to Get Involved
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isOpen && "rotate-180")} />
                </Button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[380px] md:w-[450px] max-h-[500px] flex flex-col bg-white dark:bg-slate-950 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50"
                        >

                            {/* Header */}
                            <div className="flex items-center justify-between p-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50">
                                <span className="font-semibold text-sm px-2">Select topics that interest you</span>
                                <Button variant="ghost" size="sm" onClick={resetDemo} className="h-6 text-[10px] text-slate-400 hover:text-red-500 px-2">
                                    Reset
                                </Button>
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">

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
                                {messages.length === 0 ? (
                                    <div className="grid grid-cols-2 gap-2 pt-2">
                                        <AnimatePresence mode="popLayout">
                                            {ROOT_OPTIONS.map((option) => {
                                                const isSelected = selectedIds.has(option.id)
                                                return (
                                                    <motion.button
                                                        key={option.id}
                                                        layout
                                                        initial={{ opacity: 0, scale: 0.98 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        onClick={() => toggleOption(option.id, option.label)}
                                                        className={cn(
                                                            "flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 dark:border-slate-800 transition-all text-center gap-2",
                                                            isSelected
                                                                ? "bg-emerald-50 border-emerald-200 text-emerald-700 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-300 shadow-sm"
                                                                : "bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
                                                        )}
                                                    >
                                                        <div className={cn(
                                                            "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                                                            isSelected ? "bg-emerald-100 dark:bg-emerald-800" : "bg-slate-100 dark:bg-slate-800"
                                                        )}>
                                                            <option.icon className="w-4 h-4" />
                                                        </div>
                                                        <span className="text-xs font-medium">
                                                            {option.label}
                                                        </span>
                                                    </motion.button>
                                                )
                                            })}
                                        </AnimatePresence>
                                    </div>
                                ) : null}
                            </div>

                            {/* Input Area */}
                            <div className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
                                <form onSubmit={handleInputSubmit} className="relative">
                                    <input
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        placeholder={INPUT_PLACEHOLDERS.default}
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

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Visual cues connecting the idea */}
            <div className="absolute bottom-6 left-0 right-0 text-center text-slate-400 text-sm">
                <p>Try selecting <strong>Volunteer</strong> or <strong>Donate</strong> to see the path adapt.</p>
            </div>
        </div>
    )
}
