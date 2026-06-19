"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "rma_disclaimer_accepted";

export default function DisclaimerModal() {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [shake, setShake] = useState(false);

  // Show modal only if not yet accepted (persisted in localStorage)
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    if (!accepted) {
      // Shake the checkbox row to prompt the user
      setShake(true);
      setTimeout(() => setShake(false), 600);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // private browsing — proceed anyway
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-title"
    >
      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">

        {/* Header */}
        <div className="bg-[#1B2A4A] px-6 py-5 flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#C8972B] rounded-lg flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden>
                <circle cx="12" cy="12" r="10" />
                <line x1="12" x2="12" y1="8" y2="12" />
                <line x1="12" x2="12.01" y1="16" y2="16" />
              </svg>
            </div>
            <div>
              <h2 id="disclaimer-title" className="font-serif text-lg font-bold text-white leading-tight">
                Terms &amp; Conditions
              </h2>
              <p className="text-[#C8972B] text-xs font-medium mt-0.5 uppercase tracking-wide">
                Rahul Markanti &amp; Associates · ICSI Regulated
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4 text-sm text-gray-600 leading-relaxed">

          <p className="text-gray-500 text-xs italic">
            As per the provisions of the Company Secretaries Act, 1980 and amendments thereto, Company Secretaries in Practice and Company Secretary firms are not permitted to solicit work or advertise their secretarial and professional services.
          </p>

          <p className="font-medium text-gray-700">
            By viewing this website or by reviewing or using the information on this website, you, the user, agree to the following:
          </p>

          <ul className="space-y-3">
            {[
              "There has been no advertisement, personal communication, solicitation, invitation or inducement of any kind from Rahul Markanti & Associates or any of its members to solicit any work through this website.",
              "The user wishes to gain more information about Rahul Markanti & Associates, its members, and its practice areas, for his/her own information and use.",
              "The information about Rahul Markanti & Associates, its members, and its services is provided to the user only on his/her specific request and any information obtained or materials downloaded from this website is completely at the user's volition.",
              "Any transmission, receipt or use of this website would not create any Professional-client relationship between Rahul Markanti & Associates or its members and the user.",
              "The information provided under this website is solely available at your request, for informational purposes only, and should not be interpreted as solicitation or advertisement.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C8972B]/15 text-[#C8972B] flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                  {i + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p>
            Rahul Markanti &amp; Associates or its members are not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any Company law issues, he/she in all cases must seek independent Professional advice.
          </p>

          <p>
            Rahul Markanti &amp; Associates hereby declare that the contents of this website are true to the best of our knowledge and belief and are in conformity with <span className="font-medium text-[#1B2A4A]">Guidelines for Advertisement by Company Secretary in Practice — Guideline No.5 of 1st April 2020</span> issued by the ICSI.
          </p>

          {/* Disclaimer box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-amber-800 uppercase tracking-wide mb-1">
              Disclaimer
            </p>
            <p className="text-xs text-amber-800 leading-relaxed">
              The contents and claims published on this website are solely the responsibility of Rahul Markanti &amp; Associates. The Institute of Company Secretaries of India shall not be responsible or liable for any such contents or claims.
            </p>
          </div>

        </div>

        {/* Footer — checkbox + button */}
        <div className="border-t border-gray-100 px-6 py-4 flex-shrink-0 bg-gray-50 rounded-b-2xl">

          {/* Checkbox row */}
          <label
            className={`flex items-start gap-3 cursor-pointer mb-4 select-none transition-transform ${shake ? "animate-[wiggle_0.3s_ease-in-out_2]" : ""}`}
          >
            <div className="relative flex-shrink-0 mt-0.5">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="sr-only peer"
              />
              <div
                className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  accepted
                    ? "bg-[#1B2A4A] border-[#1B2A4A]"
                    : shake
                    ? "border-red-400 bg-red-50"
                    : "border-gray-300 bg-white"
                }`}
              >
                {accepted && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </div>
            </div>
            <span className={`text-sm leading-snug ${shake && !accepted ? "text-red-500 font-medium" : "text-gray-700"}`}>
              I have read, understood, and agree to the above Terms &amp; Conditions and Disclaimer.
              {shake && !accepted && (
                <span className="block text-xs text-red-400 mt-0.5">
                  Please tick the checkbox to proceed.
                </span>
              )}
            </span>
          </label>

          {/* Accept button */}
          <button
            onClick={handleAccept}
            className={`w-full py-3 rounded-lg font-bold text-sm transition-colors ${
              accepted
                ? "bg-[#C8972B] text-white hover:bg-[#b07a1e]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            I Agree &amp; Proceed to Website
          </button>
        </div>

      </div>

      {/* Wiggle keyframes injected inline */}
      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}
