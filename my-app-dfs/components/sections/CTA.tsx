export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-[#0B1D3A] to-[#0F2A55] text-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        
        <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-semibold leading-tight">
          Still Confused About Investing?
        </h2>

        <p className="mt-4 text-gray-300">
          Book a FREE 30-minute consultation call. Let's discuss your financial goals and create a personalized investment plan together.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          
          {/* Primary */}
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            📅 Schedule Now
          </button>

          {/* Secondary */}
          <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Call Now →
          </button>

        </div>

      </div>
    </section>
  );
}