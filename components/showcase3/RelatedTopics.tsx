"use client"

interface RelatedTopicsProps {
    onTopicSelect: (topic: string) => void
}

export function RelatedTopics({ onTopicSelect }: RelatedTopicsProps) {
    const topics = [
        "Success Stories",
        "Financial Transparency",
        "Partnership Opportunities"
    ]

    return (
        <div className="space-y-4">
            <h4 className="font-bold text-slate-900 uppercase tracking-wider text-xs border-b border-slate-200 pb-2">
                Explore More
            </h4>
            <ul className="space-y-3">
                {topics.map((topic, index) => (
                    <li key={index}>
                        <button
                            onClick={() => onTopicSelect(topic)}
                            className="text-sm text-slate-600 hover:text-emerald-700 hover:underline text-left"
                        >
                            {topic}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
