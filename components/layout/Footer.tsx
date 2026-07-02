import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { serviceLinks, quickLinks } from "@/lib/navLinks";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#1B2A4A] text-gray-300 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Column 1 — Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                
                <div>
                  <div className="text-white font-serif font-bold text-sm leading-tight">
                   CS Rahul Markanti And Associates
                  </div>
                  <div className="text-[#C8972B] text-[9px] uppercase tracking-widest font-medium">
                    Company Secretaries
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                A professional firm of Company Secretaries providing comprehensive
                legal, secretarial, and compliance advisory services to startups,
                entrepreneurs, corporates, and business organizations across
                Maharashtra.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Clock className="w-4 h-4 text-[#C8972B] shrink-0" />
                Mon – Sat, 10:00 AM – 6:00 PM
              </div>
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#C8972B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
                Services
              </h3>
              <ul className="space-y-2">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-[#C8972B] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 uppercase tracking-wide text-xs">
                Contact Us
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#C8972B] shrink-0 mt-0.5" />
                  <span>SR No 54/2A/A/1, Guruprasad, Behind Star Prestige, Near Hotel Dawat, Wadgaon BK, Pune – 411041</span>
                </div>
                <a
                  href="tel:+918830383872"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C8972B] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#C8972B]" />
                  +91 88303 83872
                </a>
                <a
                  href="mailto:enquiry@csrahulmarkanti.com"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#C8972B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#C8972B]" />
                  enquiry@csrahulmarkanti.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#111e33] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-xs leading-relaxed mb-3">
            <span className="font-semibold text-gray-400">Disclaimer: </span>
            This website has been designed only for the purposes of dissemination of
            basic information on Rahul Markanti &amp; Associates. The information
            provided is solely available at your request and for informational
            purposes only. It should not be construed as solicitation, invitation, or
            advertisement to create any professional relationship. Visiting this
            website or submitting an enquiry does not constitute creation of a
            professional engagement. All content is subject to ICSI guidelines.
          </p>
          <p className="text-gray-500 text-xs text-center">
            © {new Date().getFullYear()} Rahul Markanti &amp; Associates. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
