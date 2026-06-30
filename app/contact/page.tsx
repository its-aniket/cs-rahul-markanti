"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? "Something went wrong.");
      }

      setFormState("success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      setFormState("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    }
  }

  function handleReset() {
    setFormState("idle");
    setErrorMsg("");
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1B2A4A] pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8972B] text-sm font-semibold uppercase tracking-widest mb-3">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed">
            Have a query or need assistance? Reach out to us and our team will get
            back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Form — 3 cols */}
            <div className="lg:col-span-3 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-6">
                Send Us a Message
              </h2>

              {/* ── Success state ── */}
              {formState === "success" && (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B2A4A] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm mb-6">
                    Thank you for reaching out. We&apos;ve sent a confirmation to your email
                    and will get back to you within 1–2 business days.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#1B2A4A] text-white text-sm font-bold rounded hover:bg-[#243660] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              )}

              {/* ── Error banner ── */}
              {formState === "error" && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-5">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-700 text-sm font-medium">{errorMsg}</p>
                    <button
                      onClick={handleReset}
                      className="text-red-500 text-xs underline mt-1"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              )}

              {/* ── Form ── */}
              {formState !== "success" && (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8972B]/40 focus:border-[#C8972B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8972B]/40 focus:border-[#C8972B]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8972B]/40 focus:border-[#C8972B]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Service <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8972B]/40 focus:border-[#C8972B] bg-white"
                      >
                        <option value="">Select a service</option>
                        <option>Business Registration</option>
                        <option>GST Services</option>
                        <option>MCA Compliance</option>
                        <option>Income Tax</option>
                        <option>TDS Compliance</option>
                        <option>Labour Law &amp; Compliance</option>
                        <option>Startup Advisory</option>
                        <option>NGO / Section 8</option>
                        <option>Other Registrations</option>
                        <option>Trademark</option>
                        <option>Project Report</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Describe your requirement..."
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C8972B]/40 focus:border-[#C8972B] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Info — 2 cols */}
            <div className="lg:col-span-2 space-y-6">

              {/* Contact details */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-5">
                <h2 className="font-serif text-xl font-bold text-[#1B2A4A]">
                  Contact Information
                </h2>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C8972B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium">Phone / WhatsApp</p>
                    <a href="tel:+918830383872" className="text-[#1B2A4A] font-semibold hover:text-[#C8972B] text-sm">
                      +91 88303 83872
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C8972B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium">Email</p>
                    <a href="mailto:enquiry@csrahulmarkanti.com" className="text-[#1B2A4A] font-semibold hover:text-[#C8972B] text-sm break-all">
                      enquiry@csrahulmarkanti.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C8972B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400 mb-0.5 font-medium">Working Hours</p>
                    <p className="text-[#1B2A4A] font-semibold text-sm">
                      Mon – Sat, 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/918830383872?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] text-white rounded-2xl px-6 py-4 hover:opacity-90 transition-opacity shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fill-white flex-shrink-0" aria-hidden>
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
                </svg>
                <div>
                  <p className="font-bold text-sm leading-tight">Chat on WhatsApp</p>
                  <p className="text-white/80 text-xs mt-0.5">Quick response during working hours</p>
                </div>
              </a>

              {/* ICSI disclaimer note */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-xs text-amber-800 leading-relaxed">
                  <span className="font-semibold">Note:</span> Submitting this form does not create a
                  Professional-client relationship. Information shared is for enquiry purposes only
                  and is subject to our Terms &amp; Conditions.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Google Maps */}
      <section className="bg-gray-50 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-1">
              Our Location
            </h2>
            <p className="text-gray-500 text-sm flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#C8972B] shrink-0" />
              SR No 54/2A/A/1, Guruprasad, Behind Star Prestige, Near Hotel Dawat, Wadgaon BK, Pune – 411041
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8220!3d18.4855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc08b4cd2df%3A0x!2sWadgaon+BK%2C+Pune%2C+Maharashtra+411041!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rahul Markanti & Associates — Pune Office"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://maps.google.com/?q=SR+No+54/2A/A/1+Guruprasad+Wadgaon+BK+Pune+411041"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1B2A4A] text-white text-sm font-semibold rounded-lg hover:bg-[#243a64] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
