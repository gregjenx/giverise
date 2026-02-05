"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { IntegratedChat, Message } from "@/components/showcase/IntegratedChat"
import { X, MessageCircle } from "lucide-react"

interface ChatOverlayProps {
    isOpen: boolean
    onClose: () => void
    initialMessage?: string
    topic?: string
}

export function ChatOverlay({ isOpen, onClose, initialMessage, topic }: ChatOverlayProps) {
    // Mock state for the chat
    const [messages, setMessages] = useState<Message[]>([
        { id: "1", role: "bot", content: initialMessage || "Hello! How can I help you today?" }
    ])
    const [isTyping, setIsTyping] = useState(false)

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="fixed bottom-24 right-4 md:right-8 w-full max-w-sm z-50 shadow-2xl rounded-xl"
                >
                    <div className="relative">
                        <button
                            onClick={onClose}
                            className="absolute -top-3 -right-3 bg-white text-slate-500 hover:text-red-500 rounded-full p-1 shadow-md z-10 border"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <IntegratedChat messages={messages} isTyping={isTyping} className="h-[450px] border-emerald-100 shadow-emerald-900/10" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
