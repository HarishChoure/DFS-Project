export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white px-6 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        
        {/* 🔷 Company */}
        <div>
          <h3 className="font-semibold text-lg">Swaran FinPro</h3>
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
            <li>About Us</li>
            <li>Products</li>
            <li>SIP Calculator</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* 🔷 Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Mutual Funds</li>
            <li>SIP Planning</li>
            <li>SWP Planning</li>
            <li>Insurance</li>
            <li>Loan Against MF</li>
          </ul>
        </div>

        {/* 🔷 Contact */}
        <div>
          <h4 className="font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li>📞 +91 8319400824</li>
            <li>✉️ laxmandongre.in@gmail.com</li>
            <li>💬 WhatsApp Us</li>
            <li>📍 Pawar Colony, Borgaon, Sausar, MP 480106</li>
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