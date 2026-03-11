import { Shield, BrainCircuit, Droplets } from "lucide-react";

export const metadata = {
  title: "About | AdaptiveSensing.io",
  description: "Ryan Bell, PhD. 20+ years bridging Chemical Oceanography, Data Science, and Hardware Engineering.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="relative border-b border-slate-800 bg-[#0c0c0c] py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-6 font-sans">
              About the Principal
            </h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div>
                    <h2 className="text-2xl font-semibold text-cyan font-sans">Ryan Bell, PhD</h2>
                    <p className="font-mono text-slate-400 text-sm mt-1">PRINCIPAL_ENGINEER & FOUNDER</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Biography Section */}
        <section className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6 text-slate-300 font-sans leading-relaxed text-lg">
                <p>
                    With over 20 years of experience operating at the intersection of <strong>hardware integration, applied mathematics, and physical sciences</strong>, Ryan Bell specializes in solving analytical challenges in environments where failure is not an option.
                </p>
                <p>
                    His career is defined by a cross-disciplinary approach: merging the rigorous phenomenology of Chemical Oceanography with the agile, algorithmic mindset of Data Science. This unique perspective allows for the development of bespoke instrumentation—such as high-pressure Underwater Mass Spectrometers (UMS)—that doesn&apos;t just survive extreme gradients, but actively processes real-time intelligence.
                </p>
                <p>
                    Rather than relying on off-the-shelf black boxes, Ryan architects complete, end-to-end data pipelines. From raw RS-232/485 serial communication with custom C++ firmware, up through complex Python spectral deconvolution arrays, the goal remains constant: reducing latency and increasing mathematical precision for R&D Directors and Defense Contractors.
                </p>
            </div>
            
            {/* Quick Stats Sidebar */}
            <div className="space-y-6">
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h3 className="font-mono text-cyan text-sm mb-4 border-b border-slate-800 pb-2">CORE COMPETENCIES</h3>
                    <ul className="space-y-3 font-sans text-slate-300 text-sm">
                        <li className="flex items-center"><span className="text-cyan mr-2">■</span> End-to-end Technical Leadership</li>
                        <li className="flex items-center"><span className="text-cyan mr-2">■</span> Cross-disciplinary System Architecture</li>
                        <li className="flex items-center"><span className="text-cyan mr-2">■</span> High-risk Field Operations</li>
                        <li className="flex items-center"><span className="text-cyan mr-2">■</span> Applied R&D to Deployment</li>
                        <li className="flex items-center"><span className="text-cyan mr-2">■</span> Complex Program Execution</li>
                    </ul>
                </div>
                
                <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                    <h3 className="font-mono text-amber text-sm mb-4 border-b border-slate-800 pb-2">PATENTS</h3>
                    <p className="text-slate-300 font-sans text-sm">
                        Innovator in Membrane Inlet Mass Spectrometry (MIMS) technology, including recognized patents for specialized sample introduction interfaces designed to enhance signal-to-noise ratios in turbulent environments.
                    </p>
                </div>
            </div>
        </section>

        {/* Expertise Grid */}
        <section className="border-t border-slate-800 pt-16">
            <h3 className="text-2xl font-bold text-slate-200 mb-8 font-sans">Cross-Disciplinary Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border border-slate-800 rounded-xl bg-[#0c0c0c] hover:border-cyan/50 transition-colors">
                    <Droplets className="h-8 w-8 text-cyan mb-4" />
                    <h4 className="font-semibold text-lg text-slate-200 mb-2 font-sans">Chemical Oceanography</h4>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">Deep understanding of physical phenomenology, thermodynamics, and high-pressure fluid dynamics requisite for deep-sea sensor deployment.</p>
                </div>
                <div className="p-6 border border-slate-800 rounded-xl bg-[#0c0c0c] hover:border-amber/50 transition-colors">
                    <BrainCircuit className="h-8 w-8 text-amber mb-4" />
                    <h4 className="font-semibold text-lg text-slate-200 mb-2 font-sans">Data Science & Algorithms</h4>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">Developing proprietary Fickian models, Gaussian plume dispersion mapping, and real-time spectral deconvolution isolated on secure server environments.</p>
                </div>
                <div className="p-6 border border-slate-800 rounded-xl bg-[#0c0c0c] hover:border-cyan/50 transition-colors">
                    <Shield className="h-8 w-8 text-cyan mb-4" />
                    <h4 className="font-semibold text-lg text-slate-200 mb-2 font-sans">Hardware Engineering</h4>
                    <p className="text-slate-400 text-sm font-sans leading-relaxed">Building the physical bridges—high-pressure vessels, bespoke ROV payload integrations, and the low-level firmware required to run them autonomously.</p>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
}
