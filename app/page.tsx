import Link from "next/link"
import { ArrowRight, CheckCircle2, Laptop, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

import { UpliftingWave } from "@/components/UpliftingWave"
import { FeatureExplorer } from "@/components/FeatureExplorer"
import { HeroUrlInput } from "@/components/HeroUrlInput"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-8">
            <img src="/images/giverise-logo-black.png" alt="GiveRise Logo" className="h-8" />
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link href="#tools" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80">
              Tools
            </Link>
            <Link href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80">
              Pricing
            </Link>
            <Link href="#resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80">
              Resources
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80">
              Contact Us
            </Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/80">
              Log in
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <Button size="sm" className="rounded-full">Get Started Now</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full pt-10 pb-20 md:pt-20 md:pb-32 lg:pt-24 lg:pb-48 bg-background relative overflow-hidden">
          <UpliftingWave />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="flex items-center justify-center">
                <img src="/images/giverise-logo-black.png" alt="GiveRise Logo" className="h-10 md:h-12" />
              </div>
              <div className="space-y-6 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-7xl text-foreground">
                  Give Rise to your mission's potential.
                </h1>
                <p className="mx-auto max-w-[800px] text-muted-foreground text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight">
                  AI communications that unite your team and your visitors.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-w-full pt-4 items-center">
                <HeroUrlInput />
                <div className="mt-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                    Or see a demo without your URL <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none">

                    <br /> GiveRise to true alignment.
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    When visitors feel understood and staff feels empowered, you do more than engage—you achieve. GiveRise connects every interaction to your mission's core.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="rounded-full px-8">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="rounded-full px-8">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-muted/50 shadow-xl lg:aspect-square">
                  <img
                    src="/images/give-rise-to-happy-stakeholders.jpg"
                    alt="Happy stakeholders engaging with the platform"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <FeatureExplorer />
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need to Align</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  One platform, two powerful tools. GiveRise Connect helps visitors find their way, while GiveRise Core ensures your staff is there to guide them.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <img
                  src="/images/giverise-connect-branded.png"
                  alt="GiveRise Connect Interface"
                  className="w-full rounded-md shadow-sm mb-4"
                />
                <h3 className="text-xl font-bold">GiveRise Connect</h3>
                <p className="text-center text-muted-foreground">
                  Meet your donors where they are. Authentic, automated conversations that guide every visitor to their unique impact.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <img
                  src="/images/giverise-core-branded.png"
                  alt="GiveRise Core Interface"
                  className="w-full rounded-md shadow-sm mb-4"
                />
                <h3 className="text-xl font-bold">GiveRise Core</h3>
                <p className="text-center text-muted-foreground">
                  Unify your team’s efforts. Tools that keep your staff aligned, informed, and ready to deepen every relationship.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <img
                  src="/images/unified-impact-branded.png"
                  alt="Unified Impact Dashboard"
                  className="w-full rounded-md shadow-sm mb-4"
                />
                <h3 className="text-xl font-bold">Unified Impact</h3>
                <p className="text-center text-muted-foreground">
                  See the whole picture. Real-time data that connects engagement to outcomes, proving the value of every interaction.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "GiveRise helped us connect with stakeholders in a way that finally felt personal and purposeful. We're not just reaching more people—we're building real momentum."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted p-1">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Carlos T. </p>
                    <p className="text-sm text-muted-foreground">Executive Director, One River Alliance</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "The platform made our ambitious goals feel doable. With better insight and smoother coordination, we've launched two new programs we didn't think we had the capacity for."
                  </p>
                </div>
                <div className="flex items-center space-x-4 pt-4">
                  <div className="rounded-full bg-muted p-1">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Asha R.</p>
                    <p className="text-sm text-muted-foreground">Program Manager, Families First Network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Alignment at Every Stage</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Transparent pricing designed to help you scale your impact, not your overhead.
                </p>

              </div>
            </div>
            <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6 py-12">
              {/* Tier 1: Starter */}
              <div className="flex w-full min-w-[300px] max-w-[350px] flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-[#0EA5E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]/5 hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0EA5E9]">Starter</h3>
                  <p className="text-muted-foreground">Perfect for individuals and small experiments.</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $0
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ forever</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Basic Widget</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>500 messages / mo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Standard Engagement Analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Basic Visitor Activity</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-[#0EA5E9] hover:bg-[#0284c7]">Start for Free</Button>
              </div>

              {/* Tier 2: Essential */}
              <div className="flex w-full min-w-[300px] max-w-[350px] flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-[#0EA5E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]/5 hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0EA5E9]">Essential</h3>
                  <p className="text-muted-foreground">For small non-profits getting started.</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $49
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Basic Customization</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>2,000 messages / mo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Visitor Interest Tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Data for Targeted Outreach</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Email Support</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-[#0EA5E9] hover:bg-[#0284c7]">Get Essential</Button>
              </div>

              {/* Tier 3: Growth (Featured) */}
              <div className="flex w-full min-w-[300px] max-w-[350px] flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-[#0EA5E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]/5 hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0EA5E9]">Growth</h3>
                  <p className="text-muted-foreground">For growing organizations scaling impact.</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $149
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>10,000 messages / mo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>CRM Integration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Full Visitor Journey Insights</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Advanced Interaction Data</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Remove Branding</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-[#0EA5E9] hover:bg-[#0284c7]">Get Growth</Button>
              </div>

              {/* Row 2 */}

              {/* Tier 4: Scale */}
              <div className="flex w-full min-w-[300px] max-w-[350px] flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-[#0EA5E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]/5 hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0EA5E9]">Scale</h3>
                  <p className="text-muted-foreground">For high-volume organizations.</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  $399
                  <span className="ml-1 text-sm font-medium text-muted-foreground">/ month</span>
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>50,000 messages / mo</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Real-time Visitor Monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Strategic Engagement Intelligence</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Advanced Analytics</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-[#0EA5E9] hover:bg-[#0284c7]">Get Scale</Button>
              </div>

              {/* Tier 5: Mission (Custom) */}
              <div className="flex w-full min-w-[300px] max-w-[350px] flex-col rounded-lg border bg-background p-6 shadow-sm ring-2 ring-[#0EA5E9] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0EA5E9]/5 hover:shadow-xl hover:shadow-[#0EA5E9]/20">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#0EA5E9]">Mission</h3>
                  <p className="text-muted-foreground">For organizations with unique needs.</p>
                </div>
                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  Custom
                </div>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Unlimited Messages</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Dedicated Success Manager</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Unique Analytics & Goals</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Bespoke Data Solutions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Custom Impact Reporting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle2 className="mr-2 h-4 w-4 text-[#0EA5E9]" />
                    <span>Custom Integrations</span>
                  </li>
                </ul>
                <Button className="mt-6 bg-[#0EA5E9] hover:bg-[#0284c7]">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Align and Rise?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get in touch to see how better alignment allows you to achieve significantly more.
              </p>
              <div className="flex flex-col gap-2 text-muted-foreground">
                <p><strong>Phone:</strong> 202-507-8000</p>
                <p><strong>Email:</strong> info@giverise.ai</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main >
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2 font-bold">
            <img src="/images/giverise-logo-black.png" alt="GiveRise.ai Logo" className="h-6" />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 GiveRise.ai. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-foreground/80">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div >
  )
}
