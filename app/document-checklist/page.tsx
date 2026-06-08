"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, FileCheck } from "lucide-react";

// ─── Complete document checklist data from original source ─────────────────

const serviceChecklists: Record<string, string[]> = {
  "Private Limited Company": [
    "PAN Card of all proposed directors",
    "Aadhaar Card of all proposed directors",
    "Passport-size photograph of all directors",
    "Address proof of directors (bank statement / utility bill)",
    "Proof of registered office address (utility bill / NOC from owner)",
    "No Objection Certificate (NOC) from property owner",
    "Proposed company name (2–3 options)",
    "Proposed objects of the company",
    "Details of authorized and paid-up capital",
    "Mobile number and email ID of directors",
    "Digital Signature Certificate (DSC) for directors",
  ],
  "LLP (Limited Liability Partnership)": [
    "PAN Card of all designated partners",
    "Aadhaar Card of all designated partners",
    "Passport-size photograph of all partners",
    "Address proof of designated partners",
    "Proof of registered office address",
    "No Objection Certificate (NOC) from property owner",
    "Proposed LLP name (2–3 options)",
    "Contribution amount by each partner",
    "Profit sharing ratio",
    "Mobile number and email ID of partners",
    "Digital Signature Certificate (DSC) for designated partners",
  ],
  "One Person Company (OPC)": [
    "PAN Card of director and nominee",
    "Aadhaar Card of director and nominee",
    "Passport-size photograph of director and nominee",
    "Address proof of director",
    "Proof of registered office address",
    "No Objection Certificate (NOC) from property owner",
    "Proposed company name (2–3 options)",
    "Objects of the company",
    "Nominee consent letter",
    "Digital Signature Certificate (DSC)",
  ],
  "Proprietorship": [
    "PAN Card of proprietor",
    "Aadhaar Card of proprietor",
    "Passport-size photograph",
    "Proof of business address",
    "Bank account details",
    "GST Registration (if applicable)",
    "Shop & Establishment Registration (state-specific)",
    "MSME / Udyam Registration certificate",
    "Mobile number and email ID",
  ],
  "Partnership Firm": [
    "PAN Card of all partners",
    "Aadhaar Card of all partners",
    "Passport-size photograph of all partners",
    "Address proof of all partners",
    "Partnership Deed (draft or existing)",
    "Proof of business address",
    "Bank account details",
    "Mobile number and email ID of partners",
  ],
  "HUF (Hindu Undivided Family)": [
    "PAN Card of Karta (head of HUF)",
    "Aadhaar Card of Karta",
    "HUF Deed / Declaration",
    "List of all HUF members",
    "Address proof of Karta",
    "Bank account details",
    "Photograph of Karta",
  ],
  "MSME Registration": [
    "Aadhaar Card of proprietor / partner / director",
    "PAN Card of entity",
    "Business name and address",
    "Bank account details",
    "NIC code of business activity",
    "Date of commencement of business",
    "Investment and turnover details",
  ],
  "Section 8 Company (NGO)": [
    "PAN Card of all proposed directors",
    "Aadhaar Card of all proposed directors",
    "Passport-size photograph of all directors",
    "Address proof of directors",
    "Proof of registered office address",
    "Proposed company name (2–3 options)",
    "Objects of the Section 8 company",
    "Draft MOA and AOA",
    "Declaration for non-profit nature",
    "License application details",
  ],
  "Farmers Producer Company": [
    "PAN Card of all proposed directors",
    "Aadhaar Card of all proposed directors",
    "Photograph of all directors",
    "Address proof of directors",
    "Proof of registered office",
    "Proposed company name",
    "Details of produce / activity",
    "List of founding members (minimum 10 farmers)",
  ],
  "Public Limited Company": [
    "PAN Card of all proposed directors (minimum 3)",
    "Aadhaar Card of all proposed directors",
    "Photograph of all directors",
    "Address proof of directors",
    "Proof of registered office address",
    "Proposed company name",
    "Objects of the company",
    "Draft MOA and AOA",
    "Prospectus / offer document (if applicable)",
    "Digital Signature Certificate (DSC) for directors",
  ],
  "GST Registration": [
    "PAN Card of business / proprietor / partners / directors",
    "Aadhaar Card of authorized signatory",
    "Photograph of authorized signatory",
    "Proof of principal place of business (utility bill / rent agreement)",
    "Bank account details (cancelled cheque / bank statement)",
    "Certificate of Incorporation / Partnership Deed",
    "Digital Signature Certificate (for companies / LLPs)",
    "Letter of Authorization / Board Resolution",
  ],
  "Trademark Registration": [
    "Logo / brand name / tagline to be registered (JPEG format for logo)",
    "PAN Card of applicant",
    "Aadhaar Card of individual applicant",
    "Certificate of Incorporation (for companies / LLPs)",
    "MSME Certificate (if applicable – for reduced fees)",
    "Details of goods / services (for class determination)",
    "Date of first use of mark (if used prior to application)",
    "Power of Attorney (if filing through agent)",
  ],
  "12A Registration": [
    "Registration Certificate of Trust / Society / Section 8 Company",
    "Trust Deed / MOA of Society / MOA & AOA of Section 8",
    "PAN of the NGO",
    "Audited financial statements for last 3 years (or since inception)",
    "Activity report for last 3 years",
    "List of current trustees / directors / members",
    "Bank statements of the NGO",
    "Details of activities carried out",
  ],
  "80G Registration": [
    "12A Registration Certificate",
    "Registration Certificate of Trust / Society / Section 8",
    "PAN of the NGO",
    "Audited financial statements for last 3 years",
    "Activity report for last 3 years",
    "List of donors and donations received",
    "Bank statements",
    "Details of investments held",
  ],
  "CSR Registration (Form CSR-1)": [
    "Registration Certificate of the NGO",
    "PAN of the entity",
    "12A and 80G certificates",
    "Audited financial statements for last 3 years",
    "Activity / impact report",
    "List of trustees / directors",
    "Bank account details",
    "Digital Signature Certificate (DSC)",
  ],
  "FCRA Registration": [
    "Registration Certificate (Trust / Society / Section 8)",
    "Trust Deed / MOA",
    "PAN of the organization",
    "Last 3 years audited accounts",
    "Activity report for last 3 years",
    "Details of chief functionaries",
    "FCRA designated bank account (State Bank of India, Main Branch, New Delhi)",
    "Details of foreign funding expected",
  ],
  "DSC – Individual": [
    "PAN Card",
    "Aadhaar Card",
    "Passport-size photograph",
    "Active mobile number (for OTP verification)",
    "Active email ID",
    "Video verification (for Class 3 DSC)",
  ],
  "DSC – Organisation": [
    "PAN Card of the organisation",
    "Certificate of Incorporation / Registration",
    "Authorization letter from the organisation",
    "PAN Card of authorized signatory",
    "Aadhaar Card of authorized signatory",
    "Photograph of authorized signatory",
    "Active mobile number and email ID",
  ],
  "IEC (Import Export Code)": [
    "PAN Card of entity",
    "Aadhaar Card of proprietor / partner / director",
    "Proof of establishment (MOA / Partnership Deed / Certificate of Incorporation)",
    "Proof of office address",
    "Cancelled cheque of current bank account",
    "Bank certificate (in some cases)",
    "Digital Signature Certificate (DSC)",
  ],
  "LEI (Legal Entity Identifier)": [
    "PAN Card of the entity",
    "Certificate of Incorporation / Registration",
    "Memorandum and Articles of Association",
    "List of directors / partners",
    "Address proof of registered office",
    "Bank account details",
    "Details of parent / subsidiary entities (if any)",
  ],
  "PTEC Registration": [
    "PAN Card of proprietor / partners / company",
    "Certificate of Incorporation / Partnership Deed / Trade License",
    "Address proof of business",
    "Details of business activity",
    "Bank account details",
    "Aadhaar Card of proprietor / authorized person",
  ],
  "PTRC Registration": [
    "PAN Card of the employer entity",
    "Certificate of Incorporation / Registration document",
    "Address proof of establishment",
    "List of employees with salary details",
    "Bank account details of employer",
    "Aadhaar of authorized signatory",
    "Digital Signature Certificate (DSC)",
  ],
  "ISIN Application": [
    "Certificate of Incorporation",
    "Memorandum and Articles of Association",
    "Board Resolution for issuance of securities",
    "Demat account details",
    "PAN of the company",
    "Financial statements",
    "Details of securities to be issued",
  ],
  "DML for Farmer Producer Company": [
    "Certificate of Incorporation of FPC",
    "PAN of the FPC",
    "MOA and AOA of FPC",
    "List of directors",
    "Address proof of registered office",
    "Details of produce / commodities",
    "Bank account details",
    "Digital Signature Certificate (DSC)",
  ],
  "Startup India Registration": [
    "Certificate of Incorporation / Registration",
    "PAN of the entity",
    "Brief description of the business / innovation",
    "Website URL (if available)",
    "Pitch deck or business plan (optional but recommended)",
    "Details of founders",
    "Patent / IP details (if applicable)",
  ],
  "Project Report Preparation": [
    "Business overview and promoter background",
    "Nature of business / industry details",
    "Market analysis and demand assessment",
    "Technical and operational plan",
    "Infrastructure and manpower requirements",
    "Financial projections (3–5 years)",
    "Loan amount required and purpose",
    "Collateral / security details (if applicable)",
    "Last 3 years financial statements (for existing businesses)",
  ],
};

const serviceOptions = Object.keys(serviceChecklists);

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function DocumentChecklistPage() {
  const [selected, setSelected] = useState<string>("");
  const docs = selected ? serviceChecklists[selected] ?? [] : [];

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="bg-[#1B2A4A] pt-28 pb-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-xl bg-[#C8972B] flex items-center justify-center mx-auto mb-5">
            {/* SquareCheckBig / CheckSquare icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7 text-white" aria-hidden>
              <path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344" />
              <path d="m9 11 3 3L22 4" />
            </svg>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Document Checklist
          </h1>
          <p className="text-gray-300 text-lg">
            Select your service to view the complete list of documents required
          </p>
        </div>
      </section>

      {/* ── TOOL ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Service selector */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
            <label
              htmlFor="service-select"
              className="block text-sm font-semibold text-[#1B2A4A] mb-2"
            >
              Select Service
            </label>
            <select
              id="service-select"
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#C8972B]/30 focus:border-[#C8972B] text-sm cursor-pointer"
            >
              <option value="">-- Select a service --</option>
              {serviceOptions.map((svc) => (
                <option key={svc} value={svc}>{svc}</option>
              ))}
            </select>
          </div>

          {/* Checklist result */}
          {selected && docs.length > 0 ? (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <h2 className="font-serif font-bold text-[#1B2A4A] text-lg">{selected}</h2>
                  <p className="text-gray-400 text-xs mt-0.5">{docs.length} documents required</p>
                </div>
                <span className="px-3 py-1 bg-[#C8972B]/10 text-[#C8972B] text-xs font-semibold rounded-full">
                  {docs.length} items
                </span>
              </div>
              {/* Document list */}
              <ul className="divide-y divide-gray-50">
                {docs.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3 px-6 py-4">
                    <span className="w-6 h-6 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">{doc}</span>
                  </li>
                ))}
              </ul>
              {/* Footer note */}
              <div className="px-6 py-4 bg-amber-50 border-t border-amber-100">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <span className="font-semibold">Note:</span> This is an indicative list. Additional documents may be
                  required based on specific circumstances. Our team will confirm the complete
                  list during consultation.
                </p>
              </div>
            </div>
          ) : (
            /* Empty state */
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 p-14 text-center">
              <FileCheck className="w-12 h-12 text-gray-200 mx-auto mb-4" aria-hidden />
              <p className="text-gray-400 text-base">
                Select a service above to view the document checklist
              </p>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#1B2A4A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl font-bold text-white mb-4">
            Need assistance with document collection?
          </h2>
          <p className="text-gray-300 mb-8">
            Our team can guide you through the documentation process and ensure
            everything is in order.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
