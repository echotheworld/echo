"use client"

import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export function FadeInStagger({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
} 