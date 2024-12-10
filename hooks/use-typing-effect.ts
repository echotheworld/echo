import { useState, useEffect } from 'react'

export function useTypingEffect(
  texts: string[],
  typingSpeed: number = 10,
  deletingSpeed: number = 3,
  delayBetweenTexts: number = 300
) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const typeText = () => {
      const fullText = texts[currentTextIndex]
      if (!isDeleting && currentText !== fullText) {
        setCurrentText(fullText.slice(0, currentText.length + 1))
        timeout = setTimeout(typeText, typingSpeed)
      } else if (isDeleting && currentText !== '') {
        setCurrentText(currentText.slice(0, -1))
        timeout = setTimeout(typeText, deletingSpeed)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        timeout = setTimeout(typeText, delayBetweenTexts)
      } else {
        setIsDeleting(true)
        timeout = setTimeout(typeText, delayBetweenTexts)
      }
    }

    timeout = setTimeout(typeText, delayBetweenTexts)

    return () => clearTimeout(timeout)
  }, [currentText, currentTextIndex, isDeleting, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return currentText
}

