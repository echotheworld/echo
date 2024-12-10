import { Zen_Dots } from 'next/font/google'

// Primary font - Zen Dots
export const font = Zen_Dots({
  weight: '400',  // Zen Dots only comes in weight 400
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-zen-dots',
})

// Note: Removing fontWithWeights since Zen Dots only comes in one weight 