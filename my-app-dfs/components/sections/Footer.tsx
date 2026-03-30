"use client"

import { openWhatsApp } from "@/utils/whatsapp";
export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* 🔷 Company */}
        <div>
          <h3 className="font-semibold text-lg">Dongre Financial Service</h3>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            AMFI Registered Mutual Fund Distributor helping you achieve financial freedom through smart investing.
          </p>

          <p className="mt-4 text-gray-400 text-xs">
            "Mutual Fund investments are subject to market risks. Please read all scheme related documents carefully before investing."
          </p>
        </div>

        {/* 🔷 Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-yellow-500 transition">About Us</a></li>
            <li><a href="#products" className="hover:text-yellow-500 transition">Products</a></li>
            <li><a href="#calculators" className="hover:text-yellow-500 transition">SIP Calculator</a></li>
            <li><a href="#contact" className="hover:text-yellow-500 transition">Contact Us</a></li>    
          </ul>
        </div>

        {/* 🔷 Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#card-mutual-funds" className="hover:text-white transition">
                Mutual Funds
                </a></li>
            <li> <a href="#card-sip" className="hover:text-white transition">
                SIP Planning
                </a></li>
            <li><a href="#card-swp" className="hover:text-white transition">
                SWP Planning
                </a></li>
            <li>Insurance</li>
            <li><a href="#card-loan-mf" className="hover:text-white transition">
            Loan Against MF
            </a></li>
          </ul>
        </div>

        {/* 🔷 Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li><a href="tel:+918319400824" className="hover:text-white transition">
                📞 +91 8319400824
            </a></li>
            <li>✉️ laxmandongre.in@gmail.com</li>
            <li> <button
                onClick={openWhatsApp}
                className="cursor-pointer hover:text-white transition"
            >
                💬 WhatsApp Us
            </button></li>
            <li>📍800 Quick Vyapar LLP Near Durga Mata Mandir Borgaon, Sausar, Chhindwara-480106</li>
          </ul>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © 2026 Swaran FinPro. All rights reserved.
      </div>
    </footer>
  );
}