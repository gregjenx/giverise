"use client"

import { useEffect, useState } from "react"
import { MessageCircle, MessageSquare, MessageCircleMore } from "lucide-react"

export function UpliftingWave() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    // Generate particles only on client to avoid hydration mismatch with random values
    const newParticles = Array.from({ length: 150 }).map((_, i) => {
      // Create a "thick river" effect diagonal from bottom-left to top-right
      // We essentially want x and y to be correlated but with variance (width of river)

      // Random position across the entire container
      const x = Math.random() * 100
      const y = Math.random() * 100

      // Randomize animation params
      const duration = 15 + Math.random() * 20 + "s" // Slow, majestic flow (15-35s)
      const delay = -(Math.random() * 35) + "s" // Start at random points in the cycle

      // Randomize appearance
      const opacityStart = 0.05 + Math.random() * 0.15
      const size = 12 + Math.random() * 16

      const randomType = Math.random();
      let type;
      if (randomType < 0.33) type = 'circle';
      else if (randomType < 0.66) type = 'square';
      else type = 'more';

      return {
        id: i,
        left: `${x}%`,
        // Start position isn't vastly important as animation overrides it, 
        // but we position them to ensure distribution if animation fails
        top: `${y}%`,
        style: {
          left: `${x}%`,
          animationDuration: duration,
          animationDelay: delay,
          "--opacity-start": opacityStart,
          "--opacity-end": opacityStart * 0.5,
          width: size,
          height: size,
        } as React.CSSProperties,
        type,
        size
      }
    })
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute animate-float-up text-[#0EA5E9]"
          style={p.style}
        >
          {p.type === 'circle' ? (
            <MessageCircle width="100%" height="100%" strokeWidth={1.5} />
          ) : p.type === 'square' ? (
            <MessageSquare width="100%" height="100%" strokeWidth={1.5} />
          ) : (
            <MessageCircleMore width="100%" height="100%" strokeWidth={1.5} />
          )}
        </div>
      ))}
    </div>
  )
}

