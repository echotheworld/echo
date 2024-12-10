"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface TimelineItemProps {
  title: string
  subtitle?: string
  date: string
  description?: string | string[]
  position?: "left" | "right"
}

export function TimelineItem({ 
  title, 
  subtitle, 
  date, 
  description, 
  position = "left" 
}: TimelineItemProps) {
  const variants = {
    initial: { 
      opacity: 0, 
      x: position === "left" ? -50 : 50 
    },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 top-[24px] h-full w-[2px] -translate-x-1/2 bg-muted" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
        className={`flex items-center justify-center gap-4 ${position === "left" ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* Content */}
        <div className={`w-[calc(50%-1rem)] ${position === "right" ? "text-left" : "text-right"}`}>
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-semibold">{title}</h3>
            {subtitle && (
              <p className="text-muted-foreground">{subtitle}</p>
            )}
            <p className="text-sm text-primary">{date}</p>
          </div>
          
          {description && (
            <div className="mt-2 text-muted-foreground">
              {Array.isArray(description) ? (
                <ul className={`space-y-1 ${position === "right" ? "text-left" : "text-right"}`}>
                  {description.map((item, index) => (
                    <li key={index} className="list-none">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          )}
        </div>

        {/* Timeline dot */}
        <div className="relative h-4 w-4 shrink-0">
          <div className="absolute h-full w-full rounded-full border-2 border-primary bg-background" />
        </div>

        {/* Empty space for the other side */}
        <div className="w-[calc(50%-1rem)]" />
      </motion.div>
    </div>
  )
}

export function Timeline({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative space-y-8">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<TimelineItemProps>(child)) {
          return React.cloneElement(child, {
            position: index % 2 === 0 ? "left" : "right",
          } as TimelineItemProps)
        }
        return child
      })}
    </div>
  )
} 