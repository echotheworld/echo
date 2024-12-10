"use client"

import { useEffect, useRef } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export default function NumberTicker({ value }: { value: number }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const motionValue = useSpring(0, { duration: 1000 })
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  return (
    <motion.span ref={ref}>
      {rounded}
    </motion.span>
  )
} 