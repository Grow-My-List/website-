"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Target, Eye, Heart, Sparkles, Users, Award, 
  Building2, Calendar, MapPin, ArrowRight, Quote, ShieldCheck, Zap
} from "lucide-react"

/** * COMPONENT: NeonPlexusBackground
 * A high-performance canvas engine that creates a neon particle network.
 */
function NeonPlexusBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    class Particle {
      x: number; y: number; vx: number; vy: number; size: number;
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(31, 162, 225, 0.5)"; // Brand Blue
        ctx.fill();
      }
    }

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles = Array.from({ length: 100 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(31, 162, 225, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 bg-slate-50" />;
}

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative min-h-screen">
      <NeonPlexusBackground />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className={`mx-auto max-w-3xl text-center transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3 fill-current" />
              About
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[0.9]">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 animate-text-gradient">
                Digital Innovation
              </span>
            </h1>
            <p className="mt-8 text-xl text-slate-600 leading-relaxed font-medium">
              We are a collective of visionaries and engineers architecting 
              the future of enterprise software.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section - Glassmorphism */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/60 p-12 lg:p-20 shadow-2xl shadow-blue-900/5">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Evolution</span>
                <h2 className="text-4xl font-bold text-slate-900 leading-tight">From Startup to Global Force</h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Founded in 2025, Quantix Lab began with a shared vision: 
                  to bridge the gap between abstract technology and practical business impact.
                </p>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-6">
                {[
                  { label: "Founded", val: "2016" },
                  { label: "Experts", val: "50+" },
                  { label: "Projects", val: "200+" }
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black text-blue-600">{stat.val}</div>
                    <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-white/20 flex items-center justify-center">
                <Building2 className="w-24 h-24 text-blue-500/30" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/10">
                   <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                   <span className="text-[10px] text-white font-bold">HQ: SAN FRANCISCO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Pillars */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
           {[
              { icon: Target, title: "Our Mission", desc: "Our mission is to empower global growth by transforming innovative ideas into scalable, secure, and user-centric digital products that solve real-world problems through intelligent technology. We focus on building simple yet powerful solutions that create long-term impact, fostering trust and value through future-ready innovation." },
              { icon: Eye, title: "Our Vision", desc: "Our vision is to evolve from a service-based IT organization into a globally trusted, product-driven technology leader by delivering high-quality proprietary solutions alongside expert services. We achieve this through deep investment in innovation and automation, fostering a culture of accountability to build digital tools that maximize efficiency and growth." },
              { icon: Heart, title: "Our Values", desc: "Our values center on turning ideas into impactful digital solutions through secure, transparent technology and high-performance products that remain simple to use. We prioritize future-ready scalability and a culture of continuous learning to solve real-world problems with long-term value and ownership." }
            ].map((pillar) => (
              <div key={pillar.title} className="p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-blue-900/5 hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                  <pillar.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{pillar.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <div className="relative text-center p-12 lg:p-24 rounded-[3rem] bg-blue-600 text-white overflow-hidden shadow-2xl">
            <Quote className="absolute top-10 left-10 w-20 h-20 text-white/10 rotate-12" />
            <p className="relative z-10 text-2xl lg:text-3xl font-medium leading-relaxed italic mb-10">
              &ldquo;Technology should empower, not complicate. At Quantix, we build the bridges 
              that turn complexity into competitive advantage.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">AS</div>
              <div className="text-left">
                <div className="font-bold">sanjay</div>
                <div className="text-xs text-blue-200">CEO & Founder, Quantix Lab</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Profile Section */}
      <section className="py-20 lg:py-32 bg-white/40 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight">Enterprise Overview</h2>
              <div className="grid gap-4">
                {[
                   { i: Building2, l: "Entity", v: "Quantix Lab Technologies Inc." },
                   { i: Award, l: "Sector", v: "Enterprise Software & Cloud Services" },
                   { i: ShieldCheck, l: "Compliance", v: "ISO 27001 Certified" }
                ].map((item) => (
                  <div key={item.l} className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-slate-100 shadow-sm">
                    <item.i className="w-6 h-6 text-blue-600" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">{item.l}</div>
                      <div className="font-bold text-slate-800">{item.v}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white flex flex-col justify-center">
               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                 Strategic Partners
                 <span className="px-2 py-0.5 rounded-md bg-blue-500 text-[10px]">GOLD</span>
               </h3>
               <div className="space-y-4 text-slate-400 font-medium">
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> AWS Advanced Tier Partner</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Google Cloud Partner</div>
                  <div className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Microsoft Gold Partner</div>
               </div>
               <Button className="mt-10 bg-blue-600 hover:bg-blue-500 text-white border-none h-14 rounded-2xl" asChild>
                 <Link href="/contact">Schedule Consult <ArrowRight className="ml-2 w-4 h-4" /></Link>
               </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes text-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-gradient {
          background-size: 200% auto;
          animation: text-gradient 6s linear infinite;
        }
      `}</style>
    </div>
  );
}