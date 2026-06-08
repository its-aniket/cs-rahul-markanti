"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  Building2,
  Receipt,
  FileText,
  Calculator,
  ClipboardList,
  Users,
  Lightbulb,
  Heart,
  Tag,
  BadgeCheck,
  FileBarChart,
  CircleCheckBig,
} from "lucide-react";
import CTASection from "@/components/ui/CTASection";
import type { ServiceData } from "@/lib/services";

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-8 h-8 text-white" />,
  Receipt: <Receipt className="w-8 h-8 text-white" />,
  FileText: <FileText className="w-8 h-8 text-white" />,
  Calculator: <Calculator className="w-8 h-8 text-white" />,
  ClipboardList: <ClipboardList className="w-8 h-8 text-white" />,
  Users: <Users className="w-8 h-8 text-white" />,
  Lightbulb: <Lightbulb className="w-8 h-8 text-white" />,
  Heart: <Heart className="w-8 h-8 text-white" />,
  Tag: <Tag className="w-8 h-8 text-white" />,
  BadgeCheck: <BadgeCheck className="w-8 h-8 text-white" />,
  FileBarChart: <FileBarChart className="w-8 h-8 text-white" />,
};

export default function ServiceDetailClient({ service }: { service: ServiceData }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeSubService = service.subServices[activeTab];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-28 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#C8972B] text-sm mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Services
          </Link>
          <div className="flex items-start gap-5">
            <div className="w-16 h-16 bg-[#C8972B] rounded-xl flex items-center justify-center shrink-0">
              {iconMap[service.icon] ?? <FileText className="w-8 h-8 text-white" />}
            </div>
            <div>
              <p className="text-[#C8972B] text-xs font-semibold uppercase tracking-widest mb-1">
                Service
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
                {service.title}
              </h1>
              <p className="text-gray-300 text-base max-w-2xl">{service.heroDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              {/* What is */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#1B2A4A] mb-3">
                  What is {service.title}?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">{service.whatIs}</p>
              </div>

              {/* Who Needs */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#1B2A4A] mb-3">
                  Who Needs This?
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">{service.whoNeeds}</p>
              </div>

              {/* Sub-services */}
              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                <h2 className="font-serif text-xl font-bold text-[#1B2A4A] mb-5">
                  Services Offered
                </h2>
                {/* Tab buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.subServices.map((sub, i) => (
                    <button
                      key={sub.title}
                      onClick={() => setActiveTab(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                        activeTab === i
                          ? "bg-[#1B2A4A] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {sub.title}
                    </button>
                  ))}
                </div>
                {/* Tab content */}
                {activeSubService && (
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#1B2A4A] mb-2">
                      {activeSubService.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {activeSubService.description}
                    </p>
                    {activeSubService.details && activeSubService.details.length > 0 && (
                      <ul className="space-y-2">
                        {activeSubService.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-2.5 text-gray-600">
                            <CircleCheckBig className="w-4 h-4 text-[#C8972B] shrink-0 mt-0.5" />
                            <span className="text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>

              {/* Enquire CTA */}
              <CTASection
                variant="light"
                title={`Enquire About ${service.title}`}
                subtitle={`Get professional assistance with ${service.title.toLowerCase()} from our qualified Company Secretary team.`}
                buttonText="Get in Touch"
              />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-serif text-lg font-bold text-[#1B2A4A] mb-4">
                  Key Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-gray-600">
                      <CircleCheckBig className="w-4 h-4 text-[#C8972B] shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-[#1B2A4A] rounded-2xl p-6 text-white">
                <h3 className="font-serif text-lg font-bold mb-2">
                  Need Quick Help?
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  Call or WhatsApp us directly for a quick consultation.
                </p>
                <a
                  href="tel:+918830383872"
                  className="block text-center px-4 py-2.5 bg-[#C8972B] text-white text-sm font-bold rounded hover:bg-[#b07a1e] transition-colors mb-2"
                >
                  +91 88303 83872
                </a>
                <a
                  href="https://wa.me/918830383872"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2.5 bg-[#25D366] text-white text-sm font-bold rounded hover:opacity-90 transition-opacity"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
