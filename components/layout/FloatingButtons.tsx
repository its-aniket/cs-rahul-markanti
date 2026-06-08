"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/918830383872?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-6 h-6 text-white fill-white" />
      </a>
    </div>
  );
}
