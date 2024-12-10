"use client"

import { motion } from 'framer-motion'
import { useTypingEffect } from '@/hooks/use-typing-effect'

interface AnimatedTextProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export function AnimatedText({ 
  texts, 
  className = '',
  typingSpeed = 10,
  deletingSpeed = 3,
  delayBetweenTexts = 300
}: AnimatedTextProps) {
  const animatedText = useTypingEffect(
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts
  )

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {animatedText}
      <span className="animate-blink">|</span>
    </motion.span>
  )
}

