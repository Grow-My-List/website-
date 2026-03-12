"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  MapPin, Clock, Briefcase, ArrowRight, Heart, Zap, Users, Coffee, 
  GraduationCap, Plane, DollarSign, Home, Sparkles, Building2
} from "lucide-react"

/**
 * COMPONENT: NeumorphicBackgroundEngine
 * Manual implementation of a Soft Neumorphism particle system.
 * Renders tactile, light-reflective orbs that drift and pulse.
 */
function NeumorphicBackgroundEngine() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let particles: NeumorphOrb[] = [];

    class NeumorphOrb {
      x: number; y: number; size: number; vx: number; vy: number;
      pulse: number; pulseSpeed: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 150 + 50;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.005 + Math.random() * 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;

        if (this.x < -this.size) this.x = width + this.size;
        if (this.x > width + this.size) this.x = -this.size;
        if (this.y < -this.size) this.y = height + this.size;
        if (this.y > height + this.size) this.y = -this.size;
      }

      draw() {
        if (!ctx) return;
        const animatedSize = this.size + Math.sin(this.pulse) * 15;
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, animatedSize, 0, Math.PI * 2);
        
        // Creating the Neumorphic "Soft Shadow" effect manually
        const shadowGrad = ctx.createRadialGradient(
          this.x, this.y, animatedSize * 0.8,
          this.x, this.y, animatedSize
        );
        shadowGrad.addColorStop(0, "rgba(224, 229, 236, 0)");
        shadowGrad.addColorStop(1, "rgba(163, 177, 198, 0.2)");
        
        ctx.fillStyle = shadowGrad;
        ctx.fill();

        // Highlighting the "Bevel" for the soft look
        const highlightGrad = ctx.createRadialGradient(
          this.x - animatedSize * 0.3, this.y - animatedSize * 0.3, 0,
          this.x - animatedSize * 0.3, this.y - animatedSize * 0.3, animatedSize
        );
        highlightGrad.addColorStop(0, "rgba(255, 255, 255, 0.4)");
        highlightGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        
        ctx.fillStyle = highlightGrad;
        ctx.fill();
        ctx.restore();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: 15 }, () => new NeumorphOrb());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => { p.update(); p.draw(); });
      requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => window.removeEventListener("resize", init);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-[#e0e5ec] opacity-80" />;
}

// --- DATA PRESERVATION ---
const benefits = [
  { icon: DollarSign, title: "Competitive Salary", description: "Industry-leading compensation packages" },
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical, dental, and vision coverage" },
  { icon: Home, title: "Remote Flexibility", description: "Work from anywhere with flexible hours" },
  { icon: GraduationCap, title: "Learning Budget", description: "Annual allowance for courses and conferences" },
  { icon: Plane, title: "Paid Time Off", description: "Generous vacation and personal days" },
  { icon: Coffee, title: "Team Events", description: "Regular team building and social activities" },
]

const openPositions = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "We're looking for an experienced full-stack developer to build and maintain our client applications using modern technologies.",
    requirements: ["5+ years of experience with React and Node.js", "Experience with cloud platforms (AWS/GCP)", "Strong understanding of software architecture", "Excellent problem-solving skills"],
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our frontend team to create beautiful, responsive user interfaces for our enterprise clients.",
    requirements: ["3+ years of experience with React/Next.js", "Strong CSS and TypeScript skills", "Experience with design systems", "Eye for detail and UX"],
  },
  {
    id: 3,
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "San Francisco, CA / Remote",
    type: "Full-time",
    description: "Help us build and maintain robust, scalable infrastructure for our growing client base.",
    requirements: ["4+ years of DevOps experience", "Expertise in Kubernetes and Docker", "Experience with CI/CD pipelines", "AWS/GCP certification preferred"],
  },
  {
    id: 4,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Create intuitive and visually stunning designs that delight users and drive business results.",
    requirements: ["3+ years of product design experience", "Proficiency in Figma and design tools", "Strong portfolio of web/mobile projects", "Understanding of user research methods"],
  },
  {
    id: 5,
    title: "Project Manager",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead project delivery and ensure client success through effective planning and communication.",
    requirements: ["4+ years of PM experience in tech", "Agile/Scrum certification", "Strong communication skills", "Experience with enterprise clients"],
  },
]

const cultureImages = [
  { title: "Team Collaboration", description: "Working together on exciting projects" },
  { title: "Modern Office", description: "Designed for productivity and comfort" },
  { title: "Team Events", description: "Building connections beyond work" },
  { title: "Innovation Lab", description: "Where new ideas come to life" },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col relative min-h-screen font-sans">
      <NeumorphicBackgroundEngine />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/40 shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff] text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3 h-3" />
              Build the Future
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-800 leading-[0.9] mb-8 text-balance">
              Innovate with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1FA2E1] animate-text-gradient">
                Quantix Labs
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              Join a collective of passionate technologists transforming global businesses. 
              We don&apos;t just fill roles; we empower careers.
            </p>
            <Button size="lg" className="rounded-2xl h-14 px-10 bg-[#e0e5ec] text-slate-700 shadow-[6px_6px_12px_#b8b9be,-6px_-6px_12px_#ffffff] hover:shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff] border-none transition-all duration-300 group" asChild>
              <a href="#positions">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="p-10 rounded-[2.5rem] bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]">
              <span className="text-primary font-bold uppercase tracking-widest text-[10px]">Culture of Excellence</span>
              <h2 className="mt-4 text-4xl font-black text-slate-800 leading-tight">A Place Where Innovation Thrives</h2>
              <p className="mt-6 text-slate-600 leading-relaxed text-lg">
                At Quantix Lab, we believe that great work comes from happy, empowered teams. 
                We&apos;ve built a culture that celebrates creativity and values work-life balance.
              </p>
              
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { l: "Engineers", v: "50+" },
                  { l: "Regions", v: "12" },
                  { l: "Retention", v: "95%" }
                ].map((s) => (
                  <div key={s.l} className="p-4 rounded-xl shadow-[inset_2px_2px_5px_#b8b9be,inset_-3px_-3px_7px_#ffffff]">
                    <div className="text-2xl font-black text-primary">{s.v}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {cultureImages.map((image, index) => (
                <div
                  key={image.title}
                  className={`rounded-3xl bg-[#e0e5ec] shadow-[5px_5px_10px_#b8b9be,-5px_-5px_10px_#ffffff] flex items-center justify-center p-8 transition-transform hover:scale-105 duration-500 ${
                    index % 2 === 1 ? "translate-y-8" : ""
                  }`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/20 shadow-[inset_2px_2px_5px_#b8b9be] flex items-center justify-center mx-auto mb-4">
                       <Users className="h-6 w-6 text-primary/40" />
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#e0e5ec]/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800">Why Work With Us</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-8 rounded-[2rem] bg-[#e0e5ec] shadow-[7px_7px_14px_#b8b9be,-7px_-7px_14px_#ffffff] hover:shadow-[inset_3px_3px_6px_#b8b9be,inset_-3px_-3px_6px_#ffffff] transition-all duration-500"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e0e5ec] shadow-[4px_4px_8px_#b8b9be,-4px_-4px_8px_#ffffff] mb-8 group-hover:scale-90 transition-transform">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{benefit.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="scroll-mt-32 py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="text-4xl font-black text-slate-800 tracking-tight text-balance">Available Roles</h2>
            <p className="mt-4 text-slate-500 font-medium">Join our mission to architect digital excellence.</p>
          </div>

          <div className="space-y-10">
            {openPositions.map((pos) => (
              <div
                key={pos.id}
                className="rounded-[2.5rem] bg-[#e0e5ec] shadow-[10px_10px_20px_#b8b9be,-10px_-10px_20px_#ffffff] p-10 lg:p-12 transition-all hover:scale-[1.01]"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-black text-slate-800">{pos.title}</h3>
                      <span className="px-3 py-1 rounded-lg bg-white/40 shadow-[inset_1px_1px_3px_#b8b9be] text-[10px] font-bold text-primary uppercase tracking-widest">
                        {pos.department}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">
                      <span className="flex items-center gap-2"><MapPin size={16} /> {pos.location}</span>
                      <span className="flex items-center gap-2"><Clock size={16} /> {pos.type}</span>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed mb-8">{pos.description}</p>
                    <div>
                      <h4 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Core Requirements</h4>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {pos.requirements.map((req, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Button className="rounded-2xl h-16 px-12 bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 transition-transform" asChild>
                    <Link href={`/careers/apply?position=${pos.id}`}>Apply Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="rounded-[3.5rem] bg-primary p-12 lg:p-24 text-center text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 blur-[80px] rounded-full" />
             <h2 className="text-4xl lg:text-6xl font-black mb-8 relative z-10 leading-tight text-balance">
               Don&apos;t See Your Role?
             </h2>
             <p className="text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto relative z-10">
               We are always scouting for talent. Send us your resume and we will contact you 
               for future opportunities.
             </p>
             <Button size="lg" className="rounded-full h-16 px-14 bg-white text-primary hover:bg-slate-100 font-black shadow-xl" asChild>
               <Link href="/contact">Launch Career</Link>
             </Button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 5s ease infinite;
        }
      `}</style>
    </div>
  )
}