"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { serviceLinks, resourceLinks } from "@/lib/navLinks";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const pathname = usePathname();
  const servicesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? "bg-[#1B2A4A] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div>
              <div className="text-white font-serif font-bold text-sm md:text-base leading-tight">
               C. S. Rahul Markanti &amp; Associates
              </div>
              <div className="text-[#C8972B] text-[9px] md:text-[10px] uppercase tracking-widest font-medium">
                Company Secretaries
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/" active={isActive("/")}>Home</NavLink>
            <NavLink href="/about" active={isActive("/about")}>About</NavLink>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => { setServicesOpen(!servicesOpen); setResourcesOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isActive("/services")
                    ? "text-[#C8972B]"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B2A4A]/5 hover:text-[#1B2A4A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                onClick={() => { setResourcesOpen(!resourcesOpen); setServicesOpen(false); }}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors ${
                  isActive("/compliance-calendar") || isActive("/document-checklist")
                    ? "text-[#C8972B]"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                Resources
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {resourcesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#1B2A4A]/5 hover:text-[#1B2A4A] transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink href="/contact" active={isActive("/contact")}>Contact</NavLink>
          </nav>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+918830383872"
              className="flex items-center gap-2 text-gray-200 hover:text-white text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C8972B]" />
              +91 88303 83872
            </a>
            <Link
              href="/contact"
              className="px-5 py-2 bg-[#C8972B] text-white text-sm font-bold rounded hover:bg-[#b07a1e] transition-colors"
            >
              Enquire Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#1B2A4A] border-t border-white/10 px-4 pb-6 space-y-1">
          <MobileNavLink href="/" label="Home" />
          <MobileNavLink href="/about" label="About" />

          {/* Mobile Services */}
          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-gray-200 text-sm font-medium"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 space-y-1 border-l border-[#C8972B]/30 pl-4">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-300 hover:text-[#C8972B] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Resources */}
          <div>
            <button
              className="w-full flex items-center justify-between py-3 text-gray-200 text-sm font-medium"
              onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
            >
              Resources
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileResourcesOpen && (
              <div className="ml-4 space-y-1 border-l border-[#C8972B]/30 pl-4">
                {resourceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block py-2 text-sm text-gray-300 hover:text-[#C8972B] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <MobileNavLink href="/contact" label="Contact" />

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="tel:+918830383872"
              className="flex items-center gap-2 text-gray-200 text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-[#C8972B]" />
              +91 88303 83872
            </a>
            <Link
              href="/contact"
              className="inline-block text-center px-5 py-2.5 bg-[#C8972B] text-white text-sm font-bold rounded hover:bg-[#b07a1e] transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`px-3 py-2 text-sm font-medium rounded transition-colors ${
        active ? "text-[#C8972B]" : "text-gray-200 hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block py-3 text-gray-200 text-sm font-medium hover:text-[#C8972B] transition-colors border-b border-white/5"
    >
      {label}
    </Link>
  );
}
