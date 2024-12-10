import { NavBar } from "@/components/nav-bar"
import { SocialLinks } from "@/components/social-links"
import { AnimatedText } from "@/components/animated-text"
import { Marquee } from "@/components/marquee"
import { TechCard } from "@/components/tech-card"
import { Timeline, TimelineItem } from "@/components/ui/timeline"
import { FadeIn, FadeInStagger } from "@/components/scroll-animation"
import { Footer } from "@/components/ui/footer"
import Image from 'next/image'
import { ViewCounter } from "@/components/view-counter"

// Define your tech stack
const techStack = [
  // Design Tools
  { 
    name: "Affinity Designer", 
    icon: "/icons/affinitydesigner.svg",
    description: "Vector graphics design tool"
  },
  { 
    name: "Affinity Photo", 
    icon: "/icons/affinityphoto.svg",
    description: "Professional photo editing"
  },
  { 
    name: "Affinity Publisher", 
    icon: "/icons/affinitypublisher.svg",
    description: "Desktop publishing software"
  },
  { 
    name: "Figma", 
    icon: "/icons/figma.svg",
    description: "Collaborative design tool"
  },

  // Frontend Frameworks & Libraries
  { 
    name: "React", 
    icon: "/icons/react.svg",
    description: "UI component library"
  },
  { 
    name: "Next.js", 
    icon: "/icons/next.svg",
    description: "React framework"
  },
  { 
    name: "React Native", 
    icon: "/icons/react.svg",
    description: "Mobile app framework"
  },
  { 
    name: "TailwindCSS", 
    icon: "/icons/tailwindcss.svg",
    description: "Utility-first CSS framework"
  },
  { 
    name: "Framer Motion", 
    icon: "/icons/framer.svg",
    description: "Animation library"
  },

  // Backend & Database
  { 
    name: "Node.js", 
    icon: "/icons/nodejs.svg",
    description: "JavaScript runtime"
  },
  { 
    name: "Firebase", 
    icon: "/icons/firebase.svg",
    description: "Backend as a Service"
  },
  { 
    name: "PlanetScale", 
    icon: "/icons/planetscale.svg",
    description: "Serverless MySQL platform"
  },
  { 
    name: "MySQL", 
    icon: "/icons/mysql.svg",
    description: "Relational database"
  },
  { 
    name: "PostgreSQL", 
    icon: "/icons/postgresql.svg",
    description: "Advanced SQL database"
  },
  { 
    name: "Supabase", 
    icon: "/icons/supabase.svg",
    description: "Open source Firebase alternative"
  },

  // Development Tools
  { 
    name: "TypeScript", 
    icon: "/icons/typescript.svg",
    description: "Typed JavaScript"
  },
  { 
    name: "JavaScript", 
    icon: "/icons/javascript.svg",
    description: "Programming language"
  },
  { 
    name: "ESLint", 
    icon: "/icons/eslint.svg",
    description: "Code linting tool"
  },
  { 
    name: "tRPC", 
    icon: "/icons/trpc.svg",
    description: "End-to-end typesafe APIs"
  },
  { 
    name: "Prisma", 
    icon: "/icons/prisma.svg",
    description: "ORM for Node.js"
  },
  { 
    name: "Drizzle", 
    icon: "/icons/drizzle.svg",
    description: "TypeScript ORM"
  },

  // Package Managers & Version Control
  { 
    name: "NPM", 
    icon: "/icons/npm.svg",
    description: "Package manager"
  },
  { 
    name: "PNPM", 
    icon: "/icons/pnpm.svg",
    description: "Fast package manager"
  },
  { 
    name: "Git", 
    icon: "/icons/git.svg",
    description: "Version control"
  },
  { 
    name: "GitHub", 
    icon: "/icons/github.svg",
    description: "Code hosting platform"
  },

  // Deployment & Infrastructure
  { 
    name: "Vercel", 
    icon: "/icons/vercel.svg",
    description: "Deployment platform"
  },
  { 
    name: "Turborepo", 
    icon: "/icons/turborepo.svg",
    description: "Monorepo build system"
  },
  { 
    name: "Expo", 
    icon: "/icons/expo.svg",
    description: "React Native platform"
  }
]

// Split the tech stack into two rows
const firstRow = techStack.slice(0, techStack.length / 2)
const secondRow = techStack.slice(techStack.length / 2)

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* Hero section with grid pattern */}
        <div className="min-h-screen relative">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-20" />
          
          {/* Gradient overlay above grid */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-10" />
          
          {/* Content */}
          <NavBar />
          <div className="container flex flex-col items-center justify-center min-h-screen text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I&apos;m{" "}
              <span className="text-primary">Jericho Jan! 👋</span>
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <AnimatedText 
                texts={[
                  "FullStack Developer.",
                  "Graphic Designer.",
                  "UI/UX Enthusiast."
                ]} 
                className="text-primary"
                typingSpeed={10}
                deletingSpeed={3}
                delayBetweenTexts={300}
              />
            </h2>
            <p className="text-lg md:text-xl max-w-2xl text-muted-foreground">
            Web developer by day, debugger by night, coffee lover always. ☕
            </p>
            <SocialLinks />
          </div>
        </div>

        {/* Tech expertise section with clean background */}
        <div className="bg-background py-12 relative overflow-hidden">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-30" />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-20" />
          
          <div className="container px-4">
            <FadeInStagger>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Tech Expertise 💻
              </h2>
            </FadeInStagger>
            <div className="relative">
              <Marquee className="[--duration:40s]">
                {firstRow.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </Marquee>
              <Marquee className="[--duration:40s]" reverse>
                {secondRow.map((tech) => (
                  <TechCard key={tech.name} {...tech} />
                ))}
              </Marquee>
              
              {/* Gradient overlays */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="bg-background py-16 relative overflow-hidden">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-30" />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-20" />
          
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              About Me 🎯
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground mb-8 text-center">
                I&apos;m a versatile professional combining technical expertise with creative skills. 
                My diverse background spans web development, multimedia production, and theology,
                allowing me to bring a unique perspective to every project.
              </p>

              <FadeInStagger>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Core Development */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">💻 Development</h3>
                      <p className="text-muted-foreground flex-grow">
                        Full-stack developer specializing in modern web technologies and mobile development.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Creative Suite */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">🎨 Creative</h3>
                      <p className="text-muted-foreground flex-grow">
                        Experienced in graphic design, video editing, and content creation using professional tools.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Digital Marketing */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">📱 Digital Marketing</h3>
                      <p className="text-muted-foreground flex-grow">
                        Skilled in social media management, copywriting, and digital marketing strategies.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Music */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">🎵 Music</h3>
                      <p className="text-muted-foreground flex-grow">
                        Multi-instrumentalist proficient in drums, guitar, keyboard, and bass.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Technical Support */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">🔧 Technical</h3>
                      <p className="text-muted-foreground flex-grow">
                        Experienced in PC maintenance, Windows OS, and various MS Office products.
                      </p>
                    </div>
                  </FadeIn>

                  {/* Communication */}
                  <FadeIn>
                    <div className="h-full p-6 rounded-lg border bg-card flex flex-col 
                      transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl
                      hover:border-primary/50 cursor-pointer">
                      <h3 className="text-xl font-bold mb-4">📢 Communication</h3>
                      <p className="text-muted-foreground flex-grow">
                        Background in theology with strong research and public speaking abilities.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </FadeInStagger>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="bg-background py-16 relative overflow-hidden">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-30" />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-20" />
          
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Professional Experience 💼
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Timeline>
                <TimelineItem
                  title="Web Developer"
                  subtitle="Freelance"
                  date="2022 - Present"
                  description={[
                    "Built responsive websites",
                    "Modern tech stack development",
                    "Backend integration"
                  ]}
                />
                
                <TimelineItem
                  title="Social Media Manager"
                  subtitle="Christ Life Church"
                  date="2020 - 2022"
                  description={[
                    "Design and manage social media campaigns",
                    "Create and schedule content",
                    "Coordinate digital strategy implementation"
                  ]}
                />
                
                <TimelineItem
                  title="Virtual Assistant"
                  subtitle="Freelance"
                  date="2019 - 2020"
                  description={[
                    "Executed designs for digital platforms",
                    "Developed concepts for clients' needs",
                    "Managed project timelines and deliverables"
                  ]}
                />
                
                <TimelineItem
                  title="Digital Printing Specialist"
                  subtitle="J 3:16 Digital Printing"
                  date="2016 - 2019"
                  description={[
                    "Created various design work",
                    "Led projects from concept to completion"
                  ]}
                />
              </Timeline>
            </div>
          </div>
        </div>

        {/* View Counter Section */}
        <div className="bg-background py-16 relative overflow-hidden">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-30" />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-20" />
          
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Total Views 👀
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary flex items-center justify-center gap-2">
                <ViewCounter />
              </div>
            </div>
          </div>
        </div>

        {/* PayPal support section */}
        <div className="bg-background py-16 relative overflow-hidden">
          {/* Grid pattern at the back */}
          <div className="absolute inset-0 grid-pattern -z-30" />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent -z-20" />
          
          <div className="container px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Maybe you can buy me a coffee? ☕
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <a 
                href="https://www.paypal.com/paypalme/jerichojanf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg 
                  bg-[#0070BA] hover:bg-[#003087] text-white 
                  transition-all duration-300 hover:scale-105"
              >
                <Image 
                  src="/icons/paypal.svg" 
                  alt="PayPal" 
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
                Support via PayPal
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

