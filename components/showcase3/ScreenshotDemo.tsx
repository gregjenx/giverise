"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface ScreenshotDemoProps {
    title: string
    description: string
    imageSrc: string
    imageAlt: string
    children?: React.ReactNode
    className?: string
    mobile?: boolean
}

export function ScreenshotDemo({ title, description, imageSrc, imageAlt, children, className, mobile }: ScreenshotDemoProps) {
    return (
        <section className={cn("py-12 md:py-24 border-b last:border-0", className)}>
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
                    <p className="max-w-[700px] text-slate-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                        {description}
                    </p>
                </div>

                <div className="relative mx-auto flex justify-center">

                    {mobile ? (
                        /* Mobile Frame */
                        <div className="relative w-[300px] md:w-[360px] h-[640px] md:h-[720px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
                            <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 z-10">
                                    {children}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Desktop Browser Window */
                        <div className="relative w-full max-w-5xl rounded-lg shadow-2xl overflow-hidden bg-slate-100 border border-slate-200">
                            {/* Browser Header */}
                            <div className="bg-slate-100 px-4 py-3 flex gap-2 border-b items-center">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                                </div>
                                <div className="mx-auto bg-white px-3 py-1 rounded text-xs text-slate-500 w-1/2 text-center shadow-sm">
                                    hopefoundation.org
                                </div>
                            </div>
                            {/* Browser Content */}
                            <div className="relative aspect-[16/10] bg-white w-full">
                                <Image
                                    src={imageSrc}
                                    alt={imageAlt}
                                    fill
                                    className="object-cover object-top"
                                />
                                <div className="absolute inset-0 z-10">
                                    {children}
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    )
}
