"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Menu, Search, Facebook, Twitter, Instagram, Linkedin, Phone, Mail } from "lucide-react"

interface SimulatedSiteProps {
    children: React.ReactNode
}

export function SimulatedSite({ children }: SimulatedSiteProps) {
    return (
        <div className="min-h-screen bg-white font-serif text-slate-800">
            {/* Top Bar for Traditional Feel */}
            <div className="w-full bg-slate-900 text-slate-300 text-xs py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex gap-4">
                        <span className="flex items-center gap-1"><Phone className="h-3 w-3" /> +1 (555) 123-4567</span>
                        <span className="flex items-center gap-1"><Mail className="h-3 w-3" /> contact@hopefoundation.org</span>
                    </div>
                    <div className="flex gap-3">
                        <Link href="#" className="hover:text-white"><Facebook className="h-3 w-3" /></Link>
                        <Link href="#" className="hover:text-white"><Twitter className="h-3 w-3" /></Link>
                        <Link href="#" className="hover:text-white"><Instagram className="h-3 w-3" /></Link>
                        <Link href="#" className="hover:text-white"><Linkedin className="h-3 w-3" /></Link>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-40 w-full bg-white border-b shadow-sm">
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2">
                        <div className="h-10 w-10 bg-emerald-700 rounded-sm flex items-center justify-center text-white">
                            <Heart className="h-6 w-6 fill-current" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-slate-900 leading-none">HOPE</span>
                            <span className="text-xs uppercase tracking-widest text-emerald-700 font-semibold">Foundation</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-slate-600">
                        <Link href="#" className="hover:text-emerald-700 transition-colors">Our Mission</Link>
                        <Link href="#" className="hover:text-emerald-700 transition-colors">Programs</Link>
                        <Link href="#" className="hover:text-emerald-700 transition-colors">Impact</Link>
                        <Link href="#" className="hover:text-emerald-700 transition-colors">Get Involved</Link>
                        <Link href="#" className="hover:text-emerald-700 transition-colors"><Search className="h-4 w-4" /></Link>
                    </nav>

                    {/* Action Area */}
                    <div className="flex items-center gap-4">
                        <Button className="hidden md:flex bg-emerald-700 hover:bg-emerald-800 text-white rounded-none font-sans uppercase tracking-wide px-6">
                            Donate Now
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Detailed Footer */}
            <footer className="bg-slate-900 text-slate-400 py-12 border-t-4 border-emerald-700 font-sans">
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-white">
                            <Heart className="h-5 w-5 fill-current text-white" />
                            <span className="font-bold">HOPE Foundation</span>
                        </div>
                        <p className="text-sm leading-relaxed">
                            Dedicated to building clear pathways to a better future for communities worldwide.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link href="#" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="#" className="hover:text-white transition-colors">Our Team</Link>
                            <Link href="#" className="hover:text-white transition-colors">Financials</Link>
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Programs</h4>
                        <div className="flex flex-col gap-2 text-sm">
                            <Link href="#" className="hover:text-white transition-colors">Education</Link>
                            <Link href="#" className="hover:text-white transition-colors">Healthcare</Link>
                            <Link href="#" className="hover:text-white transition-colors">Clean Water</Link>
                            <Link href="#" className="hover:text-white transition-colors">Emergency Relief</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Newsletter</h4>
                        <p className="text-sm mb-4">Stay updated with our latest impact stories.</p>
                        <div className="flex gap-2">
                            <input type="email" placeholder="Email address" className="bg-slate-800 border-none rounded-none px-3 py-2 text-sm w-full focus:ring-1 focus:ring-emerald-500" />
                            <Button className="bg-emerald-700 hover:bg-emerald-800 rounded-none text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center md:text-left">
                    <p>&copy; 2026 Hope Foundation. All rights reserved. 501(c)(3) Non-profit Organization.</p>
                </div>
            </footer>
        </div>
    )
}
