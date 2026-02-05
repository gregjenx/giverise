"use client"

import { Info } from "lucide-react"

export function AnatomyOfConnection() {
    return (
        <section className="w-full py-24 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <div className="inline-block rounded-lg bg-indigo-100 px-3 py-1 text-sm text-indigo-700">
                        The Science
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                        The Anatomy of Connection
                    </h2>
                    <p className="max-w-[800px] text-muted-foreground md:text-xl">
                        It's not just a chat bubble. It's a carefully engineered interaction designed to build trust instantly.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Chat Bubble Visualization */}
                    <div className="relative bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-2xl z-10 max-w-md mx-auto md:max-w-xl">
                        <div className="flex gap-4">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-indigo-500 flex items-center justify-center shrink-0">
                                <img src="/images/giverise-logo-black.png" alt="Bot" className="h-6 w-6 brightness-0 invert" />
                            </div>
                            <div className="space-y-4 flex-1">
                                {/* Message Body */}
                                <div className="bg-slate-50 p-6 rounded-2xl rounded-tl-none border border-slate-100 text-lg text-slate-700 leading-relaxed shadow-sm relative group">
                                    <span className="bg-yellow-100/50 -mx-1 px-1 rounded transition-colors group-hover:bg-yellow-200/50 duration-500">
                                        Hi Sarah! It's great to see you again.
                                    </span>
                                    {" "}
                                    <span className="bg-blue-100/50 -mx-1 px-1 rounded transition-colors group-hover:bg-blue-200/50 duration-500 delay-100">
                                        I know finding the right volunteer role can feel overwhelming,
                                    </span>
                                    {" but we have 3 matches that fit your schedule perfectly."}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <button className="px-6 py-3 bg-[#0EA5E9] text-white font-medium rounded-full shadow-lg shadow-blue-500/20 hover:scale-105 transition-transform">
                                        Show my matches
                                    </button>
                                    <button className="px-6 py-3 bg-white border border-slate-200 text-slate-600 font-medium rounded-full hover:bg-slate-50 transition-colors">
                                        Tell me more
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Annotation: Soft Opener */}
                        <div className="hidden md:block absolute -left-48 top-4 w-40 text-right">
                            <h4 className="font-bold text-gray-900 flex items-center justify-end gap-2">
                                The Soft Opener <Info className="h-4 w-4 text-[#0EA5E9]" />
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">Uses recognized data (if available) or warm, non-salesy language to lower defenses instantly.</p>
                            {/* Line */}
                            <svg className="absolute top-1/2 -right-8 w-8 h-[2px] overflow-visible pointer-events-none">
                                <path d="M0,0 L30,20" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                                <circle cx="30" cy="20" r="3" fill="#0EA5E9" />
                            </svg>
                        </div>

                        {/* Annotation: Smart Empathy */}
                        <div className="hidden md:block absolute -right-56 top-12 w-48 text-left">
                            <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                <Info className="h-4 w-4 text-indigo-500" /> Smart Empathy
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">Validates the user's potential hesitation before offering a solution. This is crucial for non-profit engagement.</p>
                            {/* Line */}
                            <svg className="absolute top-4 -left-8 w-8 h-[2px] overflow-visible pointer-events-none">
                                <path d="M30,0 L-4,20" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                                <circle cx="-4" cy="20" r="3" fill="#6366F1" />
                            </svg>
                        </div>

                        {/* Annotation: Clear Action */}
                        <div className="hidden md:block absolute -left-48 bottom-8 w-40 text-right">
                            <h4 className="font-bold text-gray-900 flex items-center justify-end gap-2">
                                Low-Friction &apos;Yes&apos; <Info className="h-4 w-4 text-emerald-500" />
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">High-contrast, action-oriented buttons that focus on value ("Show my matches") not generic tasks ("Submit").</p>
                            {/* Line */}
                            <svg className="absolute top-1/2 -right-8 w-8 h-[2px] overflow-visible pointer-events-none">
                                <path d="M0,0 L30,-10" stroke="#CBD5E1" strokeWidth="2" fill="none" />
                                <circle cx="30" cy="-10" r="3" fill="#10B981" />
                            </svg>
                        </div>

                    </div>

                    {/* Background Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0EA5E9]/5 rounded-full blur-3xl -z-10" />

                </div>
            </div>
        </section>
    )
}
