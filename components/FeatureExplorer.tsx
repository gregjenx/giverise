"use client"

import { useState, useEffect } from "react"
import { Bot, Database, BarChart3, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const features = [
    {
        id: "chatbot",
        title: "Smart Engagement",
        description: "Scalable, authentic conversations that connect with donors on a personal level.",
        icon: Bot,
        image: "/images/chatbot-ui-v3.png",
        color: "bg-blue-100 text-blue-600",
    },
    {
        id: "crm",
        title: "Unified Data",
        description: "Sync effortlessly with your CRM to maintain a single source of truth for every interaction.",
        icon: Database,
        image: "/images/crm-integration-v2.png",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        id: "analytics",
        title: "Actionable Insights",
        description: "Visualize your impact with real-time dashboards that drive smarter decision-making.",
        icon: BarChart3,
        image: "/images/analytics-dashboard-v2.png",
        color: "bg-purple-100 text-purple-600",
    },
]

export function FeatureExplorer() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setActiveIndex((prevIndex) => (prevIndex + 1) % features.length)
                    return 0
                }
                return prev + 1
            })
        }, 50) // 5 seconds for full rotation (50ms * 100 = 5000ms)

        return () => clearInterval(timer)
    }, [activeIndex])

    const handleTabClick = (index: number) => {
        setActiveIndex(index)
        setProgress(0)
    }

    return (
        <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore the Platform</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        Everything you need to grow your mission in one place.
                    </p>
                </div>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start">
                    {/* Left Column: Feature List */}
                    <div className="flex flex-col gap-6">
                        {features.map((feature, index) => {
                            const isActive = index === activeIndex
                            return (
                                <div
                                    key={feature.id}
                                    onClick={() => handleTabClick(index)}
                                    className={cn(
                                        "relative cursor-pointer rounded-xl border p-6 transition-all duration-300",
                                        isActive
                                            ? "bg-muted border-primary shadow-sm"
                                            : "bg-background border-transparent hover:bg-muted/50"
                                    )}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={cn("p-3 rounded-lg", feature.color)}>
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className={cn("text-xl font-bold", isActive ? "text-primary" : "text-foreground")}>
                                                {feature.title}
                                            </h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Progress Bar for Active Item */}
                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 h-1 bg-muted-foreground/20 w-full rounded-b-xl overflow-hidden">
                                            <div
                                                className="h-full bg-primary transition-all duration-75 ease-linear"
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Right Column: Preview Area */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-muted shadow-2xl">
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            {features[activeIndex].image ? (
                                <img
                                    src={features[activeIndex].image!}
                                    alt={features[activeIndex].title}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />
                            ) : (
                                /* Fallback Visuals for items without images (due to quota generation limits) */
                                <div className="flex flex-col items-center justify-center text-center space-y-4">
                                    <div className={cn("p-6 rounded-full bg-background shadow-lg animate-pulse", features[activeIndex].color)}>
                                        {/* Render a large icon if no image */}
                                        {(() => {
                                            const Icon = features[activeIndex].icon;
                                            return <Icon className="h-16 w-16" />;
                                        })()}
                                    </div>
                                    <h3 className="text-2xl font-bold text-muted-foreground">
                                        {features[activeIndex].title} Preview
                                    </h3>
                                    <p className="text-sm text-muted-foreground max-w-xs">
                                        (Visualize {features[activeIndex].title.toLowerCase()} interface here)
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
