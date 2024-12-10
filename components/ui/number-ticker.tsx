"use client"

import { useEffect, useRef } from "react"
import { motion, useSpring, useTransform, useInView } from "framer-motion"

export default function NumberTicker({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  
  const motionValue = useSpring(0, { 
    duration: 2000,
    bounce: 0.2
  })
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [motionValue, value, isInView])

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  )
} 