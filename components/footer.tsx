import Link from "next/link"
import Image from "next/image"
import { Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "/careers" },
  ],
  services: [
    { name: "Software Development", href: "/services#software" },
    { name: "Web Applications", href: "/services#web" },
    { name: "Mobile Applications", href: "/services#mobile" },
    { name: "Cloud & DevOps", href: "/services#cloud" },
    { name: "AI & Automation", href: "/services#ai" },
    { name: "IT Consulting", href: "/services#consulting" },
  ],
  resources: [
    { name: "Projects", href: "/projects" },
    { name: "Case Studies", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
}

const social = [
  { name: "LinkedIn", href: "https://linkedin.com/company/quantixlab", icon: Linkedin },
  { name: "GitHub", href: "https://github.com/quantixlab", icon: Github },
  { name: "Email", href: "mailto:info@quantixlab.com", icon: Mail },
]

export function Footer() {
  return (
    <>
      {/* Realistic Floating WhatsApp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a
          href="https://wa.me/918122575337"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-16 w-16 items-center justify-center transition-transform duration-300 hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing Background Animation */}
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-20"></span>
          
          {/* Main Button Body */}
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] transition-colors group-hover:bg-[#20bd5a]">
            {/* Perfect WhatsApp SVG Icon */}
            <svg 
              viewBox="0 0 24 24" 
              width="32" 
              height="32" 
              fill="white" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.04L0 24l6.117-1.605a11.778 11.778 0 005.925 1.585h.005c6.635 0 12.032-5.396 12.035-12.03a11.799 11.799 0 00-3.417-8.507z"/>
            </svg>
          </div>

          {/* Tooltip Label */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 translate-x-4 scale-0 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-xl transition-all group-hover:translate-x-0 group-hover:scale-100">
            Chat with us
            <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-white"></div>
          </div>
        </a>
      </div>

      <footer className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0"
                >
                  <path d="M50 15L75 28L50 41L25 28L50 15Z" fill="#333333" stroke="white" strokeWidth="2"/>
                  <path d="M25 35L50 48L75 35V45L50 58L25 45V35Z" fill="#00AEEF"/>
                  <path d="M25 52L50 65L75 52V62L50 75L25 62V52Z" fill="#00AEEF"/>
                </svg>
                
                <span className="text-2xl font-semibold tracking-tight">
                  Quantix<span className="font-light">Labs</span>
                </span>
              </Link>
              
              <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                TURNING IDEAS INTO INTELLIGENT SOLUTIONS. 
                Engineering digital innovation for modern businesses.
              </p>

              <div className="mt-6 flex gap-4">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-zinc-400 transition-all hover:bg-[#00AEEF] hover:text-white hover:border-[#00AEEF]"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Navigation Columns */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-[#00AEEF]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-zinc-400 transition-colors hover:text-[#00AEEF]">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Section */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#00AEEF] mt-0.5 shrink-0" />
                  <span className="text-sm text-zinc-400">
                    Madurai TamilNadu, India<br />
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#00AEEF] shrink-0" />
                  <a href="tel:+918122575337" className="text-sm text-zinc-400 hover:text-[#00AEEF]">
                    +91 8122575337
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#00AEEF] shrink-0" />
                  <a href="mailto:info@quantixlab.com" className="text-sm text-zinc-400 hover:text-[#00AEEF]">
                    info@quantixlab.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Quantix Labs. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-sm text-zinc-500 hover:text-[#00AEEF]">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-sm text-zinc-500 hover:text-[#00AEEF]">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}