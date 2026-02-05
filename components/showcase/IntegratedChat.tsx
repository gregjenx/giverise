"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export interface Message {
    id: string
    role: "user" | "bot"
    content: string
}

interface IntegratedChatProps {
    messages: Message[]
    isTyping: boolean
    className?: string
}

export function IntegratedChat({ messages, isTyping, className }: IntegratedChatProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages, isTyping])

    return (
        <div className={cn("flex flex-col h-[500px] w-full max-w-md bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden", className)}>
            {/* Header */}
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <Bot className="w-5 h-5" />
                </div>
                <div>
                    <h3 className="font-semibold text-sm">GiveRise Assistant</h3>
                    <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
                {messages.length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-6 text-muted-foreground opacity-60">
                        <Bot className="w-12 h-12 mb-3 text-slate-300" />
                        <p className="text-sm">Select a question to start the conversation.</p>
                    </div>
                )}
                <AnimatePresence initial={false}>
                    {messages.map((message) => (
                        <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                                "flex w-full",
                                message.role === "user" ? "justify-end" : "justify-start"
                            )}
                        >
                            <div
                                className={cn(
                                    "max-w-[80%] p-3 rounded-2xl text-sm",
                                    message.role === "user"
                                        ? "bg-blue-600 text-white rounded-tr-none shadow-md"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none"
                                )}
                            >
                                {message.content}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {isTyping && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex justify-start"
                    >
                        <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none flex gap-1 items-center">
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* Input Area (Mock) */}
            <div className="p-3 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
                <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                    <Button type="submit" size="icon" className="absolute right-1 top-1 h-8 w-8 rounded-full bg-blue-600 hover:bg-blue-700">
                        <Send className="w-4 h-4 text-white" />
                    </Button>
                </form>
            </div>
        </div>
    )
}
