import Link from "next/link";
import { ArrowLeft, Home, BedDouble } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <span className="text-[11px] uppercase tracking-[0.3em] font-mono text-neutral-400 block">
          404 · Page Not Found
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif text-neutral-950 font-normal">
          Lost in Thiruvilwamala?
        </h1>

        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
          The page you are looking for doesn&apos;t exist or may have been relocated.
          Let&apos;s guide you back to our comfortable retreat.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#383838] text-white text-xs uppercase tracking-widest font-medium hover:bg-[#484848] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/rooms"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-neutral-300 text-neutral-900 text-xs uppercase tracking-widest font-medium hover:bg-neutral-50 transition-colors"
          >
            <BedDouble className="w-3.5 h-3.5" />
            <span>Explore Rooms</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

