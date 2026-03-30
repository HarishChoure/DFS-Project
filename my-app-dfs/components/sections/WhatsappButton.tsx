"use client";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "919999999999";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition"
    >
      <MessageCircle size={28} />
    </a>
  );
}