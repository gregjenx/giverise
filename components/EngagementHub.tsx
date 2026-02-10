"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Heart, Handshake, Users, Megaphone, HelpCircle, ArrowRight, Check, ChevronRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

// Types of engagement
type EngagementType = "donate" | "partner" | "volunteer" | "advocate" | "beneficiary"

interface EngagementOption {
    id: EngagementType
    title: string
    description: string
    icon: React.ElementType
    color: string
    action: "redirect" | "form"
    redirectUrl?: string
}

const engagementOptions: EngagementOption[] = [
    {
        id: "donate",
        title: "Make a Donation",
        description: "Support our mission financially. Every contribution counts.",
        icon: Heart,
        color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400",
        action: "redirect",
        redirectUrl: "https://example.com/donate", // Hypothetical URL
    },
    {
        id: "partner",
        title: "Become a Partner",
        description: "Collaborate with us to amplify our collective impact.",
        icon: Handshake,
        color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
        action: "form",
    },
    {
        id: "volunteer",
        title: "Volunteer Your Time",
        description: "Join our dedicated team and help us on the ground.",
        icon: Users,
        color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400",
        action: "form",
    },
    {
        id: "advocate",
        title: "Become an Advocate",
        description: "Spread the word and help us reach more people.",
        icon: Megaphone,
        color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400",
        action: "form",
    },
    {
        id: "beneficiary",
        title: "Get Support",
        description: "Connect with our services and let us help you.",
        icon: HelpCircle,
        color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
        action: "form",
    },
]

// Form Schema
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    organizationName: z.string().optional(),
    partnershipType: z.string().optional(),
    volunteerInterests: z.array(z.string()).optional(),
    message: z.string().optional(),
})

export function EngagementHub() {
    const [selectedOption, setSelectedOption] = React.useState<EngagementType | null>(null)
    const [formStep, setFormStep] = React.useState<"selection" | "details" | "success">("selection")
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            organizationName: "",
            partnershipType: "",
            volunteerInterests: [],
            message: "",
        },
    })

    const handleOptionSelect = (option: EngagementOption) => {
        if (option.action === "redirect" && option.redirectUrl) {
            window.location.href = option.redirectUrl
        } else {
            setSelectedOption(option.id)
            setFormStep("details")
        }
    }

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        setIsSubmitting(true)
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log("Form submitted:", { type: selectedOption, ...data })
        setIsSubmitting(false)
        setFormStep("success")
    }

    const resetFlow = () => {
        setSelectedOption(null)
        setFormStep("selection")
        form.reset()
    }

    const getSelectedOptionDetails = () => engagementOptions.find((opt) => opt.id === selectedOption)

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            <Card className="border-none shadow-xl bg-card/50 backdrop-blur-sm overflow-hidden">
                <CardHeader className="text-center pb-2">
                    <CardTitle className="text-3xl font-bold tracking-tight">How can you make a difference today?</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                        Choose the path that resonates with you.
                    </CardDescription>
                </CardHeader>

                <CardContent className="p-6">
                    <AnimatePresence mode="wait">
                        {formStep === "selection" && (
                            <motion.div
                                key="selection"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                            >
                                {engagementOptions.map((option) => (
                                    <motion.button
                                        key={option.id}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => handleOptionSelect(option)}
                                        className="flex flex-col items-start p-6 rounded-xl border bg-card hover:border-primary/50 hover:shadow-md transition-all text-left h-full"
                                    >
                                        <div className={`p-3 rounded-full mb-4 ${option.color}`}>
                                            <option.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                                        <p className="text-sm text-muted-foreground">{option.description}</p>
                                        <div className="mt-auto pt-4 flex items-center text-sm font-medium text-primary">
                                            {option.action === "redirect" ? "Donate Now" : "Get Started"}
                                            <ChevronRight className="w-4 h-4 ml-1" />
                                        </div>
                                    </motion.button>
                                ))}
                            </motion.div>
                        )}

                        {formStep === "details" && selectedOption && (
                            <motion.div
                                key="details"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="mb-6 flex items-center gap-3">
                                    <Button variant="ghost" size="sm" onClick={() => setFormStep("selection")} className="gap-1">
                                        Back
                                    </Button>
                                    <div className="h-6 w-px bg-border" />
                                    <span className="font-medium flex items-center gap-2">
                                        {(() => {
                                            const opt = getSelectedOptionDetails();
                                            const Icon = opt?.icon!;
                                            return (
                                                <>
                                                    <div className={`p-1.5 rounded-full ${opt?.color}`}>
                                                        <Icon className="w-4 h-4" />
                                                    </div>
                                                    {opt?.title}
                                                </>
                                            )
                                        })()}
                                    </span>
                                </div>

                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl mx-auto">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <FormField
                                                control={form.control}
                                                name="name"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Jane Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="jane@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        {selectedOption === "partner" && (
                                            <div className="grid grid-cols-1 gap-6">
                                                <FormField
                                                    control={form.control}
                                                    name="organizationName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Organization Name</FormLabel>
                                                            <FormControl>
                                                                <Input placeholder="Acme Corp" {...field} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={form.control}
                                                    name="partnershipType"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Partnership Interest</FormLabel>
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder="Select type" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="corporate">Corporate Sponsorship</SelectItem>
                                                                    <SelectItem value="program">Program Partnership</SelectItem>
                                                                    <SelectItem value="technology">Technology Partner</SelectItem>
                                                                    <SelectItem value="other">Other</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                            </div>
                                        )}

                                        {selectedOption === "volunteer" && (
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Why do you want to volunteer?</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Tell us a bit about your skills and interests..."
                                                                className="resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}

                                        {(selectedOption === "advocate" || selectedOption === "beneficiary") && (
                                            <FormField
                                                control={form.control}
                                                name="message"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>{selectedOption === "advocate" ? "How can you help spread the word?" : "How can we support you?"}</FormLabel>
                                                        <FormControl>
                                                            <Textarea
                                                                placeholder="Share your thoughts..."
                                                                className="resize-none"
                                                                {...field}
                                                            />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        )}

                                        <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <>Sending...</>
                                            ) : (
                                                <>Submit Interest <ArrowRight className="w-4 h-4 ml-2" /></>
                                            )}
                                        </Button>
                                    </form>
                                </Form>
                            </motion.div>
                        )}

                        {formStep === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center py-10 text-center"
                            >
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                    <Check className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">Thank you for connecting!</h3>
                                <p className="text-muted-foreground max-w-md mx-auto mb-8">
                                    We've received your information and will be in touch shortly. Together, we can make a lasting impact.
                                </p>
                                <Button onClick={resetFlow} variant="outline">
                                    Start Over
                                </Button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </CardContent>
            </Card>
        </div>
    )
}
