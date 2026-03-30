"use client";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="flex items-center gap-2">
            <div className="w-12 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center font-bold">
                DFS
            </div>
            <span className="text-lg font-medium tracking-tight text-gray-900">
                Dongre Financial Service
            </span>
            
        </div>

        {/* 🔷 Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-black transition">Home</a>
          <a href="#about" className="hover:text-black transition">About</a>
          <a href="#products" className="hover:text-black transition">Products</a>
          <a href="#calculators" className="hover:text-black transition">Calculators</a>
          <a href="#contact" className="hover:text-black transition">Contact</a>
        </nav>

        {/* 🔷 Right Buttons */}
        <div className="flex items-center gap-3">
          
          {/* Call Button */}
          <a
            href="tel:+918319400824"
            className="hidden sm:block border border-gray-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
            >
            Call Now
            </a>

        </div>
      </div>
    </header>
  );
}