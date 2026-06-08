import type { Metadata } from "next";
import ServiceCard from "@/components/ui/ServiceCard";
import CTASection from "@/components/ui/CTASection";
import { allServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Comprehensive compliance and legal advisory services — Business Registration, GST, MCA, Income Tax, Labour Law, Trademark, NGO registration and more.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            From incorporation to annual compliance — we provide end-to-end legal
            and secretarial services for businesses at every stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                shortDesc={service.shortDesc}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
