"use client"

import { MessageCircle } from "lucide-react"

interface PopularTopicsProps {
    onTopicSelect: (topic: string) => void
}

export function PopularTopics({ onTopicSelect }: PopularTopicsProps) {
    const topics = [
        "Is my donation tax-deductible?",
        "How can I volunteer remotely?",
        "Where does the money go?",
        "Can I donate stocks or crypto?"
    ]

    return (
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm">
            <h3 className="font-serif font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-emerald-600" />
                Popular Questions
            </h3>
            <div className="flex flex-col gap-2">
                {topics.map((topic, index) => (
                    <button
                        key={index}
                        onClick={() => onTopicSelect(topic)}
                        className="text-left px-4 py-3 bg-white hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 rounded-lg text-sm text-slate-700 transition-colors flex justify-between items-center group"
                    >
                        {topic}
                        <span className="text-slate-300 group-hover:text-emerald-500 text-lg">›</span>
                    </button>
                ))}
            </div>
        </div>
    )
}
