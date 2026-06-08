import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: "dark" | "gold" | "light";
}

export default function CTASection({
  title = "Ready to simplify your compliance?",
  subtitle = "Get in touch with our team for guidance specific to your business.",
  buttonText = "Enquire Now",
  buttonHref = "/contact",
  variant = "dark",
}: CTASectionProps) {
  if (variant === "light") {
    return (
      <div className="bg-[#C8972B]/10 border border-[#C8972B]/30 rounded-2xl p-8 text-center">
        <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-2">{title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{subtitle}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-7 py-3 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors text-sm"
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-[#1B2A4A] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <Link
          href={buttonHref}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors"
        >
          {buttonText} <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
