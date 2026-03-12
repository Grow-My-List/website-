"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
]

// REALISTIC BRAND ICONS (SVG Implementation)
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
      fill="#0A66C2" 
    />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="rg" cx="30%" cy="100%" r="150%">
        <stop offset="0%" stopColor="#f09433" />
        <stop offset="25%" stopColor="#e6683c" />
        <stop offset="50%" stopColor="#dc2743" />
        <stop offset="75%" stopColor="#cc2366" />
        <stop offset="100%" stopColor="#bc1888" />
      </radialGradient>
    </defs>
    <path 
      fill="url(#rg)"
      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" 
    />
  </svg>
)

const QuantixLogoIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 120" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    <path d="M50 5L85 25L50 45L15 25L50 5Z" fill="#333333" />
    <path d="M50 12L75 25L50 38L25 25L50 12Z" fill="white" fillOpacity="0.2" />
    <path d="M15 35L50 55L85 35V45L50 65L15 45V35Z" fill="#1FA2E1" />
    <path d="M15 55L50 75L85 55V65L50 85L15 65V55Z" fill="#1FA2E1" />
  </svg>
)

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      })
    }
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? "border-b border-border/40 bg-background/80 backdrop-blur-xl" 
        : "bg-transparent"
    }`}>
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        
        <div 
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 transition-transform duration-700 ease-out"
          style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)` }}
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1FA2E10a_0%,transparent_70%)]" />
        </div>

        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <QuantixLogoIcon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
            <div className="flex flex-col">
              <span className="text-xl font-medium tracking-tight text-foreground">
                Quantix<span className="font-bold">Labs</span>
              </span>
              <span className="text-[7px] font-extrabold uppercase tracking-[0.2em] text-muted-foreground/80">
                Turning Ideas into Intelligent Solutions
              </span>
            </div>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="p-2.5 text-foreground">
            <Menu className="h-6 w-6" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:text-[#1FA2E1] group"
            >
              {item.name}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-[#1FA2E1] transition-all group-hover:left-0 group-hover:w-full" />
            </Link>
          ))}
        </div>
        
        {/* Desktop Actions Area with Real Icons */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-5">
          <div className="flex items-center gap-3 border-r pr-5 border-border/40">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95">
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110 active:scale-95">
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>

          <Button size="sm" className="bg-[#1FA2E1] hover:bg-[#1890c9] shadow-lg shadow-blue-500/20" asChild>
            <Link href="/contact" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Get Started
            </Link>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background p-6 lg:hidden flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
               <QuantixLogoIcon className="h-8 w-8" />
               <span className="font-bold text-foreground">QuantixLabs</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="text-foreground"><X /></button>
          </div>
          <div className="mt-8 space-y-4 flex-grow">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="block text-lg font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Socials Footer */}
          <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-around">
            <a href="https://linkedin.com" className="flex items-center gap-2 text-sm font-medium">
              <LinkedInIcon className="h-6 w-6" />
              <span>LinkedIn</span>
            </a>
            <a href="https://instagram.com" className="flex items-center gap-2 text-sm font-medium">
              <InstagramIcon className="h-6 w-6" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}