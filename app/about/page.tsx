import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Rahul Markanti & Associates — a professional firm of Company Secretaries providing compliance, legal advisory, and secretarial services.",
};

// ─── DATA ──────────────────────────────────────────────────────────────────

const areasOfPractice = [
  "Business Incorporation & Registration",
  "Corporate Law & ROC Compliance",
  "GST & Regulatory Compliance",
  "Trademark & Intellectual Property Services",
  "Secretarial & Legal Advisory",
  "Startup & Business Advisory",
];

const visionChecklist = [
  "Build long-term professional relationships based on trust and integrity",
  "Deliver accurate, timely, and efficient compliance services",
  "Support businesses in achieving sustainable and compliant growth",
  "Promote strong corporate governance and ethical business practices",
];

const missionStats = [
  { value: "11+", label: "Service Categories" },
  { value: "2", label: "Office Locations" },
  { value: "MH", label: "Maharashtra Presence" },
  { value: "ICSI", label: "Regulated Practice" },
];

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest ethical standards in every professional engagement, ensuring honesty and fairness in all our dealings.",
    icon: "shield",
  },
  {
    title: "Transparency",
    desc: "We maintain clear and open communication with all stakeholders, ensuring complete clarity at every stage of the engagement.",
    icon: "eye",
  },
  {
    title: "Professionalism",
    desc: "Governed by ICSI regulations, we adhere to the highest standards of professional conduct and technical competence.",
    icon: "target",
  },
  {
    title: "Client-Centric Service",
    desc: "Our clients' compliance needs and business interests remain central to every decision and action we take.",
    icon: "heart",
  },
];

const team = [
  {
    name: "CS Rahul Markanti",
    role: "Founder & Principal",
    initials: "RM",
    desc: "Company Secretary and the founding principal of Rahul Markanti & Associates. Leads the firm's professional engagements across legal, secretarial, and compliance domains with a commitment to accuracy and ethical practice.",
  },
  {
    name: "Mr. Prakash Chinta",
    role: "Executive Officer & Adviser",
    initials: "PC",
    desc: "Brings extensive expertise in corporate governance, regulatory compliance, and statutory advisory. With a strong background in the Companies Act, 2013, he ensures all operations are fully compliant with applicable laws and industry practices. He plays a pivotal role in guiding the team on legal matters and risk mitigation.",
  },
  {
    name: "Miss Komal",
    role: "Compliance Officer",
    initials: "KO",
    desc: "Specializes in corporate governance, regulatory compliance, and statutory advisory. With deep knowledge of the Companies Act, 2013, she ensures all business operations adhere to legal and regulatory standards and plays a key role in compliance frameworks and best practices.",
  },
  {
    name: "Mr. Deepak",
    role: "Executive Officer",
    initials: "DK",
    desc: "Oversees daily operations and ensures smooth execution of strategic initiatives. With strong expertise in management, coordination, and operational planning, he drives efficiency and organizational effectiveness across all departments.",
  },
  {
    name: "Miss Rajshree",
    role: "Executive Officer",
    initials: "RS",
    desc: "Specializes in client relations, business development, and process coordination. With a proactive approach and strong communication skills, she builds lasting client relationships and ensures seamless service delivery.",
  },
  {
    name: "Miss Rupali",
    role: "Executive Officer",
    initials: "RP",
    desc: "Focuses on document management, compliance filings, and administrative operations. Her attention to detail and organized approach ensure that all processes and records are maintained accurately and on time.",
  },
];

// ─── ICON COMPONENTS ───────────────────────────────────────────────────────

function ValueIcon({ name }: { name: string }) {
  const cls = "w-7 h-7 text-[#1B2A4A] group-hover:text-[#C8972B] transition-colors";
  if (name === "shield")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    );
  if (name === "eye")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    );
  if (name === "target")
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    );
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls} aria-hidden>
      <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
    </svg>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <div className="min-h-screen">

      {/* ══════════════════════════════════════════════════
          HERO — centered, max-w-4xl
      ══════════════════════════════════════════════════ */}
      <section className="bg-[#1B2A4A] pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-3">
            The Firm
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5">
            About Rahul Markanti &amp; Associates
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            A professional firm of Company Secretaries committed to delivering
            reliable, practical, and timely compliance and advisory solutions.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WHO WE ARE
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left — text */}
            <div>
              <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6">
                Your Compliance &amp; Legal Advisory Partner
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Rahul Markanti &amp; Associates is a professional firm of Company
                  Secretaries dedicated to providing comprehensive legal, secretarial,
                  and compliance advisory services to startups, entrepreneurs,
                  corporates, and business organizations. The firm is committed to
                  delivering reliable, practical, and timely solutions in the areas of
                  corporate laws, regulatory compliance, and business advisory.
                </p>
                <p>
                  At Rahul Markanti &amp; Associates, we aim to simplify complex legal
                  and compliance procedures, allowing businesses to focus on growth and
                  operations while ensuring complete regulatory compliance with
                  professionalism and efficiency.
                </p>
                <p>
                  We believe in integrity, transparency, professionalism, and
                  client-centric services, making us a dependable compliance and legal
                  advisory partner for businesses at every stage.
                </p>
              </div>
            </div>

            {/* Right — areas + ICSI box */}
            <div>
              <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-4">
                Areas of Practice
              </p>
              <div className="flex flex-wrap gap-2.5">
                {areasOfPractice.map((area) => (
                  <span
                    key={area}
                    className="px-3 py-1.5 bg-[#1B2A4A]/5 text-[#1B2A4A] text-sm font-medium rounded border border-[#1B2A4A]/10"
                  >
                    {area}
                  </span>
                ))}
              </div>

              <div className="mt-10 p-6 bg-[#1B2A4A] rounded-xl">
                <p className="text-[#C8972B] text-xs font-semibold uppercase tracking-wide mb-3">
                  Regulated By
                </p>
                <p className="text-white font-serif font-semibold text-lg mb-2">
                  Institute of Company Secretaries of India (ICSI)
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  All services and professional conduct are governed by ICSI regulations
                  and the Company Secretaries Act, 1980.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VISION & MISSION — no section header
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10">

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              {/* Icon in navy square */}
              <div className="w-12 h-12 rounded-xl bg-[#1B2A4A] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#C8972B]" aria-hidden>
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6 italic border-l-4 border-[#C8972B] pl-4">
                &ldquo;To become a trusted and preferred professional advisory firm by
                delivering practical, reliable, and value-driven legal and compliance
                solutions to businesses and entrepreneurs.&rdquo;
              </p>
              <p className="text-gray-500 text-sm font-semibold uppercase tracking-wide mb-3">
                We Strive To
              </p>
              <ul className="space-y-3">
                {visionChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-[#C8972B]/15 text-[#C8972B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-[#1B2A4A] rounded-2xl p-8 text-white">
              {/* Icon in gold square */}
              <div className="w-12 h-12 rounded-xl bg-[#C8972B] flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white" aria-hidden>
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed italic border-l-4 border-[#C8972B] pl-4">
                &ldquo;To simplify legal, secretarial, and regulatory compliance processes
                through professional expertise, timely execution, and client-focused
                solutions, enabling businesses to operate and grow with confidence.&rdquo;
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {missionStats.map((stat) => (
                  <div key={stat.label} className="bg-white/5 rounded-xl p-4 text-center">
                    <p className="font-serif text-2xl font-bold text-[#C8972B]">{stat.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          VALUES — "What Guides Us" / "Our Values"
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-2">
              What Guides Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2A4A]">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="group text-center p-8 rounded-2xl border border-gray-100 hover:border-[#C8972B]/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="w-14 h-14 rounded-full bg-[#1B2A4A]/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#C8972B]/10 transition-colors">
                  <ValueIcon name={v.icon} />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1B2A4A] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TEAM — "Our Team" (no subtitle), gap-8, horizontal card header
      ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-2">
              The People
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1B2A4A]">
              Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Horizontal header: avatar + name/role */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#1B2A4A] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C8972B] font-serif font-bold text-base">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-[#1B2A4A] text-base">{member.name}</p>
                    <p className="text-[#C8972B] text-xs font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA — inline section (matches original)
      ══════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#1B2A4A]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to simplify your compliance?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch with our team for guidance specific to your business.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors"
          >
            Enquire Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
