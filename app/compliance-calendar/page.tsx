"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── DATA ──────────────────────────────────────────────────────────────────

type Category = "GST" | "MCA/ROC" | "Income Tax" | "TDS" | "Labour";

interface CalendarEntry {
  compliance: string;
  dueDate: string;
  applicableTo: string;
  form: string;
  category: Category;
}

const calendarData: CalendarEntry[] = [
  // GST
  { compliance: "GSTR-1 (Monthly)", dueDate: "11th of next month", applicableTo: "Regular taxpayers", form: "GSTR-1", category: "GST" },
  { compliance: "GSTR-3B (Monthly)", dueDate: "20th of next month", applicableTo: "Regular taxpayers", form: "GSTR-3B", category: "GST" },
  { compliance: "GSTR-1 (Quarterly QRMP)", dueDate: "13th of month after quarter-end", applicableTo: "QRMP taxpayers", form: "GSTR-1", category: "GST" },
  { compliance: "GSTR-3B (Quarterly QRMP)", dueDate: "22nd or 24th of month after quarter", applicableTo: "QRMP taxpayers", form: "GSTR-3B", category: "GST" },
  { compliance: "GSTR-9 Annual Return", dueDate: "31st December", applicableTo: "All regular taxpayers", form: "GSTR-9", category: "GST" },
  // MCA/ROC
  { compliance: "AOC-4 Financial Statements", dueDate: "Within 30 days of AGM", applicableTo: "Companies", form: "AOC-4", category: "MCA/ROC" },
  { compliance: "MGT-7 / MGT-7A Annual Return", dueDate: "Within 60 days of AGM", applicableTo: "Companies", form: "MGT-7", category: "MCA/ROC" },
  { compliance: "Form 8 LLP Statement of Accounts", dueDate: "30th October", applicableTo: "LLPs", form: "Form 8", category: "MCA/ROC" },
  { compliance: "Form 11 LLP Annual Return", dueDate: "30th May", applicableTo: "LLPs", form: "Form 11", category: "MCA/ROC" },
  { compliance: "INC-20A Commencement of Business", dueDate: "Within 180 days of incorporation", applicableTo: "New companies", form: "INC-20A", category: "MCA/ROC" },
  { compliance: "DIR-3 KYC", dueDate: "30th September annually", applicableTo: "All directors with DIN", form: "DIR-3 KYC", category: "MCA/ROC" },
  // Income Tax
  { compliance: "ITR (Individuals/HUF – no audit)", dueDate: "31st July", applicableTo: "Individuals, HUF", form: "ITR-1/2/3/4", category: "Income Tax" },
  { compliance: "ITR (Companies & Audit cases)", dueDate: "31st October", applicableTo: "Companies, firms requiring audit", form: "ITR-5/6/7", category: "Income Tax" },
  { compliance: "Tax Audit Report", dueDate: "30th September", applicableTo: "Businesses above turnover threshold", form: "Form 3CA/3CB", category: "Income Tax" },
  // TDS
  { compliance: "Q1 TDS Return (April–June)", dueDate: "31st July", applicableTo: "All deductors", form: "24Q/26Q", category: "TDS" },
  { compliance: "Q2 TDS Return (July–September)", dueDate: "31st October", applicableTo: "All deductors", form: "24Q/26Q", category: "TDS" },
  { compliance: "Q3 TDS Return (October–December)", dueDate: "31st January", applicableTo: "All deductors", form: "24Q/26Q", category: "TDS" },
  { compliance: "Q4 TDS Return (January–March)", dueDate: "31st May", applicableTo: "All deductors", form: "24Q/26Q", category: "TDS" },
  { compliance: "TDS Monthly Deposit", dueDate: "7th of following month", applicableTo: "All deductors", form: "Challan 281", category: "TDS" },
  { compliance: "Form 16 – Salary TDS Certificate", dueDate: "15th June", applicableTo: "Employers", form: "Form 16", category: "TDS" },
  { compliance: "Form 16A – Non-Salary TDS Certificate", dueDate: "15 days from return due date", applicableTo: "All deductors", form: "Form 16A", category: "TDS" },
  // Labour
  { compliance: "PF Contribution (Monthly)", dueDate: "15th of following month", applicableTo: "PF registered establishments", form: "ECR (EPFO Portal)", category: "Labour" },
  { compliance: "ESI Contribution (Monthly)", dueDate: "15th of following month", applicableTo: "ESI registered establishments", form: "ESIC Portal", category: "Labour" },
  { compliance: "PTRC Return (Maharashtra)", dueDate: "Monthly: last day of month / Annual: 31st March", applicableTo: "Employers in Maharashtra", form: "PTRC Return", category: "Labour" },
  { compliance: "Shop & Establishment Annual Renewal", dueDate: "As per state-specific due date", applicableTo: "Shops and commercial establishments", form: "Form A / Online portal", category: "Labour" },
];

type Tab = "All" | Category;
const tabs: Tab[] = ["All", "GST", "MCA/ROC", "Income Tax", "TDS", "Labour"];

const categoryStyles: Record<Category, string> = {
  "GST": "bg-blue-50 text-blue-700 border-blue-200",
  "MCA/ROC": "bg-purple-50 text-purple-700 border-purple-200",
  "Income Tax": "bg-green-50 text-green-700 border-green-200",
  "TDS": "bg-amber-50 text-amber-700 border-amber-200",
  "Labour": "bg-rose-50 text-rose-700 border-rose-200",
};

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function ComplianceCalendarPage() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  const filtered = activeTab === "All"
    ? calendarData
    : calendarData.filter((d) => d.category === activeTab);

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-[#1B2A4A] pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Calendar icon centered */}
          <div className="w-14 h-14 rounded-xl bg-[#C8972B] flex items-center justify-center mx-auto mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white" aria-hidden>
              <path d="M8 2v4" /><path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Compliance Due Dates Calendar
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Important statutory deadlines for businesses in India
          </p>
          {/* Alert disclaimer box */}
          <div className="flex items-start gap-3 max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-xl p-4 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#C8972B] flex-shrink-0 mt-0.5" aria-hidden>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <p className="text-gray-300 text-sm leading-relaxed">
              Dates are indicative and subject to government notifications. Always verify
              with official sources or contact us for guidance specific to your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── TABLE ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category tab filters */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-[#1B2A4A] text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#C8972B]/40 hover:text-[#1B2A4A]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Desktop table */}
          <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1B2A4A] text-white">
                  <th className="px-6 py-4 text-left font-semibold text-sm">Compliance</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Due Date</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Applicable To</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Form / Return</th>
                  <th className="px-6 py-4 text-left font-semibold text-sm">Category</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filtered.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-[#1B2A4A]">{row.compliance}</td>
                    <td className="px-6 py-4 text-gray-600 font-semibold">{row.dueDate}</td>
                    <td className="px-6 py-4 text-gray-500">{row.applicableTo}</td>
                    <td className="px-6 py-4 text-gray-600 font-mono text-xs bg-gray-50 font-medium">{row.form}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-semibold rounded border ${categoryStyles[row.category]}`}>
                        {row.category}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {filtered.map((row, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <p className="font-semibold text-[#1B2A4A] text-sm leading-snug">{row.compliance}</p>
                  <span className={`px-2 py-0.5 text-xs font-semibold rounded border flex-shrink-0 ${categoryStyles[row.category]}`}>
                    {row.category}
                  </span>
                </div>
                <div className="space-y-1.5 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 w-24 flex-shrink-0">Due Date</span>
                    <span className="text-gray-700 font-semibold">{row.dueDate}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 w-24 flex-shrink-0">Applicable</span>
                    <span className="text-gray-600">{row.applicableTo}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 w-24 flex-shrink-0">Form</span>
                    <span className="text-gray-700 font-mono text-xs font-medium">{row.form}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
