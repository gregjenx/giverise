"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl flex items-center gap-2">
                    <span className="bg-blue-600 text-white w-8 h-8 rounded-lg flex items-center justify-center">G</span>
                    <span>GiveRise</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <Link href="/features" className="hover:text-blue-600 transition-colors">Features</Link>
                    <Link href="/pricing" className="hover:text-blue-600 transition-colors">Pricing</Link>
                    <Link href="/showcase" className="hover:text-blue-600 transition-colors">Showcase</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 hidden sm:block">
                        Log in
                    </Link>
                    <Button size="sm">Get Started</Button>
                </div>
            </div>
        </header>
    )
}
