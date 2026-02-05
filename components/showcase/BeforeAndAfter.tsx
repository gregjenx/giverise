"use client"

import { ArrowRight, XCircle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function BeforeAndAfter() {
    return (
        <section className="w-full py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-slate-800">
                        Transformation You Can Measure
                    </h2>
                    <p className="max-w-[800px] text-slate-500 md:text-xl">
                        See the difference interactive engagement makes for your data and your donors.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {/* THE OLD WAY */}
                    <div className="group relative rounded-2xl border border-slate-200 bg-white p-2 md:p-4 opacity-80 hover:opacity-100 transition-opacity">
                        <div className="absolute top-4 left-4 z-10">
                            <Badge variant="destructive" className="bg-red-100 text-red-700 hover:bg-red-200 border-red-200 px-3 py-1">
                                The Old Way
                            </Badge>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 grayscale-[0.5] group-hover:grayscale-0 transition-all">
                            <img src="/images/boring_contact_form.png" alt="Generic Contact Form" className="object-cover w-full h-full opacity-90" />
                        </div>
                        <div className="mt-6 px-2 space-y-3">
                            <h3 className="text-xl font-semibold text-slate-700">Static Forms</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                                    <span>Average 2% conversion rate</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                                    <span>Feels bureaucratic and impersonal</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-500">
                                    <XCircle className="h-5 w-5 text-red-400 shrink-0" />
                                    <span>Zero context on user intent</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* THE GIVERISE WAY */}
                    <div className="relative rounded-2xl border-2 border-[#0EA5E9] bg-white p-2 md:p-4 shadow-xl shadow-[#0EA5E9]/10 transform translate-y-0 md:-translate-y-4">
                        <div className="absolute top-4 left-4 z-10">
                            <Badge className="bg-[#0EA5E9] hover:bg-[#0284c7] text-white px-3 py-1">
                                The GiveRise Way
                            </Badge>
                        </div>
                        {/* Value Badge */}
                        <div className="absolute -top-6 -right-6 z-20 hidden md:block animate-bounce">
                            <div className="bg-yellow-400 text-yellow-950 text-sm font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white transform rotate-3">
                                3x Engagement!
                            </div>
                        </div>

                        <div className="aspect-[4/3] overflow-hidden rounded-xl bg-blue-50/50">
                            <img src="/images/vibrant_chat_interaction.png" alt="GiveRise Interface" className="object-cover w-full h-full" />
                        </div>
                        <div className="mt-6 px-2 space-y-3">
                            <h3 className="text-xl font-bold text-[#0EA5E9]">Intelligent Dialogue</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span>Average 15-20% interaction rate</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span>Builds improved emotional connection</span>
                                </li>
                                <li className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                                    <span>Rich data collection for CRM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
