import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { EngagementSimulator } from "@/components/showcase/EngagementSimulator"
import { AnatomyOfConnection } from "@/components/showcase/AnatomyOfConnection"
import { BeforeAndAfter } from "@/components/showcase/BeforeAndAfter"

export default function ShowcasePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
                <div className="container flex h-16 items-center">
                    <Link href="/" className="mr-8 flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                    <div className="flex items-center gap-2 font-bold ml-auto md:ml-0">
                        <img src="/images/giverise-logo-black.png" alt="GiveRise.ai Logo" className="h-6" />
                    </div>
                    <div className="ml-auto flex items-center gap-4">
                        <Button size="sm" className="rounded-full">Get Started Now</Button>
                    </div>
                </div>
            </header>

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2 max-w-3xl">
                                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl text-foreground">
                                    Digital Engagement, <span className="text-[#0EA5E9]">Humanized</span>.
                                </h1>
                                <p className="mx-auto max-w-[700px] text-muted-foreground text-xl md:text-2xl font-medium tracking-tight">
                                    Explore how our technology adapts to every visitor, turning casual clicks into meaningful connections.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 1. Engagement Simulator */}
                <EngagementSimulator />

                {/* 2. Anatomy of Connection */}
                <AnatomyOfConnection />

                {/* 3. Before & After */}
                <BeforeAndAfter />

                {/* CTA */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#0EA5E9]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-8 text-center text-white">
                            <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
                                Ready to upgrade your impact?
                            </h2>
                            <p className="max-w-[600px] text-blue-50 md:text-xl">
                                Join hundreds of non-profits using GiveRise to build better relationships online.
                            </p>
                            <Button size="lg" variant="secondary" className="bg-white text-[#0EA5E9] hover:bg-gray-100 rounded-full px-8">
                                Start Your Free Trial
                            </Button>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="w-full border-t py-6 bg-slate-50">
                <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                    <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        © 2025 GiveRise.ai. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
