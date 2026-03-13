import PlumeVisualizer from "@/components/ui/PlumeVisualizer";

export default function PlumeVisualizerPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl font-bold text-slate-200 mb-8 font-sans">Gaussian Plume Visualizer</h1>
      <PlumeVisualizer />
    </div>
  );
}
