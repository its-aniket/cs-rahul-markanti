"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production, connect to a form endpoint / email service
    setSubmitted(true);
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

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#C8972B]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-[#C8972B]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1B2A4A] mb-2">
                    Message Received!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Thank you for reaching out. We&apos;ll get back to you within 24
                    business hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                    className="mt-6 px-6 py-2.5 bg-[#1B2A4A] text-white text-sm font-bold rounded hover:bg-[#243660] transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        Subject <span className="text-red-500">*</span>
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
                        <option>Labour Law & Compliance</option>
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
                    className="inline-flex items-center gap-2 px-8 py-3 bg-[#C8972B] text-white font-bold rounded hover:bg-[#b07a1e] transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
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
                    <a href="mailto:csrahulmarkanti@gmail.com" className="text-[#1B2A4A] font-semibold hover:text-[#C8972B] text-sm break-all">
                      csrahulmarkanti@gmail.com
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

              {/* Pune Office */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#C8972B]" />
                  <h3 className="font-serif font-bold text-[#1B2A4A]">
                    Pune – Registered Office
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  SR No 54/2A/A/1, Guruprasad, Behind Star Prestige,
                  Near Hotel Dawat, Wadgaon BK, Pune – 411041
                </p>
              </div>

              {/* Solapur Office */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[#C8972B]" />
                  <h3 className="font-serif font-bold text-[#1B2A4A]">
                    Solapur – Branch Office
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Office No 8, Ramchandra Empire, Opp. Old Walchand College,
                  Solapur – 413006
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed – Pune Office */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="font-serif text-2xl font-bold text-[#1B2A4A] mb-6">
            Find Us – Pune Office
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1073894!2d73.8!3d18.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zV2FkZ2FvbiBCaywgUHVuZSAtIDQxMTA0MQ!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pune Office Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
