import Link from "next/link";
import { ArrowRight, Activity, Cpu, Anchor } from "lucide-react";
import PlumeVisualizer from "@/components/ui/PlumeVisualizer";
import FicksLawVisualizer from "@/components/ui/FicksLawVisualizer";
import SignalVisualizer from "@/components/ui/SignalVisualizer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-background border-b border-slate-800 overflow-hidden">
        {/* Abstract background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-sm text-cyan backdrop-blur-sm mb-8 font-mono">
              <span className="flex h-2 w-2 rounded-full bg-cyan"></span>
              <span>Advanced Data Science & Instrumentation</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100 mb-6 font-sans">
              Adaptive Decision Support for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-amber">Complex Atmospheric Plumes</span> <br />
              & Extreme Environments.
            </h1>
            
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 font-sans">
              Bridging the gap between physical instrumentation and algorithmic data science for Defense, Industrial, and Subsea applications.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="#tools"
                className="inline-flex items-center justify-center rounded-md bg-cyan px-8 py-3 text-sm font-medium text-black shadow-sm hover:bg-cyan/90 transition-colors font-mono"
              >
                Launch Engineering Tools <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://BCAnalytical.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-transparent px-8 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 transition-colors font-sans text-center"
              >
                Looking for Underwater Mass Spectrometers? Visit BCAnalytical
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-20 bg-[#0c0c0c] border-b border-slate-900">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-slate-200 font-sans tracking-tight">Core Capabilities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              <div className="p-6 rounded-xl border border-slate-800 bg-background/50 hover:border-cyan/50 transition-colors group">
                <Activity className="h-10 w-10 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Atmospheric Sensing</h3>
                <p className="text-slate-400 font-sans text-sm">
                  UAV integration, fugitive emissions tracking, and deterministic source attribution mapping utilizing high-resolution mass spectrometry.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-background/50 hover:border-amber/50 transition-colors group">
                <Cpu className="h-10 w-10 text-amber mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Bespoke Software/Firmware</h3>
                <p className="text-slate-400 font-sans text-sm">
                  C++ / RS-232/485 instrument control, Python spectral deconvolution arrays, and customized real-time laboratory GUI development.
                </p>
              </div>

              <div className="p-6 rounded-xl border border-slate-800 bg-background/50 hover:border-cyan/50 transition-colors group">
                <Anchor className="h-10 w-10 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">Subsea Hardware Integration</h3>
                <p className="text-slate-400 font-sans text-sm">
                  High-pressure vessel architecture, robust ROV payload integration, and autonomous real-time deep-sea algorithmic analytics.
                </p>
              </div>

            </div>
         </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-slate-800 pb-4 gap-4">
             <h2 className="text-3xl font-bold text-slate-200 font-sans tracking-tight">Interactive Analytical Tools</h2>
             <span className="font-mono text-cyan text-sm px-3 py-1 border border-cyan/20 rounded-full bg-cyan/5 flex items-center">
                 <span className="h-2 w-2 rounded-full bg-cyan mr-2 animate-pulse"></span>
                 SERVER_LINK: ACTIVE
             </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <PlumeVisualizer />
            <div className="space-y-6 flex flex-col justify-between">
                <FicksLawVisualizer />
                <SignalVisualizer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
