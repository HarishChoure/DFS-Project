export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Business Owner",
      text: "Laxman sir helped me plan my retirement corpus through SIP. His guidance is simple, honest and very effective. Highly recommended!",
    },
    {
      name: "Priya Patel",
      role: "Teacher",
      text: "I was confused about where to invest for my daughter's education. Swaran FinPro made it so easy. My portfolio is growing beautifully.",
    },
    {
      name: "Amit Verma",
      role: "IT Professional",
      text: "Professional service with personal touch. Laxman ji takes time to explain every investment and never pushes unnecessary products.",
    },
    {
      name: "Sunita Joshi",
      role: "Homemaker",
      text: "Started with just ₹1000 SIP and now I feel financially confident. Thank you Swaran FinPro for the excellent guidance!",
    },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* 🔷 Heading */}
        <p className="text-yellow-500 font-semibold text-sm tracking-wide">
          TESTIMONIALS
        </p>

        <h2 className="mt-2 font-[var(--font-heading)] text-4xl md:text-5xl font-semibold text-gray-900">
          What Our Investors Say
        </h2>
      </div>

      {/* 🔷 Cards */}
      <div className="max-w-7xl mx-auto mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {testimonials.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition relative"
          >
            
            {/* Stars */}
            <div className="text-yellow-400 mb-4 text-sm">
              ⭐⭐⭐⭐⭐
            </div>

            {/* Quote icon */}
            <div className="absolute top-5 right-6 text-gray-200 text-4xl">
              ”
            </div>

            {/* Text */}
            <p className="text-gray-600 text-sm leading-relaxed">
              "{item.text}"
            </p>

            {/* User */}
            <div className="mt-6">
              <p className="font-semibold text-gray-900">
                {item.name}
              </p>
              <p className="text-gray-500 text-sm">
                {item.role}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}