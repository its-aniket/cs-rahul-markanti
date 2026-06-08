import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1B2A4A] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="font-serif text-8xl font-bold text-[#C8972B] mb-4">404</p>
        <h1 className="font-serif text-3xl font-bold text-white mb-3">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors"
          >
            Go Home <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 border border-white/30 text-white font-semibold rounded hover:bg-white/10 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
