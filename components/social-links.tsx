import { Github, Instagram, Linkedin, Facebook } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function SocialLinks() {
  return (
    <div className="flex gap-4 mt-8">
      <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="h-5 w-5" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
    </div>
  )
}

