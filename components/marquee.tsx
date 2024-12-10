import { cn } from "@/lib/utils"

interface MarqueeProps {
  className?: string
  reverse?: boolean
  children: React.ReactNode
}

export function Marquee({ 
  className, 
  reverse, 
  children 
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "flex w-full overflow-hidden [--gap:2rem] relative",
        className
      )}
    >
      <div 
        className={cn(
          "flex gap-[--gap] py-4",
          reverse 
            ? "animate-marqueeReverse hover:pause-animation" 
            : "animate-marquee hover:pause-animation"
        )}
      >
        <div className="flex shrink-0 gap-[--gap]">
          {children}
        </div>
        <div className="flex shrink-0 gap-[--gap]">
          {children}
        </div>
        <div className="flex shrink-0 gap-[--gap]">
          {children}
        </div>
        <div className="flex shrink-0 gap-[--gap]">
          {children}
        </div>
      </div>
    </div>
  )
} 