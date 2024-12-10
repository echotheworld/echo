export function Footer() {
    return (
      <footer className="border-t bg-background/80 backdrop-blur-sm">
        <div className="container flex items-center justify-center h-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jericho Jan, All rights reserved.
          </p>
        </div>
      </footer>
    )
  }