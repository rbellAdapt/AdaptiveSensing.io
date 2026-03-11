"use client";

import { useState, useEffect } from "react";
import DarkPlot from "./DarkPlot";
import { Activity } from "lucide-react";

export default function PlumeVisualizer() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({
    wind_speed: 2.5,
    emission_rate: 100,
    target_distance: 500,
    stability_class: "D",
  });

  const fetchDispersion = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/dispersion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });
      const json = await res.json();
      
      setData([
        {
          z: json.z,
          x: json.x,
          y: json.y,
          type: "surface",
          colorscale: "Viridis", // Dark-mode friendly scientific scale
          showscale: false,
        },
      ]);
    } catch (e) {
      console.error("Failed to fetch dispersion data.", e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDispersion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Run once on mount

  return (
    <div className="border border-slate-800 rounded-xl overflow-hidden bg-[#0c0c0c] flex flex-col min-h-[450px]">
      {/* Header / Controls */}
      <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex flex-wrap gap-4 items-center justify-between">
         <div className="flex items-center space-x-2">
           <Activity className="h-5 w-5 text-cyan" />
           <h3 className="font-mono text-slate-300 text-sm">Plume Dispersion Visualizer</h3>
         </div>
         <button 
           onClick={fetchDispersion}
           disabled={loading}
           className="px-3 py-1 bg-cyan/10 hover:bg-cyan/20 text-cyan border border-cyan/30 rounded text-xs font-mono transition-colors disabled:opacity-50"
         >
           {loading ? "CALCULATING..." : "RUN SIMULATION"}
         </button>
      </div>

      {/* Plot Area */}
      <div className="flex-grow p-2 relative flex flex-col">
        {data ? (
          <DarkPlot 
            data={data} 
            layout={{
                scene: {
                    xaxis: { title: "Distance (m)", gridcolor: "#1e293b" },
                    yaxis: { title: "Crosswind (m)", gridcolor: "#1e293b" },
                    zaxis: { title: "Conc.", gridcolor: "#1e293b" },
                    camera: { eye: { x: 1.5, y: -1.5, z: 1.0 } },
                    bgcolor: "#0a0a0a"
                },
                margin: { t: 10, r: 10, l: 10, b: 10 }
            }}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center font-mono text-slate-500 text-sm">
             AWAITING_BACKEND_CONNECTION
          </div>
        )}
      </div>
    </div>
  );
}
