"use client"

import { motion } from "framer-motion"
import { MessageCircle, ArrowRight, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
    id: string
    question: string
    answer: string // The bot's automated response
}

interface FAQTriggerProps {
    items: FAQItem[]
    onQuestionSelect: (item: FAQItem) => void
    disabled?: boolean
}

export function FAQTrigger({ items, onQuestionSelect, disabled }: FAQTriggerProps) {
    return (
        <div className="grid gap-3 w-full max-w-md">
            {items.map((item, index) => (
                <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => onQuestionSelect(item)}
                    disabled={disabled}
                    className={cn(
                        "group flex items-center justify-between p-4 text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all duration-200",
                        disabled && "opacity-50 cursor-not-allowed"
                    )}
                >
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                            <HelpCircle className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-slate-700 dark:text-slate-200 text-sm group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                            {item.question}
                        </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                </motion.button>
            ))}

            <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center gap-3 text-slate-500 text-sm">
                <MessageCircle className="w-4 h-4" />
                <span>Or simply type your own question...</span>
            </div>
        </div>
    )
}
