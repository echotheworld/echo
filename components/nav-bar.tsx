"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function NavBar() {
  const { theme, setTheme } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="font-zen text-[18px]">
          JerichoJan
        </div>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          {/* Commented out Work and About links for now */}
          {/* <Link href="/works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Works
          </Link>
          <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            About
          </Link> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}

