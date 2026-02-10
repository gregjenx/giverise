import { Heart, Users, Calendar, Megaphone, Handshake, Mail, MessageSquare } from "lucide-react"

export type ViewState = "ROOT" | "VOLUNTEER" | "DONATE"

export interface Option {
    id: string
    label: string
    icon: React.ElementType
    view?: ViewState
    redirectUrl?: string
}

export const ORGANIZATION_FACTS = {
    name: "HeartWait",
    mission: "To empower communities through direct action and sustainable support.",
    impact: "Over 50,000 lives touched in 2024.",
    contactEmail: "hello@heartwait.org"
}

export const CHAT_RESPONSES = {
    volunteer: "We'd love to have you on the team! Tell us about the skills you can share or choose a role below.",
    donate: "Thank you for supporting our mission! Let us know how you'd like to give or select an option.",
    default_reply: (topic: string) => `That's great! Detailed information about ${topic} is coming right up.`,
    input_reply: "Thanks for sharing that! Based on what you said, I think our Mentorship program might be a great fit. Would you like to hear more?",
    greeting: "Welcome! How would you like to get involved today?",
    lead_gen_intro: "To help you get started with that, could I get your name?",
    lead_gen_contact: "Thanks! And what's the best email or phone number to reach you at?",
    lead_gen_success: "Perfect. Redirecting you to the right place now..."
}

export const INPUT_PLACEHOLDERS = {
    volunteer: "Tell us about the skills you can share...",
    donate: "Let us know how you'd like to give...",
    default: "Ask a question...",
    name: "Type your name...",
    contact: "Type your email or phone..."
}

export const ROOT_OPTIONS = [
    { id: "donate", label: "Donate", icon: Heart, view: "DONATE", redirectUrl: "/donate" },
    { id: "volunteer", label: "Volunteer", icon: Users, view: "VOLUNTEER", redirectUrl: "/volunteer" },
    { id: "updates", label: "Get updates", icon: Mail, redirectUrl: "/newsletter" },
    { id: "fundraise", label: "Fundraise", icon: Heart, redirectUrl: "/fundraise" },
    { id: "events", label: "Attend events", icon: Calendar, redirectUrl: "/events" },
    { id: "advocate", label: "Advocate", icon: Megaphone, redirectUrl: "/advocacy" },
    { id: "partner", label: "Partner with us", icon: Handshake, redirectUrl: "/partners" },
    { id: "join", label: "Join as a member", icon: Users, redirectUrl: "/membership" },
    { id: "share", label: "Share your perspective", icon: MessageSquare, redirectUrl: "/survey" },
] as const

export const VOLUNTEER_OPTIONS = [
    { id: "event_support", label: "Event Support", icon: Calendar },
    { id: "admin", label: "Administrative", icon: Users },
    { id: "field", label: "Field Work", icon: Handshake },
    { id: "mentorship", label: "Mentorship", icon: Users },
] as const

export const DONATE_OPTIONS = [
    { id: "one_time", label: "One-time Gift", icon: Heart },
    { id: "monthly", label: "Monthly Giving", icon: Calendar },
    { id: "program", label: "Program Specific", icon: Heart },
    { id: "stock", label: "Stock / Crypto", icon: Handshake },
] as const
