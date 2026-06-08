import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Shield,
  CheckCircle,
  Users,
  Heart,
  Calendar,
} from "lucide-react";
import CTASection from "@/components/ui/CTASection";

// ─── DATA ──────────────────────────────────────────────────────────────────

const heroEnquiries = [
  { label: "Private Limited Company", href: "/services/business-registration" },
  { label: "GST Registration & Filing", href: "/services/gst-services" },
  { label: "Trademark Registration", href: "/services/trademark" },
  { label: "MCA / ROC Compliance", href: "/services/mca-compliance" },
  { label: "Income Tax Returns", href: "/services/income-tax" },
  { label: "Labour Law Compliance", href: "/services/labour-law" },
];

const stats = [
  { value: "11+", label: "Service Categories" },
  { value: "2", label: "Office Locations" },
  { value: "Pune & Solapur", label: "Maharashtra" },
  { value: "Startups to Corporates", label: "Clients Served" },
];

const services = [
  {
    slug: "business-registration",
    icon: "building",
    title: "Business Registration",
    desc: "Incorporation of Private Limited, LLP, OPC, Partnership, FPC, and more",
  },
  {
    slug: "gst-services",
    icon: "file",
    title: "GST Services",
    desc: "Registration, return filing, and compliance advisory",
  },
  {
    slug: "trademark",
    icon: "shield",
    title: "Trademark",
    desc: "Registration, renewal, objection handling, and brand protection",
  },
  {
    slug: "mca-compliance",
    icon: "clipboard",
    title: "MCA Compliance",
    desc: "Annual filings, ROC compliance, and corporate governance",
  },
  {
    slug: "income-tax",
    icon: "calculator",
    title: "Income Tax",
    desc: "ITR filing for individuals, HUF, firms, companies, and NGOs",
  },
  {
    slug: "tds-compliance",
    icon: "receipt",
    title: "TDS Compliance",
    desc: "Deduction, deposit, return filing, and certificate issuance",
  },
  {
    slug: "labour-law",
    icon: "users",
    title: "Labour Law & Compliance",
    desc: "PF, ESI, PTRC, PTEC registration and monthly filings",
  },
  {
    slug: "startup-advisory",
    icon: "lightbulb",
    title: "Startup Advisory",
    desc: "Guidance for new businesses, Startup India registration, and regulatory approvals",
  },
  {
    slug: "ngo-services",
    icon: "heart",
    title: "NGO / Section 8",
    desc: "12A, 80G, CSR, FCRA registrations for non-profits",
  },
];

const values = [
  { icon: "shield", title: "Integrity", desc: "Ethical practice in every engagement" },
  { icon: "check", title: "Transparency", desc: "Clear communication at every step" },
  { icon: "users", title: "Professionalism", desc: "Regulated by ICSI standards" },
  { icon: "heart", title: "Client-Centric", desc: "Your compliance, our priority" },
];

const complianceDeadlines = [
  {
    color: "blue",
    title: "GST Monthly Return (GSTR-3B)",
    due: "20th of every month",
  },
  {
    color: "amber",
    title: "TDS Quarterly Return",
    due: "31 Jul / 31 Oct / 31 Jan / 31 May",
  },
  {
    color: "slate",
    title: "MCA Annual Filing",
    due: "Within 60 days of AGM",
  },
];

// ─── ICON HELPER (inline SVG via lucide classes) ───────────────────────────

function ServiceIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-[#1B2A4A] group-hover:text-[#C8972B] transition-colors";
  const map: Record<string, React.ReactNode> = {
    building: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M10 12h4"/><path d="M10 8h4"/><path d="M14 21v-3a2 2 0 0 0-4 0v3"/><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"/><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/></svg>
    ),
    file: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
    ),
    clipboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>
    ),
    calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></svg>
    ),
    receipt: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/></svg>
    ),
    users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>
    ),
    lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
    ),
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>
    ),
  };
  return <>{map[name] ?? map["file"]}</>;
}

function ValueIcon({ name }: { name: string }) {
  const cls = "w-6 h-6 text-[#C8972B] mb-2 sm:mb-3";
  if (name === "shield")
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>;
  if (name === "check")
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>;
  if (name === "users")
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>;
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls}><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>;
}

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════ */}
      <section className="relative bg-[#1B2A4A] min-h-screen flex items-start md:items-center overflow-hidden">

        {/* Decorative blobs — top-right gold glow + bottom-left faint glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C8972B]/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8972B]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          {/* vertical divider line on lg */}
          <div className="hidden lg:block absolute top-1/4 right-[48%] bottom-1/4 w-px bg-white/10" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left ── */}
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C8972B]/20 border border-[#C8972B]/40 rounded-full text-[#C8972B] text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8972B]" />
                Company Secretaries · ICSI Regulated
              </div>

              {/* Headline — Georgia serif */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Legal, Secretarial &amp;
                <br className="hidden sm:block" />
                <span className="text-[#C8972B]"> Compliance</span>
                <br className="hidden sm:block" />
                Services You Can Rely On
              </h1>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                Helping startups, MSMEs, and businesses across Pune and Solapur
                navigate regulatory compliance with accuracy and confidence.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8972B] text-white font-semibold rounded-lg hover:bg-[#b07a1e] transition-colors shadow-lg"
                >
                  Explore Services <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {["ICSI Regulated Practice", "Pune & Solapur Offices", "Mon–Sat, 10AM–6PM"].map((b) => (
                  <div key={b} className="flex items-center gap-1.5 text-gray-400 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8972B] flex-shrink-0" aria-hidden><path d="M21.801 10A10 10 0 1 1 17 3.335"/><path d="m9 11 3 3L22 4"/></svg>
                    {b}
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — Common Enquiries card (desktop only) ── */}
            <div className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                  Common Enquiries
                </p>
                <div className="space-y-2">
                  {heroEnquiries.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between px-4 py-3 rounded-lg bg-white/5 hover:bg-[#C8972B]/20 border border-white/5 hover:border-[#C8972B]/30 transition-all group"
                    >
                      <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-[#C8972B] transition-colors" />
                    </Link>
                  ))}
                </div>

                {/* Contact strip */}
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#C8972B]" aria-hidden />
                  <a href="tel:+918830383872" className="text-gray-300 text-sm hover:text-white transition-colors">
                    +91 88303 83872
                  </a>
                  <span className="text-white/20">·</span>
                  <a href="mailto:csrahulmarkanti@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors truncate">
                    csrahulmarkanti@gmail.com
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 border-2 border-white/20 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 2 — STATS BAR (gold)
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#C8972B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {stats.map((s) => (
              <div key={s.label} className="py-5 px-4 text-center">
                <p className="font-serif text-xl md:text-2xl font-bold text-white">{s.value}</p>
                <p className="text-white/75 text-xs sm:text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 3 — SERVICES OVERVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-[#C8972B] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
              What We Do
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-3">
              Our Services
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
              Comprehensive legal, secretarial, and compliance solutions for businesses at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-5 sm:p-6 hover:border-[#C8972B]/40 hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1B2A4A]/5 flex items-center justify-center mb-4 group-hover:bg-[#C8972B]/10 transition-colors flex-shrink-0">
                  <ServiceIcon name={svc.icon} />
                </div>
                <h3 className="font-serif font-semibold text-[#1B2A4A] text-base sm:text-lg mb-2">
                  {svc.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-3">{svc.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#C8972B] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#1B2A4A] text-white font-semibold rounded-lg hover:bg-[#243a64] transition-colors text-sm sm:text-base"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 4 — ABOUT PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#C8972B] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
                About the Firm
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-5">
                Integrity, Professionalism &amp; Client-Centric Service
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Rahul Markanti &amp; Associates is a professional firm of Company Secretaries dedicated to
                providing comprehensive legal, secretarial, and compliance advisory services to startups,
                entrepreneurs, corporates, and business organizations. Our approach is built on integrity,
                transparency, professionalism, and client-centric service delivery.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-[#C8972B] font-semibold hover:gap-3 transition-all text-sm sm:text-base"
              >
                Know More About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {values.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-100">
                  <ValueIcon name={v.icon} />
                  <p className="font-semibold text-[#1B2A4A] text-sm mb-1">{v.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 5 — OFFICES (navy)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <p className="text-[#C8972B] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
              Locations
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Our Offices
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 max-w-4xl mx-auto">
            {/* Pune */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#C8972B]/40 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#C8972B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#C8972B] text-xs font-semibold uppercase tracking-wide">Registered Office</p>
                  <p className="text-white font-serif font-bold text-base sm:text-lg">Pune</p>
                </div>
              </div>
              <address className="not-italic text-gray-300 text-sm leading-relaxed mb-5">
                SR No 54/2A/A/1, Guruprasad,<br />
                Behind Star Prestige, Near Hotel Dawat,<br />
                Wadgaon BK, Pune – 411041, Maharashtra
              </address>
              <div className="space-y-2 mb-5">
                <a href="tel:+918830383872" className="flex items-center gap-2 text-gray-300 text-sm hover:text-[#C8972B] transition-colors">
                  <Phone className="w-4 h-4 text-[#C8972B]" /> +91 88303 83872
                </a>
                <a href="mailto:csrahulmarkanti@gmail.com" className="flex items-center gap-2 text-gray-300 text-sm hover:text-[#C8972B] transition-colors">
                  <Mail className="w-4 h-4 text-[#C8972B]" /> csrahulmarkanti@gmail.com
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Wadgaon+BK+Pune+411041"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C8972B] text-white text-sm font-semibold rounded-lg hover:bg-[#b07a1e] transition-colors"
              >
                Get Directions <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Solapur */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-[#C8972B]/40 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-[#C8972B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#C8972B] text-xs font-semibold uppercase tracking-wide">Branch Office</p>
                  <p className="text-white font-serif font-bold text-base sm:text-lg">Solapur</p>
                </div>
              </div>
              <address className="not-italic text-gray-300 text-sm leading-relaxed mb-5">
                Office No 8, Ramchandra Empire,<br />
                Opp. Old Walchand College,<br />
                Solapur – 413006, Maharashtra
              </address>
              <div className="space-y-2 mb-5">
                <a href="tel:+918830383872" className="flex items-center gap-2 text-gray-300 text-sm hover:text-[#C8972B] transition-colors">
                  <Phone className="w-4 h-4 text-[#C8972B]" /> +91 88303 83872
                </a>
              </div>
              <a
                href="https://maps.google.com/?q=Old+Walchand+College+Solapur+413006"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C8972B] text-white text-sm font-semibold rounded-lg hover:bg-[#b07a1e] transition-colors"
              >
                Get Directions <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 6 — COMPLIANCE PREVIEW
      ══════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <p className="text-[#C8972B] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
                Stay Informed
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-4">
                Stay Ahead of Compliance Deadlines
              </h2>
              <p className="text-gray-600 leading-relaxed mb-7 text-sm sm:text-base">
                Missing a statutory deadline can result in penalties and legal complications. Stay informed
                with our compliance calendar covering GST, MCA, TDS, and more.
              </p>
              <Link
                href="/compliance-calendar"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1B2A4A] text-white font-semibold rounded-lg hover:bg-[#243a64] transition-colors text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4" /> View Full Compliance Calendar
              </Link>
            </div>

            <div className="space-y-3">
              {complianceDeadlines.map((d) => {
                const colorMap: Record<string, string> = {
                  blue: "bg-blue-50 border-blue-200 text-blue-700",
                  amber: "bg-amber-50 border-amber-200 text-amber-700",
                  slate: "bg-slate-50 border-slate-200 text-slate-700",
                };
                return (
                  <div key={d.title} className={`flex items-start gap-4 p-4 sm:p-5 rounded-xl border ${colorMap[d.color]}`}>
                    <Calendar className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{d.title}</p>
                      <p className="text-xs mt-0.5 opacity-75">{d.due}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 7 — CTA BAND (gold)
      ══════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-16 bg-[#C8972B]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">
            Have a compliance question or need assistance?
          </h2>
          <p className="text-white/80 mb-7 sm:mb-8 text-base sm:text-lg">
            Reach out to our team and we will be glad to assist you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 bg-white text-[#1B2A4A] font-bold rounded-lg hover:bg-gray-50 transition-colors shadow"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
