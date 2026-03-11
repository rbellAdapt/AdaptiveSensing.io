import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter text-slate-200">
              AdaptiveSensing<span className="text-cyan">.io</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8 font-mono text-sm tracking-wide">
            <Link href="/" className="text-slate-300 hover:text-cyan transition-colors px-3 py-2">
              ~/Home
            </Link>
            <Link href="/services" className="text-slate-300 hover:text-cyan transition-colors px-3 py-2">
              ~/Services
            </Link>
            <Link href="/case-studies" className="text-slate-300 hover:text-cyan transition-colors px-3 py-2">
              ~/Case_Studies
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-cyan transition-colors px-3 py-2">
              ~/About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
