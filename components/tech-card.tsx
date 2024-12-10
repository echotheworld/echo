import Image from 'next/image'

interface TechCardProps {
  name: string
  icon: string
  description: string
}

export function TechCard({ name, icon, description }: TechCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-card px-6 py-3 hover:bg-accent/10 transition-colors">
      <Image
        src={icon}
        alt={name}
        width={24}
        height={24}
        className="h-6 w-6"
      />
      <div className="flex flex-col items-start">
        <span className="text-base font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{description}</span>
      </div>
    </div>
  )
} 