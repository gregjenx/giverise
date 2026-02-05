"use client"

import { useState } from "react"
import { X, MessageSquare, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

interface MobileInteractionProps {
    onAsk: () => void
    onSuggest: () => void
}

export function MobileInteraction({ onAsk, onSuggest }: MobileInteractionProps) {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-40 md:hidden"
            >
                <div className="flex justify-between items-start mb-3">
                    <p className="font-semibold text-slate-800 text-sm">Let me know if you have any questions!</p>
                    <button onClick={() => setIsVisible(false)} className="text-slate-400 hover:text-slate-600">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <Button onClick={onAsk} variant="outline" className="flex items-center gap-2 text-xs h-10 border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100">
                        <MessageSquare className="h-3.5 w-3.5" />
                        I have a question
                    </Button>
                    <Button onClick={onSuggest} variant="outline" className="flex items-center gap-2 text-xs h-10 border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100">
                        <Lightbulb className="h-3.5 w-3.5" />
                        I have a suggestion
                    </Button>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="w-full text-center text-[10px] text-slate-400 mt-3 hover:text-slate-600"
                >
                    No, thanks
                </button>
            </motion.div>
        </AnimatePresence>
    )
}
