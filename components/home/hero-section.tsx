"use client"

import React, { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Globe, Zap, Users, Building2 } from "lucide-react"
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-animation"

/**
 * OPTIMIZED VOXEL GRID ENGINE
 * Features: Variable height mapping, enhanced refraction, and emissive cores.
 */
const VoxelBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const voxels = useMemo(() => {
    const grid = [];
    const size = 10; 
    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        // Create organic variance in height and movement
        const elevationBase = Math.sin(x * 0.5) * Math.cos(y * 0.5);
        grid.push({
          id: `voxel-${x}-${y}`,
          x: (x - size / 2) * 115, 
          y: (y - size / 2) * 115,
          delay: (x + y) * 0.12, 
          duration: 4 + Math.random() * 3,
          heightScale: 0.8 + Math.random() * 0.5,
        });
      }
    }
    return grid;
  }, []);

  if (!mounted) return <div className="absolute inset-0 bg-slate-50" />;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50 perspective-2500">
      {/* 3D Global Ambient Light Source */}
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
      
      {/* Centered 3D Container with Perfect Isometric Tilt */}
      <div className="absolute inset-0 flex items-center justify-center transform-style-3d rotate-x-60 -rotate-z-45 translate-y-20 scale-90 lg:scale-110">
        {voxels.map((v) => (
          <div
            key={v.id}
            className="absolute transform-style-3d animate-voxel-float"
            style={{
              left: `calc(50% + ${v.x}px)`,
              top: `calc(50% + ${v.y}px)`,
              animationDelay: `${v.delay}s`,
              animationDuration: `${v.duration}s`,
            } as React.CSSProperties}
          >
            {/* 3D Cube with Enhanced Glass Refraction */}
            <div 
                className="relative w-24 h-24 transform-style-3d"
                style={{ transform: `scaleZ(${v.heightScale})` }}
            >
              {/* Top Face (Emissive Surface) */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-primary/20 origin-top -rotate-x-90 -translate-y-12 border border-white/40 flex items-center justify-center">
                <div className="w-full h-full bg-primary/5 animate-pulse-slow blur-sm" />
                <div className="absolute inset-2 border border-white/20 rounded-sm" />
              </div>
              
              {/* Front Face (Frosted Depth) */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-xl border border-white/60 translate-z-12 shadow-[inset_0_0_25px_rgba(255,255,255,0.4)]" />
              
              {/* Side Faces (Refractive Gradients) */}
              <div className="absolute inset-0 bg-slate-200/40 origin-right rotate-y-90 translate-x-12" />
              <div className="absolute inset-0 bg-slate-100/40 origin-left -rotate-y-90 -translate-x-12" />
              
              {/* Core Glow (Internal Power Source) */}
              <div className="absolute inset-4 bg-primary/20 blur-2xl animate-pulse" />
              
              {/* Bottom (Structural Foundation) */}
              <div className="absolute inset-0 bg-slate-300/50 origin-bottom rotate-x-90 translate-y-12 shadow-[0_40px_100px_rgba(0,0,0,0.05)]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function CompanyMetric({ value, suffix, label, icon: Icon }: { value: number; suffix: string; label: string; icon: any }) {
  const { ref, isVisible } = useScrollAnimation()
  const { count, startAnimation } = useCountUp(value, 2500)

  useEffect(() => {
    if (isVisible) startAnimation()
  }, [isVisible, startAnimation])

  return (
    <div ref={ref} className="group relative p-8 rounded-[2rem] bg-white/40 backdrop-blur-3xl border border-white/80 hover:bg-white/70 transition-all duration-700 hover:-translate-y-4 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
      <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 group-hover:rotate-0 duration-700">
        <Icon size={120} />
      </div>
      <div className="flex items-center gap-5 mb-4">
        <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-500">
          <Icon size={24} />
        </div>
        <div className="text-4xl font-black text-slate-900 tracking-tighter">
          {count}{suffix}
        </div>
      </div>
      <div className="text-xs font-black uppercase tracking-[0.25em] text-slate-500 group-hover:text-primary transition-colors">
        {label}
      </div>
    </div>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)
    const handleMove = (e: MouseEvent) => {
      setMousePos({ 
        x: (e.clientX / window.innerWidth - 0.5) * 40, 
        y: (e.clientY / window.innerHeight - 0.5) * 40 
      })
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      <VoxelBackground />

      {/* Floating Data Grid Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.15]">
        <svg width="100%" height="100%">
          <pattern id="data-grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
            <circle cx="0" cy="0" r="1.5" fill="#3b82f6" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#data-grid)" />
        </svg>
      </div>

      <div className="container relative z-20 mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-1 gap-12 text-center items-center">
          
          <div 
            className="max-w-5xl mx-auto transition-transform duration-1000 ease-out"
            style={{ transform: `translate3d(${mousePos.x * -0.15}px, ${mousePos.y * -0.15}px, 0)` }}
          >
            {/* Status Badge */}
            <div className={`inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/90 border border-primary/10 shadow-2xl mb-12 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0 -translate-y-6'}`}>
              <ShieldCheck className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-[10px] font-black tracking-[0.3em] text-slate-800 uppercase">
                Enterprise Modular Architectures
              </span>
            </div>

            <h1 className={`text-6xl md:text-[100px] font-black text-slate-900 tracking-tighter leading-[0.85] mb-10 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              Building Robust <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-indigo-600 animate-text-shimmer drop-shadow-sm">
                Digital Foundations
              </span>
            </h1>

            <p className={`text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-16 font-medium leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              Quantix Labs develops resilient digital ecosystems for modern enterprises. 
              We transform structural complexity into high-performance infrastructure components.
            </p>

            <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-32 transition-all duration-1000 delay-600 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <Button size="lg" className="h-20 px-14 text-lg font-black rounded-3xl bg-primary hover:bg-primary/90 shadow-[0_20px_40px_rgba(59,130,246,0.3)] group active:scale-95 transition-all" asChild>
                <Link href="/contact">
                  Initialize Deployment
                  <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="h-20 px-14 text-lg font-bold rounded-3xl border-slate-200 bg-white/40 backdrop-blur-xl text-slate-900 hover:bg-white shadow-xl transition-all" asChild>
                <Link href="/projects">
                  View Case Reports
                </Link>
              </Button>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-800 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <CompanyMetric value={12} suffix="+" label="Core Sectors" icon={Building2} />
              <CompanyMetric value={99} suffix=".9%" label="Reliability SLA" icon={Users} />
              <CompanyMetric value={150} suffix="+" label="Neural Nodes" icon={Globe} />
              <CompanyMetric value={24} suffix="/7" label="Active Response" icon={Zap} />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <span className="text-[10px] font-black tracking-[0.5em] uppercase text-slate-400">Scroll Analytics</span>
        <div className="w-[2px] h-16 rounded-full bg-gradient-to-b from-primary to-transparent animate-bounce-slow" />
      </div>

      <style jsx global>{`
        .perspective-2500 { perspective: 2500px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-x-60 { transform: rotateX(60deg); }
        .rotate-z-45 { transform: rotateZ(-45deg); }
        
        /* FACE DEPTH CONFIGURATION */
        .translate-z-12 { transform: translateZ(48px); }
        .-translate-z-12 { transform: translateZ(-48px); }
        .translate-x-12 { transform: translateX(48px); }
        .-translate-x-12 { transform: translateX(-48px); }
        .translate-y-12 { transform: translateY(48px); }
        .-translate-y-12 { transform: translateY(-48px); }

        @keyframes voxel-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, 0, 80px); }
        }
        .animate-voxel-float {
          animation: voxel-float linear infinite;
        }

        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-text-shimmer {
          background-size: 200% auto;
          animation: text-shimmer 8s linear infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(20px); opacity: 0.2; }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }
      `}</style>
    </section>
  )
}