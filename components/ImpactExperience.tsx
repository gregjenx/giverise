"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
    PenTool,
    Sparkles,
    MessageSquare,
    ArrowRight,
    Check,
    ChevronLeft,
    Heart,
    Globe,
    Users,
    Lightbulb,
    Leaf,
    Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

type ViewState = "menu" | "voice" | "connector" | "visionary" | "success"

// --- THE VOICE DATA ---
const petitionPoints = [
    "I believe that access to education is a fundamental human right.",
    "I support sustainable practices that protect our planet for future generations.",
    "I stand for equal opportunities regardless of background or origin.",
    "I commit to being a voice for those who cannot speak for themselves."
]

// --- THE CONNECTOR DATA ---
const connectorQuestions = [
    {
        id: "focus",
        text: "What drives you most?",
        options: [
            { id: "people", label: "Empowering People", icon: Users },
            { id: "innovation", label: "Driving Innovation", icon: Lightbulb },
            { id: "planet", label: "Protecting the Planet", icon: Leaf },
        ]
    },
    {
        id: "style",
        text: "How do you prefer to help?",
        options: [
            { id: "hands_on", label: "Hands-on Action", icon: PenTool },
            { id: "strategic", label: "Strategic Planning", icon: Globe },
            { id: "storytelling", label: "Sharing Stories", icon: MessageSquare },
        ]
    }
]

export function ImpactExperience() {
    const [view, setView] = React.useState<ViewState>("menu")
    const [successMessage, setSuccessMessage] = React.useState("")

    // Voice State
    const [selectedPetitionPoints, setSelectedPetitionPoints] = React.useState<string[]>([])
    const [voiceName, setVoiceName] = React.useState("")

    // Connector State
    const [connectorStep, setConnectorStep] = React.useState(0)
    const [connectorAnswers, setConnectorAnswers] = React.useState<Record<string, string>>({})

    // Visionary State
    const [chatMessages, setChatMessages] = React.useState<{ role: 'user' | 'ai', text: string }[]>([
        { role: 'ai', text: "Hello. I'm listening. In your own words, what is the one change you wish to see in the world?" }
    ])
    const [chatInput, setChatInput] = React.useState("")
    const [isTyping, setIsTyping] = React.useState(false)

    const reset = () => {
        setView("menu")
        setSelectedPetitionPoints([])
        setVoiceName("")
        setConnectorStep(0)
        setConnectorAnswers({})
        setChatMessages([{ role: 'ai', text: "Hello. I'm listening. In your own words, what is the one change you wish to see in the world?" }])
        setChatInput("")
    }

    // --- HANDLERS ---

    const handleVoiceSubmit = () => {
        // Simulate submission
        setTimeout(() => {
            setSuccessMessage("Your voice has been added to the movement. You are signer #12,405.")
            setView("success")
        }, 1000)
    }

    const handleConnectorSelect = (answerId: string) => {
        const currentQ = connectorQuestions[connectorStep]
        setConnectorAnswers(prev => ({ ...prev, [currentQ.id]: answerId }))

        if (connectorStep < connectorQuestions.length - 1) {
            setConnectorStep(prev => prev + 1)
        } else {
            // Calculate persona (mock logic)
            setTimeout(() => {
                setSuccessMessage("Analysis complete. You are a 'Strategic Humanist'. We have 3 projects that match your profile.")
                setView("success")
            }, 800)
        }
    }

    const handleChatSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!chatInput.trim()) return

        const userMsg = chatInput
        setChatMessages(prev => [...prev, { role: 'user', text: userMsg }])
        setChatInput("")
        setIsTyping(true)

        // Simulate AI thinking
        setTimeout(() => {
            let aiResponse = "Thank you for sharing that powerful vision."
            const lower = userMsg.toLowerCase()

            if (lower.includes("education") || lower.includes("school")) {
                aiResponse = "Your focus on education resonates with our 'Knowledge First' initiative. We believe learning is the seed of change."
            } else if (lower.includes("food") || lower.includes("hunger")) {
                aiResponse = "Food security is a critical foundation. Your insight aligns perfectly with our 'Nourish Tomorrow' program."
            } else if (lower.includes("climate") || lower.includes("environment")) {
                aiResponse = "Protecting our planet is an urgent task. Your passion for the environment mirrors our sustainability goals."
            }

            setChatMessages(prev => [...prev, { role: 'ai', text: aiResponse + " Would you like to see how we're addressing this?" }])
            setIsTyping(false)
        }, 1500)
    }

    // --- RENDER HELPERS ---

    const Header = ({ title, subtitle }: { title: string, subtitle: string }) => (
        <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 mb-2">
                {title}
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
        </div>
    )

    const BackButton = () => (
        <Button variant="ghost" size="sm" onClick={() => setView("menu")} className="absolute top-4 left-4">
            <ChevronLeft className="w-4 h-4 mr-1" /> Back
        </Button>
    )

    return (
        <div className="w-full max-w-5xl mx-auto p-4 perspective-1000">
            <AnimatePresence mode="wait">
                {view === "menu" && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {[
                            { id: "voice", title: "The Voice", desc: "Stand for what you believe in.", icon: PenTool, color: "text-rose-500", bg: "bg-rose-500/10" },
                            { id: "connector", title: "The Connector", desc: "Discover your impact persona.", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
                            { id: "visionary", title: "The Visionary", desc: "Share your vision with AI.", icon: Sparkles, color: "text-purple-500", bg: "bg-purple-500/10" },
                        ].map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="cursor-pointer"
                                onClick={() => setView(item.id as ViewState)}
                            >
                                <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all bg-card/80 backdrop-blur">
                                    <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center space-y-4">
                                        <div className={`p-4 rounded-full ${item.bg} ${item.color} mb-2`}>
                                            <item.icon className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-xl font-bold">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.desc}</p>
                                        <div className="pt-4 text-sm font-medium text-primary flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            Begin <ArrowRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {view === "voice" && (
                    <motion.div
                        key="voice"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="max-w-xl mx-auto relative"
                    >
                        <Card className="overflow-hidden border-none shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-500 to-orange-500" />
                            <BackButton />
                            <CardContent className="p-8 pt-12">
                                <Header title="The Voice" subtitle="Select the statements that resonate with you to sign the pledge." />

                                <div className="space-y-4 mb-8">
                                    {petitionPoints.map((point, idx) => (
                                        <div key={idx} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer" onClick={() => {
                                            if (selectedPetitionPoints.includes(point)) {
                                                setSelectedPetitionPoints(prev => prev.filter(p => p !== point))
                                            } else {
                                                setSelectedPetitionPoints(prev => [...prev, point])
                                            }
                                        }}>
                                            <Checkbox checked={selectedPetitionPoints.includes(point)} onCheckedChange={() => { }} />
                                            <label className="text-sm leading-relaxed cursor-pointer font-medium">{point}</label>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-4">
                                    <Label>Sign with your name</Label>
                                    <Input
                                        placeholder="Your Name"
                                        value={voiceName}
                                        onChange={(e) => setVoiceName(e.target.value)}
                                        className="text-lg"
                                    />
                                    <Button
                                        className="w-full bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white"
                                        size="lg"
                                        disabled={selectedPetitionPoints.length === 0 || !voiceName}
                                        onClick={handleVoiceSubmit}
                                    >
                                        Sign the Pledge
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {view === "connector" && (
                    <motion.div
                        key="connector"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="max-w-2xl mx-auto relative"
                    >
                        <Card className="overflow-hidden border-none shadow-2xl">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <BackButton />
                            <CardContent className="p-8 pt-12">
                                <Header title="The Connector" subtitle="Let's find the cause that fits you best." />

                                <div className="min-h-[300px] flex flex-col justify-center">
                                    <h3 className="text-xl font-semibold text-center mb-8">
                                        {connectorQuestions[connectorStep].text}
                                    </h3>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {connectorQuestions[connectorStep].options.map((opt) => (
                                            <motion.button
                                                key={opt.id}
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => handleConnectorSelect(opt.id)}
                                                className="flex flex-col items-center justify-center p-6 rounded-xl border-2 border-transparent hover:border-blue-500/30 bg-muted/30 hover:bg-blue-500/5 transition-all space-y-3"
                                            >
                                                <div className="p-3 bg-background rounded-full shadow-sm text-blue-600">
                                                    <opt.icon className="w-6 h-6" />
                                                </div>
                                                <span className="font-medium text-sm">{opt.label}</span>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-center space-x-2">
                                    {connectorQuestions.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-2 w-2 rounded-full transition-colors ${i === connectorStep ? "bg-blue-500" : "bg-muted"}`}
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {view === "visionary" && (
                    <motion.div
                        key="visionary"
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        className="max-w-2xl mx-auto relative h-[600px]"
                    >
                        <Card className="overflow-hidden border-none shadow-2xl h-full flex flex-col">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500" />
                            <div className="p-4 border-b flex items-center relative">
                                <BackButton />
                                <div className="w-full text-center">
                                    <h3 className="font-semibold text-lg">Visionary AI</h3>
                                </div>
                            </div>

                            <CardContent className="flex-1 p-0 flex flex-col overflow-hidden bg-slate-50/50 dark:bg-slate-900/10">
                                <ScrollArea className="flex-1 p-6">
                                    <div className="space-y-4">
                                        {chatMessages.map((msg, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                            >
                                                <div className={`max-w-[80%] p-4 rounded-2xl ${msg.role === 'user'
                                                        ? 'bg-purple-600 text-white rounded-tr-none'
                                                        : 'bg-white dark:bg-slate-800 shadow-sm border rounded-tl-none'
                                                    }`}>
                                                    <p className="text-sm leading-relaxed">{msg.text}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                        {isTyping && (
                                            <div className="flex justify-start">
                                                <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border shadow-sm flex space-x-2">
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" />
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75" />
                                                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>

                                <div className="p-4 bg-background border-t">
                                    <form onSubmit={handleChatSubmit} className="flex gap-2">
                                        <Input
                                            value={chatInput}
                                            onChange={e => setChatInput(e.target.value)}
                                            placeholder="Type your vision here..."
                                            className="flex-1"
                                        />
                                        <Button type="submit" size="icon" disabled={!chatInput.trim() || isTyping}>
                                            <Send className="w-4 h-4" />
                                        </Button>
                                    </form>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {view === "success" && (
                    <motion.div
                        key="success"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-lg mx-auto text-center"
                    >
                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <Sparkles className="w-10 h-10" />
                        </div>
                        <h2 className="text-3xl font-bold mb-4">Impact Recorded</h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            {successMessage}
                        </p>
                        <Button onClick={reset} variant="outline" size="lg">
                            Start Over
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
