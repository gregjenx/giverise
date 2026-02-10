import { ImpactExperience } from "@/components/ImpactExperience"
import { Navbar } from "@/components/Navbar"
import { UpliftingWave } from "@/components/UpliftingWave"

export default function EngagementDemoPage() {
    return (
        <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
            <Navbar />

            {/* Background Effect */}
            <div className="absolute inset-0 z-0">
                <UpliftingWave />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background pointer-events-none" />
            </div>

            <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 z-10 relative">
                <div className="max-w-2xl mx-auto text-center mb-8 md:mb-12 space-y-4 pt-20">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                        Make Your Impact
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Your voice, your choices, and your vision shape our future. How will you contribute today?
                    </p>
                </div>

                <ImpactExperience />
            </main>
        </div>
    )
}
